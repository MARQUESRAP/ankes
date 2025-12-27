'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, User, Phone, Mail, MapPin, Pencil, Trash2, Loader2 } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Button, Card, Input, Modal } from '@/components/ui';
import { clientsService } from '@/services/clients';
import { Client } from '@/types';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', city: '', postal_code: '' });

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      const data = await clientsService.getAll();
      setClients(data);
    } catch (error) {
      console.error('Erreur chargement clients:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) || client.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openCreateModal = () => {
    setEditingClient(null);
    setFormData({ name: '', email: '', phone: '', address: '', city: '', postal_code: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (client: Client) => {
    setEditingClient(client);
    setFormData({ name: client.name, email: client.email || '', phone: client.phone || '', address: client.address || '', city: client.city || '', postal_code: client.postal_code || '' });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!formData.name.trim()) return;
    setIsSaving(true);
    try {
      if (editingClient) {
        await clientsService.update(editingClient.id, formData);
      } else {
        await clientsService.create(formData);
      }
      await loadClients();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erreur sauvegarde:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer ce client ?')) return;
    try {
      await clientsService.delete(id);
      setClients(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      console.error('Erreur suppression:', error);
      alert('Impossible de supprimer ce client (peut-être lié à des documents)');
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
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div><h1 className="text-3xl font-bold text-gray-800">Clients</h1><p className="text-gray-500 mt-1">{clients.length} client{clients.length > 1 ? 's' : ''}</p></div>
          <Button onClick={openCreateModal} icon={<Plus className="w-5 h-5" />}>Nouveau client</Button>
        </div>
        <div className="max-w-md"><Input placeholder="Rechercher un client..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} icon={<Search className="w-5 h-5" />} /></div>
        
        {filteredClients.length === 0 ? (
          <Card variant="default" padding="lg" className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"><User className="w-8 h-8 text-gray-400" /></div>
            <h3 className="font-semibold text-gray-800 mb-2">Aucun client trouvé</h3>
            <p className="text-gray-500 mb-4">{searchQuery ? 'Essayez une autre recherche' : 'Commencez par ajouter votre premier client'}</p>
            {!searchQuery && <Button onClick={openCreateModal} icon={<Plus className="w-5 h-5" />}>Ajouter un client</Button>}
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredClients.map((client) => (
              <Card key={client.id} variant="default" padding="lg" hover>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">{client.name.charAt(0).toUpperCase()}</div>
                    <h3 className="font-semibold text-gray-800">{client.name}</h3>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => openEditModal(client)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600"><Pencil className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(client.id)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {client.email && <div className="flex items-center gap-2 text-gray-600"><Mail className="w-4 h-4 text-gray-400" />{client.email}</div>}
                  {client.phone && <div className="flex items-center gap-2 text-gray-600"><Phone className="w-4 h-4 text-gray-400" />{client.phone}</div>}
                  {client.address && <div className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-gray-400" />{client.address}, {client.postal_code} {client.city}</div>}
                </div>
              </Card>
            ))}
          </div>
        )}

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingClient ? 'Modifier le client' : 'Nouveau client'} size="md">
          <div className="space-y-4">
            <Input label="Nom *" placeholder="Nom du client" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} />
            <Input label="Email" type="email" placeholder="email@exemple.com" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />
            <Input label="Téléphone" type="tel" placeholder="06 12 34 56 78" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} />
            <Input label="Adresse" placeholder="123 rue de la Paix" value={formData.address} onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))} />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Code postal" placeholder="75001" value={formData.postal_code} onChange={(e) => setFormData(prev => ({ ...prev, postal_code: e.target.value }))} />
              <Input label="Ville" placeholder="Paris" value={formData.city} onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))} />
            </div>
            <div className="flex gap-3 pt-4">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)} className="flex-1">Annuler</Button>
              <Button onClick={handleSave} isLoading={isSaving} className="flex-1">{editingClient ? 'Enregistrer' : 'Créer'}</Button>
            </div>
          </div>
        </Modal>
      </div>
    </AppLayout>
  );
}
