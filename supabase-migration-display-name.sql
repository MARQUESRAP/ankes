-- Migration : Ajouter la colonne display_name à la table users
-- Exécutez ce script dans l'éditeur SQL de Supabase

ALTER TABLE public.users ADD COLUMN IF NOT EXISTS display_name TEXT;
