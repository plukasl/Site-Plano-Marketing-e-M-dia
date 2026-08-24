import React, { useState, useEffect } from 'react';
import { PlanoLogo } from './PlanoLogo';

interface HeaderProps {
  onOpenModal: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl =
    'https://api.whatsapp.com/send/?phone=5511999999999&text=Ol%C3%A1%21+Gostaria+de+conversar+com+a+equipe+de+estrat%C3%A9gia+da+Plano.&type=phone_number&app_absent=0';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 text-white flex items-center justify-center p-2 shadow-xs group-hover:border-[#7C3AED] transition-colors">
            <PlanoLogo className="w-6 h-6 text-white group-hover:text-violet-400 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-wider text-white leading-tight uppercase">
              PLANO<span className="text-[#7C3AED]">.</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              Marketing e Mídia
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-xs text-slate-300">
          <a href="#servicos" className="hover:text-white transition-colors">
            Serviços
          </a>
          <a href="#metodologia" className="hover:text-white transition-colors">
            Metodologia
          </a>
          <a href="#diferenciais" className="hover:text-white transition-colors">
            Diferenciais
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Contato
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-all shadow-xs"
          >
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.151 4.204 4.294-1.125z" />
            </svg>
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => onOpenModal()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition-all shadow-md hover:shadow-violet-900/40"
          >
            <span>Pedir Proposta</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobileMenu" className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 flex flex-col gap-4 mt-3">
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-300"
          >
            Serviços
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-300"
          >
            Metodologia
          </a>
          <a
            href="#diferenciais"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-300"
          >
            Diferenciais
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-300"
          >
            FAQ
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-slate-300"
          >
            Contato
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-2.5 rounded-xl bg-[#7C3AED] text-white font-bold text-xs text-center"
            >
              Pedir Proposta
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 font-bold text-xs text-center block"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
