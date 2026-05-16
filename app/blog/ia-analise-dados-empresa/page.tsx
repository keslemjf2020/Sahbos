import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Como Usar IA para Analisar Dados da Sua Empresa - Automação IA' };

export default function Page() {
  const content = '# Como Usar IA para Analisar Dados da Sua Empresa\n\n## Introdução\n\nVocê tem planilhas cheias de dados, mas não sabe o que eles significam. IA muda isso. Com Make e DeepSeek, você transforma números brutos em insights acionáveis em segundos. Sem ser analista de dados. Sem formulas complexas.\n\n## O Problema Real\n\nPequenos negócios acumulam dados: vendas, estoque, clientes, financeiro. Mas poucos extraem valor real. Dados parados não geram decisão. IA analisa, resume e recomenda ações baseadas nos seus números.\n\n## O que Você Vai Precisar\n\n- **Google Sheets** ou **Excel Online** — onde seus dados vivem\n- **Make** — orquestrador da análise ([link afiliado](https://www.make.com/en/register?pc=seulink))\n- **DeepSeek API** — IA para interpretar dados\n- **Google Drive / OneDrive** — armazenamento dos relatórios\n\n## Passo a Passo\n\n### 1. Prepare Seus Dados\n\nOrganize em formato tabular. Primeira linha com cabeçalhos claros. Sem células mescladas. Exemplo:\n\n| Mês | Vendas | Custos | ClientesNovos | TicketMedio |\n|-----|--------|--------|---------------|-------------|\n| Jan | 15000 | 8000 | 45 | 333 |\n| Fev | 18000 | 8500 | 52 | 346 |\n\n### 2. Crie o Cenário no Make\n\n- **Trigger:** Agendamento (ex: toda segunda 9h) ou botão na planilha\n- **Módulo Google Sheets:** Busca intervalo de dados\n- **Módulo HTTP:** Envia dados para DeepSeek com prompt de análise\n- **Módulo Google Sheets:** Escreve insights em nova aba\n- **Módulo Email:** Envia resumo para seu email\n\n### 3. Configure o Prompt de Análise\n\nO prompt define como a IA interpreta:\n\n```\nAnalise os dados de vendas abaixo. Responda APENAS com fatos baseados nos numeros.\n\nEstrutura da resposta:\n1. Resumo: 2 frases sobre o periodo\n2. Destaque positivo: maior crescimento ou melhor resultado\n3. Alerta: pior resultado ou tendencia negativa\n4. Recomendacao: 1 acao pratica baseada nos dados\n\nNao invente numeros. Nao use estimativas. Use apenas os dados fornecidos.\n```\n\n### 4. Defina o Output\n\nCrie uma aba "Insights" no Sheets. Make escreve:\n\n- A1: "Resumo do Periodo"\n- A2: [resumo gerado pela IA]\n- A4: "Destaque Positivo"\n- A5: [destaque]\n- A7: "Alerta"\n- A8: [alerta]\n- A10: "Recomendacao"\n- A11: [recomendacao]\n\n## Exemplo Prático\n\n**Negócio:** Loja de roupas com 3 meses de dados\n\n**Dados brutos:**\n\n| Mês | Vendas | Custos | Clientes | Ticket |\n|-----|--------|--------|----------|--------|\n| Jan | 15000 | 8000 | 45 | 333 |\n| Fev | 18000 | 8500 | 52 | 346 |\n| Mar | 22000 | 11000 | 48 | 458 |\n\n**Resultado da IA:**\n\n"Resumo: Vendas cresceram 46% de janeiro a março, de R$15k para R$22k. Custos subiram proporcionalmente.\n\nDestaque positivo: Ticket médio aumentou 37%, indicando que clientes estão comprando itens mais caros.\n\nAlerta: Número de clientes novos caiu 8% em março comparado a fevereiro. Pode indicar necessidade de reativar aquisição.\n\nRecomendação: Invista em campanha para trazer novos clientes, já que os existentes estão gastando mais."\n\n**Tempo gasto:** 0 minutos. Relatório pronto automaticamente.\n\n## Variações Úteis\n\n### Análise de Estoque\n```\nAnalise os dados de estoque. Quais produtos estão parados há mais de 60 dias? Sugira ações: promoção, bundle ou descarte.\n```\n\n### Análise Financeira\n```\nCompare receitas vs despesas dos últimos 3 meses. Onde está o maior gasto? Qual a margem líquida? Recomende 2 cortes de custo.\n```\n\n### Análise de Clientes\n```\nAnalise a base de clientes. Qual o segmento que mais compra? Qual o que menos compra? Sugira estratégia para cada grupo.\n```\n\n## Cuidados Importantes\n\n- **Dados sensíveis:** Não envie dados bancários ou CPF para IA externa\n- **Volume:** DeepSeek tem limite de tokens. Para muitos dados, divida em lotes\n- **Contexto:** IA não sabe o que é "bom" para seu negócio. Você define os critérios\n- **Revisão:** Sempre confira os números antes de agir baseado na análise\n\n## Checklist Final\n\n- [ ] Dados organizados em formato tabular\n- [ ] Conta Make ativa ([link](https://www.make.com/en/register?pc=seulink))\n- [ ] Chave API DeepSeek configurada\n- [ ] Prompt de análise testado com dados reais\n- [ ] Aba de insights criada no Sheets\n- [ ] Agendamento configurado (diário/semanal)\n- [ ] Email de resumo funcionando\n- [ ] Primeira análise revisada manualmente\n\nDados parados não valem nada. Conecte suas planilhas ao Make e DeepSeek e receba análises prontas sem abrir calculadora.'.split('\\n').map((l,i) => {
    if (l.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{l.slice(3)}</h2>;
    if (l.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{l.slice(4)}</h3>;
    if (l.startsWith('|')) return <p key={i} className="font-mono text-xs text-slate-400 my-1">{l}</p>;
    if (!l.trim()) return <br key={i} />;
    if (l.startsWith('[') && l.includes('](')) {
      const m = l.match(/\[(.+?)\]\((.+?)\)/);
      if (m) return <p key={i} className="my-2"><a href={m[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline">{m[1]}</a></p>;
    }
    return <p key={i} className="text-slate-300 leading-relaxed mb-3">{l}</p>;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6">← Voltar</Link>
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">IA</span>
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Como Usar IA para Analisar Dados da Sua Empresa</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
