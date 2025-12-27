import { createClient } from '@/lib/supabase/client';

export const storageService = {
  // Upload un PDF et retourner l'URL publique
  async uploadPDF(pdfBlob: Blob, fileName: string): Promise<string> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    const filePath = `${user.id}/${fileName}`;

    console.log('Upload PDF:', filePath);

    // Upload le fichier
    const { error: uploadError } = await supabase.storage
      .from('documents')
      .upload(filePath, pdfBlob, { 
        upsert: true,
        contentType: 'application/pdf'
      });

    if (uploadError) {
      console.error('Erreur upload PDF:', uploadError);
      throw uploadError;
    }

    // Récupérer l'URL publique
    const { data: { publicUrl } } = supabase.storage
      .from('documents')
      .getPublicUrl(filePath);

    console.log('PDF URL:', publicUrl);
    return publicUrl;
  },

  // Supprimer un PDF
  async deletePDF(fileName: string): Promise<void> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Non authentifié');

    const filePath = `${user.id}/${fileName}`;

    const { error } = await supabase.storage
      .from('documents')
      .remove([filePath]);

    if (error) {
      console.error('Erreur suppression PDF:', error);
      throw error;
    }
  },

  // Récupérer l'URL d'un PDF
  getPDFUrl(userId: string, fileName: string): string {
    const supabase = createClient();
    const { data: { publicUrl } } = supabase.storage
      .from('documents')
      .getPublicUrl(`${userId}/${fileName}`);
    return publicUrl;
  },
};
