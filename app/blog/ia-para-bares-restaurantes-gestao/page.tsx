import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA na Gestao de Bares e Restaurantes - Automacao IA',
  openGraph: { title: 'IA na Gestao de Bares e Restaurantes', images: [{ url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Seu bar está cheio numa sexta e o sistema não acompanha

Garçom anota o pedido, leva a bebida errada. Cliente reclama. 3 pessoas esperam para pagar. 2 pedidos na cozinha atrasaram porque o insumo acabou.

**IA na gestão de bares e restaurantes** resolve esses gargalos sem trocar todo o sistema.

## Cardápio inteligente com preços que se adaptam

Em vez de preço fixo, o cardápio se adapta ao horário, demanda e estoque.

### Como funciona na prática:

| Horário | O que a IA faz | Resultado |
|---------|----------------|-----------|
| Happy hour (18h-20h) | Destaca petiscos + cerveja | Combo com desconto |
| Jantar (20h-23h) | Sugere pratos executivos | Ticket médio maior |
| Estoque alto de insumo | Aplica desconto automático | Desperdício cai 40% |

**Ferramentas:** Cardápio digital com QR Code + IA integrada. Cliente abre, vê o que a IA sugere, pede.

> **Exemplo real:** Um bar em Curitiba implementou cardápio inteligente. Próximo ao vencimento de insumos, a IA aplicava desconto automático e destacava o prato. O desperdício **caiu 40% em 2 meses**.

> ---
> **🚀 Quer automatizar a gestão do seu bar ou restaurante?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Controle de estoque que prevê a demanda

Faltar cerveja no sábado é venda perdida. Ter insumo parado é dinheiro parado. IA calcula o ponto ideal de reposição.

### O que a IA considera:

- **Histórico de vendas** por dia da semana
- **Sazonalidade** (feriado, fim de semana, evento)
- **Prazo do fornecedor** para cada insumo
- **Estoque de segurança** para dias de pico

> **Dica prática:** Configure alerta automático quando o estoque de um insumo chegar a 20% do consumo semanal. Tempo suficiente para repor sem correr risco.

## Checklist para otimizar seu bar ou restaurante

- [ ] Implemente cardápio digital com IA (preços dinâmicos e sugestões)
- [ ] Configure controle de estoque com previsão de demanda
- [ ] Ative alertas automáticos para reposição de insumos
- [ ] Monitore a redução de desperdício e ruptura no primeiro mês`;
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
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" alt="IA na Gestao de Bares e Restaurantes" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA na Gestao de Bares e Restaurantes</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA na Gestao de Bares e Restaurantes</h1>
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