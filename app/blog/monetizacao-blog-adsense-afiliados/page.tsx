import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Guia de Monetizacao: AdSense e Afiliados para Blogs - Automacao IA',
  openGraph: { title: 'Guia de Monetizacao: AdSense e Afiliados para Blogs', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/f59e0b?text=Guia%20de%20Monetizacao%3A%20AdSense%20e%20Afiliados%20para%20Blogs', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você escreve há meses e o AdSense paga R\$ 50

O tráfego cresce devagar. Os links de afiliado não convertem. Você começa a achar que blog não dá dinheiro.

O problema não é o modelo. É a estratégia. Monetizar com **AdSense** e **afiliados** em 2026 exige planejamento, não quantidade de posts.

## AdSense: onde colocar anúncio que realmente clica

O erro mais comum é jogar anúncio em qualquer lugar e torcer. Posicionamento estratégico dobra o faturamento sem aumentar tráfego.

| Posição | RPM Estimado | Vale a pena? |
|---------|-------------|--------------|
| Meio do post (após 2º parágrafo) | R\$ 15-25 | Sim |
| In-article entre parágrafos | R\$ 12-20 | Sim |
| Topo do post (acima do título) | R\$ 8-12 | Médio |
| Final do post | R\$ 5-8 | Baixo |
| Sidebar fixo | R\$ 3-5 | Não |

> **Dica prática:** Coloque um anúncio in-article depois do segundo parágrafo. O leitor já está engajado e mais propenso a clicar. Teste por 30 dias e compare o **RPM**.

> ---
> **🚀 Quer aumentar a receita do seu blog?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Marketing de afiliados: o produto certo faz tudo funcionar

Promover produto errado é o motivo número 1 de baixa conversão. Não adianta ter tráfego se o produto não interessa ao leitor.

### O que avaliar antes de escolher:

| Critério | O que verificar | Nota mínima |
|----------|-----------------|-------------|
| Relevância | Produto resolve problema do leitor? | Alta |
| Comissão | Quanto você ganha por venda? | > 20% |
| Conversão | Produto tem boa taxa de conversão? | > 3% |

> **Exemplo real:** Um blog de produtividade promovia um curso de gestão de tempo. A comissão era de 40%. A taxa de conversão **subiu de 1,5% para 4,2%** quando trocaram o produto por um mais relevante ao público.

## Checklist para monetizar seu blog

- [ ] Posicione anúncios in-article após o segundo parágrafo
- [ ] Teste 3 produtos de afiliados diferentes por 30 dias
- [ ] Priorize produtos com comissão acima de 20% e relevância alta
- [ ] Monitore o RPM e a taxa de conversão de afiliados semanalmente`;
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
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #f59e0b44 0%, transparent 50%), radial-gradient(circle at 70% 30%, #f59e0b33 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Negocios'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Negocios</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Guia de Monetizacao: AdSense e Afiliados para Blogs</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#f59e0b20',color:'#f59e0b',border:'1px solid #f59e0b30'}}>Negocios</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Guia de Monetizacao: AdSense e Afiliados para Blogs</h1>
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