// Formatage des montants en euros
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

// Formatage des montants pour PDF (évite les caractères spéciaux)
export function formatCurrencyPDF(amount: number): string {
  // Formater le nombre avec séparateur de milliers
  const parts = amount.toFixed(2).split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const decimalPart = parts[1];
  return `${integerPart},${decimalPart} €`;
}

// Formatage des dates
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(d);
}

// Formatage date pour input
export function formatDateForInput(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

// Calcul du total HT d'une ligne
export function calculateLineTotal(quantity: number, unitPrice: number): number {
  return Math.round(quantity * unitPrice * 100) / 100;
}

// Calcul de la TVA
export function calculateVAT(amountHT: number, vatRate: number): number {
  return Math.round(amountHT * (vatRate / 100) * 100) / 100;
}

// Calcul du TTC
export function calculateTTC(amountHT: number, vatRate: number): number {
  return Math.round(amountHT * (1 + vatRate / 100) * 100) / 100;
}

// Génération du numéro de document
export function generateDocumentNumber(type: 'quote' | 'invoice', count: number): string {
  const prefix = type === 'quote' ? 'DEV' : 'FAC';
  const number = String(count + 1).padStart(3, '0');
  return `${prefix}-${number}`;
}

// Couleurs des statuts
export function getStatusColor(status: string): { bg: string; text: string; dot: string } {
  const colors: Record<string, { bg: string; text: string; dot: string }> = {
    draft: { bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-400' },
    sent: { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-400' },
    accepted: { bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-400' },
    refused: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-400' },
    paid: { bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-400' },
    unpaid: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-400' },
  };
  return colors[status] || colors.draft;
}

// Labels des statuts en français
export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    draft: 'Brouillon',
    sent: 'Envoyé',
    accepted: 'Accepté',
    refused: 'Refusé',
    paid: 'Payé',
    unpaid: 'Impayé',
  };
  return labels[status] || status;
}

// Validation SIRET (14 chiffres)
export function isValidSIRET(siret: string): boolean {
  const cleaned = siret.replace(/\s/g, '');
  return /^\d{14}$/.test(cleaned);
}

// Formatage SIRET (XXX XXX XXX XXXXX)
export function formatSIRET(siret: string): string {
  const cleaned = siret.replace(/\s/g, '');
  if (cleaned.length !== 14) return siret;
  return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
}

// Génération d'un ID unique
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}
