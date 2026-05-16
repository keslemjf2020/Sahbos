import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Edicao de Video: Automatize Cortes e Legendas - Automacao IA' };

export default function Page() {
  const raw = `# Você gravou 2 horas de conteúdo e precisa editar tudo manualmente

Cortar momentos ruins, remover pausas, adicionar legendas, exportar para cada rede social. Fazer isso manualmente leva **4 horas para cada 10 minutos** de vídeo final.

No fim do mês, você publica metade do que planejou porque a edição consome todo seu tempo.

**IA para edição de vídeo** corta seu tempo de edição em **70%**. São 3 áreas que entregam resultado imediato.

## Cortes automáticos que eliminam o tédio

O maior desperdício na edição é assistir o vídeo inteiro para encontrar onde cortar. IA faz isso em segundos.

### Como funciona na prática:

| O que a IA detecta | O que faz | Tempo economizado |
|--------------------|-----------|-------------------|
| Pausas longas (>2s) | Remove automaticamente | 40% do tempo de corte |
| Palavras de hesitação ("é...", "tipo...") | Corta com precisão de quadro | 20% do tempo de revisão |
| Erros de gravação | Marca para revisão | 10% do tempo de busca |

**Ferramentas:** **Descript** ou **Adobe Premiere Pro (Speech to Text)**. A IA analisa o áudio, identifica e remove. Você só revisa.

> **Exemplo real:** Um youtuber de tecnologia usava Descript para editar vídeos de 20 minutos. O tempo de edição **caiu de 4 horas para 1 hora** por vídeo. Ele passou a publicar **3x mais conteúdo** no mesmo horário.

> ---
> **🚀 Quer o guia completo de edição de vídeo com IA?** Baixe grátis. [Baixar agora](#)
> ---

## Legendas automáticas em todos os formatos

Legendas aumentam o alcance do vídeo. Com IA, você gera legendas precisas em segundos e exporta para qualquer formato.

### Como configurar:

- **Transcrição:** IA transcreve o áudio com precisão de 95%
- **Tradução:** Gera legendas em inglês, espanhol ou outros idiomas
- **Formato:** Exporta como SRT, VTT ou queimado no vídeo
- **Estilo:** Personaliza cor, tamanho e posição da legenda

## Checklist para acelerar sua edição de vídeo

- [ ] Grave o áudio com qualidade mínima (microfone USB já resolve)
- [ ] Use Descript para cortar pausas e hesitações automaticamente
- [ ] Gere legendas automáticas e traduza para pelo menos inglês
- [ ] Exporte versões otimizadas para YouTube, Instagram e TikTok`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Edicao de Video: Automatize Cortes e Legendas</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Edicao de Video: Automatize Cortes e Legendas</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}