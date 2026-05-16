import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Podcasters: Gravacao, Edicao e Distribuicao - Automacao IA',
  openGraph: { title: 'IA para Podcasters: Gravacao, Edicao e Distribuicao', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=IA%20para%20Podcasters%3A%20Gravacao%2C%20Edicao%20e%20Distribuicao', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você grava 1 hora de podcast e passa 4 horas editando

Áudio do convidado baixo, seu áudio estourado. 15 "hããã", 20 segundos de silêncio, 3 interrupções. Depois precisa gerar descrição, notas, legenda e posts. Passa mais tempo produzindo o episódio do que ele dura.

**IA para podcasters** resolve gravação, edição e distribuição.

## Gravação remota com qualidade automática

Convidado grava do celular, você do computador. Áudio inconsistente. IA equaliza em tempo real.

### Como funciona na prática:

| Problema | O que a IA faz | Resultado |
|----------|----------------|-----------|
| Áudio do convidado baixo | Equaliza volume automaticamente | Volume uniforme |
| Ruído de fundo | Redução de ruído em tempo real | Áudio limpo |
| Internet caiu | Gravação continua localmente | Zero perda |

**Ferramentas:** **Riverside** ou **Descript**. Gravação local, não pela internet. Sincroniza automaticamente.

> **Exemplo real:** Um podcaster de entrevistas usava Riverside. O tempo de pós-produção de áudio **caiu de 2 horas para 15 minutos**.

> ---
> **🚀 Quer automatizar a produção do seu podcast?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Edição automática que remove silêncios e vícios de linguagem

Editar manualmente "hããã", "tipo", "né" e silêncios é repetitivo. IA faz em segundos.

### Como funciona:

| O que a IA remove | Como faz | Resultado |
|-------------------|----------|-----------|
| Silêncios longos | Detecta e corta automaticamente | Episódio mais dinâmico |
| Vícios de linguagem ("hããã", "tipo", "né") | Remove com precisão | Áudio profissional |
| Interrupções e sobreposições | Separa e organiza as falas | Fluxo natural |

**Ferramentas:** **Descript** ou **Adobe Podcast**. IA identifica e remove automaticamente.

> **Dica prática:** Grave com o Descript ativado. A edição acontece em tempo real. Ao final da gravação, o episódio já está 80% pronto.

## Checklist para otimizar seu podcast

- [ ] Use Riverside ou Descript para gravação remota com qualidade automática
- [ ] Ative a remoção automática de silêncios e vícios de linguagem
- [ ] Configure a distribuição automática para todas as plataformas
- [ ] Monitore a redução de tempo de pós-produção no primeiro mês`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Podcasters: Gravacao, Edicao e Distribuicao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Podcasters: Gravacao, Edicao e Distribuicao</h1>
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