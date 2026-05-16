import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para YouTubers: Roteiro, Edicao e SEO de Videos - Automacao IA' };

export default function Page() {
  const raw = `# Você grava 15 minutos, edita 2 horas, faz thumbnail 20 minutos. 200 views em uma semana

Outro youtuber postou o mesmo tema e fez 50 mil views. A diferença? Ele entende de roteiro, edição e SEO. Você não.

**IA para youtubers** resolve os três gargalos do canal.

## Roteiro com gancho e retenção garantida

Roteiro fraco é a principal causa de vídeo abandonado nos primeiros 30 segundos. IA estrutura o conteúdo para prender.

### Como funciona na prática:

| O que a IA analisa | O que gera | Seu trabalho |
|--------------------|------------|--------------|
| Nicho, tema, duração | Gancho: "90% desistem no 1º ano" | Ajustar o tom |
| Público-alvo | 3 pontos principais com exemplos | Gravar |
| CTA desejado | "Inscreva-se para mais" | Editar |

**Ferramentas:** **Jasper** ou **Copy.ai** com templates de roteiro.

> **Exemplo real:** Um youtuber de tecnologia usava IA para roteiros. A retenção média **subiu de 35% para 58%**. O tempo de criação de roteiro **caiu de 1 hora para 10 minutos**.

> ---
> **🚀 Quer automatizar a produção do seu canal?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Edição automatizada que corta silêncios e erros

Editar manualmente cada "hããã", pausa e erro de fala é repetitivo. IA faz em minutos.

### Como configurar:

| O que a IA identifica | O que faz | Resultado |
|-----------------------|-----------|-----------|
| Silêncios longos | Corta automaticamente | Vídeo mais dinâmico |
| Vícios de linguagem | Remove "tipo", "né", "hããã" | Áudio profissional |
| Erros de fala | Detecta e marca para corte | Edição mais rápida |

**Ferramentas:** **Descript** ou **Adobe Premiere** com IA de edição.

> **Dica prática:** Grave com o Descript ativado. A edição acontece em tempo real. Ao final da gravação, o vídeo já está 70% pronto.

## Checklist para otimizar seu canal no YouTube

- [ ] Use IA para criar roteiros com gancho forte nos primeiros 30 segundos
- [ ] Ative edição automatizada que remove silêncios e vícios de linguagem
- [ ] Gere thumbnails e títulos com IA baseada em SEO
- [ ] Monitore o aumento de retenção e views no primeiro mês`;
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
            <Link href={`/categoria/${'Marketing'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Marketing</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para YouTubers: Roteiro, Edicao e SEO de Videos</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Marketing</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para YouTubers: Roteiro, Edicao e SEO de Videos</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}