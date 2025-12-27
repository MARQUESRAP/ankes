import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { formatCurrencyPDF, formatDate } from '@/lib/utils';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#1f2937',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  companyInfo: {
    maxWidth: '50%',
  },
  companyName: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#059669',
    marginBottom: 8,
  },
  companyDetails: {
    fontSize: 9,
    color: '#6b7280',
    lineHeight: 1.5,
  },
  documentInfo: {
    textAlign: 'right',
  },
  documentTitle: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  documentNumber: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  documentDate: {
    fontSize: 9,
    color: '#6b7280',
  },
  statusBadge: {
    marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-end',
  },
  statusText: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  dueDate: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#fef2f2',
    borderRadius: 6,
  },
  dueDateText: {
    fontSize: 9,
    color: '#dc2626',
    fontFamily: 'Helvetica-Bold',
    textAlign: 'right',
  },
  clientSection: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  sectionLabel: {
    fontSize: 8,
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  clientName: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  clientDetails: {
    fontSize: 10,
    color: '#6b7280',
    lineHeight: 1.5,
  },
  table: {
    marginBottom: 30,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#059669',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  tableHeaderText: {
    color: '#ffffff',
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tableRowAlt: {
    backgroundColor: '#f9fafb',
  },
  colDescription: {
    flex: 4,
  },
  colQuantity: {
    flex: 1,
    textAlign: 'center',
  },
  colPrice: {
    flex: 1.5,
    textAlign: 'right',
  },
  colVat: {
    flex: 1,
    textAlign: 'center',
  },
  colTotal: {
    flex: 1.5,
    textAlign: 'right',
  },
  totalsSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  totalsBox: {
    width: 250,
    padding: 20,
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#059669',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 10,
    color: '#6b7280',
  },
  totalValue: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  totalTTCRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    marginTop: 8,
    borderTopWidth: 2,
    borderTopColor: '#059669',
  },
  totalTTCLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#1f2937',
  },
  totalTTCValue: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#059669',
  },
  paymentSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  paymentTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1e40af',
    marginBottom: 8,
  },
  paymentText: {
    fontSize: 9,
    color: '#1e3a8a',
    lineHeight: 1.5,
  },
  notesSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  notesTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#92400e',
    marginBottom: 4,
  },
  notesText: {
    fontSize: 9,
    color: '#78350f',
    lineHeight: 1.5,
  },
  legalSection: {
    marginTop: 'auto',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  legalText: {
    fontSize: 7,
    color: '#9ca3af',
    lineHeight: 1.6,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#9ca3af',
  },
  paidStamp: {
    position: 'absolute',
    top: 200,
    right: 50,
    transform: 'rotate(-15deg)',
    padding: 15,
    borderWidth: 4,
    borderColor: '#16a34a',
    borderRadius: 8,
  },
  paidStampText: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: '#16a34a',
    textTransform: 'uppercase',
  },
});

interface InvoicePDFProps {
  invoice: {
    number: string;
    issue_date: string;
    due_date?: string;
    status: string;
    notes?: string;
    total_ht: number;
    total_vat: number;
    total_ttc: number;
  };
  company: {
    name: string;
    siret?: string;
    address?: string;
    city?: string;
    postal_code?: string;
    phone?: string;
    email?: string;
  };
  client: {
    name: string;
    address?: string;
    city?: string;
    postal_code?: string;
    email?: string;
    phone?: string;
  };
  lineItems: {
    description: string;
    quantity: number;
    unit_price: number;
    vat_rate: number;
    total_ht: number;
  }[];
  legalMentions?: string;
  bankDetails?: {
    iban?: string;
    bic?: string;
  };
}

export default function InvoicePDF({ invoice, company, client, lineItems, legalMentions, bankDetails }: InvoicePDFProps) {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'paid':
        return { backgroundColor: '#dcfce7', color: '#166534' };
      case 'unpaid':
        return { backgroundColor: '#fee2e2', color: '#991b1b' };
      case 'sent':
        return { backgroundColor: '#fef3c7', color: '#92400e' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#4b5563' };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'paid': return 'Payée';
      case 'unpaid': return 'Impayée';
      case 'sent': return 'Envoyée';
      default: return 'Brouillon';
    }
  };

  const statusStyle = getStatusStyle(invoice.status);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Paid stamp overlay */}
        {invoice.status === 'paid' && (
          <View style={styles.paidStamp}>
            <Text style={styles.paidStampText}>Payée</Text>
          </View>
        )}

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{company.name}</Text>
            <Text style={styles.companyDetails}>
              {company.address && `${company.address}\n`}
              {company.postal_code && company.city && `${company.postal_code} ${company.city}\n`}
              {company.phone && `Tél: ${company.phone}\n`}
              {company.email && `${company.email}\n`}
              {company.siret && `SIRET: ${company.siret}`}
            </Text>
          </View>
          <View style={styles.documentInfo}>
            <Text style={styles.documentTitle}>FACTURE</Text>
            <Text style={styles.documentNumber}>{invoice.number}</Text>
            <Text style={styles.documentDate}>Date: {formatDate(invoice.issue_date)}</Text>
            {invoice.due_date && (
              <View style={styles.dueDate}>
                <Text style={styles.dueDateText}>
                  Échéance: {formatDate(invoice.due_date)}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Client */}
        <View style={styles.clientSection}>
          <Text style={styles.sectionLabel}>Facturé à</Text>
          <Text style={styles.clientName}>{client.name}</Text>
          <Text style={styles.clientDetails}>
            {client.address && `${client.address}\n`}
            {client.postal_code && client.city && `${client.postal_code} ${client.city}\n`}
            {client.email && `${client.email}\n`}
            {client.phone && `Tél: ${client.phone}`}
          </Text>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.colDescription]}>Description</Text>
            <Text style={[styles.tableHeaderText, styles.colQuantity]}>Qté</Text>
            <Text style={[styles.tableHeaderText, styles.colPrice]}>Prix unit. HT</Text>
            <Text style={[styles.tableHeaderText, styles.colVat]}>TVA</Text>
            <Text style={[styles.tableHeaderText, styles.colTotal]}>Total HT</Text>
          </View>
          {lineItems.map((item, index) => (
            <View key={index} style={[styles.tableRow, index % 2 === 1 ? styles.tableRowAlt : {}]}>
              <Text style={styles.colDescription}>{item.description}</Text>
              <Text style={styles.colQuantity}>{item.quantity}</Text>
              <Text style={styles.colPrice}>{formatCurrencyPDF(item.unit_price)}</Text>
              <Text style={styles.colVat}>{item.vat_rate}%</Text>
              <Text style={styles.colTotal}>{formatCurrencyPDF(item.total_ht)}</Text>
            </View>
          ))}
        </View>

        {/* Totals */}
        <View style={styles.totalsSection}>
          <View style={styles.totalsBox}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total HT</Text>
              <Text style={styles.totalValue}>{formatCurrencyPDF(invoice.total_ht)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TVA</Text>
              <Text style={styles.totalValue}>{formatCurrencyPDF(invoice.total_vat)}</Text>
            </View>
            <View style={styles.totalTTCRow}>
              <Text style={styles.totalTTCLabel}>Total TTC</Text>
              <Text style={styles.totalTTCValue}>{formatCurrencyPDF(invoice.total_ttc)}</Text>
            </View>
          </View>
        </View>

        {/* Payment info */}
        {bankDetails && (bankDetails.iban || bankDetails.bic) && (
          <View style={styles.paymentSection}>
            <Text style={styles.paymentTitle}>Coordonnées bancaires</Text>
            <Text style={styles.paymentText}>
              {bankDetails.iban && `IBAN: ${bankDetails.iban}\n`}
              {bankDetails.bic && `BIC: ${bankDetails.bic}`}
            </Text>
          </View>
        )}

        {/* Notes */}
        {invoice.notes && (
          <View style={styles.notesSection}>
            <Text style={styles.notesTitle}>Notes</Text>
            <Text style={styles.notesText}>{invoice.notes}</Text>
          </View>
        )}

        {/* Legal mentions */}
        <View style={styles.legalSection}>
          <Text style={styles.legalText}>
            {legalMentions || 
              `Conditions de règlement : paiement à 30 jours\n` +
              `En cas de retard de paiement, une pénalité égale à 3 fois le taux d'intérêt légal sera exigible (article L.441-6 du Code de Commerce).\n` +
              `Une indemnité forfaitaire de 40€ pour frais de recouvrement sera également due (article D.441-5 du Code de Commerce).`
            }
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          {company.name} - SIRET: {company.siret} - Document généré le {formatDate(new Date().toISOString())}
        </Text>
      </Page>
    </Document>
  );
}
