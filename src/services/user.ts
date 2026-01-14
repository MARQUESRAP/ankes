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

  // Créer le profil utilisateur s'il n'existe pas
  async ensureProfileExists(): Promise<void> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    // Vérifier si le profil existe
    const { data: existingProfile } = await supabase
      .from('users')
      .select('id')
      .eq('id', user.id)
      .single();

    // Si le profil n'existe pas, le créer
    if (!existingProfile) {
      console.log('Création du profil pour:', user.id);
      const { error } = await supabase
        .from('users')
        .insert({
          id: user.id,
          email: user.email,
        });

      if (error && error.code !== '23505') { // Ignorer l'erreur de doublon
        console.error('Erreur création profil:', error);
        throw error;
      }
    }
  },

  // Créer ou mettre à jour le profil
  async updateProfile(profile: Partial<OnboardingForm & { logo_url?: string; legal_mentions?: string; email?: string }>): Promise<User> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    console.log('Update profile pour user:', user.id, profile);

    // S'assurer que le profil existe d'abord
    await this.ensureProfileExists();

    // Maintenant faire l'update
    const { data, error } = await supabase
      .from('users')
      .update({
        email: profile.email || user.email,
        ...profile,
      })
      .eq('id', user.id)
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

    // S'assurer que le profil existe
    await this.ensureProfileExists();

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

    // S'assurer que le profil existe
    await this.ensureProfileExists();

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
