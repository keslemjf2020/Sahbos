import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Fotografos: Edicao e Organizacao Automatica - Automacao IA',
  openGraph: { title: 'IA para Fotografos: Edicao e Organizacao Automatica', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/3b82f6?text=IA%20para%20Fotografos%3A%20Edicao%20e%20Organizacao%20Automatica', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você volta de um casamento com 1500 fotos e o cliente espera 15 dias

Selecionar leva 3 horas. Editar uma por uma no Lightroom? Mais 8 horas. No fim, o cliente já perdeu o entusiasmo.

**IA para fotógrafos** elimina o gargalo da pós-produção.

## Seleção inteligente de fotos

Olhar 1500 fotos para escolher 300 é cansativo. Você acaba deixando passar a melhor. IA faz em minutos.

### Como funciona na prática:

| O que a IA analisa | O que classifica | Seu trabalho |
|--------------------|------------------|--------------|
| Foco e nitidez | Estrela (top) | Revisar e ajustar |
| Exposição e cor | Ok | Usar direto |
| Olhos fechados, tremidas | Descarte automático | Ignorar |

**Ferramentas:** **AfterShoot** ou **Narrative Select**. IA avalia foco, exposição, expressão facial e composição.

> **Exemplo real:** Um fotógrafo de casamentos reduziu o tempo de seleção de **4 horas para 40 minutos**. A IA descartava automaticamente fotos tremidas, com olhos fechados ou mal expostas.

> ---
> **🚀 Quer automatizar a pós-produção das suas fotos?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Edição em lote com presets de IA

Aplicar o mesmo ajuste em 500 fotos manualmente é repetitivo. IA edita todas de uma vez.

### Como configurar:

- Edite 1 foto do jeito que você gosta
- IA aprende seu estilo: contraste, cor, tom
- Aplica o mesmo preset em todas as fotos
- Você só revisa e exporta

## Entrega automática com galeria online

Cliente espera 15 dias. Com IA, entrega em 48 horas.

### Como funciona:

1. **Upload:** Fotos selecionadas vão para a nuvem automaticamente
2. **Edição:** IA aplica o preset em lote
3. **Galeria:** Cliente recebe link com galeria online organizada
4. **Download:** Cliente baixa as fotos que quiser em alta resolução

**Ferramentas:** **Pixieset** ou **Pic-Time** com integração de IA.

## Checklist para acelerar sua pós-produção

- [ ] Use IA para selecionar automaticamente as melhores fotos
- [ ] Crie um preset de edição com IA e aplique em lote
- [ ] Configure galeria online para entrega automática ao cliente
- [ ] Monitore a redução do tempo de entrega no primeiro mês`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Fotografos: Edicao e Organizacao Automatica</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#3b82f620',color:'#3b82f6',border:'1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Fotografos: Edicao e Organizacao Automatica</h1>
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