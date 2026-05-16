import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Como Automatizar sua Loja Shopify com IA - Automacao IA',
  openGraph: { title: 'Como Automatizar sua Loja Shopify com IA', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=Como%20Automatizar%20sua%20Loja%20Shopify%20com%20IA', width: 1200, height: 630 }] }
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

- [ ] Conecte seu catálogo ao chatbot (Tidio ou Gorgias)
- [ ] Gere descrições em lote para os 20 produtos mais vendidos
- [ ] Configure alertas de estoque mínimo para cada categoria
- [ ] Monitore a redução de perguntas repetitivas na primeira semana`;
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
            <span className="text-slate-400 truncate max-w-[200px]">Como Automatizar sua Loja Shopify com IA</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Automatizar sua Loja Shopify com IA</h1>
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