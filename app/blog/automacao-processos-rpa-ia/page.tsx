import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'RPA com IA: Como Automatizar Processos Repetitivos sem Programar - Automacao IA',
  openGraph: { title: 'RPA com IA: Como Automatizar Processos Repetitivos sem Programar', images: [{ url: 'https://images.unsplash.com/photo-1677442136019-21765a90f986?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você perde horas toda semana com tarefas que um robô faria em segundos

Emitir nota fiscal. Conciliar banco. Disparar cobrança. Agendar posts. Tudo tarefa repetitiva que consome seu tempo enquanto o negócio para.

**RPA** (automação de processos) combinado com IA resolve isso sem você escrever uma linha de código. Em 2026, **68% das pequenas empresas brasileiras** já automatizaram pelo menos um processo desses.

## O que é RPA com IA na prática

RPA é um software que imita ações humanas no computador. Ele clica, copia, cola, preenche formulários. A IA entra para interpretar texto, imagens e tomar decisões simples.

### Diferença importante:

| Tipo | Funciona com | Exemplo |
|------|--------------|---------|
| RPA tradicional | Regras fixas | Só funciona se o e-mail tiver sempre o mesmo formato |
| RPA com IA | Contexto variável | Lê qualquer e-mail de pedido e extrai os dados |

Para seu negócio, isso significa automatizar processos que antes exigiam análise humana.

## Como automatizar do e-mail ao WhatsApp em 3 passos

Você vai criar um robô que lê e-mails de pedido, extrai os dados e envia confirmação no WhatsApp. Tudo com **Make**, uma plataforma visual que não precisa de código.

### Passo a passo:

1. **Trigger:** Novo e-mail na caixa de entrada
2. **IA:** DeepSeek extrai produto, quantidade e cliente
3. **Ação:** Make envia confirmação via WhatsApp

> ---
> **🚀 Crie seu primeiro robô hoje.** Template gratuito incluso. [Comece agora](#)
> ---

## 3 processos para automatizar ainda esta semana

Nem toda automação precisa ser complexa. Comece pelos processos que mais consomem seu tempo.

### Processos com retorno imediato:

| Processo | Tempo manual | Com RPA + IA |
|----------|-------------|--------------|
| Leitura de e-mails de pedido | 30 min/dia | 2 min/dia |
| Conciliação de extratos | 2 horas/mês | 5 min/mês |
| Disparo de cobrança | 1 hora/dia | Zero |

> **Exemplo real:** Uma distribuidora de alimentos automatizou a leitura de e-mails de pedido. O processo que tomava **30 minutos por dia** passou a ser feito em **2 minutos**. Em um mês, recuperaram **10 horas** de trabalho.

## Checklist para automatizar seus primeiros processos

- [ ] Identifique 3 tarefas repetitivas que você faz toda semana
- [ ] Escolha UMA para automatizar (comece pela mais simples)
- [ ] Configure o fluxo no Make usando o template gratuito
- [ ] Teste com dados reais antes de colocar em produção`;
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
        <img src="https://images.unsplash.com/photo-1677442136019-21765a90f986?w=1200&h=400&fit=crop" alt="RPA com IA: Como Automatizar Processos Repetitivos sem Programar" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">RPA com IA: Como Automatizar Processos Repetitivos sem Programar</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#06b6d420', color: '#06b6d4', border: '1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">RPA com IA: Como Automatizar Processos Repetitivos sem Programar</h1>
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