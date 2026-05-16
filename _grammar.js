const WebSocket = require('ws');
const fs = require('fs');
function ask(m) {
  return new Promise(r => {
    const ws = new WebSocket('ws://localhost:18789');
    ws.on('open', () => ws.send(JSON.stringify({type:'req',id:'1',method:'chat.send',params:{sessionKey:'agent:redator:main',message:m}})));
    ws.on('message', d => { const j = JSON.parse(d.toString()); if (j.type === 'event' && j.event === 'chat' && j.payload.state === 'final') { r(j.payload.message.content); ws.close(); } });
    setTimeout(() => { r('TIMEOUT'); try { ws.close(); } catch {} }, 180000);
  });
}
const files = fs.readdirSync('content/posts').filter(f => f.endsWith('.md'));
let ok=0, err=0;
(async () => {
  for(const f of files){
    const slug = f.replace('.md','');
    const raw = fs.readFileSync('content/posts/'+f,'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
    const fmText = fm ? fm[0] : '';
    const body = fm ? raw.slice(fm[0].length) : raw;
    process.stdout.write(slug+': ');
    const res = await ask('REVISÃO GRAMATICAL. Corrija TODOS os erros de português neste artigo:\n- Acentuação (á, à, â, ã, é, ê, í, ó, ô, õ, ú, ç)\n- Crase (à/às)\n- Concordância verbal e nominal\n- Pontuação (vírgulas, pontos)\n- Ortografia (nenhum erro de digitação)\n\nMANTENHA a estrutura, headings e checklist. SÓ CORRIJA A GRAMÁTICA. Não mude o conteúdo.\n\n'+body.slice(0,2000));
    if(res==='TIMEOUT'){console.log('TIMEOUT');err++;continue;}
    fs.writeFileSync('content/posts/'+f, fmText+'\n'+res.replace(/^---[\s\S]*?---\n?/,''), 'utf8');
    console.log('OK');ok++;
  }
  console.log('\n'+ok+' OK, '+err+' ERR');
  process.exit(0);
})();
