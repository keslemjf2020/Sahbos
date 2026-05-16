import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Static categories to pre-render
const CATEGORIES = ['automacao', 'ferramentas', 'negocios', 'ia'];

// Load posts from pindex - wrapped in try/catch for safety
async function getPostsByCategory(cat: string) {
  try {
    const { postsFull } = await import("../../blog/pindex");
    return Object.entries(postsFull)
      .filter(([_, p]) => (p as { c?: string }).c?.toLowerCase() === cat.toLowerCase())
      .map(([slug, p]) => ({ 
        slug, 
        t: (p as { t?: string }).t || '', 
        d: (p as { d?: string }).d || '',
        c: (p as { c?: string }).c || ''
      }));
  } catch {
    return [];
  }
}

// Generate static params for all categories
export async function generateStaticParams() {
  return CATEGORIES.map(cat => ({ slug: cat }));
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = slug.charAt(0).toUpperCase() + slug.slice(1);
  return { title: `${cat} — Automação IA`, description: `Artigos sobre ${cat.toLowerCase()}` };
}

// Revalidate every hour
export const revalidate = 3600;

export default async function Category({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = slug;
  const items = await getPostsByCategory(cat);
  const catDisplay = cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-sm mb-4"><ArrowLeft className="w-3 h-3" />Voltar</Link>
          <h1 className="text-3xl font-bold capitalize gradient-text">{catDisplay}</h1>
          <p className="text-slate-400 mt-2">{items.length} artigos</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {items.length === 0 ? (
          <p className="text-slate-500">Nenhum artigo nesta categoria.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover p-5 rounded-2xl glass border border-white/[0.04] group">
                <h3 className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">{p.t}</h3>
                <p className="text-slate-500 text-xs mt-2">{p.d}</p>
                <span className="text-cyan-400 text-xs mt-3 inline-block hover:translate-x-1 transition-transform">Ler →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
