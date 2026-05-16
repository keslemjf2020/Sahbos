import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'RPA com IA: Como Automatizar Processos Repetitivos sem Programar - Automacao IA' };

export default function Page() {
  const content = `# Você perde horas toda semana com tarefas que um robô faria em segundos\n\nEmitir nota fiscal. Conciliar banco. Disparar cobrança. Agendar posts. Tudo tarefa repetitiva que consome seu tempo enquanto o negócio para.\n\nRPA (automação de processos) combinado com IA resolve isso sem você escrever uma linha de código. Em 2026, 68% das pequenas empresas brasileiras já automatizaram pelo menos um processo desses.\n\n## O que é RPA com IA na prática\n\nRPA é um software que imita ações humanas no computador. Ele clica, copia, cola, preenche formulários. A IA entra para interpretar texto, imagens e tomar decisões simples.\n\n**Diferença importante:**\n\n| Tipo | Funciona com | Exemplo |\n|------|--------------|---------|\n| RPA tradicional | Regras fixas | Só funciona se o e-mail tiver sempre o mesmo formato |\n| RPA com IA | Contexto variável | Lê qualquer e-mail de pedido e extrai os dados |\n\nPara seu negócio, isso significa automatizar processos que antes exigiam análise humana.\n\n## Como automatizar do e-mail ao WhatsApp em 3 passos\n\nVocê vai criar um robô que lê e-mails de pedido, extrai os dados e envia confirmação no WhatsApp. Tudo com **Make**, uma plataforma visual que não precisa de código.\n\n### 1. Conecte seu e-mail no Make\n\nCrie uma conta gratuita no [Make](https://www.make.com/). São 1000 operações por mês sem pagar nada.\n\nDepois, conecte sua caixa de entrada. O Make vai monitorar e-mails novos automaticamente.\n\n### 2. Configure a IA para extrair dados do pedido\n\nQuando chegar um e-mail com "Pedido #123 - 2 camisetas azuis", a IA precisa entender: número do pedido, itens, valor.\n\nNo Make, use o módulo **OpenAI** ou **DeepSeek** para interpretar o texto do e-mail. A IA devolve os dados organizados.\n\n### 3. Dispare a confirmação no WhatsApp\n\nCom os dados extraídos, conecte o **ManyChat** ou **Botpress** no Make. O robô cria o lead no CRM e envia:\n\n"Olá! Recebemos seu pedido #123. 2 camisetas azuis. Previsão de entrega: 3 dias úteis."\n\nTudo automático. Sem você digitar nada.\n\n---\n\n## Checklist para automatizar seu primeiro processo\n\n- [ ] Liste 3 tarefas repetitivas que você faz toda semana\n- [ ] Escolha a mais simples (ex: responder e-mail de pedido)\n- [ ] Crie conta no Make e conecte seu e-mail\n- [ ] Configure 1 fluxo completo (e-mail → IA → WhatsApp)`.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">RPA com IA: Como Automatizar Processos Repetitivos sem Programar</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
