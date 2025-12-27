-- Migration : Ajouter les templates email à la table users
-- Exécutez ce script dans l'éditeur SQL de Supabase

ALTER TABLE public.users ADD COLUMN IF NOT EXISTS email_quote_subject TEXT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS email_quote_body TEXT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS email_invoice_subject TEXT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS email_invoice_body TEXT;
