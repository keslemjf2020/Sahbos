import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: '10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade - Automacao IA',
  openGraph: { title: '10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade', images: [{ url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você acha que IA boa custa caro?

DeepSeek dá **500 usos por dia** de graça. Make libera **1.000 operações por mês**. Canva oferece **50 gerações de IA** mensais. ChatGPT tem plano free com GPT-4o.

A guerra entre OpenAI, DeepSeek, Google e Anthropic beneficiou você. Todas mantêm planos gratuitos para atrair usuários. A diferença está nos limites e na qualidade.

## O que você consegue de graça em 2026

| Ferramenta | Limite grátis | Melhor para |
|------------|---------------|-------------|
| **DeepSeek Chat** | 500 requisições/dia | Texto, análise de arquivos |
| **ChatGPT Free** | 50 msg a cada 3h | Conversas rápidas |
| **Canva IA** | 50 gerações/mês | Design e imagens |
| **Make** | 1.000 operações/mês | Automação de processos |
| **Whisper** | Ilimitado (self-hosted) | Transcrição de áudio |

## DeepSeek Chat: o melhor custo-benefício

500 requisições por dia. Modelo de alta qualidade. Suporte a upload de **PDF, Word, Excel e imagens**. Superior ao ChatGPT Free em limite diário.

> **Na prática:** Um freelancer de marketing usa DeepSeek para resumir relatórios de 30 páginas em 5 minutos. De graça.

> ---
> **🚀 Quer explorar ferramentas IA gratuitas?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Canva Magic Studio: design sem pagar

50 gerações de IA por mês no plano grátis. Cria posts, thumbnails, apresentações e logos. Ideal para quem precisa de design rápido sem contratar designer.

**O que gera de graça:**
- **Posts para Instagram:** 10 variações por mês
- **Thumbnails para YouTube:** 5 designs diferentes
- **Logos e identidade visual:** 3 opções completas

> **Dica prática:** Use as 50 gerações do Canva para criar um mês inteiro de conteúdo visual. Planeje antes para não desperdiçar.

## Checklist para usar IA gratuita

- [ ] Cadastre-se no DeepSeek Chat para análise de documentos e textos
- [ ] Use o Canva Magic Studio para criar conteúdo visual mensal
- [ ] Configure automações no Make com o plano grátis de 1.000 operações
- [ ] Monitore o uso mensal de cada ferramenta para não estourar os limites`;
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
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" alt="10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Ferramentas'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Ferramentas</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#8b5cf620', color: '#8b5cf6', border: '1px solid #8b5cf630'}}>Ferramentas</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade</h1>
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