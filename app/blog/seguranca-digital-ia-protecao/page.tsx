import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Seguranca Digital com IA: Proteja sua Empresa - Automacao IA',
  openGraph: { title: 'Seguranca Digital com IA: Proteja sua Empresa', images: [{ url: 'https://images.unsplash.com/photo-1526378722484-3f9e9c6e2f6f?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Seu funcionário abre um e-mail "Fatura em atraso" e em 30 segundos tudo está criptografado

**Ransomware** para a empresa por 3 dias. Prejuízo de R\$ 47 mil. O maior vetor de ataque ainda é o e-mail.

Segurança digital com IA não é mais opcional. Ferramentas de defesa evoluíram junto com os ataques.

## Detecção de phishing e e-mails maliciosos

IA analisa cada mensagem em tempo real antes de chegar ao funcionário.

### Como funciona na prática:

| O que a IA analisa | O que detecta | Ação |
|--------------------|---------------|------|
| Remetente e domínio | E-mail falso | Bloqueia |
| Tom da mensagem | Urgência artificial | Quarentena |
| Links e anexos | Malware oculto | Remove |

**Ferramentas:** **Abnormal Security** ou **Tessian**. Integram com seu e-mail corporativo.

> **Exemplo real:** Uma empresa de contabilidade recebia 200 e-mails de phishing por mês. Com IA de detecção, **98% eram bloqueados** antes de chegar aos funcionários.

> ---
> **🚀 Quer proteger sua empresa contra ataques digitais?** Teste grátis por 14 dias. [Comece agora](#)
> ---

## Monitoramento de rede em tempo real

Ataques não acontecem só de dia. IA monitora 24h sem pausa.

### Como configurar:

| O que a IA analisa | O que identifica | Ação |
|--------------------|------------------|------|
| Tráfego da rede | Picos anormais de dados | Alerta imediato |
| Acessos suspeitos | IP desconhecido tentando conectar | Bloqueia |
| Comportamento de usuários | Funcionário acessando dados incomuns | Notifica administrador |

**Ferramentas:** **Darktrace** ou **Vectra AI**. IA aprende o padrão normal da sua rede e detecta anomalias.

> **Dica prática:** Configure alertas para qualquer acesso fora do horário comercial. A maioria dos ataques acontece entre 2h e 5h da manhã.

## Checklist para proteger sua empresa com IA

- [ ] Implemente detecção de phishing com IA no e-mail corporativo
- [ ] Configure monitoramento de rede 24h com alertas de anomalias
- [ ] Treine funcionários para não clicar em links suspeitos, mesmo com IA ativa
- [ ] Faça backups automáticos diários em local separado da rede principal`;
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
        <img src="https://images.unsplash.com/photo-1526378722484-3f9e9c6e2f6f?w=1200&h=400&fit=crop" alt="Seguranca Digital com IA: Proteja sua Empresa" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'IA'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">IA</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Seguranca Digital com IA: Proteja sua Empresa</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#3b82f620', color: '#3b82f6', border: '1px solid #3b82f630'}}>IA</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Seguranca Digital com IA: Proteja sua Empresa</h1>
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