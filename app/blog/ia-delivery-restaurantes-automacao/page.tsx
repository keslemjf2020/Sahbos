import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA no Delivery: Automatize Pedidos e Entregas do Seu Restaurante - Automacao IA',
  openGraph: { title: 'IA no Delivery: Automatize Pedidos e Entregas do Seu Restaurante', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=IA%20no%20Delivery%3A%20Automatize%20Pedidos%20e%20Entregas%20do%20Seu%20Restaurante', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Seu restaurante recebe 80 pedidos do iFood por dia e você tem um funcionário só para isso

Cada pedido exige: ler os itens, confirmar disponibilidade, imprimir comanda, enviar para cozinha, atualizar estoque. Isso consome **6 horas de trabalho** de um funcionário.

Em 2026, **62% dos restaurantes brasileiros** já automatizam parte do processo de delivery (ABRASEL, 2025). Este guia mostra como usar IA para automatizar pedidos do iFood, da confirmação até a impressão na cozinha.

## O que a IA resolve de fato

| Problema | Como era | Com IA |
|----------|----------|--------|
| Confirmação do pedido | Funcionário lê e confirma manualmente | IA lê, verifica estoque e confirma em segundos |
| Separação por área | Funcionário imprime e leva para cada cozinha | Pedido vai direto para impressora certa |
| Atualização de estoque | Funcionário atualiza no final do dia | Estoque atualiza automaticamente |
| Notificação ao cliente | Funcionário avisa quando sai para entrega | IA dispara WhatsApp automático |

## Passo a passo: iFood + Make + IA

### 1. Capture o pedido automaticamente

O iFood tem API para parceiros. Com o **Make**, você configura um webhook que recebe cada novo pedido em tempo real.

\`\`\`
iFood → Webhook Make → IA processa → Impressora
\`\`\`

> ---
> **🚀 Quer o template pronto da automação?** Baixe grátis e configure em 30 minutos. [Comece agora](#)
> ---

### 2. Configure o fluxo de automação

O cenário no Make tem 5 módulos:

1. **Trigger:** Webhook recebe pedido do iFood
2. **Processamento:** IA lê itens e verifica disponibilidade
3. **Impressão:** Envia comanda para impressora da cozinha
4. **Estoque:** Atualiza automaticamente no sistema
5. **Cliente:** Dispara WhatsApp com confirmação e prazo

> **Exemplo real:** Um restaurante em São Paulo automatizou os pedidos do iFood. O tempo entre o pedido chegar e a comanda sair **caiu de 3 minutos para 10 segundos**. O funcionário foi realocado para atendimento presencial.

## Checklist para automatizar pedidos do iFood

- [ ] Solicite acesso à API do iFood para parceiros
- [ ] Crie um cenário no Make com webhook para capturar pedidos
- [ ] Configure a IA para ler itens, verificar estoque e direcionar para impressora
- [ ] Ative a notificação automática ao cliente (confirmação + prazo)`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA no Delivery: Automatize Pedidos e Entregas do Seu Restaurante</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA no Delivery: Automatize Pedidos e Entregas do Seu Restaurante</h1>
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