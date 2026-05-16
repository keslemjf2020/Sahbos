import Link from "next/link";
import { postsFull } from "../blog/pindex";

const CATEGORIES = ["Automacao", "Ferramentas", "Negocios", "Marketing", "Saude", "IA"];

export default function MapaSite() {
  const byCategory: Record<string, Array<{ slug: string; t: string; d: string }>> = {};
  for (const [slug, p] of Object.entries(postsFull) as [string, any][]) {
    const cat = p.c || "IA";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push({ slug, t: p.t, d: p.d });
  }

  const total = Object.keys(postsFull).length;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/" className="text-slate-500 hover:text-cyan-400 text-sm inline-flex items-center gap-1 mb-4">← Voltar para Home</Link>
          <h1 className="text-3xl font-bold gradient-text">Mapa do Site</h1>
          <p className="text-slate-400 mt-2">{total} artigos organizados por categoria</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {CATEGORIES.map(cat => {
          const posts = byCategory[cat] || [];
          if (posts.length === 0) return null;
          return (
            <div key={cat} className="mb-10">
              <h2 className="text-lg font-bold text-cyan-400 mb-1">{cat}</h2>
              <p className="text-xs text-slate-500 mb-4">{posts.length} artigos</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {posts.map(p => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="p-3 rounded-lg hover:bg-white/[0.04] transition-colors group"
                  >
                    <h3 className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors leading-snug">{p.t}</h3>
                    <p className="text-[10px] text-slate-600 mt-1">{p.d}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
