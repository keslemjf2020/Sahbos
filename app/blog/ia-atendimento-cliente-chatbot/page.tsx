import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'Chatbot com IA para Atendimento ao Cliente - Automacao IA' };

export default function Page() {
  const raw = `# Cliente pergunta e você demora horas para responder

"Quanto custa?" "Tem em estoque?" "Qual o prazo?" São as mesmas perguntas todo dia. Enquanto você não responde, o cliente vai para o concorrente.

Um **chatbot com IA** responde na hora, 24 horas por dia, 7 dias por semana. Resolve **80% das perguntas** sem você tocar no celular.

## O que você precisa para montar seu chatbot

| Ferramenta | Função | Preço |
|------------|--------|-------|
| **WhatsApp Business API** | Canal de atendimento | Grátis (via provedor) |
| **Make** | Orquestrador do fluxo | Grátis (1.000 op/mês) |
| **DeepSeek** | IA para entender e responder | Grátis (500 req/dia) |
| **Google Sheets** | Base de conhecimento | Grátis |

Tudo gratuito para começar. Você monta em uma tarde.

## Passo a passo: WhatsApp + IA em 4 etapas

### 1. Configure a entrada de mensagens

No Make, crie um cenário com trigger **Webhook**. Copie a URL gerada. Cole no provedor WhatsApp como endpoint.

Toda mensagem que chegar no WhatsApp será enviada para o Make.

\`\`\`
WhatsApp → Webhook Make → DeepSeek → Resposta
\`\`\`

### 2. Monte a base de conhecimento

Crie uma planilha no Google Sheets com perguntas frequentes e respostas.

| Palavra-chave | Resposta |
|---------------|----------|
| "preço", "quanto custa" | "Nossos planos começam em R\$ 97/mês" |
| "estoque", "disponível" | "Consulte disponibilidade no site" |
| "prazo", "entrega" | "Prazo médio de 5 dias úteis" |

> ---
> **🚀 Quer o template pronto do chatbot?** Baixe grátis e configure em 30 minutos. [Comece agora](#)
> ---

### 3. Conecte a IA para entender perguntas

Adicione o módulo **DeepSeek** no Make. Configure o prompt para que a IA leia a mensagem do cliente e busque a resposta na planilha.

O prompt ideal:

> "Você é um atendente virtual. Responda a pergunta do cliente com base na planilha. Se não encontrar, peça para aguardar um humano."

### 4. Envie a resposta de volta

Adicione o módulo **WhatsApp** no Make para enviar a resposta gerada pela IA de volta ao cliente.

Pronto. Seu chatbot está funcionando 24h por dia.

## Checklist para montar seu chatbot hoje

- [ ] Crie uma conta no Make (grátis) e no provedor WhatsApp Business
- [ ] Monte a planilha com as 10 perguntas mais frequentes do seu negócio
- [ ] Configure o fluxo: Webhook → DeepSeek → WhatsApp
- [ ] Teste com 3 perguntas reais antes de colocar em produção`;
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
            <span className="text-slate-400 truncate max-w-[200px]">Chatbot com IA para Atendimento ao Cliente</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Chatbot com IA para Atendimento ao Cliente</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}