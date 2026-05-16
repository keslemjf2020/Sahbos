import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'IA no Atendimento Medico: Chatbots e Triagem - Automacao IA',
  openGraph: { title: 'IA no Atendimento Medico: Chatbots e Triagem', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=IA%20no%20Atendimento%20Medico%3A%20Chatbots%20e%20Triagem', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você perde consultas porque paciente desiste de esperar no telefone

Seu consultório recebe 50 ligações por dia. Paciente quer saber se o sintoma é grave. Outro pergunta se tem horário. A recepcionista passa o dia no telefone enquanto a sala de espera lota.

No fim do dia, **3 consultas foram perdidas**. O paciente desistiu de esperar.

> IA no atendimento médico em 2026 não substitui seu diagnóstico. Ela organiza o fluxo para você atender quem realmente precisa, na hora certa.

## Chatbot de triagem: paciente descreve, IA classifica

Paciente chega com dor de cabeça. É tensão ou algo sério? Um chatbot faz a primeira avaliação antes de qualquer consulta.

### Como funciona na prática:

| Ação | O que o robô faz | Resultado |
|------|------------------|-----------|
| Paciente descreve sintomas | Faz perguntas de acompanhamento | Classifica gravidade |
| Dor forte no peito | Encaminha para emergência | Paciente vai direto para UPA |
| Dor de cabeça leve | Agenda consulta de rotina | Libera a recepcionista |

> **Exemplo real:** Uma clínica em Belo Horizonte implantou triagem por chatbot. O número de pacientes que iam ao pronto-socorro sem necessidade **caiu 40%**. Quem realmente precisava de atendimento urgente foi priorizado.

> ---
> **🚀 Automatize a triagem do seu consultório.** Teste grátis por 14 dias e veja quantas consultas você recupera. [Comece agora](#)
> ---

## Check-in digital: zero papelada na recepção

Paciente chega, escaneia QR code na porta. Em 30 segundos, a IA confirma dados, atualiza prontuário e libera a senha de atendimento.

**Sem fila, sem caneta, sem erro de digitação.** A recepcionista só intervém em casos específicos.

### O que mais a IA pode fazer:

- **Envia** lembretes de consulta 24h antes (reduz faltas em 35%)
- **Solicita** exames prévios automaticamente pelo WhatsApp
- **Libera** resultados de exames simples sem intervenção
- **Coleta** feedback do paciente após cada consulta

## Checklist para implantar IA no seu consultório

- [ ] Mapeie os 5 sintomas mais comuns que chegam por telefone
- [ ] Configure o chatbot de triagem com perguntas de acompanhamento
- [ ] Teste o fluxo com 10 pacientes voluntários na primeira semana
- [ ] Monitore a taxa de resolução automática e o tempo de espera na recepção`;
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
            <span className="text-slate-400 truncate max-w-[200px]">IA no Atendimento Medico: Chatbots e Triagem</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA no Atendimento Medico: Chatbots e Triagem</h1>
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