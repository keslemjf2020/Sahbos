import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA para Advogados: Automatize Documentos Juridicos - Automacao IA',
  openGraph: { title: 'IA para Advogados: Automatize Documentos Juridicos', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=IA%20para%20Advogados%3A%20Automatize%20Documentos%20Juridicos', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você passa horas redigindo contratos que são 90% iguais

Petições simples tomam uma tarde inteira. Clientes pedem ajustes no último minuto. O escritório fatura menos porque você gasta tempo demais com papel.

**IA para advogados** não substitui seu julgamento — elimina o trabalho braçal de criar documentos do zero.

## Geração automática de contratos e petições

Ferramentas criam documentos jurídicos completos a partir de um questionário simples.

### Como funciona na prática:

| O que o cliente preenche | O que a IA faz | O que você recebe |
|--------------------------|----------------|-------------------|
| Nome, CPF, valor, prazo | Seleciona cláusulas corretas | Contrato .docx pronto |
| Tipo de ação, partes, fatos | Estrutura petição padrão | Petição para revisar |
| Dados do imóvel, locatário | Gera contrato de locação | Documento completo |

**Ferramentas:** **JusDocs** ou **Docassemble**. Você só revisa antes de enviar.

> **Exemplo real:** Um escritório de direito imobiliário reduziu de **2 horas para 15 minutos** a criação de contratos de locação.

> ---
> **🚀 Quer automatizar a geração de contratos do seu escritório?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Análise e revisão de documentos com IA

Ler contratos de 50 páginas procurando cláusulas específicas toma tempo. IA faz isso em segundos.

### O que a IA identifica:

- **Cláusulas de risco** — multas, prazos curtos, juros abusivos
- **Inconsistências** — dados conflitantes entre cláusulas
- **Omissões** — itens importantes que não foram incluídos
- **Jurisprudência** — decisões recentes que afetam o caso

> **Dica prática:** Use IA para revisar contratos antes de enviar ao cliente. Reduza o risco de erros em **90%**.

## Checklist para automatizar seu escritório

- [ ] Configure geração automática de contratos com JusDocs ou Docassemble
- [ ] Use IA para revisar cláusulas de risco e inconsistências
- [ ] Implemente pesquisa de jurisprudência automatizada
- [ ] Monitore a redução de tempo gasto em documentos no primeiro mês`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA para Advogados: Automatize Documentos Juridicos</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Advogados: Automatize Documentos Juridicos</h1>
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