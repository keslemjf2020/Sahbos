import { Metadata } from 'next';
import Link from 'next/link';
import AudioPlayer from '../../../components/AudioPlayer';

export const metadata: Metadata = {
  title: 'Gestao de Condominios com IA: Automatize Tudo - Automacao IA',
  openGraph: { title: 'Gestao de Condominios com IA: Automatize Tudo', images: [{ url: 'https://placehold.co/1200x630/0a0a0f/06b6d4?text=Gestao%20de%20Condominios%20com%20IA%3A%20Automatize%20Tudo', width: 1200, height: 630 }] }
};

export default function Page() {
  const raw = `# Você é síndico e tem 30 mensagens no WhatsApp do prédio

Morador reclama do barulho. Outro pergunta quando vence o boleto. Um terceiro quer agendar o salão de festas. No meio disso, você precisa preparar a ata e fechar as contas.

Gestão de condomínios com IA resolve esses problemas sem contratar uma equipe inteira. São 3 áreas que entregam resultado imediato.

## Cobranças e boletos que rodam sozinhos

A maior dor de cabeça do síndico é controlar inadimplência. Com IA, isso roda automático.

### Como configurar:

| Ação | O que a IA faz | Resultado |
|------|----------------|-----------|
| Disparo de boletos | Envia todo dia 5 automático | Morador recebe sem atraso |
| Atraso no pagamento | Envia lembrete no WhatsApp | Cobrança sem constrangimento |
| Pagamento confirmado | Atualiza planilha e envia comprovante | Zero trabalho manual |

> **Exemplo real:** Um condomínio com 80 unidades reduziu a inadimplência de **12% para 4%** em 3 meses. O segredo? Lembrete automático no vencimento e no 5º dia de atraso.

## Chatbot que responde as perguntas repetitivas

Responder "qual o número do zelador?" 15 vezes por semana é perda de tempo. Um chatbot resolve.

### O que ele pode responder automaticamente:

- **Horários:** Portaria, salão de festas, academia
- **Contatos:** Zelador, síndico, administradora
- **Regras:** Uso do salão, vagas de garagem, lixo
- **Boletos:** 2ª via, vencimento, forma de pagamento

> ---
> **🚀 Automatize seu condomínio em 7 dias.** Teste grátis por 30 dias e veja quanto tempo você recupera. [Comece agora](#)
> ---

## Agenda do salão de festas sem papelada

Morador quer reservar o salão. Em vez de ligar para o síndico, ele acessa o WhatsApp. A IA confirma disponibilidade, registra a reserva e envia as regras de uso.

**Sem planilha, sem troca de e-mails, sem conflito de horários.**

### O que a IA gerencia automaticamente:

- **Reservas** de salão, churrasqueira e academia
- **Multas** por atraso na devolução das chaves
- **Vistorias** de entrada e saída de moradores
- **Avisos** de manutenção programada (água, gás, elevador)

## Checklist para implantar IA no seu condomínio

- [ ] Mapeie as 10 perguntas mais frequentes no WhatsApp do prédio
- [ ] Configure o chatbot com respostas automáticas para cada uma
- [ ] Ative o disparo automático de boletos e lembretes
- [ ] Monitore a redução de mensagens repetitivas na primeira semana`;
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
            <span className="text-slate-400 truncate max-w-[200px]">Gestao de Condominios com IA: Automatize Tudo</span>
          </div>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-3" style={{backgroundColor:'#06b6d420',color:'#06b6d4',border:'1px solid #06b6d430'}}>Automacao</span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">Gestao de Condominios com IA: Automatize Tudo</h1>
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