import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Farmacias: Gestao de Estoque e Validade - Automacao IA' };

export default function Page() {
  const raw = `# Seus medicamentos vencem no estoque e ninguém percebe

Você tem 3.000 itens no estoque. Entre eles, 200 medicamentos com data de validade diferente. Um lote de antibiótico venceu na semana passada e ninguém viu.

São **R\$ 800 de prejuízo direto**. Fora o risco de vender medicamento vencido — multa pesada e risco para o paciente. No fim do mês, suas perdas por validade somam **R\$ 3.000**. Lucro que virou lixo.

**IA para farmácias** elimina o desperdício por validade e otimiza o estoque. São 3 áreas que entregam resultado imediato.

## Controle de validade com alertas que funcionam

Conferir data de validade de 3.000 itens manualmente é impossível. IA faz isso em tempo real.

### Como funciona na prática:

| O que a IA monitora | Alerta disparado | Ação sugerida |
|---------------------|------------------|---------------|
| Losartana 50mg vence em 45 dias | "30 unidades vencem em 30 dias" | Promoção de 20% ou devolução |
| Amoxicilina vence em 60 dias | "15 unidades, risco de perda" | Colocar em local visível |
| Dipirona vence em 90 dias | "50 unidades, estoque alto" | Suspender nova compra |

**Ferramentas:** **Farmácia Gestão** ou **Clínica Fácil** registram lote e validade de cada item na entrada.

> ---
> **🚀 Quer automatizar o controle de validade da sua farmácia?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Reposição automática que evita falta e excesso

Faltou medicamento? Perdeu venda. Sobrou? Pode vencer. IA calcula o ponto ideal de reposição.

### O que a IA calcula:

- **Histórico de vendas:** Quantas unidades saem por mês
- **Sazonalidade:** Medicamentos que vendem mais no inverno ou verão
- **Prazo do fornecedor:** Tempo entre pedido e entrega
- **Validade:** Evita comprar lote grande de item com prazo curto

> **Exemplo real:** Uma farmácia em Belo Horizonte implementou controle de validade com IA. As perdas por vencimento **caíram de R\$ 3.000 para R\$ 400 por mês**. O sistema alertava com 45 dias de antecedência para cada lote.

## Checklist para reduzir perdas na sua farmácia

- [ ] Registre lote e validade de todos os medicamentos na entrada
- [ ] Configure alertas automáticos para 60, 45 e 30 dias antes do vencimento
- [ ] Ative a reposição automática baseada em histórico de vendas
- [ ] Monitore as perdas por validade no primeiro mês`;
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
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/categoria/${'Saude'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Saude</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Farmacias: Gestao de Estoque e Validade</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Saude</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Farmacias: Gestao de Estoque e Validade</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}