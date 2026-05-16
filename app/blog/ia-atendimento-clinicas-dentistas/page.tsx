import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'IA para Dentistas: Automatize Agendamento e Confirmacao - Automação IA' };

export default function Page() {
  const content = '---\ntitle: "IA para Dentistas: Automatize Agendamento e Confirmação"\ndate: "2026-05-15"\ndescription: "Guia prático de IA para dentistas em 2026: agendamento inteligente, confirmação automática, lembretes personalizados e redução de faltas."\ncategory: "Saúde"\nreadingTime: "3 min"\ntags: ["IA", "dentista", "agendamento", "automacao", "odontologia"]\n---\n\nPaciente marca consulta para segunda-feira 14h. Segunda-feira chega, ele não aparece. Você perdeu 40 minutos de agenda. O paciente que poderia ter sido atendido naquele horário ficou sem vaga. No fim do mês, você soma 20 faltas. São R$ 4.000 perdidos em horários vazios que poderiam estar ocupados.\n\nIA para dentistas em 2026 resolve o problema de faltas e otimiza sua agenda. Vou mostrar 3 áreas onde a automação entrega resultado imediato.\n\n## 1. Agendamento Inteligente com Preferências do Paciente\n\nPaciente quer marcar, mas seu horário disponível não encaixa. Você perde o paciente. IA otimiza a agenda em tempo real.\n\n**Como funciona:**\n- Ferramentas como **ClinicWeb** ou **Dental Office** com módulo de IA\n- Paciente acessa link de agendamento\n- IA mostra apenas horários compatíveis com: tipo de procedimento, duração estimada, preferência do paciente (manhã/tarde), disponibilidade do dentista\n- Paciente escolhe e confirma em 30 segundos\n\n**Exemplo real:** Uma clínica odontológica em São Paulo implementou agendamento inteligente. A taxa de conversão de lead para consulta agendada subiu de 40% para 75%. O paciente marcava no momento do contato, sem "vou ver e te ligo".\n\n## 2. Confirmação e Lembretes Automáticos\n\nA principal causa de falta é esquecimento. Um lembrete bem programado reduz faltas em até 70%.\n\n**Ferramentas para 2026:**\n\n| Ferramenta | Função | Preço |\n|------------|--------|-------|\n| Dental Office | Gestão completa + lembretes | R$ 129/mês |\n| ClinicWeb | Agendamento + confirmação | R$ 79/mês |\n| WhatsApp Business + IA | Lembretes personalizados | Grátis |\n| Simple Agenda | Lembretes automáticos | R$ 49/mês |\n\n**Dica prática:** Configure 3 lembretes automáticos:\n- 48h antes: "Lembrete: consulta na terça 14h. Confirma presença? Responda SIM."\n- 24h antes: "Confirmação recebida! Seu horário está reservado."\n- 2h antes: "Lembrete: consulta em 2 horas. Endereço: [link Maps]"\n\nSe o paciente não confirmar em 48h, a IA libera o horário para outro paciente.\n\n## 3. Lista de Espera Inteligente com Ocupação Automática\n\nPaciente desmarcou em cima da hora? Com IA, outro paciente da lista de espera é chamado automaticamente.\n\n**Passo a passo:**\n1. Paciente desmarca com menos de 24h de antecedência\n2. IA dispara mensagem para o primeiro da lista de espera: "Surgiu um horário hoje às 15h. Tem interesse?"\n3. Paciente responde SIM → horário é preenchido automaticamente\n4. Paciente responde NÃO → IA chama o próximo da lista\n\n**Resultado:** Agenda sempre cheia. Zero horário perdido por desistência de última hora.\n\n👉 **[Automatize seu consultório com Make](https://www.make.com/en/register?pc=guiaia2026)** — conecte agendamento, WhatsApp e lista de espera em um fluxo único.\n\n---\n\n**Checklist para reduzir faltas hoje:**\n- [ ] Configure link de agendamento inteligente\n- [ ] Ative lembretes automáticos em 3 etapas (48h, 24h, 2h)\n- [ ] Crie lista de espera com chamada automática\n- [ ] Monitore a taxa de falta semanalmente\n- [ ] Ajuste os horários de lembrete baseado nos resultados\n\nIA para dentistas não é sobre substituir o atendimento humano. É sobre garantir que cada horário na sua agenda seja ocupado por um paciente que realmente vai aparecer. Enquanto a IA confirma, lembra e preenche desistências, você foca no que faz melhor: cuidar do sorriso dos seus pacientes.'.split('\\n').map((l,i) => {
    if (l.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{l.slice(3)}</h2>;
    if (l.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{l.slice(4)}</h3>;
    if (l.startsWith('|')) return <p key={i} className="font-mono text-xs text-slate-400 my-1">{l}</p>;
    if (!l.trim()) return <br key={i} />;
    if (l.startsWith('[') && l.includes('](')) {
      const m = l.match(/\[(.+?)\]\((.+?)\)/);
      if (m) return <p key={i} className="my-2"><a href={m[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline">{m[1]}</a></p>;
    }
    return <p key={i} className="text-slate-300 leading-relaxed mb-3">{l}</p>;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6">← Voltar</Link>
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">IA</span>
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">IA para Dentistas: Automatize Agendamento e Confirmacao</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
