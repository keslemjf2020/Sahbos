import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'IA no Agronegocio: Automacao para o Campo - Automacao IA' };

export default function Page() {
  const raw = `# Você acorda e olha para o céu. Vai chover ou não?

Se plantar hoje e chover amanhã, perde a semente. Se esperar e não chover, perde a janela de plantio. Sua decisão é baseada em palpite.

O resultado? **20% da safra perdida** todo ano por decisões erradas de manejo.

**IA no agronegócio** transforma palpite em dado. Você não precisa mais adivinhar clima, pragas ou momento certo da colheita.

## Monitoramento de lavouras sem andar 200 hectares

Andar a lavoura para verificar toma o dia inteiro. E você ainda perde áreas com problema.

### Como funciona na prática:

| O que a IA analisa | O que detecta | Alerta no celular |
|--------------------|---------------|-------------------|
| Imagens de satélite | Vigor da planta (NDVI) | "Talhão 3 com estresse hídrico" |
| Sensores de solo | Umidade e nutrientes | "Irrigar nas próximas 24h" |
| Histórico da área | Presença de pragas | "Praga detectada no talhão 7" |

**Ferramentas:** **Agrosmart** ou **CropX** usam imagens de satélite + IA. Gera mapa de calor da fazenda: verde (saudável), amarelo (atenção), vermelho (problema).

> **Exemplo real:** Uma fazenda de soja em Mato Grosso detectou uma praga no talhão 7 três dias antes de se espalhar. O alerta permitiu aplicar defensivo localizado, **economizando 40% no custo**.

> ---
> **🚀 Automatize o monitoramento da sua lavoura.** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Previsão climática que salva sua safra

Não é mais "vai chover ou não?". A IA combina dados históricos, satélites e sensores para prever o clima nos próximos 15 dias com 90% de precisão.

### O que a IA prevê:

- **Janela de plantio:** Melhor data para semear baseada em chuva e temperatura
- **Risco de geada:** Alerta com 7 dias de antecedência
- **Irrigação inteligente:** Quantidade exata de água para cada talhão
- **Colheita:** Momento ideal baseado em umidade do grão

## Checklist para implantar IA na sua fazenda

- [ ] Instale sensores de solo nos 3 talhões mais produtivos
- [ ] Configure o monitoramento por satélite com alertas no celular
- [ ] Ative a previsão climática de 15 dias com recomendações de manejo
- [ ] Monitore os alertas de praga e estresse hídrico na primeira safra`;
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
            <Link href={`/categoria/${'Negocios'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Negocios</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA no Agronegocio: Automacao para o Campo</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Negocios</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA no Agronegocio: Automacao para o Campo</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}