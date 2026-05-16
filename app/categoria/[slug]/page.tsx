import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { postsFull } from "../../blog/pindex";

export default function Category({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const items: Array<{ slug: string; t: string; d: string; c: string }> = [];
  
  for (const [key, val] of Object.entries(postsFull)) {
    const post = val as any;
    const cat = String(post.c || "IA").toLowerCase();
    const match = cat === slug.toLowerCase();
    if (match) items.push({ slug: key, t: post.t || key, d: post.d || "", c: post.c || "IA" });
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-4"><ArrowLeft className="w-3 h-3" />Voltar</Link>
          <h1 className="text-3xl font-bold text-white capitalize">{slug}</h1>
          <p className="text-slate-400 mt-2">{items.length} artigos nesta categoria</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {items.length === 0 ? (
          <div className="text-center py-12"><p className="text-slate-500 text-lg mb-2">Nenhum artigo nesta categoria.</p><Link href="/mapa-do-site" className="text-cyan-400 hover:underline text-sm">Ver Mapa do Site</Link></div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group p-5 rounded-2xl glass border border-white/[0.04]">
                <div className="w-full h-24 rounded-lg mb-3 bg-white/[0.02] flex items-center justify-center text-3xl">{p.c === "Automacao" ? "⚙️" : p.c === "Ferramentas" ? "🛠️" : p.c === "Negocios" ? "📊" : "🤖"}</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">{p.c}</span>
                <h3 className="font-semibold mt-2 mb-1 text-sm leading-snug text-white group-hover:text-cyan-400 transition-colors">{p.t}</h3>
                <div className="text-[10px] text-slate-600">{p.d}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
