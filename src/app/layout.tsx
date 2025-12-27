import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankès - Devis & Factures pour Artisans",
  description: "Créez vos devis et factures en quelques clics. Simple, rapide, professionnel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
