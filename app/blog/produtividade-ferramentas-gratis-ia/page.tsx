import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: '10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade - Automacao IA',
  openGraph: { title: '10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/8b5cf6?text=10%20Ferramentas%20de%20IA%20Gratis%20que%20Va%CC%83o%20Dobrar%20Sua%20Produtividade', width: 1200, height: 630 }] }
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
      {/* COVER IMAGE */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #8b5cf644 0%, transparent 50%), radial-gradient(circle at 70% 30%, #8b5cf633 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Ferramentas'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Ferramentas</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#8b5cf620',color:'#8b5cf6',border:'1px solid #8b5cf630'}}>Ferramentas</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">10 Ferramentas de IA Gratis que Vão Dobrar Sua Produtividade</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}