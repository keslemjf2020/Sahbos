import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Category({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const posts = [
    { slug: "automacao-processos-rpa-ia", title: "RPA com IA", cat: "Automacao", date: "2026-05-16" },
    { slug: "automacao-financeira-pequena-empresa", title: "Automação Financeira", cat: "Automacao", date: "2026-05-16" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]"><div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-4"><ArrowLeft className="w-3 h-3" />Voltar</Link>
        <h1 className="text-3xl font-bold text-white capitalize">{slug}</h1>
        <p className="text-slate-400 mt-2">{posts.length} artigos</p>
      </div></div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover group p-5 rounded-2xl glass border border-white/[0.04]">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400">{p.cat}</span>
              <h3 className="font-semibold mt-2 text-sm text-white group-hover:text-cyan-400">{p.title}</h3>
              <div className="text-[10px] text-slate-600">{p.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
