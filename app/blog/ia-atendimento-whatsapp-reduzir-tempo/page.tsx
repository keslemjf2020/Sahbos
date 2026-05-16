import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp - Automação IA' };

export default function Page() {
  const content = '# Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp\n\n## Introdução\n\nAtender cliente no WhatsApp consome horas do seu dia. Perguntas repetitivas, respostas iguais, demora para responder. IA resolve isso. Com WhatsApp Business API, Make e DeepSeek, você corta 80% do tempo de atendimento. Sem programação complexa. Sem gastar fortunas.\n\n## O Problema Real\n\nPequenos negócios recebem dezenas de mensagens por dia. "Qual o horário?" "Tem estoque?" "Quanto custa?" Você responde a mesma coisa 20 vezes. Isso mata sua produtividade. Automação com IA elimina esse gargalo.\n\n## O que Você Vai Precisar\n\n- **WhatsApp Business API** — acesso oficial (via provedor como WATI ou direct)\n- **Make** — orquestrador da automação ([link afiliado](https://www.make.com/en/register?pc=seulink))\n- **DeepSeek API** — IA para entender e responder (custo: centavos por conversa)\n- **Webhook** — conectar WhatsApp ao Make\n\n## Passo a Passo\n\n### 1. Configure o Webhook do WhatsApp\n\nNo seu provedor WhatsApp Business API, crie um webhook apontando para o Make. Toda mensagem recebida dispara um cenário automaticamente.\n\n```\nWhatsApp -> Webhook -> Make -> DeepSeek -> Resposta\n```\n\n### 2. Crie o Cenário no Make\n\n- **Trigger:** Webhook recebe mensagem do cliente\n- **Filtro:** Ignora mensagens de áudio ou imagem (opcional)\n- **Módulo HTTP:** Envia texto para DeepSeek API\n- **Módulo WhatsApp:** Envia resposta de volta\n\n### 3. Configure o Prompt no DeepSeek\n\nO segredo está no prompt. Use algo como:\n\n```\nVocê é um atendente de [seu negócio]. Responda de forma educada e direta. \nSe não souber a resposta, diga "Vou transferir para um humano".\nRegras: \n- Máximo 2 frases\n- Não invente informações\n- Use tom profissional mas amigável\n```\n\n### 4. Teste o Fluxo\n\nEnvie "Qual o horário de funcionamento?" para seu WhatsApp. Em segundos, a IA responde. Ajuste o prompt conforme necessário.\n\n## Exemplo Prático\n\n**Negócio:** Loja de roupas online\n\n**Antes:** 3 horas/dia respondendo "Tem camisa M?" "Qual o prazo?" "Aceita cartão?"\n\n**Depois:** IA responde 90% das perguntas. Humano só entra em casos complexos (troca, reclamação).\n\n**Fluxo:**\n1. Cliente: "Tem camisa azul M?"\n2. Make recebe via webhook\n3. DeepSeek consulta planilha de estoque (via API)\n4. Resposta: "Temos sim! Camisa azul M por R$89,90. Quer ver o link?"\n5. Cliente feliz em 3 segundos\n\n## Cuidados Importantes\n\n- **Limite de escopo:** IA não resolve tudo. Defina o que ela pode e não pode fazer\n- **Fallback humano:** Sempre ofereça "Falar com atendente" após 3 tentativas\n- **Monitoramento:** Reveja conversas uma vez por semana para ajustar prompts\n- **Custo:** DeepSeek custa ~R$0,001 por mensagem. Make plano básico $9/mês\n\n## Checklist Final\n\n- [ ] Conta WhatsApp Business API ativa\n- [ ] Webhook configurado e testado\n- [ ] Cenário Make criado com trigger webhook\n- [ ] Prompt DeepSeek ajustado para seu negócio\n- [ ] Fallback humano funcionando\n- [ ] Teste com 5 perguntas reais\n- [ ] Monitoramento agendado semanalmente\n\nAutomação não substitui atendimento humano — elimina o repetitivo. Comece hoje com [Make](https://www.make.com/en/register?pc=seulink) e recupere horas do seu dia.'.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-15</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
