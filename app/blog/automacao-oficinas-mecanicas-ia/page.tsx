import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = { title: 'Automacao de Oficinas Mecanicas com IA - Automacao IA' };

export default function Page() {
  const raw = `# Cliente chega com barulho estranho e você faz orçamento no olho

Você levanta o capô, escuta, faz um palpite. Passa o orçamento na hora. Depois descobre que o problema era outro. A peça comprada não era a certa. O cliente pagou mais caro e não volta mais.

Automação de oficinas mecânicas com IA elimina o achismo. São 3 áreas que entregam resultado imediato.

## Orçamento que não é chute

Em vez de orçar no olho, a IA cruza sintomas com um banco de dados de problemas conhecidos.

### Como funciona na prática:

| O mecânico diz | O que a IA faz | Resultado |
|----------------|----------------|-----------|
| "Barulho ao virar, carro 1.4 2018" | Consulta milhares de casos similares | Diagnóstico com 85% de precisão |
| "Motor falhando em marcha lenta" | Sugere causas prováveis | Orçamento em 5 minutos |
| "Barulho na suspensão" | Lista peças e mão de obra | Cliente aprova na hora |

> **Exemplo real:** Uma oficina em Curitiba usava IA para apoiar diagnósticos. O índice de retorno por erro **caiu de 18% para 3%**. O cliente recebia o orçamento em 5 minutos em vez de 30.

## Controle de peças que não deixa faltar nada

Nada pior que começar um serviço e descobrir que a peça não tem no estoque. IA monitora e avisa antes de acabar.

### Como configurar:

- **Alerta automático:** Estoque baixo dispara notificação
- **Sugestão de compra:** Baseada em serviços agendados
- **Fornecedor integrado:** Pedido gerado automaticamente
- **Histórico:** Peças mais usadas por modelo de carro

> ---
> **🚀 Automatize sua oficina em 1 hora.** Teste grátis por 14 dias e veja os erros de diagnóstico desaparecerem. [Comece agora](#)
> ---

## Agendamento que não deixa cliente esperando

Cliente liga, você anota em papel, esquece. Ou pior: agenda dois carros para o mesmo horário. IA gerencia a agenda e evita conflitos.

### O que a IA gerencia automaticamente:

- **Agenda:** Visualiza horários disponíveis em tempo real
- **Lembrete:** Envia WhatsApp 24h antes do serviço
- **Confirmação:** Cliente confirma presença com um clique
- **Reagendamento:** Libera horário se cliente não confirmar

## Checklist para implantar IA na sua oficina

- [ ] Cadastre os 20 diagnósticos mais comuns no banco de dados da IA
- [ ] Configure alertas de estoque mínimo para as 10 peças mais usadas
- [ ] Ative o agendamento online com lembretes automáticos no WhatsApp
- [ ] Monitore a taxa de retorno por erro na primeira quinzena`;
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
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link>
            <span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Automacao de Oficinas Mecanicas com IA</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-3">Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Automacao de Oficinas Mecanicas com IA</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4"><span>2026-05-16</span><span>·</span><span>3 min</span></div>
          <AudioPlayer text={plainText} />
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-12"><div className="prose prose-invert max-w-none">{content}</div></article>
    </div>
  );
}