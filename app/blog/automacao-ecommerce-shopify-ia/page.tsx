import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Como Automatizar sua Loja Shopify com IA - Automacao IA',
  openGraph: { title: 'Como Automatizar sua Loja Shopify com IA', images: [{ url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você acorda com 12 pedidos e 5 clientes perguntando "saiu pra entrega?"

A loja vende, mas você não dá conta. Estoque baixo, descrição de produto atrasada, cliente perguntando a mesma coisa toda hora.

Automatizar sua loja Shopify com IA resolve isso sem contratar mais ninguém. São 3 áreas que entregam resultado imediato.

## Chatbot que responde com dados do seu estoque

O maior gargalo de lojas virtuais é responder pergunta repetitiva. "Qual o prazo?" "Tem tamanho 4?" "Aceita troca?"

### Como configurar:

| Ferramenta | O que faz | Preço |
|------------|-----------|-------|
| **Tidio** | Chatbot com IA integrado ao Shopify | Grátis / US\$ 18 |
| **Gorgias** | Atendimento com dados do pedido | US\$ 60/mês |

Conecte ao catálogo do Shopify. A IA consulta o estoque em tempo real. Cliente pergunta "tem tamanho 4?" e o robô responde com a informação exata.

> **Exemplo real:** Uma loja de roupas infantis configurou chatbot que consulta o estoque. O atendimento humano **caiu 60%**. As vendas fora do horário comercial **subiram 25%**.

## Descrições de produto em lote

Escrever descrição de 50 produtos é cansativo e demora. Com IA, você gera todas de uma vez mantendo consistência.

### Como fazer:

- Cole as especificações técnicas do produto
- A IA gera descrição com tom da sua marca
- Ajusta SEO automaticamente
- Publica direto no Shopify

> ---
> **🚀 Automatize sua loja Shopify em 1 hora.** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Gestão de estoque com alertas inteligentes

Acabar com estoque no meio de uma promoção é prejuízo na certa. IA monitora seus níveis e dispara alertas antes do problema.

### O que a IA monitora automaticamente:

- **Nível crítico:** Alerta quando estoque chega a 10 unidades
- **Reposição:** Sugere quantidade ideal para recompra
- **Sazonalidade:** Ajusta alertas conforme época do ano
- **Fornecedor:** Dispara pedido automático para parceiros cadastrados

## Checklist para implantar IA na sua loja Shopify

- [ ] Conecte seu catálogo do Shopify ao chatbot`;
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
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" alt="Como Automatizar sua Loja Shopify com IA" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Automatizar sua Loja Shopify com IA</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#06b6d420', color: '#06b6d4', border: '1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Automatizar sua Loja Shopify com IA</h1>
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