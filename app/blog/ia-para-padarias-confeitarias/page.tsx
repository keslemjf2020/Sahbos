import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Padarias: Controle de Producao e Estoque - Automacao IA',
  openGraph: { title: 'IA para Padarias: Controle de Producao e Estoque', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=IA%20para%20Padarias%3A%20Controle%20de%20Producao%20e%20Estoque', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você acorda às 4h para produzir pão e não sabe se vende 100 ou 300 unidades

Produzir pouco perde cliente. Produzir demais vira desperdício. **15% da sua produção vai para o lixo** todo santo dia. Ingredientes vencem na despensa porque você comprou sem planejamento.

**IA para padarias** resolve o problema do desperdício e coloca produção sob controle.

## Previsão de demanda para produção diária

Em vez de produzir no chute, IA calcula exatamente quanto fazer baseado em dados reais.

### Como funciona na prática:

| O que a IA analisa | O que calcula | Ordem de produção |
|--------------------|---------------|-------------------|
| Sábado, previsão de chuva | Vendeu 20% menos no último sábado chuvoso | 180 pães franceses |
| Histórico de vendas | Média de 200 pães em sábados normais | 50 baguetes |
| Feriados próximos | Ajuste sazonal | 30 bisnagas |

**Ferramentas:** **Upper** ou **Padaria Digital**. IA analisa histórico, dia da semana, clima e feriados.

> **Exemplo real:** Uma padaria em Belo Horizonte usava IA de previsão de demanda. O desperdício de pão **caiu de 18% para 4%**. A economia mensal em farinha e mão de obra **foi de R\$ 2.500**.

> ---
> **🚀 Quer automatizar a produção da sua padaria?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Controle de validade que salva insumos

Farinha, fermento, manteiga vencem na despensa. IA alerta antes de perder.

### Como funciona:

| Prazo restante | Alerta da IA | Ação |
|----------------|--------------|------|
| 7 dias | "Farinha vence em 7 dias. Use em 3 receitas." | Priorizar no cardápio |
| 3 dias | "Leite vence em 3 dias. Faça pão de leite." | Promoção relâmpago |
| 1 dia | "Creme de leite vence amanhã. Doe ou descarte." | Evitar contaminação |

> **Dica prática:** Configure a IA para alertar com 7 dias de antecedência. Dá tempo de ajustar a produção e evitar perda total.

## Checklist para reduzir desperdício na padaria

- [ ] Ative a previsão de demanda baseada em histórico, clima e feriados
- [ ] Configure alertas de validade para todos os insumos com 7 dias de antecedência
- [ ] Ajuste a produção diária com base na previsão da IA
- [ ] Monitore a redução de desperdício no primeiro mês`;
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
      {/* COVER IMAGE */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #3b82f644 0%, transparent 50%), radial-gradient(circle at 70% 30%, #3b82f633 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Padarias: Controle de Producao e Estoque</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Padarias: Controle de Producao e Estoque</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}