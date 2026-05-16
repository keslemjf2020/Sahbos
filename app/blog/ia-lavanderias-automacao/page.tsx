import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Lavanderias: Pedidos e Entregas Automaticos - Automacao IA',
  openGraph: { title: 'IA para Lavanderias: Pedidos e Entregas Automaticos', images: [{ url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Cliente liga, você anota no papel e a peça some no processo

"Quero lavar 3 camisas, 2 calças e 1 terno." Você anota. Motoboy busca, cliente não estava em casa. Peças chegam, você separa manualmente, etiqueta. Depois descobre que uma camisa sumiu.

Cliente reclama, você não tem registro. No fim do mês, perdeu **3 clientes** por extravio e atraso.

**IA para lavanderias** organiza cada peça, cada pedido e cada entrega sem papel. São 3 áreas que entregam resultado imediato.

## Pedido online que o cliente faz sozinho

Cliente quer lavar mas não quer sair de casa. IA gerencia o pedido do início ao fim.

### Como funciona na prática:

| O que o cliente faz | O que a IA processa | Resultado |
|--------------------|--------------------|-----------|
| Seleciona itens no app | Calcula preço automático | R\$ 47,50 |
| Escolhe horário de coleta | Agenda na rota do motoboy | Coleta entre 14h-16h |
| Confirma o pedido | Envia comprovante por WhatsApp | Pedido registrado |

**Ferramentas:** App próprio ou **Make** + **WhatsApp Business API**. Cliente faz tudo sem falar com ninguém.

> **Exemplo real:** Uma lavanderia em Florianópolis implementou pedido online com IA. O volume de pedidos **dobrou em 60 dias**. Os extravios **caíram de 5 para 0** por mês.

> ---
> **🚀 Quer automatizar os pedidos da sua lavanderia?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Rastreamento de peças que elimina extravio

Cada peça recebe uma etiqueta digital. Você sabe onde está a qualquer momento.

### Como funciona:

1. **Entrada:** Peça é etiquetada com QR code ou RFID
2. **Processo:** Cada etapa (lavagem, secagem, passadoria) é registrada
3. **Saída:** Peça é desvinculada na entrega ao cliente
4. **Histórico:** Cliente vê o status em tempo real pelo WhatsApp

> **Dica prática:** Use etiquetas térmicas com QR code. Custo de **R\$ 0,02 por peça**. Elimina totalmente o extravio.

## Checklist para digitalizar sua lavanderia

- [ ] Configure pedido online via WhatsApp Business API + Make
- [ ] Implemente etiquetagem digital (QR code ou RFID) para cada peça
- [ ] Ative notificações automáticas de status para o cliente
- [ ] Monitore a redução de extravios e reclamações no primeiro mês`;
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
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" alt="IA para Lavanderias: Pedidos e Entregas Automaticos" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Lavanderias: Pedidos e Entregas Automaticos</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#06b6d420', color: '#06b6d4', border: '1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Lavanderias: Pedidos e Entregas Automaticos</h1>
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