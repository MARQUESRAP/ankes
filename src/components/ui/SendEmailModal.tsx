'use client';

import { useState, useEffect } from 'react';
import { X, Send, Loader2, Mail, Paperclip } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { emailService } from '@/services/email';
import { formatCurrency, formatDate } from '@/lib/utils';

interface SendEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  documentType: 'quote' | 'invoice';
  documentNumber: string;
  clientName: string;
  clientEmail: string;
  amount: string;
  validityDate?: string;
  dueDate?: string;
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  displayName?: string;
  templateSubject: string;
  templateBody: string;
  pdfBlob: Blob | null;
}

// Convertit le texte pur en HTML compact
function textToHtml(text: string): string {
  // Remplacer les doubles sauts de ligne par un <br>, et les simples par rien (même paragraphe)
  const paragraphs = text.split(/\n\n+/);
  return paragraphs
    .map(p => {
      // Mettre en gras les éléments importants (numéro doc, montant, date)
      let html = p.replace(/\n/g, '<br>');
      // Mettre en gras les patterns comme DEV-XXX, FAC-XXX, les montants, et les dates
      html = html.replace(/(DEV-\d+|FAC-\d+)/g, '<strong>$1</strong>');
      html = html.replace(/(\d[\d\s]*,\d{2}\s*€\s*TTC)/g, '<strong>$1</strong>');
      html = html.replace(/(\d{2}\/\d{2}\/\d{4})/g, '<strong>$1</strong>');
      return `<p style="margin: 0 0 8px 0;">${html}</p>`;
    })
    .join('');
}

export default function SendEmailModal({
  isOpen,
  onClose,
  onSuccess,
  documentType,
  documentNumber,
  clientName,
  clientEmail,
  amount,
  validityDate,
  dueDate,
  companyName,
  companyEmail,
  companyPhone,
  displayName,
  templateSubject,
  templateBody,
  pdfBlob,
}: SendEmailModalProps) {
  const [isSending, setIsSending] = useState(false);
  const [to, setTo] = useState(clientEmail);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  // Variables pour le template
  const variables: Record<string, string> = {
    client_name: clientName,
    document_number: documentNumber,
    amount: amount,
    company_name: companyName,
    company_email: companyEmail,
    company_phone: companyPhone,
    validity_date: validityDate ? formatDate(validityDate) : '',
    due_date: dueDate ? formatDate(dueDate) : '',
  };

  useEffect(() => {
    if (isOpen) {
      setTo(clientEmail);
      setSubject(emailService.generateEmailHTML(templateSubject, variables));
      setBody(emailService.generateEmailHTML(templateBody, variables));
    }
  }, [isOpen, clientEmail, templateSubject, templateBody]);

  const handleSend = async () => {
    if (!to) {
      alert('Veuillez saisir une adresse email');
      return;
    }

    if (!pdfBlob) {
      alert('Erreur: PDF non généré');
      return;
    }

    setIsSending(true);
    try {
      // Convertir le blob en base64
      const buffer = await pdfBlob.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');

      // Convertir le texte en HTML pour l'email
      const htmlBody = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">${textToHtml(body)}</div>`;

      const result = await emailService.send({
        to,
        subject,
        html: htmlBody,
        from_name: companyName,
        attachments: [
          {
            filename: `${documentNumber}.pdf`,
            content: base64,
            content_type: 'application/pdf',
          },
        ],
      });

      if (result.success) {
        onSuccess();
        onClose();
      } else {
        alert(`Erreur: ${result.error}`);
      }
    } catch (error) {
      console.error('Erreur envoi:', error);
      alert('Erreur lors de l\'envoi');
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  const docLabel = documentType === 'quote' ? 'devis' : 'facture';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl animate-scaleIn max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Envoyer le {docLabel}</h2>
              <p className="text-sm text-gray-500">{documentNumber} • {clientName}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto flex-1">
          <Input
            label="Destinataire"
            type="email"
            placeholder="email@exemple.com"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            icon={<Mail className="w-5 h-5" />}
          />

          <Input
            label="Sujet"
            placeholder="Sujet de l'email"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 resize-none"
              rows={10}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          {/* Pièce jointe */}
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
            <Paperclip className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">{documentNumber}.pdf</span>
            <span className="text-xs text-gray-400">({pdfBlob ? Math.round(pdfBlob.size / 1024) : 0} Ko)</span>
          </div>
        </div>

        <div className="flex gap-3 p-6 border-t border-gray-100">
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            Annuler
          </Button>
          <Button 
            className="flex-1" 
            onClick={handleSend} 
            isLoading={isSending}
            icon={<Send className="w-5 h-5" />}
          >
            Envoyer
          </Button>
        </div>
      </div>
    </div>
  );
}
