import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Como Criar Imagens e Thumbnails com IA para Blog e YouTube - Automacao IA',
  openGraph: { title: 'Como Criar Imagens e Thumbnails com IA para Blog e YouTube', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=Como%20Criar%20Imagens%20e%20Thumbnails%20com%20IA%20para%20Blog%20e%20YouTube', width: 1200, height: 630 }] }
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
            <span className="text-slate-400 truncate max-w-[200px]">Como Criar Imagens e Thumbnails com IA para Blog e YouTube</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Criar Imagens e Thumbnails com IA para Blog e YouTube</h1>
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