import React from 'react';

interface FinalCtaProps {
  onOpenModal: (service?: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenModal }) => {
  const whatsappUrl =
    'https://api.whatsapp.com/send/?phone=5511999999999&text=Ol%C3%A1%21+Gostaria+de+conversar+com+a+equipe+de+estrat%C3%A9gia+da+Plano.&type=phone_number&app_absent=0';

  return (
    <section
      id="contato"
      className="py-20 sm:py-28 bg-[#0B0F17] relative overflow-hidden border-t border-slate-800/80 elementor-container-cta"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-14 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden text-center max-w-5xl mx-auto">
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pronto para transformar a presença digital da sua empresa?
            </h2>
            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Solicite uma proposta personalizada agora e descubra como a <span className="font-black tracking-wider text-white uppercase">PLANO<span className="text-[#7C3AED]">.</span></span> pode acelerar suas vendas.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-base transition-all shadow-xl shadow-violet-900/30"
              >
                Solicitar Proposta Agora
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.151 4.204 4.294-1.125z" />
                </svg>
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
