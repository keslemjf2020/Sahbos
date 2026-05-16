import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'IA para Restaurantes: Cardapio Inteligente e Automacao - Automação IA' };

export default function Page() {
  const content = '---\ntitle: "IA para Restaurantes: Cardápio Inteligente e Automação"\ndate: "2026-05-15"\ndescription: "Guia prático de IA para restaurantes em 2026: cardápio inteligente, atendimento automatizado, gestão de estoque e pedidos sem complicação."\ncategory: "Automação"\nreadingTime: "3 min"\ntags: ["IA", "restaurante", "cardapio", "automacao", "delivery"]\n---\n\nSeu restaurante tem 40 itens no cardápio, mas 70% dos pedidos são só 5 pratos. O garçom anota errado o pedido duas vezes por semana. No fim do mês, você descobre que um ingrediente estragou porque ninguém avisou que estava perto do vencimento.\n\nIA para restaurantes em 2026 resolve esses problemas sem você trocar de sistema ou contratar mais gente. Vou mostrar 3 áreas onde a automação entrega resultado imediato.\n\n## 1. Cardápio Inteligente com Sugestão Automática\n\nEm vez de um cardápio fixo, a IA sugere pratos baseados no histórico do cliente, horário e estoque disponível.\n\n**Como funciona:**\n- Cliente abre o cardápio digital (QR Code na mesa)\n- IA analisa: já pediu antes? É horário de almoço ou jantar? Está sozinho ou em grupo?\n- Sugere 3 pratos personalizados no topo do cardápio\n\n**Exemplo real:** Um restaurante italiano em São Paulo implementou cardápio inteligente. O ticket médio subiu 18% porque a IA sugeria pratos mais caros e harmonizações com vinhos que o cliente nunca experimentaria sozinho.\n\n## 2. Atendimento Automatizado com Chatbot\n\nPedidos por WhatsApp são um caos: cliente envia áudio, foto, muda o pedido no meio. Com IA, isso vira fluxo organizado.\n\n**Ferramentas para 2026:**\n\n| Ferramenta | Função | Preço |\n|------------|--------|-------|\n| Botpress | Chatbot WhatsApp personalizado | Grátis / R$ 97/mês |\n| ManyChat | Fluxo de vendas no WhatsApp | Grátis / R$ 59/mês |\n| Take Blip | Atendimento omnichannel | Grátis / Sob consulta |\n\n**Dica prática:** Configure o chatbot para: receber pedido → confirmar itens → calcular valor + frete → enviar link de pagamento → notificar a cozinha. O garçom só entra se o cliente pedir alteração.\n\n## 3. Gestão de Estoque com Previsão de Demanda\n\nComprar ingrediente a mais é dinheiro no lixo. Comprar a menos é perder venda. IA resolve esse equilíbrio.\n\n**Passo a passo:**\n1. Conecte o sistema de vendas (iFood, QuickByte, próprio) ao Make\n2. IA analisa histórico: qual prato vende mais na terça à noite? E no sábado?\n3. Gera lista de compras automática com quantidades exatas\n4. Alerta quando ingrediente está perto do vencimento\n\nO resultado: menos desperdício, menos falta de estoque, mais margem no fim do mês.\n\n👉 **[Automatize seu restaurante com Make](https://www.make.com/en/register?pc=guiaia2026)** — conecte cardápio digital, WhatsApp, estoque e delivery em um fluxo único.\n\n---\n\n**Checklist para começar hoje:**\n- [ ] Crie cardápio digital com QR Code nas mesas\n- [ ] Configure chatbot para receber pedidos no WhatsApp\n- [ ] Analise o histórico de vendas dos últimos 30 dias\n- [ ] Ajuste o estoque baseado nos dados reais\n- [ ] Teste a automação com 5 pedidos reais\n\nIA para restaurantes não é sobre virar um robô. É sobre garantir que o cliente receba o prato certo, na hora certa, e que você não perca dinheiro com desperdício. O resto é receita que já funciona.'.split('\\n').map((l,i) => {
    if (l.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{l.slice(3)}</h2>;
    if (l.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{l.slice(4)}</h3>;
    if (l.startsWith('|')) return <p key={i} className="font-mono text-xs text-slate-400 my-1">{l}</p>;
    if (!l.trim()) return <br key={i} />;
    if (l.startsWith('[') && l.includes('](')) {
      const m = l.match(/\[(.+?)\]\((.+?)\)/);
      if (m) return <p key={i} className="my-2"><a href={m[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline">{m[1]}</a></p>;
    }
    return <p key={i} className="text-slate-300 leading-relaxed mb-3">{l}</p>;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6">← Voltar</Link>
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">IA</span>
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">IA para Restaurantes: Cardapio Inteligente e Automacao</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
