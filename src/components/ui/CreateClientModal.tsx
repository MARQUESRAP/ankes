'use client';

import { useState } from 'react';
import { X, Loader2, UserPlus } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { clientsService } from '@/services/clients';
import { Client } from '@/types';

interface CreateClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClientCreated: (client: Client) => void;
}

export default function CreateClientModal({ isOpen, onClose, onClientCreated }: CreateClientModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal_code: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Le nom du client est obligatoire');
      return;
    }

    setIsLoading(true);
    try {
      const newClient = await clientsService.create(formData);
      onClientCreated(newClient);
      // Reset form
      setFormData({ name: '', email: '', phone: '', address: '', city: '', postal_code: '' });
      onClose();
    } catch (error) {
      console.error('Erreur création client:', error);
      alert('Erreur lors de la création du client');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-scaleIn">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Nouveau client</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Ajoutez rapidement un client</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 dark:text-gray-300">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <Input
            label="Nom du client *"
            placeholder="Entreprise ou particulier"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            autoFocus
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="contact@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
            <Input
              label="Téléphone"
              type="tel"
              placeholder="06 12 34 56 78"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
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

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="secondary" className="flex-1" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" className="flex-1" isLoading={isLoading}>
              Créer le client
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
