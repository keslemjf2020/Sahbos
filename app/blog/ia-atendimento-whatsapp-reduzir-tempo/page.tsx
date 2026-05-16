import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp - Automacao IA',
  openGraph: { title: 'Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp', images: [{ url: 'https://images.unsplash.com/photo-1531747118028-2f5e5e5e5e5e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você responde a mesma pergunta 20 vezes por dia no WhatsApp

"Qual o horário?" "Tem estoque?" "Quanto custa?" Você digita a mesma resposta dezenas de vezes. Isso mata sua produtividade.

Enquanto você repete respostas, o cliente espera. Se demorar, ele vai para o concorrente.

**IA no WhatsApp** resolve isso. Você corta **80% do tempo de atendimento**. Sem programação complexa. Sem gastar fortunas.

## O que você precisa para começar

| Ferramenta | Função | Preço |
|------------|--------|-------|
| **WhatsApp Business API** | Canal oficial de atendimento | Grátis (via provedor) |
| **Make** | Orquestrador da automação | Grátis (1.000 op/mês) |
| **DeepSeek** | IA para entender e responder | Centavos por conversa |
| **Webhook** | Conecta WhatsApp ao Make | Grátis |

Tudo acessível. Você testa sem gastar nada.

## Passo a passo: WhatsApp + IA em 3 etapas

### 1. Configure a entrada das mensagens

No seu provedor WhatsApp Business API, crie um webhook apontando para o Make. Toda mensagem recebida dispara um cenário automaticamente.

\`\`\`
WhatsApp → Webhook → Make → DeepSeek → Resposta
\`\`\`

### 2. Crie o fluxo no Make

O cenário tem 4 módulos simples:

1. **Trigger:** Webhook recebe mensagem do WhatsApp
2. **Processamento:** DeepSeek analisa e classifica a pergunta
3. **Consulta:** Busca resposta na base de conhecimento
4. **Resposta:** Envia de volta pelo WhatsApp

> ---
> **🚀 Quer o template pronto?** Baixe grátis e configure em 30 minutos. [Comece agora](#)
> ---

### 3. Monte a base de conhecimento

Crie uma planilha no Google Sheets com as perguntas mais frequentes e suas respostas. A IA consulta essa base automaticamente.

| Pergunta do cliente | Resposta automática |
|---------------------|---------------------|
| "Qual o horário de funcionamento?" | "Seg a sex, 8h às 18h. Sáb, 8h às 12h." |
| "Tem [produto] em estoque?" | "Sim, temos. Consulte o link: [link]" |
| "Quanto custa [serviço]?" | "A partir de R\$ 97. Agende uma avaliação." |

> **Exemplo real:** Uma loja de roupas configurou chatbot no WhatsApp. As perguntas frequentes caíram de **50 por dia para 10 por dia**. O tempo médio de resposta **caiu de 15 minutos para 10 segundos**.

## Checklist para automatizar seu WhatsApp

- [ ] Solicite acesso à WhatsApp Business API (via provedor como WATI ou Z-API)
- [ ] Crie um cenário no Make com webhook + DeepSeek
- [ ] Monte a planilha com as 10 perguntas mais frequentes do seu negócio
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
      <div className="relative w-full h-48 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1531747118028-2f5e5e5e5e5e?w=1200&h=400&fit=crop" alt="Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-15</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-8">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
      <div className="max-w-3xl mx-auto px-6 pb-12"><AuthorBio /></div>
      <div className="border-t border-white/[0.04]"><div className="max-w-2xl mx-auto px-6 py-12 text-center"><p className="text-slate-400 text-sm mb-2">Receba guias praticos de IA toda semana</p><form className="flex max-w-sm mx-auto"><input type="email" placeholder="seu@email.com" className="flex-1 px-4 py-2 rounded-l-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30" /><button className="px-5 py-2 rounded-r-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90">Inscrever</button></form></div></div>
    </div>
  );
}