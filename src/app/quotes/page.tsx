'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Search, FileText, Download, Trash2, Loader2, CheckCircle, XCircle, Send, Pencil } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, Input, Badge, Select, Modal } from '@/components/ui';
import { formatCurrency, formatDate } from '@/lib/utils';
import { documentsService } from '@/services/documents';
import { userService } from '@/services/user';
import QuotePDF from '@/components/pdf/QuotePDF';
import { Document, User } from '@/types';

const statusOptions = [
  { value: 'all', label: 'Tous les statuts' },
  { value: 'draft', label: 'Brouillon' },
  { value: 'sent', label: 'Envoyé' },
  { value: 'accepted', label: 'Accepté' },
  { value: 'refused', label: 'Refusé' },
];

export default function QuotesPage() {
  const router = useRouter();
  const [quotes, setQuotes] = useState<Document[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Document | null>(null);
  const [showStatusModal, setShowStatusModal] = useState(false);

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    try {
      const [quotesData, userData] = await Promise.all([
        documentsService.getQuotes(),
        userService.getProfile(),
      ]);
      setQuotes(quotesData);
      setUser(userData);
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.number.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         quote.client?.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (status: 'draft' | 'sent' | 'accepted' | 'refused') => {
    if (!selectedQuote) return;
    try {
      await documentsService.updateStatus(selectedQuote.id, status);
      setQuotes(prev => prev.map(q => q.id === selectedQuote.id ? { ...q, status } as Document : q));
      setShowStatusModal(false);
      setSelectedQuote(null);
    } catch (error) {
      console.error('Erreur changement statut:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer ce devis ?')) return;
    try {
      await documentsService.delete(id);
      setQuotes(prev => prev.filter(q => q.id !== id));
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  const handleDownloadPDF = async (quote: Document) => {
    try {
      const fullQuote = await documentsService.getById(quote.id);
      if (!fullQuote) return;

      const companyData = {
        name: user?.company_name || 'Mon Entreprise',
        siret: user?.siret,
        address: user?.address,
        city: user?.city,
        postal_code: user?.postal_code,
        phone: user?.phone,
        email: user?.email,
      };

      const lineItemsData = fullQuote.line_items?.map(item => ({
        description: item.description,
        quantity: item.quantity,
        unit_price: item.unit_price,
        vat_rate: item.vat_rate,
        total_ht: item.total_ht,
      })) || [];

      const blob = await pdf(
        <QuotePDF quote={fullQuote} company={companyData} client={fullQuote.client || { name: 'Client' }} lineItems={lineItemsData} legalMentions={user?.legal_mentions} />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${quote.number}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur génération PDF:', error);
    }
  };

  const openStatusModal = (quote: Document) => {
    setSelectedQuote(quote);
    setShowStatusModal(true);
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

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Devis</h1>
            <p className="text-gray-500 mt-1">{quotes.length} devis au total</p>
          </div>
          <Link href="/quotes/new">
            <Button icon={<Plus className="w-5 h-5" />}>Nouveau devis</Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 max-w-md">
            <Input placeholder="Rechercher..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} icon={<Search className="w-5 h-5" />} />
          </div>
          <div className="w-48">
            <Select options={statusOptions} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} />
          </div>
        </div>

        {filteredQuotes.length === 0 ? (
          <Card variant="default" padding="lg" className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Aucun devis trouvé</h3>
            <p className="text-gray-500 mb-4">Créez votre premier devis en quelques clics</p>
            <Link href="/quotes/new"><Button icon={<Plus className="w-5 h-5" />}>Créer un devis</Button></Link>
          </Card>
        ) : (
          <Card variant="default" padding="none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Numéro</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Client</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Statut</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Montant TTC</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredQuotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4"><span className="font-semibold text-gray-800">{quote.number}</span></td>
                      <td className="px-6 py-4 text-gray-600">{quote.client?.name || '-'}</td>
                      <td className="px-6 py-4 text-gray-500">{formatDate(quote.issue_date)}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => openStatusModal(quote)}>
                          <Badge status={quote.status} size="sm" />
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-gray-800">{formatCurrency(quote.total_ttc)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={() => router.push(`/quotes/${quote.id}/edit`)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600" title="Modifier">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDownloadPDF(quote)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-emerald-600" title="Télécharger PDF">
                            <Download className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(quote.id)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-600" title="Supprimer">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Modal changement de statut */}
        <Modal isOpen={showStatusModal} onClose={() => setShowStatusModal(false)} title="Changer le statut" size="sm">
          <div className="space-y-3">
            <p className="text-gray-600 mb-4">Devis : <strong>{selectedQuote?.number}</strong></p>
            <button onClick={() => handleStatusChange('draft')} className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-gray-400 flex items-center gap-3 transition-colors">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <span>Brouillon</span>
            </button>
            <button onClick={() => handleStatusChange('sent')} className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-orange-400 flex items-center gap-3 transition-colors">
              <Send className="w-4 h-4 text-orange-500" />
              <span>Envoyé</span>
            </button>
            <button onClick={() => handleStatusChange('accepted')} className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-emerald-400 flex items-center gap-3 transition-colors">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Accepté</span>
            </button>
            <button onClick={() => handleStatusChange('refused')} className="w-full p-3 rounded-xl border-2 border-gray-200 hover:border-red-400 flex items-center gap-3 transition-colors">
              <XCircle className="w-4 h-4 text-red-500" />
              <span>Refusé</span>
            </button>
          </div>
        </Modal>
      </div>
    </AppLayout>
  );
}
