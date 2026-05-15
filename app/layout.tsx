import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automação IA - Guias e Tutoriais",
  description: "Aprenda a automatizar seu workflow com IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-slate-900 text-white">{children}</body>
    </html>
  );
}
