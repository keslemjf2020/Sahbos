import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Como Automatizar seu Marketing Digital com IA - Automacao IA',
  openGraph: { title: 'Como Automatizar seu Marketing Digital com IA', images: [{ url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você passa horas criando posts que ninguém vê

Publicar todo dia. Responder comentários. Enviar e-mail manual. No fim do mês, o resultado é baixo e você está exausto.

Marketing digital manual não escala. Com IA, você configura uma vez e colhe resultados continuamente.

## E-mails que disparam sozinhos baseados no que o lead faz

Newsletter manual morre na terceira edição. Com IA, você cria sequências que reagem ao comportamento do lead.

### Como configurar:

| Ação do lead | O que a IA faz | Resultado |
|--------------|----------------|-----------|
| Abriu e-mail | Envia oferta relevante | Conversão maior |
| Clicou no link | Segue com depoimento | Reforça confiança |
| Não abriu | Testa outro assunto | Evita spam |

> **Exemplo real:** Uma loja de cursos online configurou sequência automática. Quem via o preço e não comprava recebia um e-mail com depoimento 2 dias depois. A taxa de conversão **subiu 34%**.

## Posts de redes sociais que você prepara em uma tarde

Publicar todo dia é inviável. Com automação, você prepara o mês inteiro em algumas horas.

### Ferramentas que funcionam:

| Ferramenta | O que faz | Preço |
|------------|-----------|-------|
| **Buffer** | Agenda posts e analisa desempenho | Grátis / US\$ 6 |
| **Hootsuite** | Gerencia múltiplas contas | US\$ 99/mês |
| **Later** | Foco em conteúdo visual | Grátis / US\$ 25 |

> ---
> **🚀 Automatize seu marketing digital em 1 hora.** Teste grátis com templates prontos. [Comece agora](#)
> ---

## Respostas automáticas que não parecem robô

Responder comentários e DMs manualmente consome horas. Com IA, você responde no mesmo instante com tom humano.

### O que a IA responde automaticamente:

- **Dúvidas frequentes:** Preço, prazo, formas de pagamento
- **Comentários positivos:** Agradece e engaja com pergunta adicional
- **Menções à marca:** Monitora e responde em tempo real
- **Reclamações:** Identifica tom negativo e encaminha para humano

> **Exemplo real:** Uma marca de cosméticos configurou respostas`;
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
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" alt="Como Automatizar seu Marketing Digital com IA" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Automatizar seu Marketing Digital com IA</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#06b6d420', color: '#06b6d4', border: '1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Automatizar seu Marketing Digital com IA</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
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