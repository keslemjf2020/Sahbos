import Link from "next/link";
import { ArrowRight, Clock, Zap, Brain, Cog, TrendingUp, Star, Sparkles } from "lucide-react";

const allPosts = [
  { title: "Automatize o Suporte Técnico de TI com IA", date: "16/05/2026", slug: "automacao-suporte-tecnico-ti-ia", desc: "Chatbots e IA para resolver chamados de TI automaticamente.", cat: "Automação", icon: Cog, read: "5 min" },
  { title: "IA na Gestão de Projetos: Ferramentas Essenciais", date: "16/05/2026", slug: "ia-gestao-projetos-ferramentas", desc: "As melhores ferramentas de IA para gerenciar projetos com eficiência.", cat: "Ferramentas", icon: Brain, read: "5 min" },
  { title: "IA no Agronegócio: Automação para o Campo", date: "16/05/2026", slug: "ia-agricultura-agronegocio", desc: "Como IA e automação estão transformando o agronegócio brasileiro.", cat: "Negócios", icon: TrendingUp, read: "5 min" },
  { title: "Guia Completo de IA para Pequenos Negócios em 2026", date: "16/05/2026", slug: "ia-pequenos-negocios-guia-completo", desc: "Tudo que o pequeno empresário precisa saber sobre IA em 2026.", cat: "Negócios", icon: Star, featured: true, read: "8 min" },
  { title: "ChatGPT vs DeepSeek vs Claude: Qual a Melhor IA", date: "16/05/2026", slug: "chatgpt-vs-deepseek-vs-claude", desc: "Comparativo completo das 3 principais IAs do mercado em 2026.", cat: "Ferramentas", icon: Sparkles, read: "7 min" },
  { title: "IA para Advogados: Automatize Documentos Jurídicos", date: "16/05/2026", slug: "ia-para-advogados-automacao-juridica", desc: "Como escritórios de advocacia estão usando IA para documentos.", cat: "Negócios", icon: Zap, read: "6 min" },
  { title: "IA para Professores: Ferramentas que Transformam o Ensino", date: "16/05/2026", slug: "ia-para-professores-ensino", desc: "Ferramentas de IA que todo professor deveria conhecer.", cat: "IA", icon: Brain, read: "6 min" },
  { title: "IA para Corretores de Imóveis: Venda Mais Rápido", date: "16/05/2026", slug: "ia-para-corretores-imoveis", desc: "Como corretores estão usando IA para captar e converter leads.", cat: "Negócios", icon: TrendingUp, read: "5 min" },
];
const posts = allPosts.slice(0, 9);

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 relative">
          <div className="animate-fade-in max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-cyan-400 mb-8">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span></span>
              +3 artigos publicados hoje
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Domine a{" "}
              <span className="gradient-text">Inteligência Artificial</span>
              <br />e automatize seu negócio
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Tutoriais práticos, comparativos honestos e guias passo a passo sobre IA e automação.
              Sem hype. Sem curso caro. Apenas o que funciona.
            </p>
            <div className="flex gap-3">
              <Link href="#articles" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20">
                Explorar Artigos <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#newsletter" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-slate-300 text-sm font-semibold hover:border-cyan-500/30 transition-all">Newsletter</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ v: "22", l: "Artigos" }, { v: "42", l: "Agentes IA" }, { v: "4", l: "Categorias" }, { v: "Grátis", l: "Sempre" }].map(s => (
            <div key={s.l} className="animate-fade-in"><div className="text-3xl font-bold gradient-text">{s.v}</div><div className="text-sm text-slate-500 mt-1">{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">Artigos Recentes</h2>
            <p className="text-slate-500 text-sm">Conteúdo de qualidade pra você aplicar hoje</p>
          </div>
        </div>

        {/* Featured */}
        {posts.filter(p => p.featured).map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover block mb-6 p-6 rounded-2xl glass border border-cyan-500/10 bg-gradient-to-r from-cyan-500/[0.02] to-transparent">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0"><p.icon className="w-5 h-5 text-cyan-400" /></div>
              <div>
                <div className="flex items-center gap-3 mb-2"><span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider">{p.cat}</span><span className="text-[10px] text-slate-600 uppercase tracking-wider">Destaque</span></div>
                <h3 className="text-xl font-bold mb-2 text-white">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{p.desc}</p>
                <div className="flex items-center gap-4 text-[11px] text-slate-600"><span>{p.date}</span><span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.read}</span><span className="text-cyan-400 font-medium inline-flex items-center gap-1">Ler artigo <ArrowRight className="w-3 h-3" /></span></div>
              </div>
            </div>
          </Link>
        ))}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.filter(p => !p.featured).map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group p-5 rounded-2xl glass" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center mb-3"><p.icon className="w-4 h-4 text-cyan-400" /></div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-slate-500 font-medium uppercase tracking-wider">{p.cat}</span>
              <h3 className="font-semibold mt-2 mb-1.5 text-sm leading-snug text-white group-hover:text-cyan-400 transition-colors">{p.title}</h3>
              <p className="text-slate-500 text-xs mb-3 line-clamp-2">{p.desc}</p>
              <div className="flex items-center gap-3 text-[10px] text-slate-600"><span>{p.date}</span><span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.read}</span></div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">📬</div>
          <h2 className="text-2xl font-bold mb-2">Fique por dentro</h2>
          <p className="text-slate-500 mb-6">Receba os melhores artigos de IA e automação toda semana. Sem spam.</p>
          <form className="flex max-w-sm mx-auto"><input type="email" placeholder="seu@email.com" className="flex-1 px-4 py-3 rounded-l-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30" /><button className="px-5 py-3 rounded-r-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition">Inscrever</button></form>
        </div>
      </section>
    </div>
  );
}
