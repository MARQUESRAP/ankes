import { createClient } from '@/lib/supabase/client';
import { User, OnboardingForm } from '@/types';

export const userService = {
  // Récupérer le profil de l'utilisateur connecté
  async getProfile(): Promise<User | null> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Erreur getProfile:', error);
      throw error;
    }
    return data;
  },

  // Créer ou mettre à jour le profil
  async updateProfile(profile: Partial<OnboardingForm & { logo_url?: string; legal_mentions?: string; email?: string }>): Promise<User> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    console.log('Update profile pour user:', user.id, profile);

    const { data, error } = await supabase
      .from('users')
      .upsert({
        id: user.id,
        email: profile.email || user.email,
        ...profile,
      })
      .select()
      .single();

    if (error) {
      console.error('Erreur updateProfile:', error);
      throw error;
    }
    
    console.log('Profil mis à jour:', data);
    return data;
  },

  // Vérifier si le profil est complet (onboarding terminé)
  async isProfileComplete(): Promise<boolean> {
    const profile = await this.getProfile();
    if (!profile) return false;
    return !!(profile.company_name && profile.siret);
  },

  // Mettre à jour les mentions légales
  async updateLegalMentions(mentions: string): Promise<User> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    const { data, error } = await supabase
      .from('users')
      .update({ legal_mentions: mentions })
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      console.error('Erreur updateLegalMentions:', error);
      throw error;
    }
    return data;
  },

  // Mettre à jour le logo
  async updateLogo(logoFile: File): Promise<string> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    const fileExt = logoFile.name.split('.').pop();
    const fileName = `${user.id}/logo-${Date.now()}.${fileExt}`;

    console.log('Upload logo:', fileName);

    // Upload le fichier
    const { error: uploadError } = await supabase.storage
      .from('logos')
      .upload(fileName, logoFile, { upsert: true });

    if (uploadError) {
      console.error('Erreur upload logo:', uploadError);
      throw uploadError;
    }

    // Récupérer l'URL publique
    const { data: { publicUrl } } = supabase.storage
      .from('logos')
      .getPublicUrl(fileName);

    console.log('Logo URL:', publicUrl);

    // Mettre à jour le profil
    const { error: updateError } = await supabase
      .from('users')
      .update({ logo_url: publicUrl })
      .eq('id', user.id);

    if (updateError) {
      console.error('Erreur update logo_url:', updateError);
      throw updateError;
    }

    return publicUrl;
  },
};
