'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, FileText, Receipt, Clock, AlertCircle, ArrowRight, Euro, Loader2, TrendingUp, Users, Calendar } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, StatCard, Badge } from '@/components/ui';
import { formatCurrency, formatDate } from '@/lib/utils';
import { documentsService } from '@/services/documents';
import { clientsService } from '@/services/clients';
import { userService } from '@/services/user';
import { Document, User, Client } from '@/types';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState({ monthly_revenue: 0, pending_quotes: 0, pending_invoices: 0, unpaid_invoices: 0 });
  const [recentDocuments, setRecentDocuments] = useState<Document[]>([]);
  const [allDocuments, setAllDocuments] = useState<Document[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [greeting, setGreeting] = useState('Bonjour');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Bonjour');
    else if (hour < 18) setGreeting('Bon après-midi');
    else setGreeting('Bonsoir');

    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Vérifier les factures impayées en premier
      await documentsService.checkAndUpdateOverdueInvoices();

      const [profileData, statsData, documentsData, clientsData] = await Promise.all([
        userService.getProfile(),
        documentsService.getStats(),
        documentsService.getAll(),
        clientsService.getAll(),
      ]);
      
      setUser(profileData);
      setStats(statsData);
      setAllDocuments(documentsData);
      setRecentDocuments(documentsData.slice(0, 5));
      setClients(clientsData);
    } catch (error) {
      console.error('Erreur chargement données:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculer les stats avancées
  const totalQuotes = allDocuments.filter(d => d.type === 'quote').length;
  const totalInvoices = allDocuments.filter(d => d.type === 'invoice').length;
  const acceptedQuotes = allDocuments.filter(d => d.type === 'quote' && d.status === 'accepted').length;
  const paidInvoices = allDocuments.filter(d => d.type === 'invoice' && d.status === 'paid').length;
  const conversionRate = totalQuotes > 0 ? Math.round((acceptedQuotes / totalQuotes) * 100) : 0;
  const paymentRate = totalInvoices > 0 ? Math.round((paidInvoices / totalInvoices) * 100) : 0;

  // CA total (toutes les factures payées)
  const totalRevenue = allDocuments
    .filter(d => d.type === 'invoice' && d.status === 'paid')
    .reduce((sum, d) => sum + d.total_ttc, 0);

  // CA par mois (6 derniers mois)
  const getMonthlyRevenue = () => {
    const months: { month: string; revenue: number; invoices: number }[] = [];
    const now = new Date();
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = date.toLocaleDateString('fr-FR', { month: 'short' });
      const year = date.getFullYear();
      const month = date.getMonth();
      
      const monthDocs = allDocuments.filter(d => {
        const docDate = new Date(d.issue_date);
        return d.type === 'invoice' && d.status === 'paid' && 
               docDate.getMonth() === month && docDate.getFullYear() === year;
      });
      
      months.push({
        month: monthName,
        revenue: monthDocs.reduce((sum, d) => sum + d.total_ttc, 0),
        invoices: monthDocs.length,
      });
    }
    
    return months;
  };

  const monthlyData = getMonthlyRevenue();
  const maxRevenue = Math.max(...monthlyData.map(m => m.revenue), 1);

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
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {greeting}{user?.display_name || user?.company_name ? `, ${user?.display_name || user?.company_name}` : ''} 👋
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Voici un aperçu de votre activité</p>
          </div>
          <div className="flex gap-3">
            <Link href="/quotes/new">
              <Button variant="secondary" icon={<FileText className="w-5 h-5" />}>Nouveau devis</Button>
            </Link>
            <Link href="/invoices/new">
              <Button icon={<Receipt className="w-5 h-5" />}>Nouvelle facture</Button>
            </Link>
          </div>
        </div>

        {/* Stats principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="CA ce mois" value={formatCurrency(stats.monthly_revenue)} icon={<Euro className="w-6 h-6" />} color="green" />
          <StatCard title="Devis en attente" value={stats.pending_quotes} icon={<Clock className="w-6 h-6" />} color="orange" />
          <StatCard title="Factures en cours" value={stats.pending_invoices} icon={<FileText className="w-6 h-6" />} color="blue" />
          <StatCard title="Impayés" value={stats.unpaid_invoices} icon={<AlertCircle className="w-6 h-6" />} color="red" />
        </div>

        {/* Graphique CA + Stats avancées */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Graphique CA */}
          <Card variant="default" padding="lg" className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">Évolution du CA</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">6 derniers mois</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{formatCurrency(totalRevenue)}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">CA total</p>
              </div>
            </div>
            
            {/* Graphique en barres */}
            <div className="flex items-end justify-between gap-2 h-48">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                      {data.revenue > 0 ? formatCurrency(data.revenue) : ''}
                    </span>
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all hover:from-blue-600 hover:to-blue-500"
                      style={{ 
                        height: `${Math.max((data.revenue / maxRevenue) * 150, data.revenue > 0 ? 20 : 4)}px`,
                        minHeight: '4px'
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{data.month}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Stats avancées */}
          <Card variant="default" padding="lg">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-6">Performances</h2>
            
            <div className="space-y-6">
              {/* Taux de conversion */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Taux de conversion</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-white">{conversionRate}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all"
                    style={{ width: `${conversionRate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{acceptedQuotes} devis acceptés sur {totalQuotes}</p>
              </div>

              {/* Taux de paiement */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Taux de paiement</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-white">{paymentRate}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all"
                    style={{ width: `${paymentRate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{paidInvoices} factures payées sur {totalInvoices}</p>
              </div>

              {/* Clients */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{clients.length}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Clients</p>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{allDocuments.length}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Documents créés</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default" padding="lg" hover className="group">
            <Link href="/quotes/new" className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Plus className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg">Créer un devis</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">En moins de 5 minutes</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
            </Link>
          </Card>

          <Card variant="default" padding="lg" hover className="group">
            <Link href="/invoices/new" className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Receipt className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg">Créer une facture</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Depuis un devis ou de zéro</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </Link>
          </Card>
        </div>

        {/* Documents récents */}
        <Card variant="default" padding="none">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Documents récents</h2>
              <Link href="/quotes" className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center gap-1">
                Voir tout <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {recentDocuments.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Aucun document pour l'instant</p>
              <p className="text-gray-400 text-sm mt-1">Créez votre premier devis ou facture</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {recentDocuments.map((doc) => (
                <Link 
                  key={doc.id} 
                  href={`/${doc.type === 'quote' ? 'quotes' : 'invoices'}/${doc.id}/edit`}
                  className="block p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${doc.type === 'quote' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                        {doc.type === 'quote' ? <FileText className="w-5 h-5" /> : <Receipt className="w-5 h-5" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-gray-800 dark:text-white">{doc.number}</span>
                          <Badge status={doc.status} size="sm" />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{doc.client?.name || 'Client'}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-gray-800 dark:text-white">{formatCurrency(doc.total_ttc)}</p>
                      <p className="text-sm text-gray-400">{formatDate(doc.issue_date)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Card>
      </div>
    </AppLayout>
  );
}
