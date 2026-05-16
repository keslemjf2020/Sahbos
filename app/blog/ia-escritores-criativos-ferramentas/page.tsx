import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Escritores: Ferramentas que Potencializam a Criatividade - Automacao IA' };

export default function Page() {
  const raw = `# Você senta para escrever, mas a tela fica em branco por uma hora

Digita uma frase, apaga. Digita outra, apaga. O prazo está chegando e a criatividade simplesmente não vem.

O bloqueio criativo não é falta de talento. É falta de estímulo. **IA para escritores** não substitui sua voz autoral. Ela quebra o gelo e acelera a revisão.

## Geração de ideias que quebra o bloqueio

A pior parte de escrever é a primeira frase. IA resolve isso com prompts direcionados.

### Como funciona na prática:

| O que você quer | Prompt para IA | Resultado |
|-----------------|----------------|-----------|
| Ideias de contos | "10 ideias de contos sobre IA e memória humana" | 10 ideias em 2 frases cada |
| Abertura de artigo | "5 aberturas para artigo sobre automação" | Pergunta, dado, cena, citação, declaração |
| Personagens | "3 perfis de personagens para romance policial" | Nome, idade, profissão, conflito |

**Ferramentas:** **ChatGPT**, **Claude** ou **Sudowrite**. O segredo é o prompt certo.

**Prompt que funciona para qualquer gênero:**

> "Preciso de 5 aberturas diferentes para um artigo sobre [tema]. A primeira frase deve prender a atenção. Opções: pergunta provocativa, dado chocante, cena descritiva."

> ---
> **🚀 Quer uma biblioteca de prompts prontos para escritores?** Baixe grátis. [Baixar agora](#)
> ---

## Revisão que não perde sua voz

IA revisa gramática, estilo e fluidez. Mas mantém seu tom e suas escolhas criativas.

### O que a IA revisa:

- **Gramática:** Ortografia, concordância, pontuação
- **Estilo:** Frases longas, repetições, voz passiva
- **Fluidez:** Transições entre parágrafos, ritmo da leitura
- **Clareza:** Termos vagos, ambiguidades, redundâncias

> **Exemplo real:** Um escritor de ficção usava Sudowrite para revisar capítulos. A IA sugeria cortes e reescritas, mas ele decidia o que aceitar. O tempo de revisão **caiu de 3 horas para 45 minutos** por capítulo.

## Checklist para escrever mais com IA

- [ ] Use prompts de abertura para quebrar o bloqueio criativo
- [ ] Gere 5 opções de primeira frase e escolha a melhor
- [ ] Escreva o rascunho completo sem revisar (IA revisa depois)
- [ ] Revise com IA mantendo sua voz autoral (você decide o que aceitar)`;
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
            <Link href={`/categoria/${'Ferramentas'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Ferramentas</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Escritores: Ferramentas que Potencializam a Criatividade</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Ferramentas</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Escritores: Ferramentas que Potencializam a Criatividade</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}