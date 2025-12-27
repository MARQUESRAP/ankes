'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Search, Receipt, Download, Trash2, Loader2, CheckCircle, Clock, AlertTriangle, Send, Pencil } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, Input, Badge, Select, Modal } from '@/components/ui';
import { formatCurrency, formatDate } from '@/lib/utils';
import { documentsService } from '@/services/documents';
import { userService } from '@/services/user';
import InvoicePDF from '@/components/pdf/InvoicePDF';
import { Document, User } from '@/types';

const statusOptions = [
  { value: 'all', label: 'Tous les statuts' },
  { value: 'draft', label: 'Brouillon' },
  { value: 'sent', label: 'Envoyée' },
  { value: 'paid', label: 'Payée' },
  { value: 'unpaid', label: 'Impayée' },
];

export default function InvoicesPage() {
  const router = useRouter();
  const [invoices, setInvoices] = useState<Document[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Document | null>(null);
  const [showStatusModal, setShowStatusModal] = useState(false);

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    try {
      const [invoicesData, userData] = await Promise.all([
        documentsService.getInvoices(),
        userService.getProfile(),
      ]);
      setInvoices(invoicesData);
      setUser(userData);
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.number.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         invoice.client?.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: invoices.length,
    paid: invoices.filter(i => i.status === 'paid').length,
    unpaid: invoices.filter(i => i.status === 'unpaid').length,
    totalAmount: invoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.total_ttc, 0),
  };

  const handleStatusChange = async (status: 'draft' | 'sent' | 'paid' | 'unpaid') => {
    if (!selectedInvoice) return;
    try {
      await documentsService.updateStatus(selectedInvoice.id, status);
      setInvoices(prev => prev.map(i => i.id === selectedInvoice.id ? { ...i, status } as Document : i));
      setShowStatusModal(false);
      setSelectedInvoice(null);
    } catch (error) {
      console.error('Erreur changement statut:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cette facture ?')) return;
    try {
      await documentsService.delete(id);
      setInvoices(prev => prev.filter(i => i.id !== id));
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  const handleDownloadPDF = async (invoice: Document) => {
    try {
      const fullInvoice = await documentsService.getById(invoice.id);
      if (!fullInvoice) return;

      const companyData = {
        name: user?.company_name || 'Mon Entreprise',
        siret: user?.siret,
        address: user?.address,
        city: user?.city,
        postal_code: user?.postal_code,
        phone: user?.phone,
        email: user?.email,
      };

      const lineItemsData = fullInvoice.line_items?.map(item => ({
        description: item.description,
        quantity: item.quantity,
        unit_price: item.unit_price,
        vat_rate: item.vat_rate,
        total_ht: item.total_ht,
      })) || [];

      const blob = await pdf(
        <InvoicePDF invoice={fullInvoice} company={companyData} client={fullInvoice.client || { name: 'Client' }} lineItems={lineItemsData} legalMentions={user?.legal_mentions} />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${invoice.number}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur génération PDF:', error);
    }
  };

  const openStatusModal = (invoice: Document) => {
    setSelectedInvoice(invoice);
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
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Factures</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{stats.paid} payées · {stats.unpaid} impayées</p>
          </div>
          <Link href="/invoices/new">
            <Button icon={<Plus className="w-5 h-5" />}>Nouvelle facture</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card variant="default" padding="md" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Receipt className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total encaissé</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">{formatCurrency(stats.totalAmount)}</p>
            </div>
          </Card>
          <Card variant="default" padding="md" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">{stats.paid}</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Factures payées</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">ce mois</p>
            </div>
          </Card>
          <Card variant="default" padding="md" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-red-600">{stats.unpaid}</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Impayées</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">à relancer</p>
            </div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 max-w-md">
            <Input placeholder="Rechercher..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} icon={<Search className="w-5 h-5" />} />
          </div>
          <div className="w-48">
            <Select options={statusOptions} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} />
          </div>
        </div>

        {filteredInvoices.length === 0 ? (
          <Card variant="default" padding="lg" className="text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Receipt className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Aucune facture trouvée</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Créez votre première facture</p>
            <Link href="/invoices/new"><Button icon={<Plus className="w-5 h-5" />}>Créer une facture</Button></Link>
          </Card>
        ) : (
          <Card variant="default" padding="none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Numéro</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Client</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Échéance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Statut</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 dark:text-gray-300">Montant TTC</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 dark:text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredInvoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4"><span className="font-semibold text-gray-800 dark:text-white">{invoice.number}</span></td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{invoice.client?.name || '-'}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{formatDate(invoice.issue_date)}</td>
                      <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{invoice.due_date ? formatDate(invoice.due_date) : '-'}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => openStatusModal(invoice)}>
                          <Badge status={invoice.status} size="sm" />
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-gray-800 dark:text-white">{formatCurrency(invoice.total_ttc)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={() => router.push(`/invoices/${invoice.id}/edit`)} className="p-2 rounded-lg hover:bg-gray-100 dark:bg-gray-700 text-gray-400 hover:text-blue-600" title="Modifier">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDownloadPDF(invoice)} className="p-2 rounded-lg hover:bg-gray-100 dark:bg-gray-700 text-gray-400 hover:text-emerald-600" title="Télécharger PDF">
                            <Download className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(invoice.id)} className="p-2 rounded-lg hover:bg-gray-100 dark:bg-gray-700 text-gray-400 hover:text-red-600" title="Supprimer">
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
            <p className="text-gray-600 dark:text-gray-300 mb-4">Facture : <strong>{selectedInvoice?.number}</strong></p>
            <button onClick={() => handleStatusChange('draft')} className="w-full p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-gray-400 flex items-center gap-3 transition-colors">
              <div className="w-3 h-3 rounded-full bg-gray-400" />
              <span>Brouillon</span>
            </button>
            <button onClick={() => handleStatusChange('sent')} className="w-full p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-orange-400 flex items-center gap-3 transition-colors">
              <Send className="w-4 h-4 text-orange-500" />
              <span>Envoyée</span>
            </button>
            <button onClick={() => handleStatusChange('paid')} className="w-full p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-emerald-400 flex items-center gap-3 transition-colors">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Payée</span>
            </button>
            <button onClick={() => handleStatusChange('unpaid')} className="w-full p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-red-400 flex items-center gap-3 transition-colors">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Impayée</span>
            </button>
          </div>
        </Modal>
      </div>
    </AppLayout>
  );
}
