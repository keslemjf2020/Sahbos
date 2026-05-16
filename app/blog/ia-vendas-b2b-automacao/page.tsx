import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para vendas B2B: como automatizar prospeccao e follow-up - Automacao IA',
  openGraph: { title: 'IA para vendas B2B: como automatizar prospeccao e follow-up', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=IA%20para%20vendas%20B2B%3A%20como%20automatizar%20prospeccao%20e%20follow-up', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você busca leads, envia e-mail, espera resposta, esquece de follow-up, recomeça

80% dos vendedores desistem após o primeiro "não". Lead precisa de **5 a 7 interações** para fechar. Cada etapa manual consome tempo e depende de memória.

**IA para vendas B2B** automatiza prospecção e follow-up sem parecer robô.

## A arquitetura ideal do seu agente de vendas

Você precisa de três componentes funcionando juntos.

### Como funciona na prática:

| Componente | O que faz | Exemplo |
|------------|-----------|---------|
| Canal de entrada | Recebe o lead | Telegram, WhatsApp, formulário |
| Orquestrador | Conecta tudo | Make ou n8n |
| IA | Qualifica e responde | OpenAI, Gemini, DeepSeek |

**Ferramentas:** **Make** para conectar os blocos. **OpenAI** ou **DeepSeek** para inteligência. **Telegram** ou **WhatsApp** como canal.

## Passo a passo: bot de vendas que qualifica automaticamente

Lead chega no Telegram. IA pergunta, analisa e decide se vale seguir.

### Como configurar:

| Etapa | O que acontece | Ação da IA |
|-------|----------------|------------|
| 1 | Lead envia "olá, quero saber sobre o produto" | Responde com perguntas de qualificação |
| 2 | Lead responde: "dono de empresa, 10 funcionários" | Analisa perfil e decide se é lead quente |
| 3 | Lead qualificado | Encaminha para vendedor humano |

> **Dica prática:** Configure 3 perguntas de qualificação. Se o lead responder todas, é quente. Se não, entra em nutrição automática.

> ---
> **🚀 Quer automatizar a prospecção de vendas da sua empresa?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Follow-up automático que não parece robô

Lead pediu para pensar. Você esquece. IA lembra e envia mensagem personalizada no timing certo.

### Como funciona:

| Dia após contato | Mensagem da IA | Objetivo |
|------------------|----------------|----------|
| 1 dia | "Oi [nome], viu o material que enviei?" | Reforçar oferta |
| 3 dias | "Uma dúvida que surgiu: [pergunta personalizada]" | Engajar com valor |
| 7 dias | "Fechou com concorrente? Posso ajudar com [dor específica]" | Recuperar lead frio |

> **Exemplo real:** Uma empresa de software usava follow-up automático com IA. A taxa de conversão de leads frios **subiu de 5% para 18%** em 3 meses.

## Checklist para automatizar vendas B2B

- [ ] Configure canal de entrada (Telegram, WhatsApp ou formulário)
- [ ] Crie 3 perguntas de qualificação automática com IA
- [ ] Implemente follow-up automático com 3 mensagens em timing diferente
- [ ] Monitore a taxa de conversão de leads frios no primeiro mês`;
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
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #06b6d444 0%, transparent 50%), radial-gradient(circle at 70% 30%, #06b6d433 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para vendas B2B: como automatizar prospeccao e follow-up</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para vendas B2B: como automatizar prospeccao e follow-up</h1>
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