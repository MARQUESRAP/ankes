// Types pour l'application Ankès

export interface User {
  id: string;
  email: string;
  display_name?: string;
  company_name: string;
  siret: string;
  address: string;
  city: string;
  postal_code: string;
  phone: string;
  is_vat_subject: boolean;
  default_vat_rate: number;
  logo_url?: string;
  legal_mentions?: string;
  email_quote_subject?: string;
  email_quote_body?: string;
  email_invoice_subject?: string;
  email_invoice_body?: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  user_id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export type DocumentType = 'quote' | 'invoice';

export type QuoteStatus = 'draft' | 'sent' | 'accepted' | 'refused';
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'unpaid';

export interface LineItem {
  id: string;
  document_id: string;
  description: string;
  quantity: number;
  unit_price: number;
  vat_rate: number;
  total_ht: number;
  total_ttc: number;
  order_index: number;
}

export interface Document {
  id: string;
  user_id: string;
  client_id: string;
  client?: Client;
  type: DocumentType;
  number: string;
  status: QuoteStatus | InvoiceStatus;
  issue_date: string;
  due_date?: string;
  validity_date?: string;
  total_ht: number;
  total_vat: number;
  total_ttc: number;
  notes?: string;
  legal_mentions?: string;
  pdf_url?: string;
  line_items?: LineItem[];
  created_at: string;
  updated_at: string;
}

export interface DashboardStats {
  monthly_revenue: number;
  pending_quotes: number;
  pending_invoices: number;
  unpaid_invoices: number;
  total_quotes: number;
  total_invoices: number;
}

// Types pour les formulaires
export interface CreateClientForm {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  notes?: string;
}

export interface CreateDocumentForm {
  client_id: string;
  type: DocumentType;
  issue_date: string;
  due_date?: string;
  validity_date?: string;
  notes?: string;
  line_items: Omit<LineItem, 'id' | 'document_id'>[];
}

export interface OnboardingForm {
  company_name: string;
  siret: string;
  address: string;
  city: string;
  postal_code: string;
  phone: string;
  is_vat_subject: boolean;
  default_vat_rate: number;
  legal_mentions?: string;
}
