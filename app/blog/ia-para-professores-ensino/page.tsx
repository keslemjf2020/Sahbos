import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'IA para Professores: Ferramentas que Transformam o Ensino - Automação IA' };

export default function Page() {
  const content = '---\ntitle: "IA para Professores: Ferramentas que Transformam o Ensino"\ndate: "2026-05-15"\ndescription: "Guia prático de IA para professores automatizarem planos de aula, correções e materiais didáticos. Ferramentas gratuitas e passo a passo real."\ncategory: "Educação"\nreadingTime: "3 min"\ntags: ["IA", "professores", "educacao", "automacao", "ferramentas"]\n---\n\nVocê passa o fim de semana corrigindo 40 redações. Prepara aula até meia-noite. Cria atividades, provas, listas de exercício. O trabalho nunca acaba. E o pior: a parte burocrática toma o tempo que deveria ser dos alunos.\n\nIA para professores em 2026 não substitui seu olhar pedagógico. Ela elimina o trabalho repetitivo que consome horas. Vou mostrar 3 áreas onde a automação entrega resultado imediato.\n\n## 1. Planos de Aula Automáticos\n\nCriar plano de aula do zero toda semana cansa. Com IA, você gera um plano completo em 2 minutos.\n\n**Como fazer:**\n- Abra o **ChatGPT** ou **Claude**\n- Peça: "crie plano de aula de 50 minutos sobre [tema] para [série], inclua objetivo, introdução, atividade prática e avaliação"\n- Ajuste o tom e profundidade conforme necessário\n\n**Dica prática:** Salve os planos gerados em um drive. No início do ano, peça a IA para criar o cronograma do semestre inteiro. Você ajusta uma vez e usa o ano todo.\n\n## 2. Correção de Redações e Provas com IA\n\nCorrigir dezenas de redações manualmente é o maior pesadelo do professor. Ferramentas como **Grammarly** e o próprio **Claude** ajudam na correção.\n\n**O que a IA pode fazer:**\n\n| Tarefa | Tempo Manual | Com IA |\n|--------|-------------|--------|\n| Corrigir gramática e ortografia | 10 min por redação | 30 seg |\n| Avaliar estrutura textual | 5 min | 1 min |\n| Dar feedback personalizado | 8 min | 2 min |\n| Gerar nota preliminar | 3 min | 10 seg |\n\n**Importante:** A IA não substitui sua correção final. Use como primeiro filtro. Ela aponta erros, você decide a nota.\n\n## 3. Geração de Atividades e Exercícios\n\nCriar lista de exercícios diferente para cada turma toma tempo. Com IA, você gera variações automaticamente.\n\n**Passo a passo:**\n1. Peça: "crie 10 questões de múltipla escolha sobre [tema] para [série]"\n2. Peça variação: "crie outra versão com números diferentes"\n3. Peça gabarito: "gere o gabarito comentado"\n\nEm 10 minutos, você tem material para uma semana.\n\n👉 **[Automatize seu material didático com Make](https://www.make.com/en/register?pc=guiaia2026)** — conecte IA, planilhas e drives para organizar tudo automaticamente.\n\n---\n\n**Checklist para começar hoje:**\n- [ ] Gere o plano de aula da próxima semana com IA\n- [ ] Teste a correção de 3 redações no Claude\n- [ ] Crie 20 questões de exercício em 5 minutos\n- [ ] Monte um cronograma semestral com ChatGPT\n- [ ] Salve tudo em pastas organizadas por turma\n\nIA para professores não é sobre ter menos trabalho. É sobre gastar seu tempo com o que realmente importa: os alunos, não os papéis.'.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">IA para Professores: Ferramentas que Transformam o Ensino</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
