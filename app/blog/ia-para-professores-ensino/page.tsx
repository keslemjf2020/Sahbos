import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Professores: Ferramentas que Transformam o Ensino - Automacao IA' };

export default function Page() {
  const raw = `# Você passa o fim de semana corrigindo 40 redações

Prepara aula até meia-noite. Cria atividades, provas, listas de exercício. O trabalho nunca acaba. A parte burocrática toma o tempo que deveria ser dos alunos.

**IA para professores** não substitui seu olhar pedagógico. Ela elimina o trabalho repetitivo que consome horas.

## Planos de aula automáticos

Criar plano de aula do zero toda semana cansa. Com IA, você gera um plano completo em 2 minutos.

### Como funciona na prática:

| O que você pede | O que a IA gera | Seu trabalho |
|-----------------|-----------------|--------------|
| "Plano de 50 min sobre [tema] para [série]" | Objetivo, introdução, atividade prática, avaliação | Ajustar tom e profundidade |
| "Cronograma do semestre inteiro" | Aulas organizadas por semana | Revisar uma vez |
| "Atividade complementar para alunos avançados" | Exercícios diferenciados | Aplicar em sala |

**Ferramentas:** **ChatGPT** ou **Claude**. Plano de aula completo em minutos.

> **Dica prática:** Salve os planos gerados em um drive. No início do ano, peça para a IA criar o cronograma do semestre inteiro. Você ajusta uma vez e usa o ano todo.

> ---
> **🚀 Quer automatizar a preparação das suas aulas?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Correção de redações e provas com IA

Corrigir 40 redações manualmente toma um fim de semana. IA faz o primeiro filtro.

### Como funciona:

| O que a IA avalia | O que sinaliza | Seu trabalho |
|-------------------|----------------|--------------|
| Gramática e ortografia | Erros corrigidos automaticamente | Revisar casos duvidosos |
| Coerência e coesão | Parágrafos mal estruturados | Dar feedback qualitativo |
| Argumentação | Tese fraca ou contraditória | Orientar individualmente |

**Ferramentas:** **Corrector IA** ou **Grammarly** para português. IA corrige erros básicos e você foca no conteúdo.

> **Exemplo real:** Uma professora de português reduziu o tempo de correção de redações de **8 horas para 2 horas** por turma. Ela passou a dar feedback mais detalhado para cada aluno.

## Checklist para otimizar seu tempo como professor

- [ ] Use IA para gerar planos de aula completos em 2 minutos
- [ ] Automatize a correção de gramática e ortografia nas redações
- [ ] Crie o cronograma do semestre inteiro com IA no início do ano
- [ ] Monitore a redução de horas gastas em tarefas burocráticas`;
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
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Professores: Ferramentas que Transformam o Ensino</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Professores: Ferramentas que Transformam o Ensino</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}