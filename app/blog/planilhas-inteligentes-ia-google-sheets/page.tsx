import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'Planilhas Inteligentes: Como Automatizar Relatorios com IA e Google Sheets - Automacao IA' };

export default function Page() {
  const raw = `# Você baixa dados, cria gráficos, escreve resumos, formata células. Toda semana o mesmo processo

Relatórios são úteis, mas o trabalho manual de produzi-los é repetitivo. Erro de digitação, fórmula quebrada, dado desatualizado. Automatizar corta isso para zero.

Conectar planilhas ao **Make** e **DeepSeek** transforma dados brutos em relatórios prontos em segundos.

## O que você vai precisar

### Ferramentas necessárias:

| Ferramenta | Função | Custo |
|------------|--------|-------|
| Google Sheets | Dados vivos | Grátis |
| Make | Orquestrador | Grátis (1000 ops/mês) |
| DeepSeek API | IA para analisar | \$0,27/1M tokens |
| Google Drive API | Conexão | Grátis |

## Passo a passo

### 1. Prepare sua planilha

Organize os dados em formato tabular. Primeira linha com cabeçalhos. Sem células mescladas.

**Exemplo de estrutura:**

| Data | Vendas | Produto | Região |
|------|--------|---------|--------|
| 01/01 | 1500 | Camisa | SP |
| 01/01 | 2300 | Calçado | RJ |

> **Regra:** Dados limpos = relatório preciso. Dados bagunçados = resultado errado.

### 2. Crie o cenário no Make

- **Trigger:** Agendamento (toda segunda 8h) ou botão na planilha
- **Módulo Google Sheets:** Busca linhas da planilha
- **Módulo DeepSeek:** Envia dados para análise com prompt específico
- **Módulo Google Docs:** Gera relatório formatado

> ---
> **🚀 Quer automatizar seus relatórios com IA?** Teste grátis por 14 dias. [Comece agora](#)
> ---

### 3. Configure o prompt do DeepSeek

O prompt define a qualidade do relatório. Seja específico sobre o que quer.

\`\`\`
Analise os dados de vendas abaixo e gere um relatório executivo.
Inclua: total vendido, produto mais vendido, região com melhor performance,
tendência semanal e 3 recomendações de ação.
Dados: [cole os dados da planilha]
\`\`\`

> **Dica prática:** Teste o prompt primeiro no chat do DeepSeek. Quando o resultado estiver bom, copie para o Make.

### 4. Automatize a entrega

Configure o Make para enviar o relatório pronto por e-mail ou salvar no Google Drive.

| Canal | Como configurar | Vantagem |
|-------|----------------|----------|
| E-mail | Módulo Gmail no Make | Entrega direta na caixa de entrada |
| Google Docs | Módulo Google Docs | Relatório editável |
| Slack | Módulo Slack | Notificação em tempo real |

## Checklist para automatizar relatórios

- [ ] Organize os dados em formato tabular com cabeçalhos
- [ ] Crie o cenário no Make com trigger agendado
- [ ] Teste o prompt do DeepSeek no chat antes de integrar
- [ ] Configure a entrega automática por e-mail ou Google Drive`;
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
            <span className="text-slate-400 truncate max-w-[200px]">Planilhas Inteligentes: Como Automatizar Relatorios com IA e Google Sheets</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Planilhas Inteligentes: Como Automatizar Relatorios com IA e Google Sheets</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-15</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}