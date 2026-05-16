import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada) - Automacao IA',
  openGraph: { title: 'Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada)', images: [{ url: 'https://images.unsplash.com/photo-1526378722484-3f9e9c6e2f6f?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você passa horas escrevendo posts de blog que ninguém lê

Pesquisar, estruturar, revisar. 70% do tempo vai em tarefas repetitivas. No fim, o artigo fica pronto, mas você está exausto.

**IA generativa** resolve isso em minutos. O segredo não é só apertar "gerar" — é ter um processo que transforma ideias soltas em artigos completos sem você digitar uma linha.

## O processo em 3 etapas

### 1. Capture a ideia

Use um formulário simples (Google Forms ou Typeform) para coletar:

| O que coletar | Exemplo |
|---------------|---------|
| Título provisório | "Como automatizar WhatsApp" |
| 3 pontos principais | Resposta automática, agendamento, base de conhecimento |
| Público-alvo | Donos de pequenos negócios |

Você preenche em **30 segundos**. O formulário dispara a automação.

### 2. Dispare a automação

Com o **Make**, conecte o formulário ao ChatGPT ou Claude:

1. **Webhook** recebe os dados do formulário
2. **OpenAI** gera o post completo com base no prompt
3. **Google Docs** salva o artigo formatado
4. **WordPress** publica direto (opcional)

Tudo automático. Você não toca em nada.

### 3. Revise e publique

IA entrega **80% pronto**. Você ajusta o tom, adiciona um exemplo pessoal e publica.

> ---
> **🚀 Quer o template pronto dessa automação?** Baixe grátis e configure em 30 minutos. [Comece agora](#)
> ---

## 3 tipos de post para começar

- **Tutorial prático:** "Como fazer X em 3 passos"
- **Comparativo:** "Ferramenta A vs. Ferramenta B"
- **Lista:** "5 maneiras de resolver Y"

Cada tipo tem estrutura previsível. A IA já sabe o formato. Você só define o tema.

## Checklist para automatizar seus posts de blog

- [ ] Crie um formulário Google Forms com título, pontos principais e público
- [ ] Configure o fluxo no Make: formulário → IA → Google Docs
- [ ] Defina 3 temas de post para testar o processo
- [ ] Publique o primeiro artigo e monitore o tempo economizado`;
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
      <div className="relative w-full h-48 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1526378722484-3f9e9c6e2f6f?w=1200&h=400&fit=crop" alt="Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada)" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada)</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Criar Posts de Blog com IA em 5 Minutos (Sem Escrever Nada)</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-15</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-8">
        <div className="prose prose-invert max-w-none">{content}</div>
      </article>
      <div className="max-w-3xl mx-auto px-6 pb-12"><AuthorBio /></div>
      <div className="border-t border-white/[0.04]"><div className="max-w-2xl mx-auto px-6 py-12 text-center"><p className="text-slate-400 text-sm mb-2">Receba guias praticos de IA toda semana</p><form className="flex max-w-sm mx-auto"><input type="email" placeholder="seu@email.com" className="flex-1 px-4 py-2 rounded-l-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30" /><button className="px-5 py-2 rounded-r-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:opacity-90">Inscrever</button></form></div></div>
    </div>
  );
}