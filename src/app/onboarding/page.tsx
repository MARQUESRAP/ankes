'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, Building2, MapPin, Percent, Check, Loader2 } from 'lucide-react';
import { Button, Card, Input } from '@/components/ui';
import { userService } from '@/services/user';

const steps = [
  { id: 1, title: 'Votre entreprise', icon: Building2 },
  { id: 2, title: 'Coordonnées', icon: MapPin },
  { id: 3, title: 'TVA', icon: Percent },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    siret: '',
    address: '',
    city: '',
    postal_code: '',
    phone: '',
    is_vat_subject: true,
    default_vat_rate: 20,
  });

  const updateFormData = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await userService.updateProfile(formData);
      router.push('/dashboard');
    } catch (error) {
      console.error('Erreur sauvegarde profil:', error);
      alert('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.company_name.trim() !== '';
      case 2:
        return true;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  currentStep > step.id ? 'bg-emerald-500 text-white' :
                  currentStep === step.id ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 sm:w-24 h-1 mx-2 rounded-full transition-all ${
                    currentStep > step.id ? 'bg-emerald-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600">
            Étape {currentStep} sur 3 : <span className="font-semibold">{steps[currentStep - 1].title}</span>
          </p>
        </div>

        <Card variant="elevated" padding="lg">
          {/* Step 1: Entreprise */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Votre entreprise</h2>
                <p className="text-gray-500 mt-2">Ces informations apparaîtront sur vos devis et factures</p>
              </div>
              <Input
                label="Nom de l'entreprise *"
                placeholder="Mon Entreprise SARL"
                value={formData.company_name}
                onChange={(e) => updateFormData('company_name', e.target.value)}
              />
              <Input
                label="Numéro SIRET"
                placeholder="123 456 789 00012"
                value={formData.siret}
                onChange={(e) => updateFormData('siret', e.target.value)}
              />
            </div>
          )}

          {/* Step 2: Coordonnées */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Coordonnées</h2>
                <p className="text-gray-500 mt-2">Pour que vos clients puissent vous contacter</p>
              </div>
              <Input
                label="Adresse"
                placeholder="123 rue de la Paix"
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Code postal"
                  placeholder="75001"
                  value={formData.postal_code}
                  onChange={(e) => updateFormData('postal_code', e.target.value)}
                />
                <Input
                  label="Ville"
                  placeholder="Paris"
                  value={formData.city}
                  onChange={(e) => updateFormData('city', e.target.value)}
                />
              </div>
              <Input
                label="Téléphone"
                type="tel"
                placeholder="06 12 34 56 78"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
              />
            </div>
          )}

          {/* Step 3: TVA */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">TVA</h2>
                <p className="text-gray-500 mt-2">Configurez vos paramètres de TVA</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Êtes-vous assujetti à la TVA ?</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => updateFormData('is_vat_subject', true)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.is_vat_subject ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">Oui</div>
                    <p className="text-sm text-gray-500">Je facture la TVA</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateFormData('is_vat_subject', false)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      !formData.is_vat_subject ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">Non</div>
                    <p className="text-sm text-gray-500">Franchise de TVA</p>
                  </button>
                </div>
              </div>

              {formData.is_vat_subject && (
                <div className="animate-slideUp">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Taux de TVA par défaut</label>
                  <div className="flex gap-3">
                    {[5.5, 10, 20].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => updateFormData('default_vat_rate', rate)}
                        className={`flex-1 py-3 rounded-xl border-2 font-semibold transition-all ${
                          formData.default_vat_rate === rate
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {currentStep > 1 && (
              <Button variant="secondary" onClick={prevStep} icon={<ArrowLeft className="w-5 h-5" />}>
                Retour
              </Button>
            )}
            <div className="flex-1" />
            {currentStep < 3 ? (
              <Button onClick={nextStep} disabled={!canProceed()} icon={<ArrowRight className="w-5 h-5" />}>
                Continuer
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!canProceed()} isLoading={isLoading} icon={<Check className="w-5 h-5" />}>
                Terminer
              </Button>
            )}
          </div>
        </Card>

        <p className="text-center text-gray-400 text-sm mt-6">
          Vous pourrez modifier ces informations plus tard dans les paramètres
        </p>
      </div>
    </div>
  );
}
