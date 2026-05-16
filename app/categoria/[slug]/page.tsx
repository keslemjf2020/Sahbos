import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SLUGS: Record<string, Array<{slug:string,t:string,d:string}>> = {
  automacao: [
    {slug:"automacao-processos-rpa-ia",t:"RPA com IA: Como Automatizar Processos Repetitivos sem Programar",d:"2026-05-16"},
    {slug:"automacao-atendimento-ia-hoteis",t:"Como Automatizar Atendimento em Hotéis e Pousadas com IA",d:"2026-05-16"},
    {slug:"automacao-email-marketing-ia",t:"Como Automatizar Email Marketing com IA",d:"2026-05-16"},
    {slug:"automacao-ecommerce-shopify-ia",t:"Como Automatizar sua Loja Shopify com IA",d:"2026-05-16"},
    {slug:"automacao-rh-contratacao-ia",t:"Como Automatizar RH e Contratacao com IA",d:"2026-05-16"},
    {slug:"automacao-condominios-gestao-ia",t:"Gestao de Condominios com IA: Automatize Tudo",d:"2026-05-16"},
    {slug:"automacao-clinicas-medicas-ia",t:"Automatizacao de Clinicas Medicas com IA",d:"2026-05-16"},
    {slug:"automacao-oficinas-mecanicas-ia",t:"Automacao de Oficinas Mecanicas com IA",d:"2026-05-16"},
    {slug:"automacao-financeira-pequena-empresa",t:"Automação Financeira com IA para Pequenas Empresas",d:"2026-05-16"},
    {slug:"automacao-faturamento-notas-fiscais",t:"Automatize Faturamento e Notas Fiscais com IA",d:"2026-05-16"},
    {slug:"automacao-eventos-cerimonial-ia",t:"Como Automatizar Eventos e Cerimonial com IA",d:"2026-05-16"},
    {slug:"automacao-marketing-digital-ia",t:"Como Automatizar seu Marketing Digital com IA",d:"2026-05-16"},
    {slug:"automacao-suporte-tecnico-ti-ia",t:"Automatize o Suporte Tecnico de TI com IA",d:"2026-05-16"},
    {slug:"automacao-ia-oportunidade-2026",t:"A Única Oportunidade de Automação com IA Que Vale Seu Tempo em 2026",d:"2026-05-15"},
  ],
  ferramentas: [
    {slug:"chatgpt-vs-deepseek-vs-claude",t:"ChatGPT vs DeepSeek vs Claude: Qual a Melhor IA em 2026",d:"2026-05-16"},
    {slug:"ferramentas-automacao-pequenos-negocios",t:"As 5 Melhores Ferramentas de Automacao para Pequenos Negocios em 2026",d:"2026-05-15"},
    {slug:"produtividade-ferramentas-gratis-ia",t:"10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade",d:"2026-05-16"},
    {slug:"melhores-apis-ia-desenvolvedores",t:"Melhores APIs de IA para desenvolvedores integrarem em 2026",d:"2026-05-16"},
    {slug:"nocode-lowcode-ferramentas-gratis",t:"No-Code vs Low-Code: Melhores Ferramentas Gratis",d:"2026-05-16"},
    {slug:"ia-criar-imagens-blog-thumbnails",t:"Como Criar Imagens e Thumbnails com IA para Blog e YouTube",d:"2026-05-16"},
    {slug:"ia-design-grafico-ferramentas",t:"IA no Design Grafico: Ferramentas que Todo Designer Precisa",d:"2026-05-16"},
    {slug:"ia-gestao-projetos-ferramentas",t:"IA na Gestao de Projetos: Ferramentas Essenciais",d:"2026-05-16"},
  ],
  negocios: [
    {slug:"ia-vendas-b2b-automacao",t:"IA para Vendas B2B: como automatizar prospeccao e follow-up",d:"2026-05-16"},
    {slug:"monetizacao-blog-adsense-afiliados",t:"Guia de Monetizacao: AdSense e Afiliados para Blogs",d:"2026-05-16"},
    {slug:"ia-atendimento-whatsapp-reduzir-tempo",t:"Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp",d:"2026-05-15"},
  ],
  ia: [
    {slug:"ia-pequenos-negocios-guia-completo",t:"Guia Completo de IA para Pequenos Negocios em 2026",d:"2026-05-16"},
    {slug:"ia-para-professores-ensino",t:"IA para Professores: Ferramentas que Transformam o Ensino",d:"2026-05-16"},
    {slug:"futuro-trabalho-ia-automacao",t:"O Futuro do Trabalho com IA: O Que Muda em 2026",d:"2026-05-16"},
  ],
};

export default function Category({ params }: { params: { slug: string } }) {
  const s = params.slug;
  const items = SLUGS[s] || [];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-4"><ArrowLeft className="w-3 h-3"/>Voltar</Link>
        <h1 className="text-3xl font-bold text-white capitalize">{s}</h1>
        <p className="text-slate-400 mt-2">{items.length} artigos</p>
      </div></div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group p-5 rounded-2xl glass border border-white/[0.04]">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">{s}</span>
              <h3 className="font-semibold mt-2 mb-1 text-sm text-white group-hover:text-cyan-400">{p.t}</h3>
              <div className="text-[10px] text-slate-600">{p.d}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
