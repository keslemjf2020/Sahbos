import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Guia Completo de IA para Pequenos Negocios em 2026 - Automacao IA' };

export default function Page() {
  const content = `# Você acorda com 47 mensagens no WhatsApp. E agora?\n\nEnquanto você responde uma por uma, o cliente que ia comprar desistiu. O estoque que podia ter saído ficou parado. E você perdeu a manhã inteira digitando "sim, aceitamos cartão".\n\nPequenos negócios em 2026 têm acesso a ferramentas de IA que funcionam de verdade. Sem programação. Sem investimento alto. Só precisa saber onde aplicar.\n\n## 1. Chatbot que atende enquanto você vende\n\nO maior roubo de tempo do pequeno negócio é responder pergunta repetitiva. "Qual o horário?" "Tem entrega?" "Aceita PIX?"\n\nUm chatbot bem montado resolve 80% disso sozinho.\n\n**Ferramentas que funcionam:**\n- **ManyChat** — mais simples, ideal para começar\n- **Botpress** — mais flexível, bom para crescer\n\nConfigure respostas para as 5 perguntas mais frequentes. Depois, crie um gatilho: se o cliente perguntar "preço", o robô envia o catálogo automaticamente.\n\nResultado real: uma loja que atendia 30 clientes por dia passou a atender 80 com a mesma equipe. O robô qualifica. A vendedora só entra no final para fechar.\n\n## 2. Conteúdo para redes sociais em minutos\n\nManter Instagram, TikTok e YouTube atualizado consome horas que você podia estar vendendo. Ferramentas de IA cortam esse tempo pela metade.\n\n| Ferramenta | O que faz | Preço |\n|------------|-----------|-------|\n| **Canva Magic Studio** | Design + legenda pronta | Grátis / R\$ 49 |\n| **Opus Clip** | Gera 5 cortes de 1 vídeo | Grátis / R\$ 29 |\n| **ChatGPT** | Roteiros e legendas | Grátis / US\$ 20 |\n\n**Dica prática:** Grave um vídeo de 15 minutos falando do seu produto. Jogue no Opus Clip. Ele devolve 5 cortes prontos para Reels. Você posta um por dia e pronto.\n\n## 3. Finanças que não te surpreendem\n\nControle de fluxo de caixa é o calcanhar de Aquiles de quem empreende. Planilha no Excel que ninguém atualiza. Contas que vencem e você só descobre depois.\n\nFerramentas como **QuickBooks** ou **Conta Azul** usam IA para categorizar despesas automaticamente. Você tira foto do comprovante, e o sistema classifica. No fim do mês, tem relatório pronto.\n\n---\n\n## Checklist para começar ainda hoje\n\n- [ ] Liste as 5 perguntas que mais recebe no WhatsApp\n- [ ] Crie 1 fluxo automático no ManyChat (ex: "bom dia + cardápio")\n- [ ] Grave 1 vídeo de 15 minutos e jogue no Opus Clip\n- [ ] Configure 1 alerta de vencimento no QuickBooks ou Conta Azul`.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Guia Completo de IA para Pequenos Negocios em 2026</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
