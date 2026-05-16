import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Como Automatizar Email Marketing com IA - Automação IA' };

export default function Page() {
  const content = '# Como Automatizar Email Marketing com IA\n\n## Introdução\n\nEmail marketing ainda entrega o maior ROI entre canais digitais. Mas criar sequencias, segmentar listas e escrever copias consome tempo. IA combinada com automacao resolve isso. Com Make e DeepSeek, voce monta campanhas que disparam sozinhas com conteudo personalizado.\n\n## O Problema Real\n\nVocê tem uma lista de emails, mas nao sabe o que enviar. Ou escreve tudo manualmente e gasta horas. Ou paga caro por ferramentas que prometem "magica" e entregam pouco. Automacao com IA resolve: voce define regras, IA cria o conteudo, Make dispara.\n\n## O que Você Vai Precisar\n\n- **Ferramenta de Email** (Mailchimp, SendGrid, ou qualquer uma com API)\n- **Make** — orquestrador da automacao ([link afiliado](https://www.make.com/en/register?pc=seulink))\n- **DeepSeek API** — IA para gerar copias\n- **Google Sheets** — base de dados dos contatos\n\n## Passo a Passo\n\n### 1. Prepare Sua Base de Contatos\n\nCrie uma planilha no Google Sheets com colunas:\n\n| Nome | Email | Segmento | UltimaCompra |\n|------|-------|----------|--------------|\n| Joao | joao@email.com | Premium | 15/01 |\n| Maria | maria@email.com | Basico | 20/12 |\n\n### 2. Crie o Cenario no Make\n\n- **Trigger:** Agendamento (ex: toda quarta 10h) OU gatilho (novo lead na planilha)\n- **Modulo Google Sheets:** Busca contatos do segmento desejado\n- **Modulo HTTP:** Envia dados do contato para DeepSeek com prompt\n- **Modulo Email:** Dispara email com copia gerada\n\n### 3. Configure o Prompt no DeepSeek\n\nO prompt define o tom e objetivo do email:\n\n```\nEscreva um email de 3 paragrafos para [NOME].\nSegmento: [SEGMENTO]. Objetivo: promover [PRODUTO].\nTom: profissional mas amigavel.\nInclua: saudacao, problema que resolve, chamada para acao.\nNao use jargoes. Seja direto.\n```\n\n### 4. Defina as Regras de Disparo\n\nNo Make, adicione filtros:\n\n- So enviar para segmento "Premium" se ultima compra > 30 dias\n- Limite de 50 emails por hora para nao cair em spam\n- Nao enviar para quem ja abriu email similar nos ultimos 7 dias\n\n## Exemplo Pratico\n\n**Negocio:** Loja de cursos online\n\n**Cenario:** Segunda-feira 9h, Make dispara para 200 leads frios\n\n**Fluxo:**\n1. Make busca leads com status "Frio" e ultimo contato > 60 dias\n2. Para cada lead, enpara nome e interesse para DeepSeek\n3. DeepSeek gera email personalizado:\n   - "Oi [Nome], vi que voce se interessou por [interesse]..."\n   - "Nosso curso [nome] resolve [problema]..."\n   - "Clique aqui para 30% de desconto: [link]"\n4. Make envia via SendGrid com tracking de abertura\n5. Resultados voltam para planilha (abriu? clicou?)\n\n**Resultado:** 3x mais aberturas que campanha generica. Tempo gasto: 0.\n\n## Variacoes Uteis\n\n- **Sequencia de boas-vindas:** Novo lead -> 3 emails automaticos com intervalo de 2 dias\n- **Recuperacao de carrinho:** Carrinho abandonado -> email com oferta em 1 hora\n- **Newsletter semanal:** IA resume posts do blog em 2 paragrafos e envia\n\n## Cuidados Importantes\n\n- **Spam:** Nao dispare mais que 100 emails/hora sem aquecimento de dominio\n- **Personalizacao real:** Use dados reais do contato, nao placeholders genericos\n- **Teste A/B:** DeepSeek pode gerar 2 versoes do mesmo email para testar\n- **Opt-out:** Sempre inclua link de descadastro (obrigatorio por lei)\n\n## Checklist Final\n\n- [ ] Base de contatos organizada no Sheets\n- [ ] Conta Make ativa ([link](https://www.make.com/en/register?pc=seulink))\n- [ ] Chave API DeepSeek configurada\n- [ ] Prompt testado com 3 contatos reais\n- [ ] Regras de segmentacao definidas\n- [ ] Limite de disparo configurado\n- [ ] Teste enviado para si mesmo\n- [ ] Tracking de abertura ativo\n\nEmail marketing manual morreu. Conecte Make com DeepSeek e dispare campanhas personalizadas sem escrever uma linha.'.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">Como Automatizar Email Marketing com IA</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
