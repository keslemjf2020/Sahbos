import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada) - Automacao IA' };

export default function Page() {
  const content = `# Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada)\n\n## Introdução\n\nVocê passa horas escrevendo posts de blog que ninguém lê? IA generativa resolve isso em minutos. O segredo não é só apertar "gerar" — é ter um processo que transforma ideias soltas em artigos completos sem você digitar uma linha.\n\n## O Problema Real\n\nBlogueiros gastam 70% do tempo em tarefas repetitivas: pesquisar, estruturar, revisar. IA corta isso para 10%. Mas sem automação, você ainda precisa copiar e colar entre ferramentas. É aí que entra o Make (ex-Integromat).\n\n## O Processo Passo a Passo\n\n### 1. Capture a Ideia\nUse um formulário simples (Google Forms ou Typeform) para coletar:\n- Título provisório\n- 3 pontos principais\n- Público-alvo\n\n### 2. Dispare a Automação\nCom o Make, conecte o formulário ao ChatGPT/Claude:\n- Webhook recebe os dados\n- Módulo OpenAI gera o post completo\n- Outro módulo salva no Google Docs ou WordPress\n\n### 3. Revise e Publique\nIA entrega 80% pronto. Você ajusta tom, adiciona exemplo pessoal, e publica. 5 minutos no total.\n\n## Exemplo Prático\n\nCriei um cenário real:\n1. Preencho formulário: "Como automatizar WhatsApp" + pontos principais\n2. Make envia para GPT-4 com prompt: "Escreva post de 800 palavras, tom informal, H2/H3"\n3. Resultado vai direto pro Google Docs formatado\n4. Leio, ajusto uma frase, publico\n\n## Ferramentas Que Uso\n\n- **Make** — orquestrador principal (link afiliado: [Make](https://www.make.com/en/register?pc=seulink))\n- **ChatGPT/Claude** — geração de conteúdo\n- **WordPress** — publicação automática via API\n\n## Checklist Final\n\n- [ ] Ideia capturada em formulário\n- [ ] Automação Make configurada com webhook\n- [ ] Prompt testado e ajustado\n- [ ] Revisão humana de 2 minutos\n- [ ] Post publicado com link afiliado incluído\n\nIA não substitui seu conhecimento — elimina o trabalho braçal. O que você vai automatizar hoje?`.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada)</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-15</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
