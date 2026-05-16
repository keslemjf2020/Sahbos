import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA no Design Grafico: Ferramentas que Todo Designer Precisa - Automacao IA' };

export default function Page() {
  const raw = `# Você passa horas no Photoshop fazendo trabalho braçal que a IA faz em segundos

Procurar banco de imagens, remover fundo manualmente, criar mockup por mockup. O briefing chegou às 18h e o prazo é amanhã de manhã.

**IA no design gráfico** não substitui seu olhar criativo. Ela elimina o trabalho braçal que consome **70% do seu tempo**. São 3 áreas que entregam resultado imediato.

## Geração de imagens sem banco de fotos

Em vez de comprar banco de imagens ou perder horas procurando a foto certa, descreva exatamente o que precisa.

### Qual ferramenta usar para cada caso:

| Ferramenta | Melhor para | Preço |
|------------|-------------|-------|
| **Midjourney** | Artes conceituais, ilustrações | US\$ 30/mês |
| **DALL-E 3** | Fotorealismo, produtos | US\$ 20/mês |
| **Leonardo.ai** | Assets de jogos, personagens | Grátis (150 créditos/dia) |

> **Exemplo prático:** "Foto de um café na mesa de madeira, iluminação natural, estilo Instagram, manhã ensolarada" — a IA gera em **30 segundos**. Pronto para usar.

## Remoção de fundo em 1 clique

Ferramentas com IA fazem em segundos o que levava minutos no Photoshop.

| Ferramenta | O que faz | Preço |
|------------|-----------|-------|
| **Remove.bg** | Remove fundo de qualquer imagem | Grátis (50 imagens/mês) |
| **Clipping Magic** | Remove fundo com ajuste fino | US\$ 8/mês |
| **Canva BG Remover** | Remove + edita no Canva | Grátis (Premium tem ilimitado) |

> ---
> **🚀 Quer o guia completo de ferramentas de design com IA?** Baixe grátis. [Baixar agora](#)
> ---

## Criação de mockups em segundos

Mostrar o design aplicado em produtos (camisetas, canecas, telas) é essencial para vender. Com IA, você gera mockups sem precisar de Photoshop.

### Como funciona:

- Descreva o produto: "Camiseta preta com estampa no centro"
- Adicione o design: Faça upload da sua arte
- IA aplica: Gera o mockup realista em segundos

**Ferramentas:** **Placeit** ou **Smartmockups** — biblioteca com milhares de templates prontos.

## Checklist para acelerar seu design com IA

- [ ] Substitua banco de imagens por geração com Midjourney ou DALL-E
- [ ] Use Remove.bg para remover fundo em lote (50 imagens grátis)
- [ ] Crie mockups com Placeit em vez de Photoshop
- [ ] Teste o fluxo completo com um projeto real esta semana`;
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
            <Link href={`/categoria/${'Ferramentas'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Ferramentas</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA no Design Grafico: Ferramentas que Todo Designer Precisa</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Ferramentas</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA no Design Grafico: Ferramentas que Todo Designer Precisa</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}