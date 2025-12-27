// Service d'envoi d'emails

export interface EmailAttachment {
  filename: string;
  content: string; // Base64
  content_type: string;
}

export interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
  attachments?: EmailAttachment[];
  from_name?: string;
}

export const emailService = {
  async send(params: SendEmailParams): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true };
    } catch (error) {
      console.error('Erreur envoi email:', error);
      return { success: false, error: 'Erreur de connexion' };
    }
  },

  // Génère le HTML du mail à partir du template et des variables
  generateEmailHTML(template: string, variables: Record<string, string>): string {
    let html = template;
    Object.entries(variables).forEach(([key, value]) => {
      html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
    });
    return html;
  },

  // Templates par défaut
  getDefaultQuoteTemplate(): { subject: string; body: string } {
    return {
      subject: 'Devis {{document_number}} - {{company_name}}',
      body: `Bonjour {{client_name}},

Veuillez trouver ci-joint notre devis {{document_number}} d'un montant de {{amount}} TTC.

Ce devis est valable jusqu'au {{validity_date}}.

N'hésitez pas à nous contacter si vous avez des questions.

Cordialement,
{{company_name}}
{{company_phone}}`,
    };
  },

  getDefaultInvoiceTemplate(): { subject: string; body: string } {
    return {
      subject: 'Facture {{document_number}} - {{company_name}}',
      body: `Bonjour {{client_name}},

Veuillez trouver ci-joint notre facture {{document_number}} d'un montant de {{amount}} TTC.

Cette facture est à régler avant le {{due_date}}.

N'hésitez pas à nous contacter si vous avez des questions.

Cordialement,
{{company_name}}
{{company_phone}}`,
    };
  },
};
