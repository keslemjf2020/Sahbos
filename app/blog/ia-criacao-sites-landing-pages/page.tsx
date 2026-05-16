import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Como Criar Sites e Landing Pages com IA em Minutos - Automacao IA',
  openGraph: { title: 'Como Criar Sites e Landing Pages com IA em Minutos', images: [{ url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Sua landing page está demorando semanas e o lançamento é em 5 dias

Contratar um designer custa R\$ 2.000 e leva 2 semanas. Fazer no WordPress leva 3 dias e o resultado parece amador. O lançamento é daqui a 5 dias e você ainda não tem nada no ar.

Criar sites e landing pages com IA resolve isso em minutos. São 3 áreas que entregam resultado imediato.

## Layout completo em 15 minutos

Em vez de começar do zero ou usar template genérico, a IA cria um layout personalizado baseado na sua descrição.

### Como funciona na prática:

| O que você descreve | O que a IA gera | Seu trabalho |
|---------------------|-----------------|--------------|
| "Landing page para curso de marketing digital, tom profissional" | Estrutura, cores, tipografia, imagens, seções | Ajustar detalhes |
| "Site para buffet infantil, cores alegres, fotos de festas" | Layout completo com galeria e contato | Trocar fotos |
| "Página de venda para e-book de finanças, tom sério" | Headline, benefícios, FAQ, botão de compra | Revisar texto |

**Ferramentas:** **10Web AI Builder** ou **Framer AI**. Você descreve, a IA gera, você ajusta.

> **Exemplo real:** Um empreendedor digital usou 10Web AI para criar a landing page do curso dele. **Pronta em 20 minutos** em vez de 2 semanas. Custo: **R\$ 0** (plano grátis).

> ---
> **🚀 Quer criar sua landing page hoje?** Guia passo a passo com as melhores ferramentas. [Baixar agora](#)
> ---

## Texto que converte sem você escrever

Headline, benefícios, chamada para ação. A IA gera o texto completo da sua landing page baseado no seu produto e público-alvo.

### O que a IA escreve automaticamente:

- **Headline:** Título principal que prende a atenção em segundos
- **Subtítulo:** Complemento que explica o valor do seu produto
- **Benefícios:** Lista de 3 a 5 vantagens para o cliente
- **CTA:** Botão de chamada para ação com texto persuasivo

## Checklist para criar sua landing page com IA

- [ ] Defina o objetivo da página (venda, captura de lead, evento)
- [ ] Descreva o layout para a IA (tom, cores, seções necessárias)
- [ ] Gere o texto com IA (headline, benefícios, CTA)
- [ ] Publique e teste com tráfego pago (R\$ 50 de teste é suficiente)`;
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
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" alt="Como Criar Sites e Landing Pages com IA em Minutos" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Como Criar Sites e Landing Pages com IA em Minutos</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Como Criar Sites e Landing Pages com IA em Minutos</h1>
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