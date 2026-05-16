const fs = require('fs');
const path = require('path');
const dir = 'content/posts';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
const posts = {};

for (const f of files) {
  const slug = f.replace('.md','');
  const raw = fs.readFileSync(path.join(dir,f),'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  const fmText = fm ? fm[1] : '';
  const body = fm ? raw.slice(fm[0].length).trim() : raw;
  const get = (k) => { const m = fmText.match(new RegExp(k + ':\\s*"?([^"\n]+)"?')); return m ? m[1].trim() : ''; };
  posts[slug] = {
    title: get('title') || slug.replace(/-/g,' '),
    date: get('date') || '2026-05-16',
    cat: get('category') || 'IA',
    read: get('readingTime') || '5 min',
    content: body
  };
}

const out = 'export const posts = ' + JSON.stringify(posts, null, 2) + ';\n';
fs.writeFileSync('lib/posts.ts', out);
console.log(Object.keys(posts).length + ' posts salvos');
