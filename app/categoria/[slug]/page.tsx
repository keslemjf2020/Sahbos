import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { postsFull } from "../../blog/pindex";

const colors: Record<string, string> = { Automacao: "#06b6d4", Ferramentas: "#8b5cf6", Negocios: "#f59e0b", Marketing: "#ec4899", Saude: "#10b981", IA: "#3b82f6" };

export default function Category({ params }: { params: { slug: string } }) {
  const cat = params.slug;
  const catName = Object.keys(colors).find(k => k.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === cat.toLowerCase()) || cat;
  const color = colors[catName] || "#06b6d4";

  const items = Object.entries(postsFull)
    .filter(([_, p]: [string, any]) => (p.c || "IA").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === cat.toLowerCase())
    .map(([slug, p]: [string, any]) => ({ slug, ...p }));

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]" style={{ background: `linear-gradient(to bottom, ${color}10, transparent)` }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-4"><ArrowLeft className="w-3 h-3" />Voltar</Link>
          <h1 className="text-3xl font-bold capitalize text-white">{catName}</h1>
          <p className="text-slate-400 mt-2">{items.length} artigos nesta categoria</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {items.length === 0 ? (
          <div className="text-center py-12"><p className="text-slate-500 text-lg mb-2">Nenhum artigo nesta categoria.</p><Link href="/mapa-do-site" className="text-cyan-400 hover:underline text-sm">Ver Mapa do Site →</Link></div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group p-5 rounded-2xl glass border border-white/[0.04]">
                <div className="w-full h-24 rounded-lg mb-3 overflow-hidden" style={{ background: `linear-gradient(135deg, ${color}22, ${color}08)` }}>
                  <div className="w-full h-full flex items-center justify-center text-4xl opacity-50">{p.c === "Automacao" ? "⚙️" : p.c === "Ferramentas" ? "🛠️" : p.c === "Negocios" ? "📊" : p.c === "Marketing" ? "📢" : p.c === "Saude" ? "🏥" : "🤖"}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}20`, color: color, border: `1px solid ${color}30` }}>{p.c}</span>
                <h3 className="font-semibold mt-2 mb-1 text-sm leading-snug text-white group-hover:text-cyan-400 transition-colors">{p.t}</h3>
                <div className="flex items-center gap-2 text-[10px] text-slate-600"><span>{p.d}</span><span>·</span><span>{p.r}</span></div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
