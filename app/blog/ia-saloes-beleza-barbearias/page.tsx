import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Saloes e Barbearias: Agendamento e Fidelizacao - Automacao IA',
  openGraph: { title: 'IA para Saloes e Barbearias: Agendamento e Fidelizacao', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=IA%20para%20Saloes%20e%20Barbearias%3A%20Agendamento%20e%20Fidelizacao', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Cliente chega sem agendar, espera 40 minutos, reclama

Outro agendou mas esqueceu, você perdeu o horário. Cadastro do cliente é papel amassado com telefone ilegível. Metade dos clientes que poderiam ser fiéis simplesmente não voltam.

**IA para salões e barbearias** organiza o caos e transforma cliente ocasional em fiel.

## Agendamento inteligente com perfil do cliente

Cada cliente tem preferências: profissional, serviço, produtos. IA gerencia tudo.

### Como funciona na prática:

| O que o cliente faz | O que a IA sabe | Resultado |
|---------------------|-----------------|-----------|
| Acessa link de agendamento | Profissional preferido | Check-in em 10 segundos |
| Escolhe serviço (corte, barba) | Duração exata de cada serviço | Horário preciso |
| Confirma horário | Lembrete automático enviado | Zero falta |

**Ferramentas:** **Agenda Salão IA** ou **Versatilis**. Cliente agenda online, IA gerencia o resto.

> **Exemplo real:** Uma barbearia em Porto Alegre implementou agendamento online com perfil. O tempo de check-in **caiu de 5 minutos para 10 segundos**. A taxa de falta **caiu de 25% para 5%**.

> ---
> **🚀 Quer automatizar o agendamento do seu salão?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Lembretes automáticos que reduzem falta

Cliente esquece o horário e você perde dinheiro. IA envia lembretes em múltiplos canais.

### Como funciona:

| Quando dispara | O que a IA envia | Resultado |
|----------------|------------------|-----------|
| 24 horas antes | "Seu horário é amanhã às 14h" | Cliente confirma |
| 2 horas antes | "Faltam 2h para seu corte" | Cliente se prepara |
| 30 minutos antes | "Estamos te esperando!" | Presença garantida |

> **Dica prática:** Configure 3 lembretes automáticos. A taxa de falta cai para menos de 5%.

## Checklist para organizar seu salão ou barbearia

- [ ] Implemente agendamento online com perfil do cliente (profissional, serviço, produtos)
- [ ] Configure lembretes automáticos com 24h, 2h e 30 minutos de antecedência
- [ ] Crie cadastro digital do cliente com histórico de serviços
- [ ] Monitore a redução de faltas e o aumento de clientes fiéis no primeiro mês`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Saloes e Barbearias: Agendamento e Fidelizacao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Saloes e Barbearias: Agendamento e Fidelizacao</h1>
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