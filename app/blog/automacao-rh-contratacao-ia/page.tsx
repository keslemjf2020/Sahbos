import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'Como Automatizar RH e Contratacao com IA - Automacao IA' };

export default function Page() {
  const raw = `# Você publica uma vaga e recebe 200 currículos em 24 horas

Ler um por um leva dias. Marcar entrevista é um vai-e-vem de e-mails. No fim, você contrata na pressa porque a vaga está aberta há semanas.

Automatizar RH com IA elimina o gargalo da triagem e acelera a contratação sem perder qualidade. São 3 áreas que entregam resultado imediato.

## Triagem de currículos em horas, não em dias

Ferramentas como **TurboHire** e **Manatal** usam IA para ler currículos e classificar candidatos por compatibilidade.

### Como funciona na prática:

| Etapa | O que a IA faz | Resultado |
|-------|----------------|-----------|
| Recebe 200 currículos | Varre e pontua cada um | Classifica do melhor ao pior |
| Filtra por critérios | Formação, experiência, habilidades | Só os 10 melhores vão para o RH |
| Gera relatório | Resumo de cada candidato | Análise em 2 horas |

> **Exemplo real:** Uma empresa de tecnologia recebia 150 currículos por vaga. Com triagem por IA, reduziu o tempo de análise de **3 dias para 2 horas**. O RH só olhava os 15% melhores classificados.

## Agendamento de entrevista sem e-mail

O vai-e-vem de e-mails para achar um horário comum é um dos maiores desperdícios de tempo no RH.

### Como resolver:

- **Calendly** ou **TidyCal** mostram sua agenda disponível
- Candidato escolhe o horário que encaixa
- Confirmação automática com link de videoconferência
- Lembrete enviado 24h antes

> ---
> **🚀 Automatize seu processo seletivo em 1 hora.** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Perguntas frequentes que o robô responde sozinho

Candidatos enviam as mesmas perguntas repetitivas sobre a vaga. IA responde automaticamente sem ocupar o RH.

### O que o chatbot responde:

- **Requisitos:** Formação, experiência, habilidades técnicas
- **Benefícios:** Salário, vale-refeição, plano de saúde
- **Processo:** Etapas, prazos, formato das entrevistas
- **Feedback:** Status da candidatura, resultado final

## Checklist para automatizar seu RH

- [ ] Configure a triagem automática de currículos com IA
- [ ] Ative o agendamento online de entrevistas (Calendly ou similar)
- [ ] Crie um chatbot para responder perguntas frequentes sobre a vaga
- [ ] Monitore o tempo de fechamento de vaga na primeira semana`;
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
            <span className="text-slate-400 truncate max-w-[200px]">Como Automatizar RH e Contratacao com IA</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Automatizar RH e Contratacao com IA</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}