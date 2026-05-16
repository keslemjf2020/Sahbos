import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Autonomos: Como Multiplicar Seus Ganhos - Automacao IA',
  openGraph: { title: 'IA para Autonomos: Como Multiplicar Seus Ganhos', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=IA%20para%20Autonomos%3A%20Como%20Multiplicar%20Seus%20Ganhos', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você trabalha 10 horas por dia, mas só 4 são trabalho que realmente paga

O resto é: responder mensagem, fazer orçamento, emitir nota, cobrar pagamento atrasado. No fim do mês, você faturou R\$ 8.000, mas trabalhou 240 horas.

Sua hora vale **R\$ 33**. Muito baixo para um profissional qualificado.

**IA para autônomos** corta o trabalho burocrático pela metade e dobra sua hora trabalhada. São 3 áreas que entregam resultado imediato.

## Orçamento que você faz em 5 minutos

Cliente pede orçamento. Você perde 30 minutos montando proposta. Manda. Cliente não responde. Você perdeu tempo precioso.

### Como funciona na prática:

| O cliente diz | O que a IA faz | Resultado |
|---------------|----------------|-----------|
| "Quanto custa um site?" | Pergunta escopo, prazo, páginas | Gera orçamento em 5 min |
| "Preciso de 5 posts por semana" | Consulta tabela de preços | Envia PDF profissional |
| "Aceitei, pode começar?" | Agenda serviço na sua agenda | Pronto para começar |

**Ferramentas:** **Orçamento Fácil** ou **Make** com IA. Cliente recebe proposta com link de aprovação. Se aprovar, já agenda.

> **Exemplo real:** Um designer freelancer usava IA para orçamentos. O tempo de proposta **caiu de 30 para 5 minutos**. Ele passou a atender **3x mais clientes** no mesmo horário.

> ---
> **🚀 Quer o template de orçamento automático?** Baixe grátis e configure em 30 minutos. [Comece agora](#)
> ---

## Cobrança que não deixa dinheiro na mesa

Serviço entregue, pagamento pendente. Você esquece de cobrar. IA dispara lembretes automáticos sem você precisar lembrar.

### Como configurar:

- **Vencimento:** "Lembrete: fatura vence amanhã. Link para pagamento."
- **Atraso 3 dias:** "Fatura em atraso. Evite juros, pague hoje."
- **Atraso 7 dias:** "Último aviso antes do protesto. Regularize."
- **Pagamento confirmado:** "Recebemos seu pagamento. Obrigado!"

## Checklist para automatizar seu trabalho autônomo

- [ ] Configure o gerador de orçamentos automáticos com IA
- [ ] Ative os lembretes de cobrança no WhatsApp (vencimento, atraso, confirmação)
- [ ] Crie um chatbot para responder perguntas frequentes sobre serviços
- [ ] Monitore quantas horas você recuperou na primeira quinzena`;
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
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 50%, #3b82f644 0%, transparent 50%), radial-gradient(circle at 70% 30%, #3b82f633 0%, transparent 40%)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Autonomos: Como Multiplicar Seus Ganhos</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Autonomos: Como Multiplicar Seus Ganhos</h1>
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