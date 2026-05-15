import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "ia-criar-posts-blog-automatico": {
    title: "Como Usar IA para Criar Posts de Blog Automaticamente",
    date: "15/05/2026",
    content: fs.readFileSync(path.join(process.cwd(), "content", "posts", "ia-criar-posts-blog-automatico.md"), "utf8") || "Carregando...",
  },
  "ferramentas-ia-blogueiros-2026": {
    title: "7 Ferramentas de IA Que Blogueiros Precisam Usar em 2026",
    date: "15/05/2026",
    content: `## Introdução\n\nBlogar em 2026 sem IA é como trabalhar com uma mão amarrada nas costas. Ferramentas de inteligência artificial cortam horas de pesquisa, escrita e otimização.\n\n## 1. Jasper\n\nPlataforma completa de escrita com IA que gera artigos, posts e emails em segundos. Entende o tom da sua marca.\n\n## 2. Copy.ai\n\nFoco em copywriting para landing pages e anúncios. Gera variações de headlines e CTAs que convertem visitantes em leads.\n\n## 3. Writesonic\n\nCombina geração de artigos longos com SEO integrada. Digite um tópico e receba esboço completo com subtítulos.\n\n## 4. SurferSEO\n\nAnalisa páginas concorrentes e sugere keywords, estrutura e contagem de palavras ideal para ranquear.\n\n## 5. Frase.io\n\nPesquisa os 20 melhores resultados do Google e cria briefing completo. Economiza horas de pesquisa.\n\n## 6. Rytr\n\nOpção acessível para textos de blog, produtos e roteiros. Interface simples, resultado rápido.\n\n## 7. Grammarly\n\nVai além do corretor: ajusta tom, clareza e engajamento. Versão premium sugere reescritas completas.\n\n## Como Automatizar Essas Ferramentas\n\nO poder está em conectá-las com Make: receber ideia -> gerar texto -> revisar -> publicar. Automático.\n\n[Teste o Make gratuitamente →](https://www.make.com/en/register?pc=kesley)`
  },
  "automacao-ia-oportunidade-2026": {
    title: "A Única Oportunidade de Automação com IA Que Vale Seu Tempo em 2026",
    date: "15/05/2026",
    content: `## Introdução\n\nEnquanto todo mundo corre atrás de criar agentes de IA genéricos, a oportunidade real está em nichos específicos com problemas repetitivos.\n\n## Por Que a Maioria das Automações Fracassa\n\nO mercado está cheio de soluções que prometem resolver tudo, mas entregam pouco. A razão é simples: tentam abraçar o mundo.\n\n### O Problema da Abstração\n\nSistemas que tentam fazer \"tudo\" acabam não fazendo nada bem.\n\n### A Solução: Nicho Específico\n\nFoque em UM problema. Resolva extremamente bem. Depois expanda.\n\n## 3 Oportunidades Reais em 2026\n\n| Oportunidade | Demanda | Monetização |\n|---|---|---|\n| WhatsApp com IA | Altíssima | R$ 97-197/mês |\n| Relatórios automáticos | Alta | R$ 47-97/mês |\n| IA + Planilhas | Média | R$ 27-67/mês |\n\n## Como Começar Hoje\n\n1. Escolha UMA oportunidade\n2. Construa MVP em 1 semana\n3. Ofereça para 5 empresas testarem de graça\n4. Colete feedback e itere\n5. Cobre a partir do 6º cliente\n\n## Ferramentas\n\n- Make — APIs sem código\n- DeepSeek / GPT-4o — Cérebro da automação\n- WhatsApp Business API — Canal certo\n- Google Sheets — Dados\n\n## Conclusão\n\nNão tente competir com big techs. Foque em resolver UM problema específico. É aí que está o dinheiro em 2026.\n\n[Comece com Make →](https://www.make.com/en/register?pc=kesley)`
  },
  "guia-make-2026": {
    title: "Como Automatizar seu Workflow com Make em 2026",
    date: "15/05/2026",
    content: `## O Problema\n\nVocê perde horas por dia com tarefas repetitivas? Enviar e-mails, organizar arquivos, atualizar planilhas?\n\n## A Solução\n\nMake (antigo Integromat) combinado com IA pode automatizar tudo isso.\n\n## Passo a Passo\n\n### 1. Crie sua conta no Make\n\nAcesse make.com e crie uma conta gratuita. 1000 operações por mês.\n\n### 2. Conecte seus apps\n\nMake se conecta com mais de 1000 apps: Gmail, WhatsApp, Google Sheets, Slack, Trello, Notion.\n\n### 3. Configure o trigger\n\nO trigger é o evento que inicia sua automação. Exemplo: "Quando chegar um e-mail novo".\n\n### 4. Adicione ações\n\nAs ações são o que acontece depois. Exemplo: "Salvar anexo no Drive e notificar no Slack".\n\n### 5. Teste e publique\n\nClique em "Run once" para testar. Se funcionar, ative. Pronto.\n\n## Make vs Zapier\n\n| Feature | Make | Zapier |\n|---|---|---|\n| Preço | Mais barato | Mais caro |\n| Complexidade | Mais poderoso | Mais simples |\n| IA Nativa | Sim | Limitado |\n\n## Conclusão\n\nMake é a melhor escolha para automação em 2026. Comece com uma tarefa simples e expanda.\n\n[Crie sua conta gratuita no Make →](https://www.make.com/en/register?pc=kesley)`
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return <div className="min-h-screen bg-slate-900 text-white p-8">Post não encontrado</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8"><ArrowLeft className="w-4 h-4" />Voltar</Link>
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-slate-400 mb-8">{post.date}</p>
          <div className="text-slate-300 leading-relaxed whitespace-pre-line">{post.content}</div>
        </article>
      </div>
    </div>
  );
}
