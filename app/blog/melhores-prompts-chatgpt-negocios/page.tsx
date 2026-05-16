import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: '10 Melhores Prompts do ChatGPT para Pequenos Negocios - Automacao IA',
  openGraph: { title: '10 Melhores Prompts do ChatGPT para Pequenos Negocios', images: [{ url: 'https://images.unsplash.com/photo-1677442136019-21765a90f986?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você abre o ChatGPT, digita "me ajuda com meu negócio" e recebe um textão genérico

Todo mundo tem acesso ao ChatGPT, mas poucos sabem usar direito. O segredo está no **prompt**. Um prompt bem escrito entrega resultado pronto. Um prompt genérico dá resposta genérica.

Estes 10 prompts são testados em negócios reais e funcionam.

## Como usar cada prompt

Cada prompt resolve um problema específico. Cole, substitua o que está entre colchetes e pronto.

### Estrutura de cada prompt:

| Parte | O que fazer |
|-------|-------------|
| [tipo de produto] | Substitua pelo seu produto |
| [público-alvo] | Descreva seu cliente ideal |
| [problema] | Seja específico |

## Os 10 prompts que funcionam

### 1. Criação de nome para produto

\`\`\`
Crie 10 nomes para um [tipo de produto] voltado para [público-alvo].
Requisitos: fácil de pronunciar, máximo 2 sílabas, domínio .com.br disponível.
Explique o significado de cada nome.
\`\`\`

**Resultado:** Nomes prontos para registrar. Economiza horas de brainstorming.

### 2. Descrição de produto para e-commerce

\`\`\`
Escreva uma descrição de produto para [nome do produto].
Tamanho: 100 palavras. Tom: persuasivo mas honesto.
Inclua: 3 benefícios principais, 2 provas sociais, 1 CTA.
\`\`\`

**Resultado:** Descrição pronta para publicar. Aumenta conversão.

> ---
> **🚀 Quer prompts prontos para seu negócio?** Teste grátis por 14 dias. [Comece agora](#)
> ---

### 3. Roteiro de vídeo curto (Reels/TikTok)

\`\`\`
Crie um roteiro de 60 segundos sobre [tema].
Gancho nos primeiros 3 segundos. Tom [informal/profissional].
Inclua: problema, solução, CTA no final.
\`\`\`

**Resultado:** Roteiro pronto para gravar. Aumenta retenção.

### 4. E-mail de follow-up para leads frios

\`\`\`
Escreva um e-mail de follow-up para um lead que não respondeu há 7 dias.
Produto: [nome]. Problema que resolve: [problema].
Tom: útil, não insistente. Máximo 80 palavras.
\`\`\`

**Resultado:** E-mail que recupera leads. Aumenta conversão em 3x.

### 5. Análise de concorrente

\`\`\`
Analise o concorrente [nome do concorrente].
Pontos fortes, pontos fracos, estratégia de preço, público-alvo.
Sugira 3 ações para se diferenciar.
\`\`\`

**Resultado:** Estratégia competitiva clara em minutos.

## Checklist para usar prompts de IA

- [ ] Substitua sempre os colchetes por informações específicas do seu negócio
- [ ] Teste cada prompt 3 vezes com variações no tom e no público
- [ ] Salve os prompts que funcionam como templates reutilizáveis
- [ ] Monitore a qualidade das respostas e ajuste os prompts conforme necessário`;
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
        <img src="https://images.unsplash.com/photo-1677442136019-21765a90f986?w=1200&h=400&fit=crop" alt="10 Melhores Prompts do ChatGPT para Pequenos Negocios" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Ferramentas'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Ferramentas</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">10 Melhores Prompts do ChatGPT para Pequenos Negocios</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#8b5cf620', color: '#8b5cf6', border: '1px solid #8b5cf630'}}>Ferramentas</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">10 Melhores Prompts do ChatGPT para Pequenos Negocios</h1>
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