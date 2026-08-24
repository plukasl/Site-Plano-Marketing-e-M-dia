import React from 'react';
import { PracticalImpactCard } from './PracticalImpactCard';

interface HeroProps {
  onOpenModal: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const whatsappUrl =
    'https://api.whatsapp.com/send/?phone=5511999999999&text=Ol%C3%A1%21+Gostaria+de+conversar+com+a+equipe+de+estrat%C3%A9gia+da+Plano.&type=phone_number&app_absent=0';

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#0B0F17] border-b border-slate-800/80 elementor-container-hero"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-violet-950/40 via-purple-950/20 to-transparent pointer-events-none blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-violet-950/80 border border-violet-800/60 text-violet-300 text-xs font-bold shadow-2xs">
              <svg className="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>PLANO • Marketing e Mídia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Estratégia, Conteúdo e Tráfego que transformam marcas em{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                autoridade
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              A PLANO combina inteligência de mercado, tráfego pago de alta conversão e produção audiovisual de cinema para acelerar os resultados da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onOpenModal()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm transition-all shadow-lg shadow-violet-900/30 flex items-center justify-center gap-2 group"
              >
                <span>Solicitar Proposta Personalizada</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.151 4.204 4.294-1.125z" />
                </svg>
                <span>Falar via WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Estratégias sob medida</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Atendimento dedicado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Practical Impact Card */}
          <div className="lg:col-span-6 flex justify-center">
            <PracticalImpactCard />
          </div>
        </div>
      </div>
    </section>
  );
};
