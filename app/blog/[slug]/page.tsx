import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import fs from "fs";
import path from "path";

function getAllPosts() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  if (!fs.existsSync(postsDir)) return {};
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  const posts: Record<string, { title: string; date: string; content: string; cat?: string; read?: string }> = {};
  for (const file of files) {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    const fm = fmMatch ? fmMatch[1] : "";
    const body = fmMatch ? raw.slice(fmMatch[0].length).trim() : raw;
    const getFM = (key: string) => { const m = fm.match(new RegExp(`${key}:\\s*"?([^"\n]+)"?`)); return m ? m[1].trim() : ""; };
    posts[slug] = {
      title: getFM("title") || slug.replace(/-/g, " "),
      date: getFM("date") || "2026-05-16",
      cat: getFM("category") || getFM("cat") || "IA",
      read: getFM("readingTime") || "5 min",
      content: body || "Artigo em producao.",
    };
  }
  return posts;
}

const posts = getAllPosts();

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center"><div className="text-center"><h1 className="text-6xl font-bold gradient-text mb-4">404</h1><p className="text-slate-500 mb-6">Artigo nao encontrado</p><Link href="/" className="text-cyan-400 hover:underline text-sm inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" />Voltar</Link></div></div>;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6"><ArrowLeft className="w-3 h-3" />Voltar</Link>
        {post.cat && <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">{post.cat}</span>}
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">{post.title}</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span><span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.read}</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h3:text-lg prose-h3:font-semibold prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-cyan-400 prose-strong:text-white prose-code:text-cyan-300 prose-li:text-slate-300">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) return <h2 key={i}>{line.replace("## ", "")}</h2>;
            if (line.startsWith("### ")) return <h3 key={i}>{line.replace("### ", "")}</h3>;
            if (line.startsWith("|")) return <p key={i} className="font-mono text-xs text-slate-400">{line}</p>;
            if (line.trim() === "") return <br key={i} />;
            if (line.startsWith("---")) return <hr key={i} className="my-4 border-white/[0.06]" />;
            const linkMatch = line.match(/\[(.+?)\]\((.+?)\)/);
            if (linkMatch && line.startsWith("[")) return <p key={i} className="my-2"><a href={linkMatch[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline hover:text-cyan-300">{linkMatch[1]}</a></p>;
            return <p key={i} className="text-slate-300 leading-relaxed">{line}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
