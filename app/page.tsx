import Link from "next/link";
import { Cog, Zap, ArrowRight } from "lucide-react";

const posts = [
  { title: "Como Usar IA para Criar Posts de Blog Automaticamente", date: "15/05/2026", slug: "ia-criar-posts-blog-automatico", desc: "Aprenda como a IA pode escrever, revisar e publicar posts de blog sozinha.", icon: Zap },
  { title: "7 Ferramentas de IA Que Blogueiros Precisam Usar em 2026", date: "15/05/2026", slug: "ferramentas-ia-blogueiros-2026", desc: "Jasper, Copy.ai, Writesonic, SurferSEO e mais.", icon: Zap },
  { title: "A Única Oportunidade de Automação com IA Que Vale Seu Tempo em 2026", date: "15/05/2026", slug: "automacao-ia-oportunidade-2026", desc: "Enquanto todo mundo corre atrás de IA genérica, a oportunidade real está em nichos específicos.", icon: Zap },
  { title: "Como Automatizar seu Workflow com Make em 2026", date: "15/05/2026", slug: "guia-make-2026", desc: "Guia completo com exemplos práticos e dicas de IA.", icon: Zap },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <header className="border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center gap-3">
          <Cog className="w-8 h-8 text-cyan-400" />
          <h1 className="text-2xl font-bold">Automação IA</h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Automatize seu Trabalho com IA</h2>
        <p className="text-lg text-slate-300 mb-8">Guias práticos para criar workflows automáticos.</p>
        <h3 className="text-xl font-semibold mb-6 text-cyan-400">Últimos Posts</h3>
        <div className="grid gap-6">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="block p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <p.icon className="w-6 h-6 text-cyan-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold hover:text-cyan-400">{p.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-cyan-400"><span>{p.date}</span><ArrowRight className="w-4 h-4" /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
