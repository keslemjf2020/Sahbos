import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA na Logistica: Otimize Rotas e Entregas - Automacao IA',
  openGraph: { title: 'IA na Logistica: Otimize Rotas e Entregas', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=IA%20na%20Logistica%3A%20Otimize%20Rotas%20e%20Entregas', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Seu motorista sai com 25 entregas e faz só 10 até as 14h

Passa 3 vezes pelo mesmo bairro. Perde 2 horas no trânsito. Volta com 5 entregas não realizadas. Amanhã, a mesma rota ineficiente se repete. **R\$ 5.000 a mais de combustível** no fim do mês.

**IA na logística** transforma esse cenário.

## Otimização de rotas em tempo real

Rota fixa não funciona. Trânsito muda, cliente não está, entrega é recusada. IA recalcula em tempo real.

### Como funciona na prática:

| O que a IA analisa | O que recalcula | O motorista recebe |
|--------------------|-----------------|--------------------|
| Endereços e trânsito | Rota mais eficiente | "Próxima entrega: Rua X, 123" |
| Janelas de entrega | Ordem ideal das paradas | "Desvio de 2 minutos" |
| Capacidade do veículo | Peso e volume por viagem | "Volte à base às 16h" |

**Ferramentas:** **Route4Me** ou **OptimoRoute**. IA recalcula durante a rota se houver imprevisto.

> **Exemplo real:** Uma transportadora em São Paulo usava OptimoRoute. A quilometragem média por motorista **caiu 22%**. O número de entregas por dia **subiu de 18 para 24**.

> ---
> **🚀 Quer otimizar a logística da sua empresa?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Previsão de demanda por região e horário

Segunda-feira tem mais entregas no centro. Sexta-feira na zona sul. IA distribui a frota com antecedência.

### Como funciona:

| Dia da semana | Região com maior demanda | Alocação da frota |
|---------------|--------------------------|-------------------|
| Segunda | Centro (comércio) | 60% da frota no centro |
| Quarta | Bairros residenciais | 50% da frota nos bairros |
| Sexta | Zona sul (entregas noturnas) | 70% da frota na zona sul |

> **Dica prática:** Configure a IA para analisar o histórico de entregas dos últimos 3 meses. A previsão de demanda fica precisa em 2 semanas.

## Checklist para otimizar sua logística

- [ ] Implemente otimização de rotas em tempo real com IA
- [ ] Ative a previsão de demanda por região e horário para distribuir a frota
- [ ] Configure alertas para desvios e imprevistos durante a rota
- [ ] Monitore a redução de quilometragem e o aumento de entregas por motorista`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA na Logistica: Otimize Rotas e Entregas</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA na Logistica: Otimize Rotas e Entregas</h1>
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