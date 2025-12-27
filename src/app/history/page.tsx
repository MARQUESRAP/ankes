'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  History, 
  FileText, 
  CreditCard, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  List, 
  Eye,
  TrendingUp,
  Users,
  Euro,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, Input, Select, Badge } from '@/components/ui';
import { documentsService } from '@/services/documents';
import { clientsService } from '@/services/clients';
import { Document, Client } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';

type ViewMode = 'list' | 'calendar';
type DocumentTab = 'quotes' | 'invoices';

export default function HistoryPage() {
  const router = useRouter();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filtres
  const [activeTab, setActiveTab] = useState<DocumentTab>('quotes');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  
  // Calendrier
  const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [docs, clientsData] = await Promise.all([
        documentsService.getAll(),
        clientsService.getAll(),
      ]);
      setDocuments(docs);
      setClients(clientsData);
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filtrer les documents acceptés/payés uniquement
  const acceptedDocuments = useMemo(() => {
    return documents.filter(doc => {
      if (doc.type === 'quote') {
        return doc.status === 'accepted';
      } else {
        return doc.status === 'paid' || doc.status === 'sent';
      }
    });
  }, [documents]);

  // Appliquer les filtres
  const filteredDocuments = useMemo(() => {
    let filtered = acceptedDocuments.filter(doc => 
      activeTab === 'quotes' ? doc.type === 'quote' : doc.type === 'invoice'
    );

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(doc => 
        doc.number.toLowerCase().includes(query) ||
        doc.client?.name.toLowerCase().includes(query)
      );
    }

    // Filtre par client
    if (selectedClient) {
      filtered = filtered.filter(doc => doc.client_id === selectedClient);
    }

    // Filtre par statut
    if (selectedStatus) {
      filtered = filtered.filter(doc => doc.status === selectedStatus);
    }

    // Filtre par date
    if (dateFrom) {
      filtered = filtered.filter(doc => doc.issue_date >= dateFrom);
    }
    if (dateTo) {
      filtered = filtered.filter(doc => doc.issue_date <= dateTo);
    }

    // Trier par date décroissante
    return filtered.sort((a, b) => 
      new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime()
    );
  }, [acceptedDocuments, activeTab, searchQuery, selectedClient, selectedStatus, dateFrom, dateTo]);

  // Statistiques
  const stats = useMemo(() => {
    const totalAmount = filteredDocuments.reduce((sum, doc) => sum + (doc.total_ttc || 0), 0);
    const uniqueClients = new Set(filteredDocuments.map(doc => doc.client_id)).size;
    const avgAmount = filteredDocuments.length > 0 ? totalAmount / filteredDocuments.length : 0;
    
    return {
      count: filteredDocuments.length,
      totalAmount,
      uniqueClients,
      avgAmount,
    };
  }, [filteredDocuments]);

  // Export CSV
  const handleExportCSV = () => {
    const headers = ['Numéro', 'Client', 'Date', 'Montant HT', 'TVA', 'Montant TTC', 'Statut'];
    const rows = filteredDocuments.map(doc => [
      doc.number,
      doc.client?.name || '',
      formatDate(doc.issue_date),
      doc.total_ht?.toFixed(2) || '0',
      doc.total_vat?.toFixed(2) || '0',
      doc.total_ttc?.toFixed(2) || '0',
      doc.status,
    ]);

    const csvContent = [
      headers.join(';'),
      ...rows.map(row => row.join(';'))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `historique-${activeTab}-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  // Calendrier helpers
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    
    return { daysInMonth, startingDay };
  };

  const getDocumentsForDate = (day: number) => {
    const dateStr = `${calendarDate.getFullYear()}-${String(calendarDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return filteredDocuments.filter(doc => doc.issue_date === dateStr);
  };

  const { daysInMonth, startingDay } = getDaysInMonth(calendarDate);

  const clientOptions = [
    { value: '', label: 'Tous les clients' },
    ...clients.map(c => ({ value: c.id, label: c.name }))
  ];

  const statusOptions = activeTab === 'quotes' 
    ? [
        { value: '', label: 'Tous les statuts' },
        { value: 'accepted', label: 'Accepté' },
      ]
    : [
        { value: '', label: 'Tous les statuts' },
        { value: 'sent', label: 'Envoyé' },
        { value: 'paid', label: 'Payé' },
      ];

  const getStatusBadge = (status: string) => {
    return <Badge status={status} />;
  };

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <History className="w-8 h-8 text-blue-500" />
              Historique
            </h1>
            <p className="text-gray-500 mt-1">Consultez tous vos documents acceptés</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'list' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('list')}
              icon={<List className="w-5 h-5" />}
            >
              Liste
            </Button>
            <Button
              variant={viewMode === 'calendar' ? 'primary' : 'secondary'}
              onClick={() => setViewMode('calendar')}
              icon={<Calendar className="w-5 h-5" />}
            >
              Calendrier
            </Button>
          </div>
        </div>

        {/* Tabs Devis / Factures */}
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'quotes'
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            <FileText className="w-5 h-5" />
            Devis acceptés
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`flex items-center gap-2 px-4 py-3 font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'invoices'
                ? 'text-emerald-600 border-emerald-600'
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            <CreditCard className="w-5 h-5" />
            Factures
          </button>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card padding="md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Documents</p>
                <p className="text-xl font-bold text-gray-800">{stats.count}</p>
              </div>
            </div>
          </Card>
          <Card padding="md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Euro className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total TTC</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.totalAmount)}</p>
              </div>
            </div>
          </Card>
          <Card padding="md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Clients</p>
                <p className="text-xl font-bold text-gray-800">{stats.uniqueClients}</p>
              </div>
            </div>
          </Card>
          <Card padding="md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Moyenne</p>
                <p className="text-xl font-bold text-gray-800">{formatCurrency(stats.avgAmount)}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filtres */}
        <Card padding="md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Rechercher par numéro ou client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="w-5 h-5" />}
              />
            </div>
            <div className="w-full md:w-48">
              <Select
                options={clientOptions}
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
              />
            </div>
            <div className="w-full md:w-40">
              <Select
                options={statusOptions}
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                placeholder="Du"
              />
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                placeholder="Au"
              />
            </div>
            <Button
              variant="secondary"
              onClick={handleExportCSV}
              icon={<Download className="w-5 h-5" />}
            >
              Export CSV
            </Button>
          </div>
        </Card>

        {/* Vue Liste */}
        {viewMode === 'list' && (
          <Card padding="none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Numéro</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Client</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Montant TTC</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600">Statut</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredDocuments.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                        Aucun document trouvé
                      </td>
                    </tr>
                  ) : (
                    filteredDocuments.map((doc) => (
                      <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="font-semibold text-gray-800">{doc.number}</span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{doc.client?.name}</td>
                        <td className="px-6 py-4 text-gray-600">{formatDate(doc.issue_date)}</td>
                        <td className="px-6 py-4 text-right font-semibold text-gray-800">
                          {formatCurrency(doc.total_ttc || 0)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {getStatusBadge(doc.status)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => router.push(`/${doc.type === 'quote' ? 'quotes' : 'invoices'}/${doc.id}`)}
                            icon={<Eye className="w-4 h-4" />}
                          >
                            Voir
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Vue Calendrier */}
        {viewMode === 'calendar' && (
          <Card padding="md">
            {/* Navigation calendrier */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h3 className="text-lg font-semibold text-gray-800">
                {monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}
              </h3>
              <button
                onClick={() => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Grille calendrier */}
            <div className="grid grid-cols-7 gap-1">
              {/* En-têtes jours */}
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              
              {/* Cases vides avant le 1er */}
              {Array.from({ length: startingDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-24 bg-gray-50 rounded-lg" />
              ))}
              
              {/* Jours du mois */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const docsForDay = getDocumentsForDate(day);
                const isToday = new Date().toDateString() === new Date(calendarDate.getFullYear(), calendarDate.getMonth(), day).toDateString();
                
                return (
                  <div
                    key={day}
                    className={`h-24 p-2 rounded-lg border transition-colors ${
                      isToday ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-600'}`}>
                      {day}
                    </span>
                    <div className="mt-1 space-y-1 overflow-hidden">
                      {docsForDay.slice(0, 2).map(doc => (
                        <div
                          key={doc.id}
                          onClick={() => router.push(`/${doc.type === 'quote' ? 'quotes' : 'invoices'}/${doc.id}`)}
                          className={`text-xs px-1 py-0.5 rounded truncate cursor-pointer ${
                            doc.type === 'quote' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-emerald-100 text-emerald-700'
                          }`}
                        >
                          {doc.number}
                        </div>
                      ))}
                      {docsForDay.length > 2 && (
                        <div className="text-xs text-gray-500">
                          +{docsForDay.length - 2} autres
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
