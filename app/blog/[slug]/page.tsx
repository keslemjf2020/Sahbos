import Link from "next/link";
import { ArrowLeft, Clock, Calendar, AlertCircle } from "lucide-react";
import { postsMeta } from "../../../lib/posts-meta";

const RAW = "https://raw.githubusercontent.com/keslemjf2020/Sahbos/master/content/posts";

async function getContent(slug: string) {
  try {
    const res = await fetch(`${RAW}/${slug}.md`, { cache: "no-store" });
    if (!res.ok) return null;
    const raw = await res.text();
    const fm = raw.match(/^---\n([\s\S]*?)\n---/);
    return fm ? raw.slice(fm[0].length).trim() : raw;
  } catch { return null; }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const meta = postsMeta[params.slug as keyof typeof postsMeta];
  if (!meta) return <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center"><div className="text-center"><h1 className="text-6xl font-bold gradient-text mb-4">404</h1><p className="text-slate-500 mb-6">Artigo nao encontrado</p><Link href="/" className="text-cyan-400 hover:underline text-sm inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" />Voltar</Link></div></div>;

  const content = await getContent(params.slug);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6"><ArrowLeft className="w-3 h-3" />Voltar</Link>
        {meta.cat && <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">{meta.cat}</span>}
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">{meta.title}</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{meta.date}</span><span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{meta.read}</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        {content ? (
          <div className="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h3:text-lg prose-h3:font-semibold prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-cyan-400 prose-strong:text-white prose-code:text-cyan-300 prose-li:text-slate-300">
            {content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i}>{line.replace("## ", "")}</h2>;
              if (line.startsWith("### ")) return <h3 key={i}>{line.replace("### ", "")}</h3>;
              if (line.startsWith("|")) return <p key={i} className="font-mono text-xs text-slate-400">{line}</p>;
              if (line.trim() === "") return <br key={i} />;
              const linkMatch = line.match(/\[(.+?)\]\((.+?)\)/);
              if (linkMatch && line.startsWith("[")) return <p key={i} className="my-2"><a href={linkMatch[2]} target="_blank" rel="nofollow" className="text-cyan-400 underline hover:text-cyan-300">{linkMatch[1]}</a></p>;
              return <p key={i} className="text-slate-300 leading-relaxed">{line}</p>;
            })}
          </div>
        ) : (
          <div className="text-center py-12"><AlertCircle className="w-8 h-8 text-yellow-400 mx-auto mb-3" /><p className="text-slate-400">Conteudo carregando do GitHub...</p></div>
        )}
      </article>
    </div>
  );
}
