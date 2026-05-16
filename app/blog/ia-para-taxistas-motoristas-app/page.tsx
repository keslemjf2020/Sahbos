import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA para Motoristas de App: Otimize suas Corridas - Automacao IA' };

export default function Page() {
  const raw = `# Você roda 10 horas por dia e sua hora vale R\$ 10

Em 4 horas está no lugar errado. Fica parado esperando corrida. Quando vem, é curta e não compensa. Gastou R\$ 60 de combustível, faturou R\$ 180. Lucro líquido: **R\$ 100 por 10 horas.**

**IA para motoristas de app** otimiza cada corrida para você ganhar mais rodando menos.

## Previsão de horários e regiões com maior demanda

Estar no lugar certo na hora certa é o segredo para corridas longas e bem pagas. IA calcula onde ir.

### Como funciona na prática:

| O que a IA analisa | O que prevê | O que você faz |
|--------------------|-------------|----------------|
| Show no estádio sábado 18h | 300 corridas, tarifa 1.8x | Fica na região desde 17h |
| Seu histórico de corridas | Bairros com mais chamadas longas | Prioriza essas áreas |
| Clima e horário | Horários de pico por região | Se posiciona antes |

**Ferramentas:** **MaxProfit** ou **Driver\'s Seat**. IA analisa eventos, clima, histórico e tarifa dinâmica.

> **Exemplo real:** Um motorista em São Paulo usava IA de previsão. O ganho por hora **subiu de R\$ 10 para R\$ 22**. A quilometragem diária **caiu de 180 km para 120 km**.

> ---
> **🚀 Quer otimizar suas corridas com IA?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Escolha inteligente de corridas

Aceitar toda corrida é erro. Algumas não compensam o tempo e combustível. IA calcula o lucro real de cada uma.

### Como funciona:

| Corrida oferecida | O que a IA calcula | Decisão |
|-------------------|--------------------|----------|
| 8 km, R\$ 12 | R\$ 1,50 por km, 15 min | Recusar (baixo retorno) |
| 15 km, R\$ 35 | R\$ 2,33 por km, 25 min | Aceitar (bom retorno) |
| 3 km, R\$ 8 | R\$ 2,66 por km, 8 min | Aceitar (rápido e compensa) |

> **Dica prática:** Configure a IA para aceitar automaticamente corridas acima de R\$ 2 por km. Você elimina as corridas ruins e foca nas que realmente valem a pena.

## Checklist para aumentar seu lucro como motorista

- [ ] Ative a previsão de horários e regiões com maior demanda
- [ ] Configure critérios mínimos de valor por km para aceitar corridas
- [ ] Posicione-se em áreas estratégicas antes dos horários de pico
- [ ] Monitore o aumento do ganho por hora e a redução de quilometragem`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Motoristas de App: Otimize suas Corridas</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Motoristas de App: Otimize suas Corridas</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}