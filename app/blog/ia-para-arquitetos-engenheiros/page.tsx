import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Arquitetos e Engenheiros: Projetos Inteligentes - Automacao IA',
  openGraph: { title: 'IA para Arquitetos e Engenheiros: Projetos Inteligentes', images: [{ url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você passa dias renderizando e o cliente pede 5 alterações

Renderiza de novo. O orçamento toma outra tarde. A documentação técnica leva mais um fim de semana. No fim, **60% do seu tempo** vai em retrabalho.

**IA para arquitetos e engenheiros** elimina o retrabalho que consome seu tempo.

## Renderização e visualização instantânea

Esperar horas por uma renderização é coisa do passado. IA gera visualizações realistas em minutos.

### Como funciona na prática:

| O que você descreve | O que a IA gera | Tempo |
|---------------------|-----------------|-------|
| "Fachada moderna, vidro temperado, tons de cinza" | 10 opções de fachada | 5 minutos |
| "Sala de estar com pé direito duplo, luz natural" | 5 variações de ambiente | 3 minutos |
| "Sketch à mão de planta baixa" | Modelo 3D completo | 10 minutos |

**Ferramentas:** **Midjourney** ou **DALL-E 3** para imagens. **ArchiAI** ou **Kaedim** para converter sketches em modelos 3D.

> **Dica prática:** Em vez de renderizar 10 opções de fachada manualmente, descreva cada uma para a IA. O cliente escolhe, você faz o projeto final.

> ---
> **🚀 Quer o guia completo de IA para arquitetura e engenharia?** Baixe grátis. [Baixar agora](#)
> ---

## Cálculos estruturais e documentação técnica

Cálculo de carga, dimensionamento de vigas, especificações técnicas. IA calcula e documenta em minutos.

### O que a IA faz:

| Tarefa | Como era | Com IA |
|--------|----------|--------|
| Dimensionamento de viga | Planilha manual + 2 horas | 10 minutos |
| Especificação de materiais | Consulta catálogos + 1 hora | 5 minutos |
| Memorial descritivo | Digitação + 3 horas | 20 minutos |

**Ferramentas:** **StrucAI** ou **Autodesk Forma** para cálculos. **ChatGPT** ou **Claude** para documentação técnica.

> **Exemplo real:** Um engenheiro civil usava IA para cálculos estruturais. O tempo de dimensionamento **caiu de 4 horas para 30 minutos** por projeto.

## Checklist para acelerar seus projetos

- [ ] Use IA para gerar 10 opções de fachada ou ambiente em minutos
- [ ] Converta sketches à mão em modelos 3D com Kaedim
- [ ] Automatize cálculos estruturais e documentação técnica
- [ ] Monitore a redução de retrabalho no primeiro mês`;
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
      <div className="relative w-full h-48 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop" alt="IA para Arquitetos e Engenheiros: Projetos Inteligentes" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Arquitetos e Engenheiros: Projetos Inteligentes</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Arquitetos e Engenheiros: Projetos Inteligentes</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-8">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
      <div className="max-w-3xl mx-auto px-6 pb-12"><AuthorBio /></div>
      <div className="border-t border-white/[0.04]"><div className="max-w-2xl mx-auto px-6 py-12 text-center"><p className="text-slate-400 text-sm mb-2">Receba guias praticos de IA toda semana</p><form className="flex max-w-sm mx-auto"><input type="email" placeholder="seu@email.com" className="flex-1 px-4 py-2 rounded-l-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30" /><button className="px-5 py-2 rounded-r-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90">Inscrever</button></form></div></div>
    </div>
  );
}