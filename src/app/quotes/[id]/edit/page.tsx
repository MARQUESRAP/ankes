'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Plus, Trash2, Save, Send, Download, Loader2, Eye } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, Input, Select, PDFPreviewModal } from '@/components/ui';
import { formatCurrency, calculateLineTotal, calculateVAT, formatDateForInput, generateId } from '@/lib/utils';
import { clientsService } from '@/services/clients';
import { documentsService } from '@/services/documents';
import { userService } from '@/services/user';
import { storageService } from '@/services/storage';
import QuotePDF from '@/components/pdf/QuotePDF';
import { Client, User, Document } from '@/types';

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unit_price: number;
  vat_rate: number;
}

const vatRates = [
  { value: '0', label: '0%' },
  { value: '5.5', label: '5.5%' },
  { value: '10', label: '10%' },
  { value: '20', label: '20%' },
];

export default function EditQuotePage() {
  const router = useRouter();
  const params = useParams();
  const quoteId = params.id as string;

  const [clients, setClients] = useState<Client[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [quote, setQuote] = useState<Document | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [clientId, setClientId] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [validityDate, setValidityDate] = useState('');
  const [notes, setNotes] = useState('');
  const [lineItems, setLineItems] = useState<LineItem[]>([]);

  useEffect(() => { loadData(); }, [quoteId]);

  const loadData = async () => {
    try {
      const [clientsData, userData, quoteData] = await Promise.all([
        clientsService.getAll(),
        userService.getProfile(),
        documentsService.getById(quoteId),
      ]);
      
      setClients(clientsData);
      setUser(userData);
      
      if (quoteData) {
        setQuote(quoteData);
        setClientId(quoteData.client_id);
        setIssueDate(formatDateForInput(new Date(quoteData.issue_date)));
        setValidityDate(quoteData.validity_date ? formatDateForInput(new Date(quoteData.validity_date)) : '');
        setNotes(quoteData.notes || '');
        
        if (quoteData.line_items && quoteData.line_items.length > 0) {
          setLineItems(quoteData.line_items.map(item => ({
            id: generateId(),
            description: item.description,
            quantity: item.quantity,
            unit_price: item.unit_price,
            vat_rate: item.vat_rate,
          })));
        } else {
          setLineItems([{ id: generateId(), description: '', quantity: 1, unit_price: 0, vat_rate: 20 }]);
        }
      }
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clientOptions = [
    { value: '', label: 'Sélectionner un client' },
    ...clients.map(c => ({ value: c.id, label: c.name }))
  ];

  const addLineItem = () => {
    const defaultVat = user?.default_vat_rate || 20;
    setLineItems([...lineItems, { id: generateId(), description: '', quantity: 1, unit_price: 0, vat_rate: defaultVat }]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) setLineItems(lineItems.filter(item => item.id !== id));
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
    setLineItems(lineItems.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const totalHT = lineItems.reduce((sum, item) => sum + calculateLineTotal(item.quantity, item.unit_price), 0);
  const totalVAT = lineItems.reduce((sum, item) => sum + calculateVAT(calculateLineTotal(item.quantity, item.unit_price), item.vat_rate), 0);
  const totalTTC = totalHT + totalVAT;

  const selectedClient = clients.find(c => c.id === clientId);

  const getQuoteData = () => ({
    number: quote?.number || '',
    issue_date: issueDate,
    validity_date: validityDate,
    status: quote?.status || 'draft',
    notes,
    total_ht: totalHT,
    total_vat: totalVAT,
    total_ttc: totalTTC,
  });

  const getCompanyData = () => ({
    name: user?.company_name || 'Mon Entreprise',
    siret: user?.siret,
    address: user?.address,
    city: user?.city,
    postal_code: user?.postal_code,
    phone: user?.phone,
    email: user?.email,
  });

  const getLineItemsData = () => lineItems.map(item => ({
    description: item.description || 'Prestation',
    quantity: item.quantity,
    unit_price: item.unit_price,
    vat_rate: item.vat_rate,
    total_ht: calculateLineTotal(item.quantity, item.unit_price),
  }));

  const handleSave = async (newStatus?: 'draft' | 'sent') => {
    if (!clientId) { alert('Veuillez sélectionner un client'); return; }
    if (lineItems.some(item => !item.description)) { alert('Veuillez remplir toutes les descriptions'); return; }

    setIsSaving(true);
    try {
      // Mettre à jour le document
      await documentsService.update(quoteId, {
        client_id: clientId,
        issue_date: issueDate,
        validity_date: validityDate,
        notes,
        line_items: lineItems.map(item => ({
          description: item.description,
          quantity: item.quantity,
          unit_price: item.unit_price,
          vat_rate: item.vat_rate,
        })),
      });

      // Mettre à jour le statut si spécifié
      if (newStatus) {
        await documentsService.updateStatus(quoteId, newStatus);
      }

      // Générer et sauvegarder le PDF si envoyé
      if (newStatus === 'sent' && selectedClient) {
        const blob = await pdf(
          <QuotePDF 
            quote={getQuoteData()} 
            company={getCompanyData()} 
            client={selectedClient} 
            lineItems={getLineItemsData()} 
            legalMentions={user?.legal_mentions} 
          />
        ).toBlob();
        
        const pdfUrl = await storageService.uploadPDF(blob, `${quote?.number}.pdf`);
        console.log('PDF sauvegardé:', pdfUrl);
      }

      router.push('/quotes');
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
      alert('Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = () => {
    if (!clientId) { alert('Veuillez sélectionner un client'); return; }
    setShowPreview(true);
  };

  const handleDownloadPDF = async () => {
    if (!clientId || !selectedClient) { alert('Veuillez sélectionner un client'); return; }
    
    try {
      const blob = await pdf(
        <QuotePDF 
          quote={getQuoteData()} 
          company={getCompanyData()} 
          client={selectedClient} 
          lineItems={getLineItemsData()} 
          legalMentions={user?.legal_mentions} 
        />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${quote?.number}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur génération PDF:', error);
      alert('Erreur lors de la génération du PDF');
    }
  };

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-[50vh]">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      </AppLayout>
    );
  }

  if (!quote) {
    return (
      <AppLayout>
        <div className="text-center py-12">
          <p className="text-gray-500">Devis non trouvé</p>
          <Button onClick={() => router.push('/quotes')} className="mt-4">Retour aux devis</Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-600">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Modifier le devis</h1>
            <p className="text-gray-500 mt-1">{quote.number}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card variant="default" padding="lg">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Informations générales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select label="Client *" options={clientOptions} value={clientId} onChange={(e) => setClientId(e.target.value)} />
                <div></div>
                <Input label="Date d'émission" type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
                <Input label="Date de validité" type="date" value={validityDate} onChange={(e) => setValidityDate(e.target.value)} />
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800">Prestations</h2>
                <Button variant="secondary" size="sm" onClick={addLineItem} icon={<Plus className="w-4 h-4" />}>Ajouter</Button>
              </div>

              <div className="space-y-4">
                {lineItems.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50 rounded-xl space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <Input placeholder="Description de la prestation" value={item.description} onChange={(e) => updateLineItem(item.id, 'description', e.target.value)} />
                      </div>
                      {lineItems.length > 1 && (
                        <button onClick={() => removeLineItem(item.id)} className="p-2 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-600 mt-1">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <Input label="Quantité" type="number" min="1" value={item.quantity} onChange={(e) => updateLineItem(item.id, 'quantity', parseFloat(e.target.value) || 0)} />
                      <Input label="Prix unitaire HT" type="number" min="0" step="0.01" value={item.unit_price} onChange={(e) => updateLineItem(item.id, 'unit_price', parseFloat(e.target.value) || 0)} />
                      <Select label="TVA" options={vatRates} value={item.vat_rate.toString()} onChange={(e) => updateLineItem(item.id, 'vat_rate', parseFloat(e.target.value))} />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Total HT</label>
                        <div className="px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-800">
                          {formatCurrency(calculateLineTotal(item.quantity, item.unit_price))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Notes</h2>
              <textarea
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none"
                rows={3}
                placeholder="Conditions particulières, informations complémentaires..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Card>
          </div>

          <div className="space-y-6">
            <Card variant="elevated" padding="lg" className="sticky top-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Récapitulatif</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Total HT</span>
                  <span className="font-medium">{formatCurrency(totalHT)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>TVA</span>
                  <span className="font-medium">{formatCurrency(totalVAT)}</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total TTC</span>
                  <span>{formatCurrency(totalTTC)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="secondary" className="w-full" onClick={handleDownloadPDF} icon={<Download className="w-5 h-5" />}>
                  Télécharger PDF
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => handleSave()} isLoading={isSaving} icon={<Save className="w-5 h-5" />}>
                  Enregistrer
                </Button>
                <div className="h-px bg-gray-200 my-2" />
                <Button variant="secondary" className="w-full" onClick={handlePreview} icon={<Eye className="w-5 h-5" />}>
                  Prévisualiser
                </Button>
                <Button className="w-full" onClick={() => handleSave('sent')} isLoading={isSaving} icon={<Send className="w-5 h-5" />}>
                  Envoyer au client
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal de prévisualisation */}
      {selectedClient && (
        <PDFPreviewModal
          isOpen={showPreview}
          onClose={() => setShowPreview(false)}
          document={
            <QuotePDF 
              quote={getQuoteData()} 
              company={getCompanyData()} 
              client={selectedClient} 
              lineItems={getLineItemsData()} 
              legalMentions={user?.legal_mentions} 
            />
          }
          fileName={quote.number}
        />
      )}
    </AppLayout>
  );
}
