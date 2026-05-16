import Link from "next/link";

export default function Category({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] p-12">
      <Link href="/" className="text-cyan-400 text-sm">← Voltar</Link>
      <h1 className="text-3xl font-bold text-white mt-4 capitalize">{params.slug}</h1>
      <p className="text-slate-400 mt-2">Categoria: {params.slug}</p>
      <p className="text-green-400 mt-4">✅ Pagina renderizada com sucesso!</p>
    </div>
  );
}
