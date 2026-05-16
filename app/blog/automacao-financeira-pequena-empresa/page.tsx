import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';
import AuthorBio from '../../../components/AuthorBio';

export const metadata: Metadata = {
  title: 'Automação Financeira com IA para Pequenas Empresas - Automacao IA',
  openGraph: { title: 'Automação Financeira com IA para Pequenas Empresas', images: [{ url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você perde 12 horas por mês só para conciliar extratos bancários

Contas a pagar são manuais. Fluxo de caixa é chute. Cobrança é feita no lembrete do WhatsApp. No fim do mês, você descobre que um boleto venceu e você nem viu.

Em 2026, **73% das contas a pagar** podem ser automatizadas sem intervenção humana. A IA não substitui o contador. Ela elimina o trabalho braçal de categorizar, conferir e prever.

## Conciliação bancária que não precisa de planilha

Você abre o extrato, baixa o PDF, confere linha por linha. Depois, compara com o que lançou no sistema. Isso toma horas todo mês.

### Como a IA resolve:

| Problema | O que a IA faz | Resultado |
|----------|----------------|-----------|
| Extrato em PDF | Lê e extrai todas as transações | Zero digitação |
| Categorização | Identifica "Pagamento Recebido - Cliente X" | Classifica automático |
| Matching | Compara com notas fiscais emitidas | Aponta divergências |

**Ferramentas:** **Conta Azul** ou **QuickBooks** fazem isso automaticamente. Você só confirma no final.

## Contas a pagar que vencem e você não esquece

Boleto chega por e-mail. Você abre, digita os dados no sistema, agenda o pagamento. Se esquecer, multa.

### Como automatizar:

- **Leitura:** IA extrai dados do boleto automaticamente
- **Agendamento:** Pagamento programado para a data de vencimento
- **Alerta:** Notificação 3 dias antes do vencimento
- **Execução:** Pagamento realizado sem intervenção

> ---
> **🚀 Automatize suas contas a pagar em 1 hora.** Teste grátis por 14 dias e veja as multas desaparecerem. [Comece agora](#)
> ---

## Fluxo de caixa que prevê apertos antes deles acontecerem

Saber se vai faltar dinheiro no mês que vem é essencial. Com IA, você não precisa mais chutar.

### O que a IA projeta automaticamente:

- **Receitas futuras:** Baseado em contratos e notas emitidas
- **Despesas fixas:** Aluguel, salários, fornecedores recorrentes
- **Despesas variáveis:** Média histórica dos últimos 6 meses
- **Saldo projetado:** Gráfico`;
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
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop" alt="Automação Financeira com IA para Pequenas Empresas" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
      </div>
      <div className="border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link><span>›</span>
            <Link href={`/categoria/${'Automacao'.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">Automacao</Link><span>›</span>
            <span className="text-slate-400 truncate max-w-[200px]">Automação Financeira com IA para Pequenas Empresas</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor: '#06b6d420', color: '#06b6d4', border: '1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Automação Financeira com IA para Pequenas Empresas</h1>
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