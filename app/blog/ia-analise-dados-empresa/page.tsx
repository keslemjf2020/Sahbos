import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'Como Usar IA para Analisar Dados da Sua Empresa - Automacao IA' };

export default function Page() {
  const raw = `# Você tem planilhas cheias de dados, mas não sabe o que eles significam

Vendas, estoque, clientes, financeiro. Você acumula números, mas poucos geram decisão. Dados parados não servem para nada.

IA transforma números brutos em insights acionáveis em segundos. Sem ser analista de dados. Sem fórmulas complexas.

## O que você precisa para começar

| Ferramenta | Função | Preço |
|------------|--------|-------|
| **Google Sheets** | Onde seus dados vivem | Grátis |
| **Make** | Orquestrador da análise | Grátis (1.000 op/mês) |
| **DeepSeek** | IA para interpretar dados | Grátis (500 req/dia) |
| **Gmail** | Entrega do relatório | Grátis |

Tudo gratuito. Você testa sem gastar nada.

## Passo a passo: dados brutos → relatório pronto

### 1. Prepare seus dados

Organize em formato tabular. Primeira linha com cabeçalhos claros. Sem células mescladas.

| Mês | Vendas | Custos | Clientes novos | Ticket médio |
|-----|--------|--------|----------------|--------------|
| Jan | 15.000 | 8.000 | 45 | 333 |
| Fev | 18.000 | 8.500 | 52 | 346 |
| Mar | 14.500 | 8.200 | 38 | 382 |

### 2. Configure o fluxo no Make

Crie um cenário com 4 módulos:

1. **Trigger:** Agendamento (toda segunda às 9h)
2. **Leitura:** Busca dados da planilha
3. **IA:** DeepSeek analisa e gera relatório
4. **Entrega:** Envia por e-mail

> ---
> **🚀 Quer o template pronto?** Baixe grátis e configure em 30 minutos. [Comece agora](#)
> ---

### 3. O que a IA analisa

A IA recebe os dados e responde perguntas específicas que você definir no prompt.

### Exemplos de perguntas que a IA responde:

- **Tendência:** "Vendas estão subindo ou caindo nos últimos 3 meses?"
- **Anomalia:** "Houve algum mês fora do padrão? O que aconteceu?"
- **Correlação:** "Existe relação entre clientes novos e ticket médio?"
- **Recomendação:** "O que fazer para melhorar o resultado do próximo mês?"

> **Exemplo real:** Uma loja de roupas alimentava a planilha com vendas diárias. A IA detectou que às quartas-feiras as vendas caíam 30%. A loja criou uma promoção "Quarta do Desconto" e recuperou o faturamento do dia.

## Checklist para transformar dados em decisão

- [ ] Organize sua planilha principal em formato tabular (cabeçalho + linhas)
- [ ] Defina 3 perguntas de negócio que você quer responder toda semana
- [ ] Configure o fluxo no Make com DeepSeek para gerar o relatório automático
- [ ] Agende o disparo do relatório por e-mail toda segunda-feira às 9h`;
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
            <span className="text-slate-400 truncate max-w-[200px]">Como Usar IA para Analisar Dados da Sua Empresa</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Usar IA para Analisar Dados da Sua Empresa</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}