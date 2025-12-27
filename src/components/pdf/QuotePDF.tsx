import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { formatCurrencyPDF, formatDate } from '@/lib/utils';

// Styles pour le PDF
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
    color: '#2563eb',
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
    backgroundColor: '#1f2937',
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
    backgroundColor: '#f8fafc',
    borderRadius: 8,
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
    borderTopColor: '#2563eb',
  },
  totalTTCLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#1f2937',
  },
  totalTTCValue: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#2563eb',
  },
  notesSection: {
    marginBottom: 30,
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
    fontSize: 8,
    color: '#9ca3af',
    lineHeight: 1.5,
    textAlign: 'center',
  },
  validityBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#eff6ff',
    borderRadius: 6,
    alignItems: 'center',
  },
  validityText: {
    fontSize: 9,
    color: '#1d4ed8',
    fontFamily: 'Helvetica-Bold',
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
});

interface QuotePDFProps {
  quote: {
    number: string;
    issue_date: string;
    validity_date?: string;
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
}

export default function QuotePDF({ quote, company, client, lineItems, legalMentions }: QuotePDFProps) {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'accepted':
        return { backgroundColor: '#dcfce7', color: '#166534' };
      case 'refused':
        return { backgroundColor: '#fee2e2', color: '#991b1b' };
      case 'sent':
        return { backgroundColor: '#fef3c7', color: '#92400e' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#4b5563' };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'accepted': return 'Accepté';
      case 'refused': return 'Refusé';
      case 'sent': return 'Envoyé';
      default: return 'Brouillon';
    }
  };

  const statusStyle = getStatusStyle(quote.status);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
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
            <Text style={styles.documentTitle}>DEVIS</Text>
            <Text style={styles.documentNumber}>{quote.number}</Text>
            <Text style={styles.documentDate}>Date: {formatDate(quote.issue_date)}</Text>
            {quote.validity_date && (
              <Text style={styles.documentDate}>Valide jusqu'au: {formatDate(quote.validity_date)}</Text>
            )}
          </View>
        </View>

        {/* Client */}
        <View style={styles.clientSection}>
          <Text style={styles.sectionLabel}>Client</Text>
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
              <Text style={styles.totalValue}>{formatCurrencyPDF(quote.total_ht)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TVA</Text>
              <Text style={styles.totalValue}>{formatCurrencyPDF(quote.total_vat)}</Text>
            </View>
            <View style={styles.totalTTCRow}>
              <Text style={styles.totalTTCLabel}>Total TTC</Text>
              <Text style={styles.totalTTCValue}>{formatCurrencyPDF(quote.total_ttc)}</Text>
            </View>
          </View>
        </View>

        {/* Notes */}
        {quote.notes && (
          <View style={styles.notesSection}>
            <Text style={styles.notesTitle}>Notes</Text>
            <Text style={styles.notesText}>{quote.notes}</Text>
          </View>
        )}

        {/* Validity */}
        {quote.validity_date && (
          <View style={styles.validityBox}>
            <Text style={styles.validityText}>
              Ce devis est valable jusqu'au {formatDate(quote.validity_date)}
            </Text>
          </View>
        )}

        {/* Legal mentions */}
        <View style={styles.legalSection}>
          <Text style={styles.legalText}>
            {legalMentions || 
              `Conditions de règlement : à réception de facture\n` +
              `En cas d'acceptation, ce devis doit être retourné signé avec la mention "Bon pour accord"`
            }
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          {company.name} - Document généré le {formatDate(new Date().toISOString())}
        </Text>
      </Page>
    </Document>
  );
}
