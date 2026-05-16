import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'RPA com IA: Como Automatizar Processos Repetitivos sem Programar - Automacao IA' };

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
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">RPA com IA: Como Automatizar Processos Repetitivos sem Programar</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">RPA com IA: Como Automatizar Processos Repetitivos sem Programar</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}