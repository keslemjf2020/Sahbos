import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Chefs: Cardapios, Receitas e Precificacao - Automacao IA',
  openGraph: { title: 'IA para Chefs: Cardapios, Receitas e Precificacao', images: [{ url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você passa horas criando o cardápio e descobre que 3 pratos têm margem negativa

Calcula custo manualmente. Um ingrediente não tem fornecedor. Outro prato é igual ao do concorrente. No fim, mantém o mesmo cardápio de sempre por medo de errar.

**IA para chefs** resolve criação de cardápio, receitas e precificação.

## Criação de cardápio sazonal baseado em dados

Cardápio repetido cansa o cliente. IA sugere pratos baseados no que está em alta.

### Como funciona na prática:

| O que a IA analisa | O que sugere | Margem calculada |
|--------------------|--------------|------------------|
| Cogumelo shimeji em alta | Risoto de cogumelo com parmesão | Custo R\$ 8 / Preço R\$ 32 = 75% |
| Clientes pedem mais opções vegetarianas | Bowl de quinoa com legumes | Custo R\$ 6 / Preço R\$ 24 = 75% |
| Ingrediente da estação (abóbora) | Nhoque de abóbora com manteiga | Custo R\$ 5 / Preço R\$ 22 = 77% |

**Ferramentas:** **Plate IQ** ou **MarketMan**. IA analisa tendências, ingredientes da estação e avaliações dos clientes.

> **Exemplo real:** Um chef em SP usava IA para criar cardápios sazonais. O tempo de criação **caiu de 3 dias para 4 horas**. A margem média **subiu 12 pontos percentuais**.

> ---
> **🚀 Quer automatizar a criação de cardápios do seu restaurante?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Desenvolvimento de receitas com custo calculado

Criar receita nova é chute. IA calcula custo de cada ingrediente e sugere substituições.

### O que a IA faz:

- **Calcula custo** de cada ingrediente com base no fornecedor
- **Sugere substituições** por ingredientes mais baratos ou da estação
- **Ajusta porções** para manter o custo dentro da margem desejada
- **Gera ficha técnica** com rendimento, tempo de preparo e valor nutricional

> **Dica prática:** Antes de testar uma receita nova, peça para a IA calcular o custo. Se a margem for menor que 65%, ajuste os ingredientes ou o preço.

## Checklist para otimizar seu cardápio

- [ ] Use IA para analisar tendências e ingredientes da estação
- [ ] Calcule a margem de cada prato antes de incluir no cardápio
- [ ] Substitua ingredientes caros por alternativas com margem maior
- [ ] Monitore a margem média do cardápio no primeiro mês`;
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
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" alt="IA para Chefs: Cardapios, Receitas e Precificacao" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Chefs: Cardapios, Receitas e Precificacao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Chefs: Cardapios, Receitas e Precificacao</h1>
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