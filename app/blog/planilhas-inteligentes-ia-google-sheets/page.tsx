import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Planilhas Inteligentes: Como Automatizar Relatorios com IA e Google Sheets - Automacao IA' };

export default function Page() {
  const content = `# Planilhas Inteligentes: Como Automatizar Relatorios com IA e Google Sheets\n\n## Introdução\n\nGerar relatorios manuais no Google Sheets consome tempo e abre margem para erro. Conectar planilhas ao Make e DeepSeek transforma dados brutos em relatorios prontos em segundos. Sem formulas complexas. Sem copiar e colar.\n\n## O Problema Real\n\nVocê baixa dados, cria graficos, escreve resumos, formata celulas. Toda semana o mesmo processo. Relatorios sao uteis, mas o trabalho manual de produzi-los e repetitivo. Automacao com IA corta isso para zero.\n\n## O que Você Vai Precisar\n\n- **Google Sheets** — onde seus dados vivem\n- **Make** — orquestrador da automacao ([link afiliado](https://www.make.com/en/register?pc=seulink))\n- **DeepSeek API** — IA para analisar e resumir dados\n- **Google Drive API** — conexao entre Make e Sheets\n\n## Passo a Passo\n\n### 1. Prepare Sua Planilha\n\nOrganize os dados em formato tabular. Primeira linha com cabecalhos. Sem celulas mescladas. Exemplo:\n\n| Data | Vendas | Produto | Regiao |\n|------|--------|---------|--------|\n| 01/01 | 1500 | Camisa | SP |\n| 01/01 | 2300 | Calcado | RJ |\n\n### 2. Crie o Cenario no Make\n\n- **Trigger:** Agendamento (toda segunda 8h) ou botao na planilha\n- **Modulo Google Sheets:** Busca linhas da planilha\n- **Modulo HTTP:** Envia dados para DeepSeek com prompt\n- **Modulo Google Sheets:** Escreve resultado em nova aba\n\n### 3. Configure o Prompt no DeepSeek\n\nO prompt define como a IA interpreta os dados:\n\n\`\`\`\nResuma os dados de vendas abaixo em 3 frases. \nDestaque: total vendido, produto mais vendido, tendencia da semana.\nNao invente dados. Use numeros reais.\n\`\`\`\n\n### 4. Defina o Output\n\nCrie uma aba "Relatorio" no Sheets. Make escreve la:\n\n- Celula A1: "Total vendido: R\$XX.XXX"\n- Celula A2: "Produto destaque: [nome]"\n- Celula A3: "Tendencia: [resumo]"\n\n## Exemplo Pratico\n\n**Cenario:** Loja virtual que vende 50 produtos/dia\n\n**Antes:** 2 horas toda segunda feira para montar relatorio semanal\n\n**Depois:** 0 minutos. Relatorio pronto automaticamente as 8h da segunda\n\n**Fluxo:**\n1. Dados de vendas estao na aba "Vendas"\n2. Segunda 8h, Make dispara\n3. Busca ultimos 7 dias de dados\n4. Envia para DeepSeek com prompt de resumo\n5. DeepSeek retorna: "Total vendido: R\$47.230. Produto destaque: Tenis Runner. Crescimento de 12% em relacao a semana anterior."\n6. Make escreve na aba "Relatorio"\n7. Voce abre e ve o resumo pronto\n\n### Variacao: Relatorio com Grafico\n\nMake tambem pode gerar graficos no Google Sheets via API. Adicione um modulo que cria grafico de barras com os dados do periodo.\n\n## Cuidados Importantes\n\n- **Limite de tokens:** DeepSeek tem limite de 8k tokens. Para muitos dados, divida em lotes\n- **Formato consistente:** Dados mal formatados geram relatorios ruins\n- **Revisao:** IA pode alucinar numeros. Configure prompt para "use apenas dados fornecidos"\n- **Trigger manual:** Use botoes no Sheets para disparar sob demanda, nao apenas agendado\n\n## Checklist Final\n\n- [ ] Planilha organizada com cabecalhos claros\n- [ ] Conta Make ativa ([link](https://www.make.com/en/register?pc=seulink))\n- [ ] Chave API DeepSeek configurada\n- [ ] Cenario Make com trigger (agenda ou botao)\n- [ ] Prompt testado com dados reais\n- [ ] Aba de relatorio criada no Sheets\n- [ ] Teste com 3 execucoes antes de confiar\n\nRelatorios manuais morreram. Conecte Google Sheets ao Make e DeepSeek e receba analises prontas sem tocar em formulas.`.split('\\n').map((l,i) => {
    if (l.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{l.slice(3)}</h2>;
    if (l.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{l.slice(4)}</h3>;
    if (l.startsWith('|')) return <p key={i} className="font-mono text-xs text-slate-400 my-1">{l}</p>;
    if (!l.trim()) return <br key={i} />;
    if (l.startsWith('[') && l.includes('](')) {
      const m = l.match(/\[(.+?)\]\((.+?)\)/);
      if (m) return <p key={i} className="my-2"><a href={m[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline">{m[1]}</a></p>;
    }
    if (l.startsWith('- [ ]')) return <p key={i} className="flex items-center gap-2 text-slate-300 my-1"><input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" readOnly />{l.slice(5)}</p>;
    return <p key={i} className="text-slate-300 leading-relaxed mb-3">{l}</p>;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6">← Voltar</Link>
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">IA</span>
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Planilhas Inteligentes: Como Automatizar Relatorios com IA e Google Sheets</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-15</span><span>•</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}
