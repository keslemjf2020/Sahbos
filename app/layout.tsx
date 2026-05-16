import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automação IA — O Blog de Tecnologia e Negócios",
  description: "Aprenda a usar IA e automação para escalar seu negócio. Guias práticos, tutoriais e reviews das melhores ferramentas.",
  keywords: "automação, IA, inteligência artificial, Make, produtividade, negócios, tecnologia",
  openGraph: { title: "Automação IA", description: "Guias práticos de IA e automação para negócios", type: "website" },
};

const cats = ["Automação", "Ferramentas", "Negócios", "IA"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-[#0a0a0f] text-slate-200 font-sans">
        <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">IA</span>
              <span className="gradient-text">Automação IA</span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {cats.map(c => (
                <Link key={c} href={`/categoria/${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`} className="px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all">{c}</Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="pt-14">{children}</div>
        <footer className="border-t border-white/[0.04] mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Automação IA</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Guias práticos de IA e automação para escalar seu negócio.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Navegar</h4>
              <div className="space-y-1.5 text-xs text-slate-500">{cats.map(c => <Link key={c} href={`/categoria/${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`} className="block hover:text-cyan-400 transition">{c}</Link>)}</div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Ferramentas</h4>
              <div className="space-y-1.5 text-xs text-slate-500">
                <a href="https://www.make.com/en/register?pc=kesley" target="_blank" rel="nofollow" className="block hover:text-cyan-400 transition">Make</a>
                <span className="block">DeepSeek V4</span>
                <span className="block">OpenAI GPT-4o</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Newsletter</h4>
              <p className="text-slate-500 text-xs mb-3">Receba os melhores artigos toda semana.</p>
              <form className="flex"><input type="email" placeholder="seu@email.com" className="flex-1 px-3 py-2 rounded-l-lg bg-white/[0.04] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50" /><button className="px-3 py-2 rounded-r-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90">Inscrever</button></form>
            </div>
          </div>
          <div className="border-t border-white/[0.04] py-4 text-center text-[10px] text-slate-600">© 2026 Automação IA · Alguns links são de afiliados</div>
        </footer>
      </body>
    </html>
  );
}
