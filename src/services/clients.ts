import { createClient } from '@/lib/supabase/client';
import { Client, CreateClientForm } from '@/types';

export const clientsService = {
  // Récupérer tous les clients
  async getAll(): Promise<Client[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur getAll clients:', error);
      throw error;
    }
    return data || [];
  },

  // Récupérer un client par ID
  async getById(id: string): Promise<Client | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Erreur getById client:', error);
      throw error;
    }
    return data;
  },

  // Créer un nouveau client
  async create(client: CreateClientForm): Promise<Client> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      console.error('Utilisateur non authentifié');
      throw new Error('Non authentifié');
    }

    console.log('Création client pour user:', user.id, client);

    const { data, error } = await supabase
      .from('clients')
      .insert({
        ...client,
        user_id: user.id,
      })
      .select()
      .single();

    if (error) {
      console.error('Erreur création client:', error);
      throw error;
    }
    
    console.log('Client créé:', data);
    return data;
  },

  // Mettre à jour un client
  async update(id: string, client: Partial<CreateClientForm>): Promise<Client> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('clients')
      .update(client)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Erreur update client:', error);
      throw error;
    }
    return data;
  },

  // Supprimer un client
  async delete(id: string): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Erreur delete client:', error);
      throw error;
    }
  },

  // Rechercher des clients
  async search(query: string): Promise<Client[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .or(`name.ilike.%${query}%,email.ilike.%${query}%`)
      .order('name');

    if (error) {
      console.error('Erreur search clients:', error);
      throw error;
    }
    return data || [];
  },
};
