import { createClient } from '@/lib/supabase/client';
import { Document, DocumentType, LineItem } from '@/types';
import { generateDocumentNumber, calculateLineTotal, calculateVAT, calculateTTC } from '@/lib/utils';

export interface CreateDocumentInput {
  client_id: string;
  type: DocumentType;
  status?: 'draft' | 'sent';
  issue_date: string;
  due_date?: string;
  validity_date?: string;
  notes?: string;
  line_items: {
    description: string;
    quantity: number;
    unit_price: number;
    vat_rate: number;
  }[];
}

export const documentsService = {
  // Récupérer tous les documents d'un type
  async getAll(type?: DocumentType): Promise<Document[]> {
    const supabase = createClient();
    let query = supabase
      .from('documents')
      .select(`
        *,
        client:clients(*)
      `)
      .order('created_at', { ascending: false });

    if (type) {
      query = query.eq('type', type);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Erreur getAll documents:', error);
      throw error;
    }
    return data || [];
  },

  // Récupérer les devis
  async getQuotes(): Promise<Document[]> {
    return this.getAll('quote');
  },

  // Récupérer les factures
  async getInvoices(): Promise<Document[]> {
    return this.getAll('invoice');
  },

  // Récupérer un document par ID avec ses lignes
  async getById(id: string): Promise<Document & { line_items: LineItem[] } | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('documents')
      .select(`
        *,
        client:clients(*),
        line_items(*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.error('Erreur getById document:', error);
      throw error;
    }
    return data;
  },

  // Générer le prochain numéro de document
  async getNextNumber(type: DocumentType): Promise<string> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    const { count, error } = await supabase
      .from('documents')
      .select('*', { count: 'exact', head: true })
      .eq('type', type)
      .eq('user_id', user?.id || '');

    if (error) {
      console.error('Erreur getNextNumber:', error);
    }
    return generateDocumentNumber(type, (count || 0) + 1);
  },

  // Créer un nouveau document
  async create(input: CreateDocumentInput): Promise<Document> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      console.error('Utilisateur non authentifié');
      throw new Error('Non authentifié');
    }

    console.log('Création document pour user:', user.id, input);

    // Calculer les totaux
    let total_ht = 0;
    let total_vat = 0;

    const lineItemsWithTotals = input.line_items.map((item, index) => {
      const line_total_ht = calculateLineTotal(item.quantity, item.unit_price);
      const line_vat = calculateVAT(line_total_ht, item.vat_rate);
      const line_total_ttc = calculateTTC(line_total_ht, item.vat_rate);

      total_ht += line_total_ht;
      total_vat += line_vat;

      return {
        ...item,
        total_ht: line_total_ht,
        total_ttc: line_total_ttc,
        order_index: index,
      };
    });

    const total_ttc = total_ht + total_vat;

    // Générer le numéro
    const number = await this.getNextNumber(input.type);

    // Créer le document avec le statut passé en paramètre (draft par défaut)
    const { data: document, error: docError } = await supabase
      .from('documents')
      .insert({
        user_id: user.id,
        client_id: input.client_id,
        type: input.type,
        number,
        status: input.status || 'draft',
        issue_date: input.issue_date,
        due_date: input.due_date || null,
        validity_date: input.validity_date || null,
        notes: input.notes || null,
        total_ht,
        total_vat,
        total_ttc,
      })
      .select()
      .single();

    if (docError) {
      console.error('Erreur création document:', docError);
      throw docError;
    }

    console.log('Document créé:', document);

    // Créer les lignes
    const { error: linesError } = await supabase
      .from('line_items')
      .insert(
        lineItemsWithTotals.map(item => ({
          document_id: document.id,
          description: item.description,
          quantity: item.quantity,
          unit_price: item.unit_price,
          vat_rate: item.vat_rate,
          total_ht: item.total_ht,
          total_ttc: item.total_ttc,
          order_index: item.order_index,
        }))
      );

    if (linesError) {
      console.error('Erreur création line_items:', linesError);
      throw linesError;
    }

    console.log('Line items créés');
    return document;
  },

  // Mettre à jour un document
  async update(id: string, input: Partial<CreateDocumentInput>): Promise<Document> {
    const supabase = createClient();
    const updates: Record<string, unknown> = {};

    if (input.client_id) updates.client_id = input.client_id;
    if (input.issue_date) updates.issue_date = input.issue_date;
    if (input.due_date !== undefined) updates.due_date = input.due_date;
    if (input.validity_date !== undefined) updates.validity_date = input.validity_date;
    if (input.notes !== undefined) updates.notes = input.notes;

    // Si on met à jour les lignes
    if (input.line_items) {
      let total_ht = 0;
      let total_vat = 0;

      const lineItemsWithTotals = input.line_items.map((item, index) => {
        const line_total_ht = calculateLineTotal(item.quantity, item.unit_price);
        const line_vat = calculateVAT(line_total_ht, item.vat_rate);
        const line_total_ttc = calculateTTC(line_total_ht, item.vat_rate);

        total_ht += line_total_ht;
        total_vat += line_vat;

        return {
          ...item,
          total_ht: line_total_ht,
          total_ttc: line_total_ttc,
          order_index: index,
        };
      });

      updates.total_ht = total_ht;
      updates.total_vat = total_vat;
      updates.total_ttc = total_ht + total_vat;

      // Supprimer les anciennes lignes
      await supabase.from('line_items').delete().eq('document_id', id);

      // Créer les nouvelles
      await supabase.from('line_items').insert(
        lineItemsWithTotals.map(item => ({
          document_id: id,
          description: item.description,
          quantity: item.quantity,
          unit_price: item.unit_price,
          vat_rate: item.vat_rate,
          total_ht: item.total_ht,
          total_ttc: item.total_ttc,
          order_index: item.order_index,
        }))
      );
    }

    const { data, error } = await supabase
      .from('documents')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erreur update document:', error);
      throw error;
    }
    return data;
  },

  // Mettre à jour le statut
  async updateStatus(id: string, status: string): Promise<Document> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('documents')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erreur updateStatus:', error);
      throw error;
    }
    return data;
  },

  // Supprimer un document
  async delete(id: string): Promise<void> {
    const supabase = createClient();
    // Les line_items sont supprimés en cascade
    const { error } = await supabase
      .from('documents')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erreur delete document:', error);
      throw error;
    }
  },

  // Convertir un devis en facture
  async convertQuoteToInvoice(quoteId: string): Promise<Document> {
    const supabase = createClient();
    const quote = await this.getById(quoteId);
    if (!quote) throw new Error('Devis non trouvé');
    if (quote.type !== 'quote') throw new Error('Ce document n\'est pas un devis');

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    const number = await this.getNextNumber('invoice');

    // Créer la facture
    const { data: invoice, error: invoiceError } = await supabase
      .from('documents')
      .insert({
        user_id: user.id,
        client_id: quote.client_id,
        type: 'invoice',
        number,
        status: 'draft',
        issue_date: new Date().toISOString().split('T')[0],
        due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        notes: quote.notes,
        total_ht: quote.total_ht,
        total_vat: quote.total_vat,
        total_ttc: quote.total_ttc,
      })
      .select()
      .single();

    if (invoiceError) {
      console.error('Erreur conversion devis:', invoiceError);
      throw invoiceError;
    }

    // Copier les lignes
    if (quote.line_items && quote.line_items.length > 0) {
      const { error: linesError } = await supabase
        .from('line_items')
        .insert(
          quote.line_items.map(item => ({
            document_id: invoice.id,
            description: item.description,
            quantity: item.quantity,
            unit_price: item.unit_price,
            vat_rate: item.vat_rate,
            total_ht: item.total_ht,
            total_ttc: item.total_ttc,
            order_index: item.order_index,
          }))
        );

      if (linesError) {
        console.error('Erreur copie line_items:', linesError);
        throw linesError;
      }
    }

    return invoice;
  },

  // Stats pour le dashboard
  async getStats(): Promise<{
    monthly_revenue: number;
    pending_quotes: number;
    pending_invoices: number;
    unpaid_invoices: number;
  }> {
    const supabase = createClient();
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    // CA du mois (factures payées)
    const { data: paidInvoices } = await supabase
      .from('documents')
      .select('total_ttc')
      .eq('type', 'invoice')
      .eq('status', 'paid')
      .gte('issue_date', startOfMonth.toISOString().split('T')[0]);

    const monthly_revenue = paidInvoices?.reduce((sum, inv) => sum + (inv.total_ttc || 0), 0) || 0;

    // Devis en attente
    const { count: pending_quotes } = await supabase
      .from('documents')
      .select('*', { count: 'exact', head: true })
      .eq('type', 'quote')
      .eq('status', 'sent');

    // Factures en cours
    const { count: pending_invoices } = await supabase
      .from('documents')
      .select('*', { count: 'exact', head: true })
      .eq('type', 'invoice')
      .eq('status', 'sent');

    // Factures impayées
    const { count: unpaid_invoices } = await supabase
      .from('documents')
      .select('*', { count: 'exact', head: true })
      .eq('type', 'invoice')
      .eq('status', 'unpaid');

    return {
      monthly_revenue,
      pending_quotes: pending_quotes || 0,
      pending_invoices: pending_invoices || 0,
      unpaid_invoices: unpaid_invoices || 0,
    };
  },

  // Vérifier et mettre à jour les factures dont la date d'échéance est dépassée
  async checkAndUpdateOverdueInvoices(): Promise<number> {
    const supabase = createClient();
    const today = new Date().toISOString().split('T')[0];

    // Trouver les factures "sent" dont la due_date est passée
    const { data: overdueInvoices, error: selectError } = await supabase
      .from('documents')
      .select('id')
      .eq('type', 'invoice')
      .eq('status', 'sent')
      .lt('due_date', today);

    if (selectError) {
      console.error('Erreur vérification factures impayées:', selectError);
      return 0;
    }

    if (!overdueInvoices || overdueInvoices.length === 0) {
      return 0;
    }

    // Mettre à jour en "unpaid"
    const ids = overdueInvoices.map(inv => inv.id);
    const { error: updateError } = await supabase
      .from('documents')
      .update({ status: 'unpaid' })
      .in('id', ids);

    if (updateError) {
      console.error('Erreur mise à jour factures impayées:', updateError);
      return 0;
    }

    console.log(`${ids.length} facture(s) passée(s) en impayé`);
    return ids.length;
  },
};
