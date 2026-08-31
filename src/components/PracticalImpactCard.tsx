import React from 'react';

interface PracticalImpactCardProps {
  whatsappUrl?: string;
}

export const PracticalImpactCard: React.FC<PracticalImpactCardProps> = ({
  whatsappUrl = 'https://api.whatsapp.com/send/?phone=5511999999999&text=Ol%C3%A1%21+Gostaria+de+conversar+com+o+especialista+da+Plano.&type=phone_number&app_absent=0'
}) => {
  return (
    <div className="w-full max-w-md mx-auto lg:max-w-lg rounded-3xl bg-[#0D131F] border border-slate-800/90 p-6 sm:p-8 space-y-4 shadow-2xl">
      {/* Eyebrow / Tagline */}
      <div className="text-xs font-black uppercase tracking-wider bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent pb-1">
        O QUE MUDA NA PRÁTICA
      </div>

      {/* Card 1: Agenda */}
      <div className="p-5 rounded-2xl bg-[#0B0F17] border border-slate-800/80 space-y-1.5 transition-all hover:border-slate-700">
        <h4 className="text-base font-bold text-white">Agenda</h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          De semanas fracas para fluxo constante de atendimentos.
        </p>
      </div>

      {/* Card 2: Previsibilidade */}
      <div className="p-5 rounded-2xl bg-[#0B0F17] border border-slate-800/80 space-y-1.5 transition-all hover:border-slate-700">
        <h4 className="text-base font-bold text-white">Previsibilidade</h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          Você sabe quanto investe e quantos clientes isso traz.
        </p>
      </div>

      {/* Card 3: Tempo */}
      <div className="p-5 rounded-2xl bg-[#0B0F17] border border-slate-800/80 space-y-1.5 transition-all hover:border-slate-700">
        <h4 className="text-base font-bold text-white">Tempo</h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          Você cuida do negócio, nós dos anúncios.
        </p>
      </div>

      {/* Bottom Action Button */}
      <div className="pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-4 px-5 rounded-2xl bg-[#080C14] border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold transition-all shadow-xs group"
        >
          <svg
            className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span>Falar com o especialista agora</span>
        </a>
      </div>
    </div>
  );
};
