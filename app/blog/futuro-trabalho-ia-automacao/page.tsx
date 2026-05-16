import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'O Futuro do Trabalho com IA: O Que Muda em 2026 - Automacao IA',
  openGraph: { title: 'O Futuro do Trabalho com IA: O Que Muda em 2026', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=O%20Futuro%20do%20Trabalho%20com%20IA%3A%20O%20Que%20Muda%20em%202026', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você abre o LinkedIn e vê: "IA vai substituir 300 milhões de empregos"

No meio desse vai-e-vem de opiniões, você fica sem saber se estuda programação, vira especialista em prompt ou simplesmente ignora.

O futuro do trabalho com IA em 2026 não é apocalíptico nem utópico. É prático: algumas funções vão sumir, outras vão se transformar, e novas vão surgir.

## Profissões em risco vs. profissões em alta

Nem todo emprego será substituído, mas todo emprego será impactado. A diferença está no tipo de tarefa.

### O que muda em 2026:

| Profissão | Risco | Motivo |
|-----------|-------|--------|
| Digitador | Alto | IA transcreve e classifica sozinha |
| Tradutor simples | Alto | Modelos multilíngues gratuitos |
| Atendente de call center | Alto | Chatbots resolvem 80% dos chamados |
| Contador operacional | Médio | Automação de lançamentos fiscais |
| Programador | Médio | IA gera código, humano revisa |
| Designer | Baixo | IA cria assets, humano direciona |
| Médico | Baixo | IA auxilia, diagnóstico final é humano |

## Habilidades que valem ouro em 2026

Não é sobre competir com a IA. É sobre usar a IA como ferramenta. As habilidades mais valorizadas não são técnicas, são humanas.

### O que aprender:

- **Pensamento crítico** — IA entrega dados, você decide o que fazer
- **Comunicação** — IA escreve, você edita e dá tom
- **Resolução de problemas** — IA sugere, você valida no mundo real
- **Gestão de pessoas** — IA não substitui liderança

> ---
> **🚀 Quer um plano de carreira para 2026?** Baixe o guia gratuito com as 10 habilidades mais requisitadas. [Baixar agora](#)
> ---

## Como se preparar sem entrar em desespero

A IA não vai te substituir. Mas uma pessoa que sabe usar IA vai. A diferença é quem aprende a ferramenta primeiro.

### Plano de 30 dias:

- **Semana 1:** Escolha uma IA (DeepSeek, ChatGPT ou Claude) e use todo dia
- **Semana 2:** Automatize uma tarefa repetitiva do seu trabalho com Make ou Zapier
- **Semana 3:** Crie um projeto pessoal usando IA (site, roteiro, planilha inteligente)
- **Semana 4:** Ensine alguém a usar a ferramenta que você aprendeu

> **Exemplo real:** Um analista financeiro aprendeu a usar IA para gerar relatórios mensais. O que levava 8 horas passou a levar 1 hora. Ele usou o tempo extra para analisar dados mais profundos e foi promovido em 6 meses.

## Checklist para se preparar para o futuro do trabalho

- [ ] Identifique tarefas repetitivas no seu trabalho atual
- [ ] Escolha UMA ferramenta de IA para aprender esta semana
- [ ] Automatize pelo menos uma tarefa usando Make ou Zapier
- [ ] Compartilhe seu aprendizado com colegas (ensinar fixa o conhecimento)`;
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
            <span className="text-slate-400 truncate max-w-[200px]">O Futuro do Trabalho com IA: O Que Muda em 2026</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">O Futuro do Trabalho com IA: O Que Muda em 2026</h1>
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