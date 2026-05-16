const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

function ask(msg) {
  return new Promise(resolve => {
    const ws = new WebSocket('ws://localhost:18789');
    ws.on('open', () => ws.send(JSON.stringify({ type: 'req', id: '1', method: 'chat.send', params: { sessionKey: 'agent:redator:main', message: msg } })));
    ws.on('message', d => { const m = JSON.parse(d.toString()); if (m.type === 'event' && m.event === 'chat' && m.payload.state === 'final') { resolve(m.payload.message.content); ws.close(); } });
    setTimeout(() => { resolve('TIMEOUT'); try { ws.close(); } catch {} }, 120000);
  });
}

const ALREADY_DONE = ['ia-pequenos-negocios-guia-completo','chatgpt-vs-deepseek-vs-claude','automacao-processos-rpa-ia','produtividade-ferramentas-gratis-ia','monetizacao-blog-adsense-afiliados'];
const dir = 'content/posts';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(f => f.replace('.md','')).filter(s => !ALREADY_DONE.includes(s));

(async () => {
  let done = 0, err = 0;
  console.log(`Reescrevendo ${files.length} artigos...\n`);
  
  for (const slug of files) {
    const file = path.join(dir, slug + '.md');
    const raw = fs.readFileSync(file, 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
    const frontmatter = fm ? fm[0] : '---\ntitle: "' + slug.replace(/-/g,' ') + '"\ndate: "2026-05-16"\ncategory: "IA"\nreadingTime: "3 min"\n---\n';
    const oldBody = fm ? raw.slice(fm[0].length) : raw;
    
    process.stdout.write(`${done+1}/${files.length} ${slug}: `);
    const newBody = await ask(`REESCREVA este artigo seguindo TODAS as regras:\n- Comece com H1 e gancho (dor real do leitor)\n- Paragrafos 3-4 linhas max\n- Zero frontmatter no corpo\n- Tabelas max 3 colunas\n- Checklist com - [ ] no final\n- CTA sutil\n- Proibido: revolucionario, ecossistema, crucial\n- Tom profissional, direto, pratico\n\nArtigo original:\n${oldBody.slice(0, 1500)}`);
    
    if (newBody === 'TIMEOUT') { console.log('TIMEOUT'); err++; continue; }
    
    const final = frontmatter + '\n' + newBody;
    fs.writeFileSync(file, final, 'utf8');
    console.log('OK');
    done++;
  }
  
  console.log(`\n${done} reescritos, ${err} erros`);
  process.exit(0);
})();
