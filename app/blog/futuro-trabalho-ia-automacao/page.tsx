import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'O Futuro do Trabalho com IA: O Que Muda em 2026 - Automação IA' };

export default function Page() {
  const content = '---\ntitle: "O Futuro do Trabalho com IA: O Que Muda em 2026"\ndate: "2026-05-15"\ndescription: "Análise prática do futuro do trabalho com IA em 2026: habilidades necessárias, profissões em alta, riscos reais e como se preparar para a mudança."\ncategory: "Carreira"\nreadingTime: "3 min"\ntags: ["futuro do trabalho", "IA", "carreira", "mercado de trabalho", "2026"]\n---\n\nVocê abre o LinkedIn e vê: "IA vai substituir 300 milhões de empregos". Abre outro post: "IA vai criar mais empregos do que destruir". No meio desse vai-e-vem de opiniões, você fica sem saber se estuda programação, vira especialista em prompt ou simplesmente ignora.\n\nO futuro do trabalho com IA em 2026 não é apocalíptico nem utópico. É prático: algumas funções vão sumir, outras vão se transformar, e novas vão surgir. Vou mostrar o que realmente muda.\n\n## 1. Profissões em Risco vs. Profissões em Alta\n\nNem todo emprego será substituído, mas todo emprego será impactado. A diferença está no tipo de tarefa.\n\n**O que muda em 2026:**\n\n| Profissão | Risco | Motivo |\n|-----------|-------|--------|\n| Digitador | Alto | IA transcreve e classifica |\n| Tradutor simples | Alto | Modelos multilíngues gratuitos |\n| Atendente de call center | Alto | Chatbots com IA avançada |\n| Contador operacional | Médio | Automação de lançamentos |\n| Programador | Médio | IA gera código, humano revisa |\n| Designer | Baixo | IA cria assets, humano direciona |\n| Médico | Baixo | IA辅助, diagnóstico final é humano |\n| Estrategista de marketing | Baixo | IA executa, humano define estratégia |\n\n**Dica prática:** Se seu trabalho é 80% repetitivo, comece a transição agora. Se é 80% estratégico, use IA como ferramenta para ser mais produtivo.\n\n## 2. Habilidades que Valorizam em 2026\n\nO mercado não vai pagar mais para quem sabe usar IA. Vai pagar mais para quem sabe o que pedir para IA fazer.\n\n**As 5 habilidades mais valorizadas:**\n1. **Pensamento crítico** — IA dá respostas, você decide se estão certas\n2. **Comunicação** — Saber explicar o problema para a IA e o resultado para o cliente\n3. **Estratégia de negócios** — IA executa, você define o rumo\n4. **Curadoria de conteúdo** — IA gera 10 opções, você escolhe a melhor\n5. **Empatia e liderança** — Isso a IA não faz\n\n## 3. Como se Preparar sem Pânico\n\nNão precisa largar tudo e virar programador. Precisa de um plano prático de adaptação.\n\n**Passo a passo:**\n1. Identifique as tarefas repetitivas do seu trabalho atual\n2. Teste uma ferramenta de IA para cada tarefa esta semana\n3. Documente o que funcionou e o que não funcionou\n4. Em 30 dias, você terá um "assistente IA" pessoal\n5. Use o tempo economizado para aprender algo novo\n\n👉 **[Automatize sua rotina com Make](https://www.make.com/en/register?pc=guiaia2026)** — conecte as ferramentas de IA que você já usa em um fluxo de trabalho único.\n\n---\n\n**Checklist para se preparar:**\n- [ ] Liste 5 tarefas repetitivas do seu dia\n- [ ] Teste IA para pelo menos 2 delas esta semana\n- [ ] Identifique qual habilidade humana você precisa desenvolver\n- [ ] Defina 1 hora por semana para estudar IA aplicada\n- [ ] Crie um fluxo automático no Make para tarefas rotineiras\n\nO futuro do trabalho com IA em 2026 não é sobre máquinas tomando conta. É sobre pessoas que usam IA tendo vantagem sobre quem não usa. A pergunta não é "vou ser substituído?". A pergunta é "vou ser substituído por alguém que usa IA melhor que eu?".'.split('\\n').map((l,i) => {
    if (l.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{l.slice(3)}</h2>;
    if (l.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{l.slice(4)}</h3>;
    if (l.startsWith('|')) return <p key={i} className="font-mono text-xs text-slate-400 my-1">{l}</p>;
    if (!l.trim()) return <br key={i} />;
    if (l.startsWith('[') && l.includes('](')) {
      const m = l.match(/\[(.+?)\]\((.+?)\)/);
      if (m) return <p key={i} className="my-2"><a href={m[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline">{m[1]}</a></p>;
    }
    return <p key={i} className="text-slate-300 leading-relaxed mb-3">{l}</p>;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6">← Voltar</Link>
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">IA</span>
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">O Futuro do Trabalho com IA: O Que Muda em 2026</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
