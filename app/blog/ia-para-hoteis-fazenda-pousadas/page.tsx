import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Hoteis Fazenda: Experiencia do Hospede - Automacao IA',
  openGraph: { title: 'IA para Hoteis Fazenda: Experiencia do Hospede', images: [{ url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Família chega depois de 3 horas de estrada e enfrenta 15 minutos de papelada

Crianças cansadas, pais estressados. Depois perguntam: "o que tem para fazer?" Recebem um folder com 20 atividades. Não aproveitam metade. Vão embora no domingo sentindo que pagaram caro para não fazer nada.

**IA para hotéis fazenda** transforma a experiência do check-in ao pós-checkout.

## Check-in digital que elimina a fila

Hóspede chega e já está tudo pronto. Sem papelada, sem espera.

### Como funciona na prática:

| Antes do check-in | Na chegada | Resultado |
|-------------------|------------|-----------|
| Hóspede envia documento online | "Bem-vindo, Família Silva!" | Zero fila |
| Informa preferências e horário | "Seu chalé é o 7. Chave na porta." | 2 minutos |
| Assina digitalmente | "Café às 8h. Trilha às 10h." | Hóspede feliz |

**Ferramentas:** **Check-in Fácil** ou **Hotel Manager IA**. Hóspede faz tudo 48h antes pelo link.

> **Exemplo real:** Um hotel fazenda em Minas Gerais implementou check-in digital. O tempo de recepção **caiu de 15 minutos para 2 minutos**. A satisfação no checkout **subiu 30%**.

> ---
> **🚀 Quer automatizar o check-in do seu hotel fazenda?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Recomendações personalizadas de atividades

Folder genérico não funciona. Cada hóspede tem perfil diferente. IA sugere atividades sob medida.

### Como funciona:

| Perfil do hóspede | O que a IA sugere | Resultado |
|-------------------|-------------------|-----------|
| Casal sem filhos | Jantar romântico + vinho | Experiência premium |
| Família com crianças | Trilha curta + piscina + fazendinha | Crianças entretidas |
| Grupo de amigos | Pesca + futebol + churrasco | Integração social |

**Ferramentas:** **GuestJoy** ou **Canary Technologies**. IA pergunta preferências no check-in e sugere atividades personalizadas.

> **Dica prática:** Configure a IA para perguntar o perfil do hóspede 48h antes. Ela monta um roteiro personalizado e envia por WhatsApp.

## Checklist para encantar seus hóspedes

- [ ] Implemente check-in digital com envio de documentos 48h antes
- [ ] Configure recomendações personalizadas de atividades por perfil
- [ ] Ative comunicação automática por WhatsApp durante a estadia
- [ ] Monitore a satisfação no checkout no primeiro mês`;
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
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop" alt="IA para Hoteis Fazenda: Experiencia do Hospede" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Hoteis Fazenda: Experiencia do Hospede</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Hoteis Fazenda: Experiencia do Hospede</h1>
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