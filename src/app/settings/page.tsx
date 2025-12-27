'use client';

import { useState, useEffect, useRef } from 'react';
import { Building2, CreditCard, FileText, Save, Upload, Loader2, Check, Camera, Mail } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, Input, Select } from '@/components/ui';
import { userService } from '@/services/user';
import { emailService } from '@/services/email';
import { User } from '@/types';

const tabs = [
  { id: 'company', label: 'Entreprise', icon: Building2 },
  { id: 'billing', label: 'Facturation', icon: CreditCard },
  { id: 'legal', label: 'Mentions légales', icon: FileText },
  { id: 'emails', label: 'Templates emails', icon: Mail },
];

const vatRateOptions = [
  { value: '5.5', label: '5.5%' },
  { value: '10', label: '10%' },
  { value: '20', label: '20%' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('company');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const defaultQuoteTemplate = emailService.getDefaultQuoteTemplate();
  const defaultInvoiceTemplate = emailService.getDefaultInvoiceTemplate();

  const [formData, setFormData] = useState({
    display_name: '',
    company_name: '',
    siret: '',
    address: '',
    city: '',
    postal_code: '',
    phone: '',
    email: '',
    is_vat_subject: true,
    default_vat_rate: 20,
    legal_mentions: '',
    logo_url: '',
    email_quote_subject: defaultQuoteTemplate.subject,
    email_quote_body: defaultQuoteTemplate.body,
    email_invoice_subject: defaultInvoiceTemplate.subject,
    email_invoice_body: defaultInvoiceTemplate.body,
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const profile = await userService.getProfile();
      if (profile) {
        setFormData({
          display_name: profile.display_name || '',
          company_name: profile.company_name || '',
          siret: profile.siret || '',
          address: profile.address || '',
          city: profile.city || '',
          postal_code: profile.postal_code || '',
          phone: profile.phone || '',
          email: profile.email || '',
          is_vat_subject: profile.is_vat_subject ?? true,
          default_vat_rate: profile.default_vat_rate || 20,
          legal_mentions: profile.legal_mentions || '',
          logo_url: profile.logo_url || '',
          email_quote_subject: profile.email_quote_subject || defaultQuoteTemplate.subject,
          email_quote_body: profile.email_quote_body || defaultQuoteTemplate.body,
          email_invoice_subject: profile.email_invoice_subject || defaultInvoiceTemplate.subject,
          email_invoice_body: profile.email_invoice_body || defaultInvoiceTemplate.body,
        });
      }
    } catch (error) {
      console.error('Erreur chargement profil:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await userService.updateProfile(formData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
      alert('Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Vérifier le type
    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner une image');
      return;
    }

    // Vérifier la taille (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('L\'image ne doit pas dépasser 2 Mo');
      return;
    }

    setIsUploadingLogo(true);
    try {
      const logoUrl = await userService.updateLogo(file);
      setFormData(prev => ({ ...prev, logo_url: logoUrl }));
    } catch (error) {
      console.error('Erreur upload logo:', error);
      alert('Erreur lors de l\'upload du logo');
    } finally {
      setIsUploadingLogo(false);
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
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Paramètres</h1>
          <p className="text-gray-500 mt-1">Configurez votre compte et vos préférences</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-all border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <Card variant="default" padding="lg">
          {/* Entreprise */}
          {activeTab === 'company' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Informations de l'entreprise</h2>
                <p className="text-gray-500 text-sm mb-6">Ces informations apparaîtront sur vos devis et factures</p>
              </div>

              {/* Logo */}
              <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl">
                <div className="relative">
                  {formData.logo_url ? (
                    <img 
                      src={formData.logo_url} 
                      alt="Logo" 
                      className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow-md"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                      {formData.company_name?.charAt(0)?.toUpperCase() || '?'}
                    </div>
                  )}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploadingLogo}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {isUploadingLogo ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Camera className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Logo de l'entreprise</p>
                  <p className="text-sm text-gray-500">JPG, PNG ou GIF. Max 2 Mo.</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploadingLogo}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-1"
                  >
                    {isUploadingLogo ? 'Upload en cours...' : 'Changer le logo'}
                  </button>
                </div>
              </div>

              <Input
                label="Votre prénom ou pseudo"
                placeholder="Jean"
                value={formData.display_name}
                onChange={(e) => setFormData(prev => ({ ...prev, display_name: e.target.value }))}
                hint="Comment souhaitez-vous être appelé dans l'application ?"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Nom de l'entreprise"
                  placeholder="Mon Entreprise SARL"
                  value={formData.company_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, company_name: e.target.value }))}
                />
                <Input
                  label="Numéro SIRET"
                  placeholder="123 456 789 00012"
                  value={formData.siret}
                  onChange={(e) => setFormData(prev => ({ ...prev, siret: e.target.value }))}
                />
              </div>

              <Input
                label="Adresse"
                placeholder="123 rue de la Paix"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Code postal"
                  placeholder="75001"
                  value={formData.postal_code}
                  onChange={(e) => setFormData(prev => ({ ...prev, postal_code: e.target.value }))}
                />
                <Input
                  label="Ville"
                  placeholder="Paris"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Téléphone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="contact@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
          )}

          {/* Facturation */}
          {activeTab === 'billing' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Paramètres de facturation</h2>
                <p className="text-gray-500 text-sm mb-6">Configurez vos paramètres de TVA</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Êtes-vous assujetti à la TVA ?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, is_vat_subject: true }))}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.is_vat_subject
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">Oui</div>
                    <p className="text-sm text-gray-500">Je facture la TVA</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, is_vat_subject: false }))}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      !formData.is_vat_subject
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">Non</div>
                    <p className="text-sm text-gray-500">Franchise en base de TVA</p>
                  </button>
                </div>
              </div>

              {formData.is_vat_subject && (
                <div className="animate-slideUp">
                  <Select
                    label="Taux de TVA par défaut"
                    options={vatRateOptions}
                    value={formData.default_vat_rate.toString()}
                    onChange={(e) => setFormData(prev => ({ ...prev, default_vat_rate: parseFloat(e.target.value) }))}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Ce taux sera appliqué par défaut lors de la création de nouveaux documents
                  </p>
                </div>
              )}

              {!formData.is_vat_subject && (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 animate-slideUp">
                  <p className="text-sm text-amber-800">
                    <strong>Mention obligatoire :</strong> "TVA non applicable, article 293 B du CGI" 
                    sera automatiquement ajoutée sur vos documents.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Mentions légales */}
          {activeTab === 'legal' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Mentions légales</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Ces mentions apparaîtront en bas de vos devis et factures
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conditions de paiement et mentions légales
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none"
                  rows={8}
                  placeholder="Ex: Conditions de règlement : paiement à 30 jours&#10;En cas de retard de paiement, une pénalité de 3 fois le taux d'intérêt légal sera appliquée..."
                  value={formData.legal_mentions}
                  onChange={(e) => setFormData(prev => ({ ...prev, legal_mentions: e.target.value }))}
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800 font-medium mb-2">📋 Mentions obligatoires à inclure :</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Conditions de règlement (délai de paiement)</li>
                  <li>• Taux de pénalités de retard</li>
                  <li>• Indemnité forfaitaire de recouvrement (40€)</li>
                  <li>• Escompte pour paiement anticipé (ou absence d'escompte)</li>
                </ul>
              </div>

              <button
                onClick={() => setFormData(prev => ({
                  ...prev,
                  legal_mentions: `Conditions de règlement : paiement à 30 jours date de facture.

En cas de retard de paiement, une pénalité égale à 3 fois le taux d'intérêt légal sera exigible (article L.441-6 du Code de Commerce).

Une indemnité forfaitaire de 40€ pour frais de recouvrement sera également due en cas de retard de paiement (article D.441-5 du Code de Commerce).

Pas d'escompte pour paiement anticipé.`
                }))}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Utiliser le modèle par défaut
              </button>
            </div>
          )}

          {/* Templates emails */}
          {activeTab === 'emails' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Templates d'emails</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Personnalisez les emails envoyés à vos clients avec vos devis et factures
                </p>
              </div>

              {/* Variables disponibles */}
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800 font-medium mb-2">📝 Variables disponibles :</p>
                <div className="flex flex-wrap gap-2">
                  {['{{client_name}}', '{{document_number}}', '{{amount}}', '{{company_name}}', '{{company_email}}', '{{company_phone}}', '{{validity_date}}', '{{due_date}}'].map((variable) => (
                    <code key={variable} className="px-2 py-1 bg-blue-100 rounded text-xs text-blue-800">{variable}</code>
                  ))}
                </div>
              </div>

              {/* Template Devis */}
              <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  Template Devis
                </h3>
                
                <Input
                  label="Sujet de l'email"
                  placeholder="Devis {{document_number}} - {{company_name}}"
                  value={formData.email_quote_subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, email_quote_subject: e.target.value }))}
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Corps de l'email
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none font-mono text-sm"
                    rows={10}
                    value={formData.email_quote_body}
                    onChange={(e) => setFormData(prev => ({ ...prev, email_quote_body: e.target.value }))}
                  />
                </div>

                <button
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    email_quote_subject: defaultQuoteTemplate.subject,
                    email_quote_body: defaultQuoteTemplate.body,
                  }))}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Réinitialiser le template par défaut
                </button>
              </div>

              {/* Template Facture */}
              <div className="space-y-4 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-emerald-500" />
                  Template Facture
                </h3>
                
                <Input
                  label="Sujet de l'email"
                  placeholder="Facture {{document_number}} - {{company_name}}"
                  value={formData.email_invoice_subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, email_invoice_subject: e.target.value }))}
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Corps de l'email
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none font-mono text-sm"
                    rows={10}
                    value={formData.email_invoice_body}
                    onChange={(e) => setFormData(prev => ({ ...prev, email_invoice_body: e.target.value }))}
                  />
                </div>

                <button
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    email_invoice_subject: defaultInvoiceTemplate.subject,
                    email_invoice_body: defaultInvoiceTemplate.body,
                  }))}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Réinitialiser le template par défaut
                </button>
              </div>
            </div>
          )}
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            isLoading={isSaving}
            icon={saveSuccess ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
            className={saveSuccess ? 'bg-emerald-500 hover:bg-emerald-600' : ''}
          >
            {saveSuccess ? 'Enregistré !' : 'Enregistrer les modifications'}
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
