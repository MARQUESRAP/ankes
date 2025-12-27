'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Plus, Trash2, Save, Send, Download, Loader2, Eye, UserPlus } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, Input, Select, PDFPreviewModal, CreateClientModal, SendEmailModal } from '@/components/ui';
import { formatCurrency, calculateLineTotal, calculateVAT, formatDateForInput, generateId } from '@/lib/utils';
import { clientsService } from '@/services/clients';
import { documentsService } from '@/services/documents';
import { userService } from '@/services/user';
import { emailService } from '@/services/email';
import QuotePDF from '@/components/pdf/QuotePDF';
import { Client, User } from '@/types';

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

export default function NewQuotePage() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [nextNumber, setNextNumber] = useState('DEV-001');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showCreateClient, setShowCreateClient] = useState(false);
  const [showSendEmail, setShowSendEmail] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  const [clientId, setClientId] = useState('');
  const [issueDate, setIssueDate] = useState(formatDateForInput(new Date()));
  const [validityDate, setValidityDate] = useState(formatDateForInput(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)));
  const [notes, setNotes] = useState('');
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: generateId(), description: '', quantity: 1, unit_price: 0, vat_rate: 20 }
  ]);

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    try {
      const [clientsData, userData, number] = await Promise.all([
        clientsService.getAll(),
        userService.getProfile(),
        documentsService.getNextNumber('quote'),
      ]);
      setClients(clientsData);
      setUser(userData);
      setNextNumber(number);
      if (userData?.default_vat_rate) {
        setLineItems([{ id: generateId(), description: '', quantity: 1, unit_price: 0, vat_rate: userData.default_vat_rate }]);
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

  const handleClientCreated = (newClient: Client) => {
    setClients(prev => [newClient, ...prev]);
    setClientId(newClient.id);
  };

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
    number: nextNumber,
    issue_date: issueDate,
    validity_date: validityDate,
    status: 'draft',
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

  const handleSave = async (status: 'draft' | 'sent' = 'draft') => {
    if (!clientId) { alert('Veuillez sélectionner un client'); return; }
    if (lineItems.some(item => !item.description)) { alert('Veuillez remplir toutes les descriptions'); return; }

    setIsSaving(true);
    try {
      await documentsService.create({
        client_id: clientId,
        type: 'quote',
        status,
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
      router.push('/quotes');
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
      alert('Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenSendEmail = async () => {
    if (!clientId) { alert('Veuillez sélectionner un client'); return; }
    if (!selectedClient?.email) { alert('Ce client n\'a pas d\'adresse email'); return; }
    if (lineItems.some(item => !item.description)) { alert('Veuillez remplir toutes les descriptions'); return; }

    try {
      // Générer le PDF
      const blob = await pdf(
        <QuotePDF 
          quote={getQuoteData()} 
          company={getCompanyData()} 
          client={selectedClient} 
          lineItems={getLineItemsData()} 
          legalMentions={user?.legal_mentions} 
        />
      ).toBlob();
      setPdfBlob(blob);
      setShowSendEmail(true);
    } catch (error) {
      console.error('Erreur génération PDF:', error);
      alert('Erreur lors de la génération du PDF');
    }
  };

  const handleEmailSent = async () => {
    // Sauvegarder le document avec statut "sent"
    await handleSave('sent');
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
      a.download = `${nextNumber}.pdf`;
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

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-700 text-gray-400 hover:text-gray-600 dark:text-gray-300">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Nouveau devis</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{nextNumber}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card variant="default" padding="lg">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Informations générales</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Client *</label>
                    <button
                      type="button"
                      onClick={() => setShowCreateClient(true)}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                    >
                      <UserPlus className="w-4 h-4" />
                      Nouveau
                    </button>
                  </div>
                  <Select options={clientOptions} value={clientId} onChange={(e) => setClientId(e.target.value)} />
                </div>
                <div></div>
                <Input label="Date d'émission" type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
                <Input label="Date de validité" type="date" value={validityDate} onChange={(e) => setValidityDate(e.target.value)} />
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">Prestations</h2>
                <Button variant="secondary" size="sm" onClick={addLineItem} icon={<Plus className="w-4 h-4" />}>Ajouter</Button>
              </div>

              <div className="space-y-4">
                {lineItems.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl space-y-4">
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total HT</label>
                        <div className="px-4 py-3.5 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl font-semibold text-gray-800 dark:text-white">
                          {formatCurrency(calculateLineTotal(item.quantity, item.unit_price))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Notes</h2>
              <textarea
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none"
                rows={3}
                placeholder="Conditions particulières, informations complémentaires..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Card>
          </div>

          <div className="space-y-6">
            <Card variant="elevated" padding="lg" className="sticky top-8">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Récapitulatif</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Total HT</span>
                  <span className="font-medium">{formatCurrency(totalHT)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>TVA</span>
                  <span className="font-medium">{formatCurrency(totalVAT)}</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-white">
                  <span>Total TTC</span>
                  <span>{formatCurrency(totalTTC)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="secondary" className="w-full" onClick={handleDownloadPDF} icon={<Download className="w-5 h-5" />}>
                  Télécharger PDF
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => handleSave('draft')} isLoading={isSaving} icon={<Save className="w-5 h-5" />}>
                  Enregistrer brouillon
                </Button>
                <div className="h-px bg-gray-200 my-2" />
                <Button variant="secondary" className="w-full" onClick={handlePreview} icon={<Eye className="w-5 h-5" />}>
                  Prévisualiser
                </Button>
                <Button className="w-full" onClick={handleOpenSendEmail} isLoading={isSaving} icon={<Send className="w-5 h-5" />}>
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
          fileName={nextNumber}
        />
      )}

      {/* Modal création client */}
      <CreateClientModal
        isOpen={showCreateClient}
        onClose={() => setShowCreateClient(false)}
        onClientCreated={handleClientCreated}
      />

      {/* Modal envoi email */}
      {selectedClient && (
        <SendEmailModal
          isOpen={showSendEmail}
          onClose={() => setShowSendEmail(false)}
          onSuccess={handleEmailSent}
          documentType="quote"
          documentNumber={nextNumber}
          clientName={selectedClient.name}
          clientEmail={selectedClient.email || ''}
          amount={formatCurrency(totalTTC)}
          validityDate={validityDate}
          companyName={user?.company_name || ''}
          companyEmail={user?.email || ''}
          companyPhone={user?.phone || ''}
          displayName={user?.display_name}
          templateSubject={user?.email_quote_subject || emailService.getDefaultQuoteTemplate().subject}
          templateBody={user?.email_quote_body || emailService.getDefaultQuoteTemplate().body}
          pdfBlob={pdfBlob}
        />
      )}
    </AppLayout>
  );
}
