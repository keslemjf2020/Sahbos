import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Restaurantes: Cardapio Inteligente e Automacao - Automacao IA',
  openGraph: { title: 'IA para Restaurantes: Cardapio Inteligente e Automacao', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=IA%20para%20Restaurantes%3A%20Cardapio%20Inteligente%20e%20Automacao', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Seu restaurante tem 40 itens no cardápio, mas 70% dos pedidos são só 5 pratos

Garçom anota errado duas vezes por semana. No fim do mês, descobre que um ingrediente estragou porque ninguém avisou. O cliente pede algo que não tem no estoque.

**IA para restaurantes** resolve esses problemas sem trocar de sistema ou contratar mais gente.

## Cardápio inteligente que sugere o que vender mais

Em vez de cardápio fixo, IA sugere pratos baseados no cliente, horário e estoque.

### Como funciona na prática:

| O que a IA analisa | O que sugere | Resultado |
|--------------------|--------------|-----------|
| Cliente já pediu antes | Pratos que ele ainda não experimentou | Ticket médio +18% |
| Horário de almoço | Pratos executivos rápidos | Rotatividade maior |
| Estoque alto de insumo | Prato em destaque com desconto | Desperdício menor |

**Ferramentas:** Cardápio digital com QR Code + IA integrada.

> **Exemplo real:** Um restaurante italiano em São Paulo implementou cardápio inteligente. O ticket médio **subiu 18%** porque a IA sugeria pratos mais caros e harmonizações com vinhos que o cliente nunca experimentaria sozinho.

> ---
> **🚀 Quer automatizar o cardápio do seu restaurante?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Atendimento automatizado que elimina erro de pedido

Pedidos anotados errado geram retrabalho e insatisfação. IA elimina o erro humano.

### Como funciona:

| Como era | Como fica com IA |
|----------|------------------|
| Garçom anota no papel e passa para cozinha | Cliente pede pelo QR Code direto na cozinha |
| Pedido volta porque leitura errada | Zero erro de comunicação |
| Cliente espera 10 minutos para chamar o garçom | Pedido enviado em 30 segundos |

**Ferramentas:** **Menu IA** ou **Cardápio Digital** com pedido direto do cliente.

> **Dica prática:** Coloque o QR Code na mesa e na conta. Cliente pede, paga e sai sem chamar o garçom. Rotatividade **aumenta 25%**.

## Checklist para otimizar seu restaurante

- [ ] Implemente cardápio digital com IA de sugestões personalizadas
- [ ] Ative pedido direto pelo QR Code para eliminar erros
- [ ] Configure integração com estoque para evitar pratos indisponíveis
- [ ] Monitore o aumento do ticket médio e da rotatividade no primeiro mês`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Restaurantes: Cardapio Inteligente e Automacao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Restaurantes: Cardapio Inteligente e Automacao</h1>
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