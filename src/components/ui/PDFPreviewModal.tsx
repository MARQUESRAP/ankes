'use client';

import { useState, useEffect } from 'react';
import { X, Download, Loader2 } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { Button } from '@/components/ui';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: React.ReactElement<any>;
  fileName: string;
}

export default function PDFPreviewModal({ isOpen, onClose, document, fileName }: PDFPreviewModalProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      generatePDF();
    } else {
      // Cleanup URL when modal closes
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
        setPdfUrl(null);
      }
    }
  }, [isOpen]);

  const generatePDF = async () => {
    setIsLoading(true);
    try {
      const blob = await pdf(document).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Erreur génération PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!pdfUrl) return;
    const a = window.document.createElement('a');
    a.href = pdfUrl;
    a.download = `${fileName}.pdf`;
    a.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Prévisualisation</h2>
            <p className="text-sm text-gray-500">{fileName}.pdf</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={handleDownload}
              disabled={isLoading}
              icon={<Download className="w-4 h-4" />}
            >
              Télécharger
            </Button>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-gray-100 overflow-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Loader2 className="w-10 h-10 animate-spin text-blue-500 mx-auto mb-4" />
                <p className="text-gray-600">Génération du PDF...</p>
              </div>
            </div>
          ) : pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title="Prévisualisation PDF"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Impossible de générer la prévisualisation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
