import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const DATA = {"automacao-atendimento-ia-hoteis":{"c":"Automacao","t":"Como Automatizar Atendimento em Hotéis e Pousadas com IA","d":"2026-05-16"}, "automacao-atendimento-medico-ia":{"c":"IA","t":"IA no Atendimento Médico","d":"2026-05-16"}, "chatgpt-vs-deepseek-vs-claude":{"c":"Ferramentas","t":"ChatGPT vs DeepSeek vs Claude","d":"2026-05-16"}, "automacao-processos-rpa-ia":{"c":"Automacao","t":"RPA com IA","d":"2026-05-16"}, "produtividade-ferramentas-gratis-ia":{"c":"Ferramentas","t":"10 Ferramentas de IA Grátis","d":"2026-05-16"}, "monetizacao-blog-adsense-afiliados":{"c":"Negocios","t":"Guia de Monetização","d":"2026-05-16"}, "ia-atendimento-whatsapp-reduzir-tempo":{"c":"Negocios","t":"Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp","d":"2026-05-15"}, "ia-vendas-b2b-automacao":{"c":"Negocios","t":"IA para Vendas B2B","d":"2026-05-16"}, "ia-para-professores-ensino":{"c":"IA","t":"IA para Professores","d":"2026-05-16"}};

export default function Category({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const items = Object.entries(DATA).filter(([_, p]) => (p.c || "IA").toLowerCase() === slug.toLowerCase()).map(([k, p]) => ({ slug: k, ...p }));

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-4"><ArrowLeft className="w-3 h-3" />Voltar</Link>
        <h1 className="text-3xl font-bold text-white capitalize">{slug}</h1>
        <p className="text-slate-400 mt-2">{items.length} artigos</p>
      </div></div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group p-5 rounded-2xl glass border border-white/[0.04]">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">{p.c}</span>
              <h3 className="font-semibold mt-2 mb-1 text-sm text-white group-hover:text-cyan-400">{p.t}</h3>
              <div className="text-[10px] text-slate-600">{p.d}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
