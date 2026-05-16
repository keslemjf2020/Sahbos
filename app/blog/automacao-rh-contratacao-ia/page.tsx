import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Como Automatizar RH e Contratacao com IA - Automacao IA' };

export default function Page() {
  const content = `---\ntitle: "Como Automatizar RH e Contratação com IA"\ndate: "2026-05-15"\ndescription: "Guia prático para automatizar processos de RH com IA: triagem de currículos, agendamento de entrevistas e onboarding em 2026."\ncategory: "Automação"\nreadingTime: "3 min"\ntags: ["RH", "contratacao", "IA", "automacao", "recursos humanos"]\n---\n\nVocê publica uma vaga e recebe 200 currículos em 24 horas. Ler um por um leva dias. Marcar entrevista é um vai-e-vem de e-mails. No fim, você contrata na pressa porque a vaga está aberta há semanas. Esse cenário é comum em 2026, mas não precisa ser.\n\nAutomatizar RH com IA elimina o gargalo da triagem e acelera a contratação sem perder qualidade. Vou mostrar 3 áreas onde a automação entrega resultado imediato.\n\n## 1. Triagem Automática de Currículos\n\nFerramentas como **TurboHire** e **Manatal** usam IA para ler currículos e classificar candidatos por compatibilidade.\n\n**Como funciona:**\n- Você define os critérios essenciais (formação, anos de experiência, habilidades)\n- A IA varre os currículos e pontua cada candidato\n- Os 10 melhores vão para uma lista separada para revisão humana\n\n**Exemplo real:** Uma empresa de tecnologia recebia 150 currículos por vaga. Com triagem por IA, reduziu o tempo de análise de 3 dias para 2 horas. O RH só olhava os 15% melhores classificados.\n\n## 2. Agendamento Automático de Entrevistas\n\nO vai-e-vem de e-mails para achar um horário comum é um dos maiores desperdícios de tempo no RH.\n\n**Ferramentas para 2026:**\n\n| Ferramenta | Função | Preço |\n|------------|--------|-------|\n| Calendly | Agendamento automático | Grátis / R\$ 30/mês |\n| Clara Labs | Assistente de agendamento | US\$ 99/mês |\n| x.ai | Agendamento por e-mail | US\$ 50/mês |\n\n**Dica prática:** Integre o Calendly com seu e-mail. O candidato escolhe o horário disponível. A ferramenta cria o evento no Google Agenda e envia confirmação. Zero troca de e-mails.\n\n## 3. Onboarding Automatizado\n\nDepois de contratar, começa a papelada: contrato, documentos, acesso a sistemas, apresentação para a equipe. Tudo isso pode ser automatizado.\n\n**Passo a passo da automação:**\n1. Candidato aceita proposta → dispara e-mail com link para documentos\n2. Documentos assinados (Clicksign) → vão direto para o drive\n3. Make cria conta de e-mail, Slack e acessos automaticamente\n4. Novo funcionário recebe cronograma de onboarding nos primeiros 30 dias\n\nTudo pronto antes do primeiro dia de trabalho.\n\n👉 **[Automatize seu RH com Make](https://www.make.com/en/register?pc=guiaia2026)** — conecte formulários, e-mail, calendário e sistemas em um fluxo único.\n\n---\n\n**Checklist para automatizar hoje:**\n- [ ] Configure triagem automática para a próxima vaga\n- [ ] Integre Calendly ao e-mail de recrutamento\n- [ ] Crie template de e-mail automático para candidatos aprovados\n- [ ] Mapeie o onboarding em 5 etapas no Make\n- [ ] Teste o fluxo completo com uma contratação real\n\nAutomatizar RH com IA não é sobre desumanizar a contratação. É sobre gastar seu tempo com as pessoas certas, não com pilhas de currículo.`.split('\\n').map((l,i) => {
    if (l.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{l.slice(3)}</h2>;
    if (l.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{l.slice(4)}</h3>;
    if (l.startsWith('|')) return <p key={i} className="font-mono text-xs text-slate-400 my-1">{l}</p>;
    if (!l.trim()) return <br key={i} />;
    if (l.startsWith('[') && l.includes('](')) {
      const m = l.match(/\[(.+?)\]\((.+?)\)/);
      if (m) return <p key={i} className="my-2"><a href={m[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline">{m[1]}</a></p>;
    }
    if (l.startsWith('- [ ]')) return <p key={i} className="flex items-center gap-2 text-slate-300 my-1"><input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" readOnly />{l.slice(5)}</p>;
    return <p key={i} className="text-slate-300 leading-relaxed mb-3">{l}</p>;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6">← Voltar</Link>
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">IA</span>
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Como Automatizar RH e Contratacao com IA</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
