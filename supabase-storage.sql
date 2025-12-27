-- Script SQL pour configurer le stockage dans Supabase
-- Exécutez ce script dans l'éditeur SQL de Supabase

-- Créer le bucket pour les logos
INSERT INTO storage.buckets (id, name, public)
VALUES ('logos', 'logos', true)
ON CONFLICT (id) DO NOTHING;

-- Créer le bucket pour les documents PDF
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;

-- Policies pour le bucket logos
CREATE POLICY "Users can upload their own logo"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'logos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own logo"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'logos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own logo"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'logos' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Logos are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'logos');

-- Policies pour le bucket documents
CREATE POLICY "Users can upload their own documents"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'documents' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can update their own documents"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'documents' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own documents"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'documents' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Documents are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'documents');
