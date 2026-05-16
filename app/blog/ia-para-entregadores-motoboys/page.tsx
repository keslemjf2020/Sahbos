import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Entregadores: Roteirizacao e Multiplos Apps - Automacao IA',
  openGraph: { title: 'IA para Entregadores: Roteirizacao e Multiplos Apps', images: [{ url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você roda 120 km por dia e ganha R\$ 150. Sobra R\$ 80 depois da gasolina

Pedido chega: 8 km para buscar, 5 km para entregar. R\$ 12. Você aceita porque não sabe se virá outro. Passa em frente a 3 restaurantes com pedidos prontos que poderia ter pego.

**IA para entregadores** otimiza rotas e gerencia múltiplos apps ao mesmo tempo.

## Roteirização inteligente que agrupa entregas

Fazer uma entrega por vez é ineficiente. IA agrupa pedidos que estão no mesmo caminho.

### Como funciona na prática:

| O que a IA analisa | O que sugere | Resultado |
|--------------------|--------------|-----------|
| Sua localização | Pegar pedido A (1 km) + pedido B (2 km) | 2 entregas, 7 km |
| Pedidos em todos os apps | Entregar A primeiro (3 km), depois B (1 km) | R\$ 24 no total |
| Destino de cada entrega | Rota otimizada sem voltar | Menos gasolina |

**Ferramentas:** **Entregador Inteligente** ou **Rota Fácil**. IA analisa pedidos disponíveis em todos os apps e sugere a melhor combinação.

> **Exemplo real:** Um entregador em BH usava roteirização inteligente. As entregas por hora **subiram de 2 para 4**. A quilometragem diária **caiu de 120 km para 80 km**. O lucro líquido **aumentou 60%**.

> ---
> **🚀 Quer otimizar suas entregas com IA?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Gestão de múltiplos apps em um só lugar

Você tem 3 apps abertos, cada um com pedidos diferentes. Perde tempo alternando entre eles.

### O que a IA faz:

- **Agrupa pedidos** de todos os apps em uma única tela
- **Prioriza** entregas com melhor relação distância/valor
- **Calcula** a rota ideal combinando todos os pedidos
- **Notifica** quando um pedido novo vale a pena aceitar

> **Dica prática:** Configure a IA para aceitar automaticamente pedidos acima de R\$ 15 que estejam no mesmo raio de 3 km. Reduza o tempo de decisão e aumente a produtividade.

## Checklist para aumentar seu lucro como entregador

- [ ] Ative a roteirização inteligente para agrupar entregas no mesmo caminho
- [ ] Configure a gestão de múltiplos apps em uma única tela
- [ ] Defina critérios mínimos de valor por quilômetro para aceitar pedidos
- [ ] Monitore a redução de quilometragem e o aumento de entregas por hora`;
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
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop" alt="IA para Entregadores: Roteirizacao e Multiplos Apps" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Entregadores: Roteirizacao e Multiplos Apps</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Entregadores: Roteirizacao e Multiplos Apps</h1>
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