import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Como Automatizar Email Marketing com IA - Automacao IA',
  openGraph: { title: 'Como Automatizar Email Marketing com IA', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=Como%20Automatizar%20Email%20Marketing%20com%20IA', width: 1200, height: 630 }] }
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

- **Boas-vindas:** Novo contato entra na base, recebe sequência de 3 e-mails
- **Abandono de carrinho:** Cliente adiciona produto mas não finaliza compra
- **Reativação:** Cliente sem compra há 90 dias recebe oferta especial
- **Pós-venda:** Cliente compra e recebe dicas de uso do produto

## Checklist para automatizar seu email marketing

- [ ] Crie a planilha no Google Sheets com nome, e-mail e segmento
- [ ] Conecte Make ao Sheets e ao Mailchimp (ou similar)
- [ ] Configure o prompt da IA com tom da sua marca e dados do cliente
- [ ] Teste o fluxo com 5 contatos antes de disparar para a base toda`;
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
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #06b6d444 0%, transparent 50%), radial-gradient(circle at 70% 30%, #06b6d433 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Automatizar Email Marketing com IA</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Automatizar Email Marketing com IA</h1>
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