import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'ChatGPT vs DeepSeek vs Claude: Qual a Melhor IA em 2026 - Automacao IA' };

export default function Page() {
  const content = `# Você abre 3 abas e não sabe qual IA escolher\n\nChatGPT. DeepSeek. Claude. Cada amigo recomenda um. Um é grátis, outro cobra, um terceiro promete ser mais esperto. Você testa todos e fica perdido.\n\nA verdade é simples: **não existe melhor IA**. Existe a certa para o que você precisa fazer agora.\n\n## DeepSeek: o rei da programação\n\nSe você mexe com código, comece por aqui. O modelo R1 do DeepSeek é bom em tarefas que exigem raciocínio lógico passo a passo.\n\n**Onde ele brilha:**\n- Código complexo em Python, TypeScript e SQL\n- Explicação de bugs linha a linha\n- Grátis sem limite diário na versão web\n\n**Onde ele pecsa:** Conteúdo criativo e marketing. As respostas são secas, técnicas, sem fluidez.\n\n## Claude: o melhor para conteúdo\n\nPrecisa de roteiro para YouTube, e-mail de vendas ou texto longo? Claude é sua ferramenta. O modelo Sonnet 4 escreve com tom natural e consistente.\n\n**Onde ele brilha:**\n- Roteiros completos para vídeos\n- Sequências de e-mail marketing\n- Textos acima de 3000 tokens sem perder o contexto\n\n**Onde ele pecsa:** Tarefas de programação mais complexas e análise de dados pesada.\n\n## ChatGPT: o canivete suíço\n\nO GPT-5 faz de tudo razoavelmente bem. Não é o melhor em nada específico, mas resolve a maioria dos problemas do dia a dia.\n\n| Característica | ChatGPT | DeepSeek | Claude |\n|----------------|---------|----------|--------|\n| Preço mensal | US\$ 20 (Plus) | Grátis | US\$ 20 (Pro) |\n| Programação | Bom | Excelente | Médio |\n| Conteúdo | Bom | Médio | Excelente |\n| Versatilidade | Excelente | Bom | Bom |\n\n## Como escolher na prática\n\n**Para programar:** DeepSeek. Ponto final. É grátis e superior.\n\n**Para criar conteúdo:** Claude. O texto flui melhor e você perde menos tempo ajustando.\n\n**Para tudo misturado:** ChatGPT. Ele resolve 80% dos problemas sem precisar trocar de ferramenta.\n\n---\n\n## Checklist para decidir hoje\n\n- [ ] Identifique qual tarefa você mais faz (programação, conteúdo ou misto)\n- [ ] Teste a IA indicada por 3 dias na sua rotina real\n- [ ] Compare o resultado com sua ferramenta atual\n- [ ] Escolha uma principal e mantenha as outras como backup`.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">ChatGPT vs DeepSeek vs Claude: Qual a Melhor IA em 2026</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
