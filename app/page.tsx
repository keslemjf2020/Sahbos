import Link from "next/link";
import { Zap, Brain, Cog, TrendingUp, ArrowRight, Mail, Star, BookOpen } from "lucide-react";

const posts = [
  { title: "Como Usar IA para Criar Posts de Blog Automaticamente", date: "15/05/2026", slug: "ia-criar-posts-blog-automatico", desc: "Aprenda como IA escreve, revisa e publica posts sozinha — do briefing ao deploy.", cat: "Automação", icon: Brain, featured: true },
  { title: "7 Ferramentas de IA Que Blogueiros Precisam Usar em 2026", date: "15/05/2026", slug: "ferramentas-ia-blogueiros-2026", desc: "Jasper, Copy.ai, Writesonic, SurferSEO — as 7 ferramentas que estão mudando o jogo.", cat: "Ferramentas", icon: Star },
  { title: "A Única Oportunidade de Automação com IA Que Vale Seu Tempo em 2026", date: "15/05/2026", slug: "automacao-ia-oportunidade-2026", desc: "Enquanto todo mundo corre atrás de IA genérica, o dinheiro está nos nichos.", cat: "Negócios", icon: TrendingUp },
  { title: "Como Automatizar seu Workflow com Make em 2026", date: "15/05/2026", slug: "guia-make-2026", desc: "Guia passo a passo para criar automações poderosas com Make (Integromat).", cat: "Automação", icon: Cog },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/50 via-slate-950 to-blue-950/30" />
        <div className="max-w-6xl mx-auto px-4 py-24 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs mb-6">
              <Zap className="w-3 h-3" /> NOVO: Posts gerados por IA toda semana
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Aprenda a Usar{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IA e Automação</span>{" "}
              Para Escalar Seu Negócio
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Guias práticos, tutoriais detalhados e reviews honestas das melhores ferramentas de IA e automação. 
              Sem hype. Sem curso caro. Só o que funciona.
            </p>
            <div className="flex gap-4">
              <Link href="#posts" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition">
                Ver Artigos <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#newsletter" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-lg font-semibold hover:border-cyan-400 transition text-slate-200">
                <Mail className="w-4 h-4" /> Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-4 gap-8 text-center">
          {[{ n: "4+", l: "Artigos" }, { n: "19", l: "Agentes IA" }, { n: "3", l: "Nichos" }, { n: "Grátis", l: "Pra Sempre" }].map(s => (
            <div key={s.l}><div className="text-3xl font-bold text-cyan-400">{s.n}</div><div className="text-sm text-slate-400">{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* POSTS */}
      <section id="posts" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Últimos Artigos</h2>
            <p className="text-slate-400 mt-1">Conteúdo prático pra você aplicar hoje</p>
          </div>
          <div className="flex gap-2">{["Todos","Automação","Ferramentas","Negócios"].map(c => <button key={c} className="px-3 py-1 rounded-full text-xs border border-slate-700 hover:border-cyan-400 transition">{c}</button>)}</div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className={`group p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all bg-slate-900/50 ${p.featured ? 'md:col-span-2 bg-gradient-to-r from-slate-900 to-cyan-950/30' : ''}`}>
              <div className={`${p.featured ? 'flex gap-8' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{p.cat}</span>
                    {p.featured && <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Destaque</span>}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm mb-3">{p.desc}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{p.date}</span>
                    <span>•</span>
                    <span>5 min de leitura</span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 ml-auto">Ler <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section id="ferramentas" className="border-t border-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Ferramentas Que Recomendamos</h2>
          <p className="text-slate-400 mb-8">Testadas e aprovadas pelo nosso time de agentes</p>
          <div className="grid grid-cols-3 gap-4">
            {[{ name: "Make", desc: "Automação visual poderosa", cta: "Teste Grátis", url: "https://www.make.com/en/register?pc=kesley" }, { name: "DeepSeek V4", desc: "IA para raciocínio e código", cta: "Comece Grátis", url: "https://platform.deepseek.com" }, { name: "OpenAI", desc: "GPT-4o, DALL-E, Whisper", cta: "Explorar", url: "https://platform.openai.com" }].map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="nofollow" className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/30 transition-all">
                <h4 className="font-bold mb-1">{t.name}</h4>
                <p className="text-slate-400 text-sm mb-3">{t.desc}</p>
                <span className="text-cyan-400 text-sm font-semibold">{t.cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="border-t border-slate-800 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Fique por Dentro</h2>
          <p className="text-slate-400 mb-6">Receba os melhores artigos de IA e automação direto no seu email. Toda semana.</p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="seu@email.com" className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400" />
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition">Inscrever</button>
          </form>
          <p className="text-xs text-slate-500 mt-3">Sem spam. Cancele quando quiser.</p>
        </div>
      </section>

      {/* ADSENSE */}
      <section className="border-t border-slate-800 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-24 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-500 text-sm">
            [ Espaço Publicitário — Google AdSense ]
          </div>
        </div>
      </section>
    </div>
  );
}
