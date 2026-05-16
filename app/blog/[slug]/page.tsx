import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const testPost = { t: "Teste de Artigo", d: "2026-05-16", c: "IA", r: "1 min", b: "## Funcionou!\\n\\nSe voce esta vendo isso, o artigo esta renderizando corretamente." };

export default function BlogPost({ params }: { params: { slug: string } }) {
  const p = testPost;
  const content = p.b.replace(/\\n/g, "\n");

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-6"><ArrowLeft className="w-3 h-3" />Voltar</Link>
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider mb-4">{p.c}</span>
        <h1 className="text-4xl font-bold leading-tight mb-4 text-white">{p.t}</h1>
        <div className="flex items-center gap-5 text-sm text-slate-500"><span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{p.d}</span><span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{p.r}</span></div>
      </div></div>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-p:text-slate-300 prose-p:leading-relaxed">
          {content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) return <h2 key={i}>{line.replace("## ", "")}</h2>;
            if (line.startsWith("### ")) return <h3 key={i}>{line.replace("### ", "")}</h3>;
            if (line.trim() === "") return <br key={i} />;
            return <p key={i} className="text-slate-300 leading-relaxed mb-2">{line}</p>;
          })}
        </div>
      </article>
    </div>
  );
}
