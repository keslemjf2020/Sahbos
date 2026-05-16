import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'IA para Academias: Treinos Personalizados e Gestao - Automacao IA',
  openGraph: { title: 'IA para Academias: Treinos Personalizados e Gestao', images: [{ url: 'https://images.unsplash.com/photo-1677442136019-21765a90f986?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Sua academia tem 300 alunos, mas 150 estão pagando sem aparecer

50 vão todo dia. 100 vão uma vez por semana. 150 estão pagando mas não aparecem há 30 dias. Você não sabe quem está prestes a cancelar.

O professor passa o dia montando treino manual. No fim do mês, 20 alunos cancelam e você não fez nada para reter.

**IA para academias** resolve os dois lados: treino personalizado sem trabalho manual e retenção baseada em dados.

## Treinos que o professor monta em 10 minutos

Professor perde 2 horas por dia montando treino individual. Com IA, isso vira revisão.

### Como funciona na prática:

| O que o aluno diz | O que a IA faz | Resultado |
|-------------------|----------------|-----------|
| "Quero emagrecer, nível iniciante" | Gera treino completo com vídeos | Pronto em 3 minutos |
| "Lesão no joelho, 3x por semana" | Adapta exercícios e progressão | Zero risco de lesão |
| "Quero hipertrofia, 5x por semana" | Monta divisão de treino semanal | Aluno segue sozinho |

**Ferramentas:** **Trainerize** ou **FitBudd** geram o treino automaticamente. O professor só revisa.

> **Exemplo real:** Uma rede de academias usava FitBudd com IA. O tempo de montagem de treino **caiu de 40 minutos para 8 minutos** por aluno.

## Retenção que avisa antes do cancelamento

Aluno não aparece há 15 dias. A IA detecta e dispara uma mensagem automática. Sem depender do professor lembrar.

### Como configurar:

- **15 dias sem treino:** "Sentimos sua falta, vem treinar!"
- **30 dias sem treino:** Oferta de reativação com desconto

> ---
> **🚀 Automatize sua academia em 1 hora.** Teste grátis por 14 dias e veja a retenção subir. [Comece agora](#)
> ---

## Agendamento que não deixa horário vazio

Aluno agenda, não aparece, e o horário fica vazio. Com IA, você recupera esses horários automaticamente.

### O que a IA gerencia:

- **Confirmação:** Envia WhatsApp 24h antes do horário
- **Liberação:** Horário não confirmado é liberado para outros alunos
- **Lista de espera:** Alunos interessados são notificados automaticamente
- **Análise:** Identifica horários com maior taxa de falta

## Checklist para implantar IA na sua academia

- [ ] Configure a IA para gerar treinos personalizados automáticos
- [ ] Ative os alertas de inatividade (15 e 30 dias sem treino)
- [ ] Implemente confirmação automática de agendamentos
- [ ] Monitore a taxa de cancelamento na primeira quinzena`;
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
        <img src="https://images.unsplash.com/photo-1677442136019-21765a90f986?w=1200&h=400&fit=crop" alt="IA para Academias: Treinos Personalizados e Gestao" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Saude'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Saude</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">IA para Academias: Treinos Personalizados e Gestao</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#10b98120', color: '#10b981', border: '1px solid #10b98130'}}>Saude</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">IA para Academias: Treinos Personalizados e Gestao</h1>
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