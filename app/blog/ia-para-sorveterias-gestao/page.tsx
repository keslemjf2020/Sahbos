import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Sorveterias: Producao e Vendas Inteligentes - Automacao IA',
  openGraph: { title: 'IA para Sorveterias: Producao e Vendas Inteligentes', images: [{ url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Sexta-feira 19h, sua sorveteria está cheia. O chocolate belga acabou às 18h

Você perdeu vendas. No sábado choveu. Produziu 20kg de chocolate belga, vendeu 5kg. Os outros 15kg perdem qualidade no freezer. **30% da produção foi para o lixo.**

**IA para sorveterias** resolve o problema de produção e vendas.

## Previsão de demanda por sabor e horário

Cada sabor tem pico de venda em horários diferentes. IA calcula exatamente quanto produzir de cada um.

### Como funciona na prática:

| O que a IA analisa | O que calcula | Ordem de produção |
|--------------------|---------------|-------------------|
| Sábado, 35°C, histórico | Chocolate belga: 12kg | Produzir 12kg |
| Sexta, 28°C, fim de tarde | Morango: 8kg | Produzir 8kg |
| Domingo, 30°C, família | Limão: 5kg | Produzir 5kg |

**Ferramentas:** **Sorvete Gestão** ou **Upper**. IA analisa vendas por sabor, dia, horário e temperatura.

> **Exemplo real:** Uma sorveteria em Campinas usava IA de previsão. O desperdício **caiu de 25% para 5%**. A economia mensal em ingredientes **foi de R\$ 1.800**.

> ---
> **🚀 Quer automatizar a produção da sua sorveteria?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Precificação dinâmica que ajusta o preço na hora

Preço fixo não funciona para sorvete. Dias quentes vendem mais. Dias frios vendem menos. IA ajusta o valor em tempo real.

### Como funciona:

| Condição | Preço ajustado | Resultado |
|----------|----------------|-----------|
| 35°C, sábado | Preço normal + 15% | Margem maior sem perder cliente |
| 25°C, terça-feira | Preço normal | Venda estável |
| Chuva, 20°C | Preço -10% | Estimula venda e evita desperdício |

> **Dica prática:** Configure a IA para reduzir o preço em 10% quando a temperatura cair abaixo de 25°C. Você vende mais e perde menos.

## Checklist para otimizar sua sorveteria

- [ ] Ative a previsão de demanda por sabor, horário e temperatura
- [ ] Implemente precificação dinâmica que ajusta o valor em tempo real
- [ ] Configure alertas de estoque mínimo para sabores mais vendidos
- [ ] Monitore a redução de desperdício e o aumento de margem no primeiro mês`;
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
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" alt="IA para Sorveterias: Producao e Vendas Inteligentes" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Sorveterias: Producao e Vendas Inteligentes</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Sorveterias: Producao e Vendas Inteligentes</h1>
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