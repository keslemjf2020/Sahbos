"use client";

import { useState } from "react";

export default function AudioPlayer({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);

  function speak() {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setPlaying(false);
    speechSynthesis.speak(utterance);
    setPlaying(true);
  }

  function stop() {
    speechSynthesis.cancel();
    setPlaying(false);
  }

  return (
    <button
      onClick={playing ? stop : speak}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
        playing
          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
          : "bg-white/[0.04] text-slate-400 border border-white/[0.08] hover:border-cyan-500/30 hover:text-cyan-400"
      }`}
    >
      {playing ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Parar leitura
        </>
      ) : (
        <>
          🔊 Ouvir artigo
        </>
      )}
    </button>
  );
}
