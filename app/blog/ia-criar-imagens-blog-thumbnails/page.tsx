import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Como Criar Imagens e Thumbnails com IA para Blog e YouTube - Automacao IA',
  openGraph: { title: 'Como Criar Imagens e Thumbnails com IA para Blog e YouTube', images: [{ url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você perde horas no Canva ou paga um designer para cada arte

Thumbnail para YouTube, capa para blog, imagem para post. Cada uma leva 30 minutos. No fim do mês, são 10 horas só com design.

Em 2026, **Midjourney v7**, **DALL-E 4** e **Stable Diffusion 4** entregam resultados profissionais em segundos. Este guia mostra qual ferramenta usar para cada tipo de arte.

## Qual ferramenta usar para cada tipo de arte

Cada ferramenta tem seu ponto forte. A escolha certa depende do que você precisa criar.

### Comparativo direto:

| Ferramenta | Melhor para | Preço | Diferencial |
|------------|-------------|-------|-------------|
| **Midjourney v7** | Thumbnails dramáticas, capas de blog | US\$ 30/mês | Estilo consistente, 4K nativo |
| **DALL-E 4** | Edição por texto, consistência de personagem | US\$ 20/mês (via ChatGPT) | Integração com ChatGPT |
| **Stable Diffusion 4** | Controle total, imagens técnicas | Grátis (local) ou US\$ 10/mês (cloud) | Open-source, personalizável |

## Midjourney v7: melhor para impacto visual

Lançado em janeiro de 2026, o Midjourney v7 trouxe qualidade fotorealista e **upscale 4K nativo**. O diferencial é o controle de estilo via "style references" — você mantém a mesma identidade visual em todas as imagens.

### Onde brilha:

- Thumbnails para YouTube com alto contraste
- Capas de blog com tipografia integrada
- Imagens para redes sociais com estilo consistente

> ---
> **🚀 Quer o guia completo de prompts para cada ferramenta?** Baixe grátis. [Baixar agora](#)
> ---

## DALL-E 4: melhor para edição e consistência

O DALL-E 4 se destaca pela capacidade de **editar imagens existentes por texto** e manter personagens consistentes entre diferentes cenas.

### Onde brilha:

- Editar parte específica da imagem ("troque o fundo para azul")
- Manter o mesmo personagem em várias imagens
- Integrar diretamente com ChatGPT para criar e refinar

## Stable Diffusion 4: melhor para controle técnico

Para quem quer controle total sobre o resultado, o Stable Diffusion 4 é a escolha. Por ser open-source, você pode treinar o modelo com seu próprio estilo.

### Onde brilha:

- Imagens técnicas e diagramas
- Treinar o modelo com sua identidade visual
- Gerar em lote dezenas de variações

## Checklist para escolher sua ferramenta de design

- [ ] Defina o tipo de arte que você mais cria (thumbnail, capa, post, técnica)
- [ ] Teste Midjourney v7 para impacto visual (thumbs e capas)
- [ ] Teste DALL-E 4 para edição e consistência de personagem
- [ ] Teste Stable Diffusion 4 para controle técnico e lotes`;
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
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" alt="Como Criar Imagens e Thumbnails com IA para Blog e YouTube" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Criar Imagens e Thumbnails com IA para Blog e YouTube</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Criar Imagens e Thumbnails com IA para Blog e YouTube</h1>
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