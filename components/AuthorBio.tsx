export default function AuthorBio() {
  return (
    <div className="border-t border-white/[0.04] mt-12 pt-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">K</div>
        <div>
          <h4 className="font-semibold text-white text-sm">Kesley</h4>
          <p className="text-slate-400 text-xs mt-1 leading-relaxed">
            Desenvolvedor e criador de conteúdo. Especialista em IA e automação para pequenos negócios. 
            Fundador do blog Automação IA, onde compartilha guias práticos para usar inteligência artificial no dia a dia.
          </p>
        </div>
      </div>
    </div>
  );
}
