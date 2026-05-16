import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Como Automatizar Email Marketing com IA - Automacao IA',
  openGraph: { title: 'Como Automatizar Email Marketing com IA', images: [{ url: 'https://images.unsplash.com/photo-1526378722484-3f9e9c6e2f6f?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você tem uma lista de e-mails, mas não sabe o que enviar

Escrever sequência de e-mails toda semana consome horas. Ou você paga caro por ferramentas que prometem resultados e entregam pouco.

**Email marketing** ainda tem o maior retorno entre canais digitais. O problema é executar. Com IA e automação, você cria campanhas que disparam sozinhas com conteúdo personalizado.

## O que você precisa para começar

| Ferramenta | Função | Preço |
|------------|--------|-------|
| **Make** | Orquestrador da automação | Grátis / 1.000 operações |
| **DeepSeek** | IA para gerar os textos | Grátis (500 req/dia) |
| **Mailchimp** | Disparo dos e-mails | Grátis / 500 contatos |
| **Google Sheets** | Base de dados dos contatos | Grátis |

Todas têm plano gratuito. Você testa sem gastar nada.

## Passo a passo: do Google Sheets ao e-mail personalizado

### 1. Prepare sua base de contatos

Crie uma planilha no Google Sheets com colunas simples:

| Nome | E-mail | Segmento | Última compra |
|------|--------|----------|---------------|
| João | joao@email.com | Premium | 15/01 |
| Maria | maria@email.com | Básico | 20/12 |

### 2. Configure o fluxo no Make

Crie um cenário com 3 módulos:

1. **Trigger** — Novo contato no Sheets
2. **IA** — DeepSeek gera e-mail personalizado
3. **Ação** — Mailchimp dispara o e-mail

> ---
> **🚀 Automatize seu email marketing em 30 minutos.** Teste grátis com template pronto. [Comece agora](#)
> ---

### 3. Personalize com dados reais

A IA recebe o nome, segmento e última compra do contato. Ela gera um e-mail com:

- **Assunto** personalizado com o nome do cliente
- **Oferta** baseada no segmento (Premium ou Básico)
- **Call to action** direcionado ao comportamento de compra

> **Exemplo real:** Uma loja de suplementos usou esse fluxo para reativar clientes inativos. A taxa de abertura **subiu 45%** e as vendas **cresceram 22%** em 30 dias.

## Campanhas que disparam sozinhas

Com o fluxo configurado, você define gatilhos automáticos:

- **Boas-vindas**`;
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
        <img src="https://images.unsplash.com/photo-1526378722484-3f9e9c6e2f6f?w=1200&h=400&fit=crop" alt="Como Automatizar Email Marketing com IA" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Automatizar Email Marketing com IA</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#06b6d420', color: '#06b6d4', border: '1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Automatizar Email Marketing com IA</h1>
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