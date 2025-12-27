-- Script SQL pour créer les tables dans Supabase
-- Exécutez ce script dans l'éditeur SQL de Supabase

-- Table des utilisateurs (profils)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  siret TEXT,
  address TEXT,
  city TEXT,
  postal_code TEXT,
  phone TEXT,
  is_vat_subject BOOLEAN DEFAULT true,
  default_vat_rate DECIMAL(4,2) DEFAULT 20.00,
  logo_url TEXT,
  legal_mentions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des clients
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  postal_code TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des documents (devis et factures)
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
  type TEXT NOT NULL CHECK (type IN ('quote', 'invoice')),
  number TEXT NOT NULL,
  status TEXT NOT NULL,
  issue_date DATE NOT NULL,
  due_date DATE,
  validity_date DATE,
  total_ht DECIMAL(12,2) DEFAULT 0,
  total_vat DECIMAL(12,2) DEFAULT 0,
  total_ttc DECIMAL(12,2) DEFAULT 0,
  notes TEXT,
  legal_mentions TEXT,
  pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, number)
);

-- Table des lignes de prestation
CREATE TABLE IF NOT EXISTS line_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  quantity DECIMAL(10,2) NOT NULL DEFAULT 1,
  unit_price DECIMAL(12,2) NOT NULL DEFAULT 0,
  vat_rate DECIMAL(4,2) NOT NULL DEFAULT 20.00,
  total_ht DECIMAL(12,2) NOT NULL DEFAULT 0,
  total_ttc DECIMAL(12,2) NOT NULL DEFAULT 0,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_clients_user_id ON clients(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_client_id ON documents(client_id);
CREATE INDEX IF NOT EXISTS idx_documents_type ON documents(type);
CREATE INDEX IF NOT EXISTS idx_documents_status ON documents(status);
CREATE INDEX IF NOT EXISTS idx_line_items_document_id ON line_items(document_id);

-- Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE line_items ENABLE ROW LEVEL SECURITY;

-- Policies pour users
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Policies pour clients
CREATE POLICY "Users can view own clients" ON clients
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own clients" ON clients
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own clients" ON clients
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own clients" ON clients
  FOR DELETE USING (auth.uid() = user_id);

-- Policies pour documents
CREATE POLICY "Users can view own documents" ON documents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own documents" ON documents
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own documents" ON documents
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own documents" ON documents
  FOR DELETE USING (auth.uid() = user_id);

-- Policies pour line_items (via document ownership)
CREATE POLICY "Users can view own line items" ON line_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM documents 
      WHERE documents.id = line_items.document_id 
      AND documents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own line items" ON line_items
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM documents 
      WHERE documents.id = line_items.document_id 
      AND documents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own line items" ON line_items
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM documents 
      WHERE documents.id = line_items.document_id 
      AND documents.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own line items" ON line_items
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM documents 
      WHERE documents.id = line_items.document_id 
      AND documents.user_id = auth.uid()
    )
  );

-- Trigger pour updated_at automatique
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER clients_updated_at
  BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER documents_updated_at
  BEFORE UPDATE ON documents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
