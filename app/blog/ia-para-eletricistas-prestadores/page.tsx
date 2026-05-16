import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Eletricistas: Orcamentos e Agendamento - Automacao IA' };

export default function Page() {
  const raw = `# Cliente liga, você vai até o local, faz orçamento e ele diz "vou ver e te aviso"

70% não te avisa. Você perdeu 1h30 de deslocamento que não vai receber. Tomada queimada, disjuntor caiu, fio solto — cliente não sabe descrever.

**IA para eletricistas** resolve orçamento e agendamento sem você sair de casa.

## Orçamento automático com diagnóstico remoto

Cliente descreve o problema. IA calcula o serviço e o valor sem deslocamento.

### Como funciona na prática:

| Cliente descreve | IA pergunta | Orçamento gerado |
|------------------|-------------|------------------|
| "Tomada do quarto parou" | "Quantas tomadas? Caiu disjuntor?" | Troca simples: R\$ 110 |
| "Chuveiro não esquenta" | "Marca? Quantos anos? Fez barulho?" | Troca resistência: R\$ 150 |
| "Curto no quadro geral" | "Desligou geral? Cheiro de queimado?" | Visita técnica: R\$ 80 + serviço |

**Ferramentas:** **Orçamento Fácil** ou **Zapier** com IA. Cliente responde, IA calcula, envia PDF por WhatsApp.

> **Exemplo real:** Um eletricista em SP usava orçamento remoto. Antes, ele perdia **3 horas por dia** em visitas que não viravam serviço. Depois, só ia quando o cliente já tinha aprovado o orçamento. A taxa de conversão **subiu de 30% para 80%**.

> ---
> **🚀 Quer automatizar os orçamentos da sua elétrica?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Agendamento inteligente que otimiza rotas

Cliente quer marcar, você perde tempo indo e voltando. IA organiza a rota ideal.

### Como funciona:

- Cliente agenda pelo WhatsApp ou site
- IA verifica sua disponibilidade e sugere horários
- Agrupa serviços por região para evitar deslocamentos desnecessários
- Envia lembrete automático 24h antes

> **Dica prática:** Configure para agendar serviços em regiões próximas no mesmo dia. Reduza o tempo de deslocamento em até **40%**.

## Checklist para otimizar seu serviço de elétrica

- [ ] Configure orçamento automático com diagnóstico remoto via WhatsApp
- [ ] Implemente agendamento inteligente que otimiza rotas
- [ ] Ative lembretes automáticos para reduzir faltas
- [ ] Monitore a taxa de conversão de orçamentos no primeiro mês`;
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
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Eletricistas: Orcamentos e Agendamento</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Eletricistas: Orcamentos e Agendamento</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}