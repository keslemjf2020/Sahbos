import Link from "next/link";
import { ArrowLeft, Clock, Share2, BookOpen, Calendar } from "lucide-react";

const posts: Record<string, { title: string; date: string; content: string; cat?: string }> = {
  "ferramentas-automacao-pequenos-negocios": { title: "As 5 Melhores Ferramentas de Automação para Pequenos Negócios em 2026", date: "15/05/2026", cat: "Ferramentas", content: `## Por Que Automatizar\n\nPequenos negócios perdem horas por semana com tarefas manuais que poderiam ser feitas por software. Em 2026, as ferramentas de automação estão mais acessíveis do que nunca.\n\n## As 5 Melhores\n\n### 1. Make (Antigo Integromat)\n\nA mais completa. Interface visual de arrastar e soltar. 1000+ integrações. Plano grátis generoso com 1000 operações/mês.\n\n### 2. Zapier\n\nA mais popular. Simples de usar. 6000+ apps. Ideal para iniciantes que querem automações rápidas sem curva de aprendizado.\n\n### 3. n8n\n\nOpen source. Pode hospedar no seu servidor. Ideal para quem quer controle total dos dados e personalização avançada com código.\n\n### 4. Activepieces\n\nAlternativa open source ao Zapier. Interface limpa, fácil de usar. Crescendo rápido em popularidade.\n\n### 5. Pipedream\n\nPlataforma para desenvolvedores. Permite escrever código (Node.js, Python) nos fluxos. 10000 invocações grátis por mês.\n\n## Tabela Comparativa\n\n| Ferramenta | Preço | Melhor Para | Open Source |\n|---|---|---|---|\n| Make | Grátis/Pago | Profissionais | Não |\n| Zapier | Grátis/Pago | Iniciantes | Não |\n| n8n | Grátis/Pago | Devs | Sim |\n| Activepieces | Grátis/Pago | Equipes | Sim |\n| Pipedream | Grátis/Pago | Devs | Parcial |\n\n## Qual Escolher\n\nSe você está começando: Make. Interface visual + poderosa + grátis.\n\n[Teste o Make gratuitamente →](https://www.make.com/en/register?pc=kesley)` },
  "ia-atendimento-whatsapp-reduzir-tempo": { title: "Como Reduzir 80% do Tempo de Atendimento com IA no WhatsApp", date: "15/05/2026", cat: "Negócios", content: `## O Problema\n\nAtender cliente no WhatsApp toma horas do seu dia. Perguntas repetitivas: "qual o horário?", "tem vaga?", "qual o preço?".\n\n## A Solução\n\nUm bot de IA que responde automaticamente usando WhatsApp Business API + Make + DeepSeek.\n\n## Passo a Passo\n\n### 1. Configure o WhatsApp Business API\n\nAcesse developers.facebook.com e crie um app. Conecte um número de telefone.\n\n### 2. Crie o Fluxo no Make\n\nConecte o módulo WhatsApp ao Make. Configure o webhook para receber mensagens.\n\n### 3. Conecte a IA\n\nAdicione o módulo HTTP para chamar a API do DeepSeek (ou GPT-4o). Envie a mensagem do cliente e receba a resposta.\n\n### 4. Treine o Contexto\n\nCrie um documento com perguntas frequentes e respostas. Alimente a IA com esse contexto.\n\n### 5. Teste e Publique\n\nEnvie mensagens de teste. Ajuste o tom. Publique.\n\n## Resultado\n\n80% das perguntas respondidas automaticamente. Você só intervém nos casos complexos.\n\n[Comece com Make →](https://www.make.com/en/register?pc=kesley)` },
  "planilhas-inteligentes-ia-google-sheets": { title: "Planilhas Inteligentes: Como Automatizar Relatórios com IA e Google Sheets", date: "15/05/2026", cat: "Automação", content: `## O Fim dos Relatórios Manuais\n\nToda semana você perde horas copiando e colando dados em planilhas. Em 2026, isso é inaceitável.\n\n## A Solução\n\nGoogle Sheets + Make + DeepSeek = relatórios automáticos com análise de IA.\n\n## Passo a Passo\n\n### 1. Estruture sua Planilha\n\nCrie uma planilha no Google Sheets com os dados brutos (vendas, atendimentos, leads).\n\n### 2. Conecte ao Make\n\nNo Make, crie um cenário que lê a planilha via Google Sheets API periodicamente.\n\n### 3. Processe com IA\n\nEnvie os dados para o DeepSeek com um prompt como: "Analise estes dados e gere um relatório com: tendências, anomalias, recomendações."\n\n### 4. Gere o Relatório\n\nA IA devolve o texto do relatório. O Make salva em uma nova aba da planilha ou envia por email.\n\n### 5. Agende\n\nConfigure o cenário para rodar toda segunda-feira às 8h. Relatório pronto quando você chegar.\n\n## Exemplo de Prompt\n\n"Analise os dados de vendas desta semana. Identifique: 1) Top 3 produtos, 2) Pior desempenho, 3) Tendência vs semana anterior, 4) Ação recomendada."\n\n[Automatize com Make →](https://www.make.com/en/register?pc=kesley)` },
  "ia-criar-posts-blog-automatico": { title: "Como Usar IA para Criar Posts de Blog Automaticamente", date: "15/05/2026", cat: "Automação", content: `## O Fim do Bloqueio Criativo\n\nSe tem uma coisa que todo blogueiro enfrenta é o bloqueio criativo. Você senta para escrever e nada sai. A boa notícia: em 2026, a IA resolve isso.\n\n## Como a IA Escreve Posts\n\nFerramentas como DeepSeek, GPT-4o e Claude podem gerar artigos completos em segundos. Mas o segredo não é só jogar um prompt e copiar. É criar um pipeline de qualidade.\n\n### O Pipeline de 3 Etapas\n\n**1. Pesquisa (5 min):** Use o Google Trends e AnswerThePublic para achar o que as pessoas estão perguntando sobre seu nicho.\n\n**2. Redação (2 min):** Alimente a IA com a pesquisa e peça um artigo estruturado com H2, H3, introdução e conclusão.\n\n**3. Revisão (3 min):** Passe por um checker de gramática (Grammarly), verifique fatos e adicione seu toque pessoal.\n\n## Ferramentas Essenciais\n\n| Ferramenta | Função | Preço |\n|---|---|---|\n| DeepSeek V4 | Redação de artigos | Grátis |\n| SurferSEO | Otimização SEO | Pago |\n| Grammarly | Revisão gramatical | Grátis/Pago |\n| Canva | Imagens e thumbnails | Grátis |\n\n## O Resultado\n\nEm 10 minutos você tem um post de 1000 palavras, otimizado para SEO, revisado e pronto para publicar. Isso significa que você pode produzir 30 posts por mês com 5 horas de trabalho.\n\n[Comece com Make para automatizar todo o pipeline →](https://www.make.com/en/register?pc=kesley)` },
  "ferramentas-ia-blogueiros-2026": { title: "7 Ferramentas de IA Que Blogueiros Precisam Usar em 2026", date: "15/05/2026", cat: "Ferramentas", content: `## Introdução\n\nBlogar em 2026 sem IA é como trabalhar com uma mão amarrada nas costas. Ferramentas de inteligência artificial cortam horas de pesquisa, escrita e otimização.\n\n## 1. Jasper\n\nPlataforma completa de escrita com IA que gera artigos, posts e emails em segundos. Entende o tom da sua marca.\n\n## 2. Copy.ai\n\nFoco em copywriting para landing pages e anúncios. Gera variações de headlines e CTAs que convertem.\n\n## 3. Writesonic\n\nCombina geração de artigos longos com SEO integrada. Digite um tópico e receba esboço completo.\n\n## 4. SurferSEO\n\nAnalisa páginas concorrentes e sugere keywords, estrutura e contagem de palavras ideal.\n\n## 5. Frase.io\n\nPesquisa os 20 melhores resultados do Google e cria briefing completo.\n\n## 6. Rytr\n\nOpção acessível para textos de blog, produtos e roteiros.\n\n## 7. Grammarly\n\nVai além do corretor: ajusta tom, clareza e engajamento.\n\n[Teste o Make gratuitamente →](https://www.make.com/en/register?pc=kesley)` },
  "automacao-ia-oportunidade-2026": { title: "A Única Oportunidade de Automação com IA Que Vale Seu Tempo em 2026", date: "15/05/2026", cat: "Negócios", content: `## Introdução\n\nEnquanto todo mundo corre atrás de IA genérica, a oportunidade real está em nichos específicos com problemas repetitivos.\n\n## Por Que a Maioria das Automações Fracassa\n\nO mercado está cheio de soluções que prometem resolver tudo. A razão: tentam abraçar o mundo.\n\n### A Solução\n\nFoque em UM problema. Resolva extremamente bem. Depois expanda.\n\n## Oportunidades Reais\n\n| Oportunidade | Demanda | Monetização |\n|---|---|---|\n| WhatsApp com IA | Altíssima | R$ 97-197/mês |\n| Relatórios automáticos | Alta | R$ 47-97/mês |\n| IA + Planilhas | Média | R$ 27-67/mês |\n\n## Como Começar\n\n1. Escolha UMA oportunidade\n2. Construa MVP em 1 semana\n3. Ofereça para 5 empresas testarem\n4. Cobre a partir do 6º cliente\n\n[Comece com Make →](https://www.make.com/en/register?pc=kesley)` },
  "guia-make-2026": { title: "Como Automatizar seu Workflow com Make em 2026", date: "15/05/2026", cat: "Automação", content: `## O Problema\n\nVocê perde horas por dia com tarefas repetitivas? Enviar e-mails, organizar arquivos, atualizar planilhas?\n\n## A Solução\n\nMake (antigo Integromat) combinado com IA pode automatizar tudo isso.\n\n## Passo a Passo\n\n### 1. Crie sua conta\n\nAcesse make.com. 1000 operações por mês grátis.\n\n### 2. Conecte seus apps\n\nMais de 1000 apps: Gmail, WhatsApp, Google Sheets, Slack.\n\n### 3. Configure o trigger\n\nO evento que inicia sua automação.\n\n### 4. Adicione ações\n\nO que acontece depois do trigger.\n\n### 5. Teste e publique\n\nClique em Run once para testar.\n\n## Make vs Zapier\n\n| Feature | Make | Zapier |\n|---|---|---|\n| Preço | Mais barato | Mais caro |\n| Complexidade | Mais poderoso | Mais simples |\n| IA Nativa | Sim | Limitado |\n\n[Crie sua conta gratuita no Make →](https://www.make.com/en/register?pc=kesley)` },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">404</h1><p className="text-slate-400 mb-4">Post não encontrado</p><Link href="/" className="text-cyan-400 hover:underline">← Voltar</Link></div></div>;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* ARTICLE HEADER */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-6 text-sm transition-colors"><ArrowLeft className="w-4 h-4" />Voltar</Link>
          {post.cat && <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">{post.cat}</span>}
          <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />5 min de leitura</span>
            <span className="inline-flex items-center gap-1"><BookOpen className="w-3 h-3" />{post.cat}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-cyan-400 prose-strong:text-white prose-code:text-cyan-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">{line.replace('## ', '')}</h2>;
            if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-white">{line.replace('### ', '')}</h3>;
            if (line.startsWith('|')) return <p key={i} className="font-mono text-sm text-slate-300 my-1">{line}</p>;
            if (line.startsWith('[') && line.includes('](')) {
              const match = line.match(/\[(.+?)\]\((.+?)\)/);
              if (match) return <p key={i} className="my-4"><a href={match[2]} target="_blank" rel="nofollow" className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-500/30 transition">{match[1]} →</a></p>;
            }
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="text-slate-300 leading-relaxed mb-4">{line}</p>;
          })}
        </div>

        {/* SHARE + ADSENSE */}
        <div className="mt-12 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <h3 className="font-bold mb-2">Gostou do artigo? Compartilhe!</h3>
          <div className="flex gap-2 mb-4">
            <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm transition"><Share2 className="w-4 h-4 inline mr-1" />Twitter</button>
            <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm transition">LinkedIn</button>
            <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm transition">WhatsApp</button>
          </div>
          <div className="h-20 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center text-slate-500 text-xs">[ Google AdSense ]</div>
        </div>

        {/* RELATED */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Artigos Relacionados</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(posts).filter(([s]) => s !== params.slug).slice(0, 2).map(([s, p]) => (
              <Link key={s} href={`/blog/${s}`} className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-cyan-500/30 transition-all">
                <h4 className="font-semibold text-sm hover:text-cyan-400">{p.title}</h4>
                <p className="text-slate-500 text-xs mt-1">{p.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
