const fs = require('fs');
const d = require('./app/blog/posts-data.json');
const keys = Object.keys(d);

let lines = [];
for (const k of keys) {
  const p = d[k];
  const title = String(p.title || '').replace(/"/g, '\\"');
  const content = String(p.content || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  lines.push(`  "${k}": { title: "${title}", date: "${p.date}", cat: "${p.cat}", read: "${p.read}", content: "${content}" }`);
}
const out = `export const postsFull: Record<string, {title:string,date:string,cat:string,read:string,content:string}> = {\n${lines.join(',\n')}\n};\n`;
fs.writeFileSync('app/blog/posts-full.ts', out, 'utf8');
console.log(keys.length + ' posts exportados em TypeScript');
