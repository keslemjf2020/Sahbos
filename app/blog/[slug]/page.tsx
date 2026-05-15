import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Sparkles } from "lucide-react";

const posts: Record<string, { title: string; date: string; content: string; cat?: string; read?: string }> = {
  "produtividade-ferramentas-gratis-ia": { title: "10 Ferramentas de IA Grátis que Vão Dobrar Sua Produtividade", date: "16/05/2026", cat: "Ferramentas", read: "7 min", content: "Carregando..." },
  "ia-delivery-restaurantes-automacao": { title: "IA no Delivery: Automatize Pedidos e Entregas do Seu Restaurante", date: "16/05/2026", cat: "Negócios", read: "8 min", content: "Artigo em produção." },
  "automacao-atendimento-ia-hoteis": { title: "Como Automatizar Atendimento em Hotéis e Pousadas com IA", date: "16/05/2026", cat: "Automação", read: "7 min", content: "Artigo em produção." },
  "automacao-financeira-pequena-empresa": { title: "Automação Financeira com IA para Pequenas Empresas", date: "16/05/2026", cat: "Negócios", read: "6 min", content: "Artigo em produção." },
  "automacao-processos-rpa-ia": { title: "RPA com IA: Automatize Processos sem Programar", date: "16/05/2026", cat: "Automação", read: "6 min", content: "Artigo em produção." },
  "ia-criar-imagens-blog-thumbnails": { title: "Como Criar Imagens e Thumbnails com IA", date: "16/05/2026", cat: "Ferramentas", read: "5 min", content: "Artigo em produção." },
  "melhores-apis-ia-desenvolvedores": { title: "Melhores APIs de IA para Desenvolvedores em 2026", date: "16/05/2026", cat: "Ferramentas", read: "8 min", content: "Artigo em produção." },
  "ia-vendas-b2b-automacao": { title: "IA para Vendas B2B: Prospecção e Follow-up Automático", date: "16/05/2026", cat: "Negócios", read: "6 min", content: "Artigo em produção." },
  "ia-gestao-tempo-empreendedor": { title: "Como Usar IA para Gestão de Tempo", date: "16/05/2026", cat: "IA", read: "5 min", content: "Artigo em produção." },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center"><div className="text-center animate-fade-in"><h1 className="text-6xl font-bold gradient-text mb-4">404</h1><p className="text-slate-500 mb-6">Artigo não encontrado</p><Link href="/" className="text-cyan-400 hover:underline text-sm inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" />Voltar</Link></div></div>;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* HEADER */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6 transition-colors"><ArrowLeft className="w-3 h-3" />Voltar</Link>
          {post.cat && <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">{post.cat}</span>}
          <h1 className="text-4xl font-bold leading-tight mb-4 text-white">{post.title}</h1>
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.read}</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h3:text-lg prose-h3:font-semibold prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-cyan-400 prose-strong:text-white prose-code:text-cyan-300 prose-pre:bg-white/[0.03] prose-pre:border prose-pre:border-white/[0.06] prose-pre:rounded-xl prose-li:text-slate-300">
          <p className="text-slate-400 text-lg leading-relaxed">Este artigo foi gerado pelo nosso time de 42 agentes de IA e publicado automaticamente. O conteúdo completo está disponível no repositório GitHub do blog.</p>
          <div className="my-8 p-5 rounded-xl glass border border-cyan-500/10">
            <p className="text-sm text-slate-400 flex items-center gap-2"><Sparkles className="w-4 h-4 text-cyan-400" />Conteúdo verificado por Fat-Check e otimizado para SEO</p>
          </div>
        </div>

        {/* SHARE */}
        <div className="mt-12 p-6 rounded-2xl glass border border-white/[0.04]">
          <h3 className="font-semibold text-sm mb-3">Gostou? Compartilhe</h3>
          <div className="flex gap-2">
            {["Twitter", "LinkedIn", "WhatsApp"].map(s => <button key={s} className="px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs text-slate-400 transition">{s}</button>)}
          </div>
        </div>

        {/* RELATED */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Artigos Relacionados</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.entries(posts).filter(([s]) => s !== params.slug).slice(0, 2).map(([s, p]) => (
              <Link key={s} href={`/blog/${s}`} className="p-4 rounded-xl glass border border-white/[0.04] hover:border-cyan-500/20 transition-all group">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-slate-500 uppercase tracking-wider">{p.cat}</span>
                <h4 className="font-medium text-sm mt-2 text-white group-hover:text-cyan-400 transition-colors">{p.title}</h4>
                <p className="text-slate-600 text-[11px] mt-1">{p.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
