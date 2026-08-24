import React from 'react';
import { PlanoLogo } from './PlanoLogo';

export const Footer: React.FC = () => {
  const whatsappUrl =
    'https://api.whatsapp.com/send/?phone=5511999999999&text=Ol%C3%A1%21+Gostaria+de+conversar+com+a+equipe+de+estrat%C3%A9gia+da+Plano.&type=phone_number&app_absent=0';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs elementor-container-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center p-1.5">
                <PlanoLogo className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-lg text-white uppercase tracking-wider">
                PLANO<span className="text-[#7C3AED]">.</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Especializada em tráfego pago, produção de conteúdo e vídeos para empresas que querem escalar seus resultados.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-bold transition-all text-xs"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.151 4.204 4.294-1.125z" />
              </svg>
              <span>Conversar via WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 PLANO Marketing e Mídia. Todos os direitos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white font-bold cursor-pointer"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
