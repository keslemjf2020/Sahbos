import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automação IA — O Blog de Tecnologia e Negócios",
  description: "Aprenda a usar IA e automação para escalar seu negócio. Guias práticos, tutoriais e reviews das melhores ferramentas.",
  keywords: "automação, IA, inteligência artificial, Make, Zapier, produtividade, negócios",
  openGraph: { title: "Automação IA", description: "Guias práticos de IA e automação para negócios", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-slate-950 text-white font-sans">
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-cyan-400">
              <span className="text-2xl">⚡</span> Automação IA
            </Link>
            <div className="flex gap-6 text-sm text-slate-300">
              <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
              <a href="#posts" className="hover:text-cyan-400 transition">Artigos</a>
              <a href="#ferramentas" className="hover:text-cyan-400 transition">Ferramentas</a>
              <a href="#newsletter" className="hover:text-cyan-400 transition">Newsletter</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-slate-800 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-cyan-400 mb-3">⚡ Automação IA</h4>
              <p className="text-slate-400 text-sm">O blog que te ensina a usar IA e automação para escalar seu negócio e ganhar tempo.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Categorias</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>Ferramentas de IA</li>
                <li>Automação de Processos</li>
                <li>Produtividade</li>
                <li>Negócios</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Ferramentas</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li><a href="https://www.make.com/en/register?pc=kesley" target="_blank" rel="nofollow" className="hover:text-cyan-400">Make (Automação)</a></li>
                <li>DeepSeek V4</li>
                <li>OpenAI GPT-4o</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            © 2026 Automação IA. Todos os direitos reservados. | Alguns links são de afiliados.
          </div>
        </footer>
      </body>
    </html>
  );
}
