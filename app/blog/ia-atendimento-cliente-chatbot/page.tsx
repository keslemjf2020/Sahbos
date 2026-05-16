import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Chatbot com IA para Atendimento ao Cliente - Automacao IA' };

export default function Page() {
  const content = `# Chatbot com IA para Atendimento ao Cliente\n\n## Introdução\n\nCliente espera resposta em segundos, não horas. Um chatbot com IA resolve 80% das perguntas sem intervenção humana. Com Make, DeepSeek e WhatsApp, você monta um atendente virtual em uma tarde. Sem programar. Sem contratar equipe.\n\n## O Problema Real\n\nPequenos negócios perdem vendas porque demoram para responder. "Quanto custa?" "Tem em estoque?" "Qual o prazo?" são perguntas que repetem todo dia. Um chatbot com IA responde na hora, 24 horas por dia, 7 dias por semana.\n\n## O que Você Vai Precisar\n\n- **WhatsApp Business API** (via provedor como WATI, Twilio ou direct)\n- **Make** — orquestrador do fluxo ([link afiliado](https://www.make.com/en/register?pc=seulink))\n- **DeepSeek API** — IA para entender e responder\n- **Google Sheets** — base de conhecimento (opcional)\n\n## Passo a Passo\n\n### 1. Configure o Webhook de Entrada\n\nNo Make, crie um cenário com trigger "Webhook". Copie a URL gerada. Cole no provedor WhatsApp como endpoint. Toda mensagem que chegar no WhatsApp será enviada para o Make.\n\n\`\`\`\nWhatsApp -> Webhook Make -> DeepSeek -> Resposta\n\`\`\`\n\n### 2. Crie a Base de Conhecimento\n\nMonte uma planilha no Google Sheets com perguntas frequentes e respostas:\n\n| Palavra-chave | Resposta |\n|---------------|----------|\n| preco, valor, custo | Nossos produtos custam a partir de R\$49,90 |\n| horario, funcionamento | Funcionamos seg-sex 8h-18h, sab 8h-12h |\n| prazo, entrega, frete | Entrega em 5-10 dias uteis. Frete gratis acima de R\$200 |\n\n### 3. Configure o Prompt no DeepSeek\n\nO prompt define como o chatbot se comporta:\n\n\`\`\`\nVocê é um atendente da empresa [NOME]. Responda de forma educada e direta em no maximo 2 frases.\n\nRegras:\n- Consulte a planilha de FAQ antes de responder\n- Se não souber a resposta, diga "Vou transferir para um atendente"\n- Nao invente precos ou prazos\n- Use emojis com moderacao\n\nContexto atual: [INSERIR PERGUNTA DO CLIENTE]\n\`\`\`\n\n### 4. Monte o Fluxo no Make\n\n1. **Trigger:** Webhook recebe mensagem do cliente\n2. **Modulo Google Sheets:** Busca resposta na FAQ (match de palavra-chave)\n3. **Modulo HTTP:** Envia pergunta para DeepSeek com prompt\n4. **Filtro:** Se DeepSeek retornar "transferir", encaminha para humano\n5. **Modulo WhatsApp:** Envia resposta de volta\n\n### 5. Configure o Fallback Humano\n\nCrie um módulo que, quando a IA não souber responder:\n- Envia mensagem: "Deixa eu te transferir para um atendente"\n- Cria tarefa no Trello ou Asana\n- Envia notificação no seu celular\n\n## Exemplo Prático\n\n**Negócio:** Pet shop online\n\n**Fluxo real:**\n\n1. Cliente: "Oi, tem ração para gato castrado?"\n2. Webhook recebe no Make\n3. Google Sheets busca "ração gato castrado" -> não encontra\n4. DeepSeek recebe pergunta + prompt\n5. DeepSeek responde: "Temos sim! A ração Premium Gatos Castrados está por R\$89,90. Quer ver o link?"\n6. Make envia resposta via WhatsApp\n7. Cliente: "Quero!" -> IA envia link do produto\n\n**Resultado:** 15 segundos. Cliente feliz. Venda feita.\n\n## Cuidados Importantes\n\n- **Limite de escopo:** IA não resolve tudo. Defina o que ela pode fazer\n- **Transferência humana:** Sempre ofereça após 3 tentativas sem sucesso\n- **Monitoramento:** Reveja conversas uma vez por semana\n- **Custo:** DeepSeek custa centavos por mil mensagens\n- **Teste:** Simule 10 perguntas reais antes de ativar\n\n## Checklist Final\n\n- [ ] Conta WhatsApp Business API ativa\n- [ ] Webhook Make configurado e testado\n- [ ] Base de conhecimento no Google Sheets\n- [ ] Prompt DeepSeek ajustado para seu negócio\n- [ ] Fluxo de fallback humano funcionando\n- [ ] Teste com 10 perguntas reais\n- [ ] Monitoramento agendado semanalmente\n- [ ] Conta Make ativa ([link](https://www.make.com/en/register?pc=seulink))\n\nChatbot com IA não substitui atendimento humano — elimina o repetitivo. Monte o seu hoje e recupere horas do seu dia.`.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Chatbot com IA para Atendimento ao Cliente</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
