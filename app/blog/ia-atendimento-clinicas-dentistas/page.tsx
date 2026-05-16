import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Dentistas: Automatize Agendamento e Confirmacao - Automacao IA',
  openGraph: { title: 'IA para Dentistas: Automatize Agendamento e Confirmacao', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/10b981?text=IA%20para%20Dentistas%3A%20Automatize%20Agendamento%20e%20Confirmacao', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Paciente marca consulta e não aparece. Você perde R\$ 4.000 por mês

Segunda-feira 14h. Paciente confirmou. Você preparou o consultório. Ele não vem. Você perdeu 40 minutos de agenda. Outro paciente que poderia ter sido atendido ficou sem vaga.

No fim do mês, **20 faltas**. Horários vazios que poderiam estar ocupados.

**IA para dentistas** resolve o problema de faltas e otimiza sua agenda. São 3 áreas que entregam resultado imediato.

## Agendamento que o paciente faz sozinho em 30 segundos

Paciente quer marcar, mas seu horário disponível não encaixa. Você perde o paciente. IA otimiza a agenda em tempo real.

### Como funciona na prática:

| O que o paciente quer | O que a IA mostra | Resultado |
|-----------------------|-------------------|-----------|
| "Segunda à tarde" | Horários compatíveis com procedimentos longos | Agenda otimizada |
| "Limpeza, qualquer horário" | Vagas curtas entre procedimentos | Aproveita gaps |
| "Canal, prefiro manhã" | Blocos de 2h disponíveis pela manhã | Procedimento encaixa |

**Ferramentas:** **ClinicWeb** ou **Dental Office** com módulo de IA. Paciente acessa link, escolhe e confirma em 30 segundos.

> **Exemplo real:** Uma clínica em São Paulo implementou agendamento inteligente. A taxa de faltas **caiu de 20% para 5%** em 3 meses. O faturamento **subiu R\$ 4.000/mês**.

> ---
> **🚀 Automatize sua clínica em 1 dia.** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Lembretes que reduzem faltas em 70%

Paciente confirma e esquece. Com IA, você envia lembretes automáticos no WhatsApp sem precisar de secretária.

### Como configurar:

- **48h antes:** "Lembrete: consulta dia 15/05 às 14h. Confirme presença."
- **24h antes:** Reenvio para quem não confirmou
- **2h antes:** "Seu horário é daqui a 2 horas. Estamos prontos."
- **Cancelamento:** Se paciente não confirmar, horário é liberado automaticamente

## Checklist para implantar IA na sua clínica

- [ ] Configure o agendamento online com link para o paciente
- [ ] Ative os lembretes automáticos no WhatsApp (48h, 24h e 2h)
- [ ] Implemente a liberação automática de horários não confirmados
- [ ] Monitore a taxa de faltas na primeira quinzena`;
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
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #10b98144 0%, transparent 50%), radial-gradient(circle at 70% 30%, #10b98133 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Saude'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Saude</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Dentistas: Automatize Agendamento e Confirmacao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#10b98120',color:'#10b981',border:'1px solid #10b98130'}}>Saude</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Dentistas: Automatize Agendamento e Confirmacao</h1>
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