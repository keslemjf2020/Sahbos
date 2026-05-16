import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'IA no Atendimento Medico: Chatbots e Triagem - Automação IA' };

export default function Page() {
  const content = '---\ntitle: "IA no Atendimento Médico: Chatbots e Triagem"\ndate: "2026-05-15"\ndescription: "Guia prático de IA para atendimento médico em 2026: chatbots para triagem de sintomas, agendamento inteligente e pré-consulta automatizada."\ncategory: "Saúde"\nreadingTime: "3 min"\ntags: ["IA", "medicina", "chatbot", "triagem", "atendimento medico"]\n---\n\nSeu consultório recebe 50 ligações por dia. Paciente quer saber se o sintoma é grave, se precisa ir ao pronto-socorro, se o horário está disponível. Sua recepcionista passa o dia no telefone enquanto pacientes na sala de espera aguardam. No fim do dia, 3 consultas foram perdidas porque o paciente desistiu de esperar.\n\nIA no atendimento médico em 2026 não substitui o diagnóstico do médico. Ela organiza o fluxo de pacientes para que você atenda quem realmente precisa, na hora certa. Vou mostrar 3 áreas onde a automação entrega resultado imediato.\n\n## 1. Chatbot de Triagem de Sintomas\n\nPaciente chega com dor de cabeça. É tensão ou algo sério? Um chatbot com IA faz a primeira avaliação.\n\n**Como funciona:**\n- Ferramentas como **Babylon Health** ou **Symptoma** integram com seu consultório\n- Paciente descreve os sintomas no WhatsApp ou site\n- IA faz perguntas de acompanhamento (intensidade, duração, localização)\n- Classifica: emergência (vai para UPA), urgência (consulta hoje), rotina (agenda normal)\n\n**Exemplo real:** Uma clínica em Belo Horizonte implantou triagem por chatbot. O número de pacientes que iam ao pronto-socorro sem necessidade caiu 40%. O chatbot orientava casos leves a agendar consulta em vez de ir para emergência.\n\n## 2. Agendamento Inteligente com Base na Urgência\n\nNem todo paciente precisa ser atendido amanhã. Mas alguns não podem esperar 15 dias.\n\n**Ferramentas para 2026:**\n\n| Ferramenta | Função | Preço |\n|------------|--------|-------|\n| Doctoralia | Agendamento + triagem | Grátis / R$ 99/mês |\n| Memed + IA | Prescrição + agenda | R$ 79/mês |\n| Pliim | Triagem + prontuário | R$ 97/mês |\n\n**Dica prática:** Configure o agendamento para priorizar pacientes com sintomas mais graves. A IA analisa a triagem e sugere: "paciente com febre alta há 3 dias → agenda para hoje". "Paciente com check-up de rotina → agenda para próxima semana".\n\n## 3. Pré-consulta Automatizada\n\nPaciente chega e você precisa perguntar tudo de novo: alergias, medicamentos, histórico cirúrgico. Com IA, isso vem pronto antes da consulta começar.\n\n**Passo a passo da automação:**\n1. Consulta agendada → IA envia formulário de pré-consulta\n2. Paciente preenche no celular (5 minutos)\n3. IA organiza as respostas em formato de prontuário\n4. Você recebe o resumo antes do paciente entrar na sala\n\nGanha 5 minutos por consulta. Em um dia de 20 pacientes, são 100 minutos economizados. Quase 2 horas que viram atendimento de qualidade.\n\n👉 **[Automatize seu consultório com Make](https://www.make.com/en/register?pc=guiaia2026)** — conecte chatbot, agendamento e prontuário em um fluxo único.\n\n---\n\n**Checklist para implementar hoje:**\n- [ ] Configure chatbot de triagem no WhatsApp da clínica\n- [ ] Crie perguntas padrão para classificação de urgência\n- [ ] Automatize o envio de formulário de pré-consulta\n- [ ] Ajuste a agenda para priorizar casos urgentes\n- [ ] Teste o fluxo completo com 10 pacientes reais\n\nIA no atendimento médico não é sobre máquina diagnosticando paciente. É sobre garantir que o paciente certo seja atendido pelo médico certo, no momento certo. A triagem, o agendamento e a papelada são trabalho de máquina. O olho no olho, a escuta ativa e o diagnóstico são trabalho de médico.'.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">IA no Atendimento Medico: Chatbots e Triagem</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
