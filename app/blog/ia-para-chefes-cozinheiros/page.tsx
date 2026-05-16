import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Chefs: Cardapios, Receitas e Precificacao - Automacao IA' };

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
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Chefs: Cardapios, Receitas e Precificacao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Chefs: Cardapios, Receitas e Precificacao</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}