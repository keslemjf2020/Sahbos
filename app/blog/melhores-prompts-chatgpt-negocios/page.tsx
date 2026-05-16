import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '10 Melhores Prompts do ChatGPT para Pequenos Negocios - Automação IA' };

export default function Page() {
  const content = '# 10 Melhores Prompts do ChatGPT para Pequenos Negocios\n\n## Introducao\n\nTodo mundo tem acesso ao ChatGPT, mas poucos sabem usar direito. O segredo esta no prompt. Um prompt bem escrito entrega resultado pronto. Um prompt generico da resposta generica. Estes 10 prompts sao testados em negocios reais e funcionam.\n\n## O Problema Real\n\nVoce abre o ChatGPT, digita "me ajuda com meu negocio" e recebe um textao generico. Frustrante. Prompts especificos resolvem isso. Cada um dos 10 abaixo resolve um problema real de pequeno negocio.\n\n## Os 10 Prompts\n\n### 1. Criacao de Nome para Produto\n\n```\nCrie 10 nomes para um [tipo de produto] voltado para [publico-alvo].\nRequisitos: facil de pronunciar, maximo 2 silabas, dominio .com.br disponivel.\nExplique o significado de cada nome.\n```\n\n### 2. Descricao de Produto para E-commerce\n\n```\nEscreva uma descricao de produto para [nome do produto].\nTamanho: 100 palavras. Tom: persuasivo mas honesto.\nInclua: 3 beneficios principais, 2 especificacoes tecnicas, 1 chamada para acao.\nPublico-alvo: [descreva o cliente ideal].\n```\n\n### 3. Resposta para Reclamacao de Cliente\n\n```\nO cliente reclamou sobre [problema]. Escreva uma resposta educada e resolutiva.\nTom: empatico. Tamanho: maximo 3 frases.\nOfereca: [solucao que voce pode dar]. Nao prometa o que nao pode cumprir.\n```\n\n### 4. Roteiro para Video Curto (Reels/TikTok)\n\n```\nCrie um roteiro de 30 segundos para video sobre [tema].\nEstrutura: gancho nos primeiros 3 segundos, problema, solucao, chamada para acao.\nTom: [informal / profissional / humoristico]. Publico: [descreva].\n```\n\n### 5. Post para Instagram\n\n```\nEscreva uma legenda para Instagram sobre [tema].\nTamanho: 150 palavras. Tom: [descontraido / inspirador / educativo].\nInclua: 3 hashtags relevantes, 1 pergunta para engajamento, 1 CTA.\nEvite: cliches de empreendedorismo.\n```\n\n### 6. Email de Cobranca\n\n```\nEscreva um email de cobranca para cliente com fatura em atraso ha [dias] dias.\nTom: profissional mas nao agressivo. Ofereca: parcelamento em [x] vezes.\nInclua: valor devido, data de vencimento original, link para pagamento.\nNao ameace. Seja direto.\n```\n\n### 7. Script de Atendimento Telefonico\n\n```\nCrie um script de 30 segundos para atender ligacao de cliente interessado em [produto/servico].\nEstrutura: saudacao, pergunta para entender necessidade, oferta resumida, agendamento.\nTom: calmo e confiante. Deixe espaco para o cliente falar.\n```\n\n### 8. Texto para Pagina "Sobre Nos"\n\n```\nEscreva um texto "Sobre Nos" para [nome da empresa].\nTamanho: 200 palavras. Tom: [profissional / acolhedor / inovador].\nInclua: historia da empresa, valores, diferencial competitivo.\nNao use jargoes. Seja humano.\n```\n\n### 9. Checklist para Lancamento de Produto\n\n```\nCrie um checklist de 15 itens para o lancamento de [produto].\nDivida em: pre-lancamento (7 dias antes), dia do lancamento, pos-lancamento (7 dias depois).\nInclua: acoes de marketing, comunicacao com clientes, metricas para acompanhar.\n```\n\n### 10. Analise de Concorrente\n\n```\nAnalise o concorrente [nome da empresa/loja].\nPontos para analisar: precos, publico-alvo, canais de venda, diferencial, fraquezas.\nFormato: 5 bullets points com 1 frase cada.\nBaseie-se em informacoes publicas (site, redes sociais, reviews).\n```\n\n## Como Automatizar com Make\n\nEsses prompts funcionam manualmente, mas ficam melhores com automacao. Conecte ChatGPT ao Make e crie fluxos:\n\n- Novo pedido -> prompt 2 gera descricao -> publica no site\n- Reclamacao no WhatsApp -> prompt 3 gera resposta -> envia automaticamente\n- Segunda-feira 8h -> prompt 5 gera 5 posts da semana -> salva no Drive\n\n[Link afiliado Make](https://www.make.com/en/register?pc=seulink)\n\n## Checklist Final\n\n- [ ] Salve os 10 prompts em um documento\n- [ ] Teste cada um com seu negocio real\n- [ ] Ajuste os colchetes com suas informacoes\n- [ ] Crie 1 automacao no Make com o prompt mais util\n- [ ] Compartilhe com sua equipe\n- [ ] Reveja prompts a cada mes\n\nPrompt certo economiza hora de trabalho. Teste estes 10 hoje e veja qual entrega mais resultado.'.split('\\n').map((l,i) => {
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
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">10 Melhores Prompts do ChatGPT para Pequenos Negocios</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span>2026-05-16</span><span>3 min</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
    </div>
  );
}
