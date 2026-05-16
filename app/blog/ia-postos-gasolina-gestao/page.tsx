import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Postos de Gasolina: Automacao e Fidelizacao - Automacao IA',
  openGraph: { title: 'IA para Postos de Gasolina: Automacao e Fidelizacao', images: [{ url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Seu posto vende 30 mil litros por dia e você não sabe quem são seus clientes

Cliente abastece, paga e vai embora. Posto da esquina baixou R\$ 0,05 e seus clientes migraram. Você descobriu quando o movimento caiu **20%**. Sem dados para reagir.

**IA para postos de gasolina** transforma abastecimento em relacionamento.

## Programa de fidelidade inteligente com reconhecimento automático

Cliente fiel merece benefício. Mas você precisa saber quem ele é.

### Como funciona na prática:

| O que a IA reconhece | O que identifica | O que o bombeiro faz |
|----------------------|-----------------|----------------------|
| Placa do carro na entrada | "João, cliente há 2 anos" | Oferece lavagem grátis |
| Histórico de abastecimento | "Abastece 3x/semana, aditivada" | Aplica desconto automático |
| Última visita | "Não vem há 30 dias" | Oferece promoção especial |

**Ferramentas:** Câmera com OCR + **Posto Fidelidade IA**. Cadastro único por placa.

> **Exemplo real:** Uma rede de postos em Goiânia implementou reconhecimento de placa com fidelidade. A recompra em 30 dias **subiu de 40% para 65%**. O ticket médio **aumentou 15%** com ofertas personalizadas.

> ---
> **🚀 Quer automatizar a fidelidade do seu posto?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Gestão de tanques que evita falta de combustível

Gasolina, etanol, diesel acabam no pior momento. IA prevê o consumo e alerta antes de faltar.

### Como funciona:

| Combustível | Consumo diário | Alerta da IA |
|-------------|----------------|--------------|
| Gasolina | 15.000 L | "Reposição em 2 dias" |
| Etanol | 8.000 L | "Reposição em 4 dias" |
| Diesel | 7.000 L | "Reposição em 3 dias" |

> **Dica prática:** Configure a IA para alertar com 3 dias de antecedência. Dá tempo de negociar com fornecedor e evitar prejuízo.

## Checklist para otimizar seu posto de gasolina

- [ ] Implemente reconhecimento de placa com programa de fidelidade automático
- [ ] Configure alertas de reposição de tanques com 3 dias de antecedência
- [ ] Crie ofertas personalizadas para clientes que não visitam há mais de 30 dias
- [ ] Monitore o aumento de recompra e ticket médio no primeiro mês`;
  const content = raw.split('\\n').map((l,i) => {
    if (l.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-cyan-500 pl-4 my-4 text-slate-300 italic">{l.slice(2)}</blockquote>;
    if (l.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{l.slice(3)}</h2>;
    if (l.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{l.slice(4)}</h3>;
    if (l.startsWith('- [ ]')) return <p key={i} className="flex items-center gap-2 text-slate-300 my-1"><input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" readOnly />{l.slice(5)}</p>;
    if (l.startsWith('[')) { const m = l.match(/\[(.+?)\]\((.+?)\)/); if (m) return <p key={i} className="my-2"><a href={m[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline">{m[1]}</a></p>; }
    if (!l.trim()) return <br key={i} />;
    return <p key={i} className="text-slate-300 leading-relaxed mb-2">{l}</p>;
  });
  const plainText = raw.replace(/[#*>`\-\[\]\(\)\|]/g,' ').slice(0,3000);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="relative w-full h-48 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" alt="IA para Postos de Gasolina: Automacao e Fidelizacao" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Postos de Gasolina: Automacao e Fidelizacao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Postos de Gasolina: Automacao e Fidelizacao</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-8">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
      <div className="max-w-3xl mx-auto px-6 pb-12"><AuthorBio /></div>
      <div className="border-t border-white/[0.04]"><div className="max-w-2xl mx-auto px-6 py-12 text-center"><p className="text-slate-400 text-sm mb-2">Receba guias praticos de IA toda semana</p><form className="flex max-w-sm mx-auto"><input type="email" placeholder="seu@email.com" className="flex-1 px-4 py-2 rounded-l-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30" /><button className="px-5 py-2 rounded-r-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90">Inscrever</button></form></div></div>
    </div>
  );
}