import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade - Automacao IA' };

export default function Page() {
  const content = `# Você acha que IA boa custa caro?\n\nDeepSeek dá 500 usos por dia de graça. Make libera 1.000 operações por mês. Canva oferece 50 gerações de IA mensais. ChatGPT tem plano free com GPT-4o.\n\nA guerra entre OpenAI, DeepSeek, Google e Anthropic beneficiou você. Todas mantêm planos gratuitos para atrair usuários. A diferença está nos limites e na qualidade.\n\n## O que você consegue de graça em 2026\n\n| Ferramenta | Limite grátis | Melhor para |\n|------------|---------------|-------------|\n| **DeepSeek Chat** | 500 requisições/dia | Texto, análise de arquivos |\n| **ChatGPT Free** | 50 msg a cada 3h | Conversas rápidas |\n| **Canva IA** | 50 gerações/mês | Design e imagens |\n| **Make** | 1.000 operações/mês | Automação de processos |\n| **Whisper** | Ilimitado (self-hosted) | Transcrição de áudio |\n\n## DeepSeek Chat: o melhor custo-benefício\n\n500 requisições por dia. Modelo de alta qualidade. Suporte a upload de PDF, Word, Excel e imagens. Superior ao ChatGPT Free em limite diário.\n\n**Na prática:** Um freelancer de marketing usa DeepSeek para resumir relatórios de 30 páginas em 5 minutos. De graça.\n\n## Canva Magic Studio: design sem pagar\n\n50 gerações de IA por mês no plano grátis. Cria posts, banners, apresentações. A IA sugere layouts e escreve legendas.\n\n**Na prática:** Uma loja virtual gera 10 posts de Instagram por semana. O plano grátis cobre o mês inteiro.\n\n## Make: automatize sem código\n\n1.000 operações por mês. Conecta WhatsApp, e-mail, planilhas, CRM. Cria fluxos como "e-mail de pedido → extrair dados com IA → enviar confirmação".\n\n**Na prática:** Um pequeno negócio automatizou o disparo de cobrança. Reduziu inadimplência em 15% sem gastar um real.\n\n---\n\n## Checklist para começar sem pagar nada\n\n- [ ] Crie conta no **DeepSeek** e teste com 1 tarefa real hoje\n- [ ] Abra o **Canva** e gere 3 posts com IA para suas redes\n- [ ] Conecte **Make** + seu e-mail para automatizar 1 processo\n- [ ] Instale o **Whisper** localmente se precisa transcrever áudio`.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
