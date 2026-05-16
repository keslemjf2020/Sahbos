import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Guia Completo de IA para Pequenos Negocios em 2026 - Automacao IA',
  openGraph: { title: 'Guia Completo de IA para Pequenos Negocios em 2026', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/f59e0b?text=Guia%20Completo%20de%20IA%20para%20Pequenos%20Negocios%20em%202026', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você acorda com 47 mensagens no WhatsApp. E agora?

Enquanto você responde uma por uma, o cliente que ia comprar desistiu. O estoque que podia ter saído ficou parado. E você perdeu a manhã inteira digitando "sim, aceitamos cartão".

**Pequenos negócios em 2026** têm acesso a ferramentas de IA que funcionam de verdade. Sem programação. Sem investimento alto. Só precisa saber onde aplicar.

## Chatbot que atende enquanto você vende

O maior roubo de tempo do pequeno negócio é responder pergunta repetitiva. "Qual o horário?" "Tem entrega?" "Aceita PIX?"

Um chatbot bem montado resolve **80% disso** sozinho.

### Ferramentas que funcionam:

| Ferramenta | Ideal para | Diferencial |
|------------|------------|-------------|
| **ManyChat** | Começar | Mais simples |
| **Botpress** | Crescer | Mais flexível |

Configure respostas para as 5 perguntas mais frequentes. Depois, crie um gatilho: se o cliente perguntar "preço", o robô envia o catálogo automaticamente.

> **Exemplo real:** Uma loja que atendia 30 clientes por dia passou a atender **80 com a mesma equipe**. O robô qualifica. A vendedora só entra no final para fechar.

> ---
> **🚀 Quer automatizar o atendimento do seu negócio?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Conteúdo para redes sociais em minutos

Manter Instagram, TikTok e YouTube atualizado consome horas que você podia estar vendendo. IA gera em minutos.

### Como usar:

- **ChatGPT** ou **Claude** para criar legendas e roteiros
- Cole o tema do post e peça 3 versões com tom de venda
- Adapte para cada rede social em segundos

> **Dica prática:** Crie um template no ChatGPT com seu tom de voz. Toda semana, peça 10 ideias de posts. Escolha as 3 melhores e publique.

## Checklist para automatizar seu pequeno negócio

- [ ] Configure chatbot no WhatsApp para responder as 5 perguntas mais frequentes
- [ ] Crie gatilho automático para envio de catálogo quando perguntarem "preço"
- [ ] Use IA para gerar conteúdo semanal para redes sociais
- [ ] Monitore a redução de tempo gasto em atendimento e criação de conteúdo`;
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
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #f59e0b44 0%, transparent 50%), radial-gradient(circle at 70% 30%, #f59e0b33 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Negocios'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Negocios</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Guia Completo de IA para Pequenos Negocios em 2026</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#f59e0b20',color:'#f59e0b',border:'1px solid #f59e0b30'}}>Negocios</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Guia Completo de IA para Pequenos Negocios em 2026</h1>
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