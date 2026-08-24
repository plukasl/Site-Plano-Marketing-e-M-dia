import React from 'react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="servicos"
      className="py-20 sm:py-28 bg-[#0D131F] border-b border-slate-800/80 elementor-container-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED]">
            Nossas Soluções
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Soluções integradas de Marketing e Mídia para o seu negócio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Trabalhamos de forma coordenada para garantir que cada centavo investido retorne em visibilidade e receita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Gestão de Tráfego Pago */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 card-shadow-hover space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-950 text-violet-400 border border-violet-800/60 flex items-center justify-center font-bold text-xl">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Gestão de Tráfego Pago</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Campanhas otimizadas no Meta Ads, Google Ads e TikTok Ads focadas em ROI máximo e captação constante de leads qualificados.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestão diária de orçamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Testes A/B contínuos de criativos</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Relatórios de performance transparentes</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onSelectService('Gestão de Tráfego Pago')}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-[#7C3AED] text-white text-xs font-bold transition-colors text-center shadow-xs"
            >
              Solicitar orçamento para Tráfego
            </button>
          </div>

          {/* Card 2: Produção de Conteúdo & Social Media */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 card-shadow-hover space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-950 text-violet-400 border border-violet-800/60 flex items-center justify-center font-bold text-xl">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Produção de Conteúdo & Social Media</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Posicionamento estratégico nas redes sociais para engajar seu público e construir uma presença forte e autêntica.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Calendário editorial estratégico</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Design gráfico premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copywriting focado em conversão</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onSelectService('Produção de Conteúdo')}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-[#7C3AED] text-white text-xs font-bold transition-colors text-center shadow-xs"
            >
              Solicitar orçamento para Conteúdo
            </button>
          </div>

          {/* Card 3: Estratégia de Marca & Branding */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 card-shadow-hover space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-950 text-violet-400 border border-violet-800/60 flex items-center justify-center font-bold text-xl">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Estratégia de Marca & Branding</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Definição de identidade visual, tom de voz e posicionamento único de mercado para destacar sua empresa da concorrência.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manual de marca completo</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rebranding e modernização</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Arquitetura de mensagens</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onSelectService('Estratégia de Marca')}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-[#7C3AED] text-white text-xs font-bold transition-colors text-center shadow-xs"
            >
              Solicitar orçamento para Branding
            </button>
          </div>

          {/* Card 4: Produção Audiovisual & Fotografia */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 card-shadow-hover space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-950 text-violet-400 border border-violet-800/60 flex items-center justify-center font-bold text-xl">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Produção Audiovisual & Fotografia</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Captação e edição profissional de vídeos institucionais, Reels, anúncios de alta conversão e fotos de produtos.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vídeos em 4K e drones</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Edição dinâmica para anúncios</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensaios corporativos e de produtos</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onSelectService('Produção Audiovisual')}
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-[#7C3AED] text-white text-xs font-bold transition-colors text-center shadow-xs"
            >
              Solicitar orçamento para Vídeo/Foto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
