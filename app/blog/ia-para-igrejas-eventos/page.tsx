import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Igrejas: Automatize Eventos e Comunicacao - Automacao IA' };

export default function Page() {
  const raw = `# Você avisa 200 membros no grupo e metade não viu

Voluntários confirmam, mas ninguém sabe quem leva o quê. Culto especial chegando e você passa a semana ligando. No sábado, **30% dos que confirmaram não aparecem**.

**IA para igrejas** organiza eventos, comunicação e voluntários sem você ligar para ninguém.

## Agendamento e lembretes automáticos

Evento marcado não significa que as pessoas vão lembrar. IA cuida da comunicação em múltiplos canais.

### Como funciona na prática:

| Quando dispara | O que a IA envia | Resultado |
|----------------|------------------|-----------|
| 7 dias antes | "Evento sábado 19h. Confirme: [link]" | Membro confirma |
| 3 dias antes | "Faltam 3 dias! Confirme se vem." | Lembrete suave |
| 1 dia antes | "Amanhã é o dia! Leve seu prato." | Membro preparado |
| 2 horas antes | "Evento começa em 2h. Endereço: [maps]" | Presença garantida |

**Ferramentas:** **Igreja Fácil** ou **Church Management**. Um cadastro, múltiplos disparos automáticos.

> **Exemplo real:** Uma igreja em Salvador usava IA para comunicação de eventos. A presença nos eventos **subiu de 50% para 80%** dos confirmados. O líder gastava **2 horas por semana** em ligações. Passou a gastar zero.

> ---
> **🚀 Quer automatizar a comunicação da sua igreja?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Gestão de voluntários que organiza tudo

Voluntários confirmam, mas ninguém sabe quem leva o quê. IA gerencia escalas e tarefas.

### Como funciona:

- Voluntário se cadastra e informa disponibilidade
- IA monta escala automática com base nos horários
- Notifica cada voluntário com sua tarefa específica
- Envia lembrete 24h antes com instruções detalhadas

> **Dica prática:** Configure a IA para perguntar a disponibilidade dos voluntários uma vez por mês. Ela monta as escalas automaticamente e ninguém fica sobrecarregado.

## Checklist para organizar sua igreja com IA

- [ ] Configure lembretes automáticos para eventos em múltiplos canais
- [ ] Implemente gestão de voluntários com escalas automáticas
- [ ] Ative notificações de tarefas específicas para cada voluntário
- [ ] Monitore o aumento de presença nos eventos no primeiro mês`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Igrejas: Automatize Eventos e Comunicacao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Igrejas: Automatize Eventos e Comunicacao</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}