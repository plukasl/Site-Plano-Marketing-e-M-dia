import React, { useState } from 'react';

export const DeviceComposition: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notebook' | 'phone' | 'dashboard' | 'photo' | 'video'>('notebook');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 mb-4 p-1.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 w-fit mx-auto lg:mx-0 shadow-xs">
        <button
          type="button"
          onClick={() => setActiveTab('notebook')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'notebook'
              ? 'bg-slate-800 text-violet-300 border border-violet-800/60 shadow-xs'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Notebook</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('phone')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'phone'
              ? 'bg-slate-800 text-violet-300 border border-violet-800/60 shadow-xs'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span>Smartphone</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'dashboard'
              ? 'bg-slate-800 text-violet-300 border border-violet-800/60 shadow-xs'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>Dashboard</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('photo')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'photo'
              ? 'bg-slate-800 text-violet-300 border border-violet-800/60 shadow-xs'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span>Foto</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('video')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'video'
              ? 'bg-slate-800 text-violet-300 border border-violet-800/60 shadow-xs'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>Vídeo</span>
        </button>
      </div>

      {/* Composition Container */}
      <div className="relative p-4 sm:p-6 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden min-h-[460px] sm:min-h-[500px] flex flex-col justify-between text-white">
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-300">Hub Integrado de Produção & Performance</span>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-violet-950/80 text-violet-300 border border-violet-800/50 font-mono text-[11px]">
            STRATEGY • CREATIVE • ADS
          </span>
        </div>

        {/* Center Mockups Area */}
        <div className="relative z-10 my-4 flex-1 flex items-center justify-center">
          {/* Notebook Mockup */}
          <div
            onClick={() => setActiveTab('notebook')}
            className={`w-full max-w-lg transition-all duration-300 cursor-pointer ${
              activeTab === 'notebook'
                ? 'ring-2 ring-violet-500 z-40 scale-105 opacity-100'
                : 'z-10 opacity-90'
            }`}
          >
            <div className="bg-slate-950 rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                    https://ads.plano.com/campanhas
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <span>ROAS 4.8x</span>
                </div>
              </div>
              <div className="p-4 grid grid-cols-12 gap-3 bg-slate-950 text-slate-100">
                <div className="col-span-12 sm:col-span-7 space-y-2.5">
                  <div className="relative h-28 rounded-xl overflow-hidden border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=70"
                      alt="Gestão de Campanhas"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-2.5 flex flex-col justify-end">
                      <span className="px-2 py-0.5 rounded bg-[#7C3AED] text-white text-[10px] font-bold w-fit mb-1">
                        Campanha Ativa
                      </span>
                      <p className="text-xs font-bold text-white">Gerador de Leads B2B</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Conversões</span>
                      <strong className="text-base text-white font-extrabold">+1.420</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Custo / Lead</span>
                      <strong className="text-base text-white font-extrabold">R$ 14,20</strong>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-5 space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Meta Ads</span>
                      <span className="text-emerald-400 font-bold">Ativo</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#7C3AED] h-full w-[82%]"></div>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      CTR Média: <strong className="text-white">3.92%</strong>
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 block">Público Alvo</span>
                    <p className="text-[11px] font-semibold text-slate-200">Tomadores de Decisão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smartphone Mockup */}
          <div
            onClick={() => setActiveTab('phone')}
            className={`absolute -bottom-2 -left-2 sm:bottom-2 sm:-left-3 w-40 sm:w-48 bg-slate-950 rounded-2xl border border-slate-700 shadow-2xl p-2.5 space-y-2 cursor-pointer transition-all duration-300 ${
              activeTab === 'phone'
                ? 'ring-2 ring-violet-500 z-40 scale-105'
                : 'z-20 hover:scale-102'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-800">
              <span className="font-semibold text-white">Redes Sociais</span>
              <span className="px-1.5 py-0.5 rounded bg-violet-900/60 text-violet-200 font-bold">Reels</span>
            </div>
            <div className="relative rounded-xl overflow-hidden h-28 border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=300&q=70"
                alt="Reel Autoral"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-xs p-1.5 rounded-lg flex items-center justify-between text-[10px] text-white font-bold">
                <span className="text-rose-400">♥ 14.8k</span>
                <span className="text-slate-300">👁 182k</span>
              </div>
            </div>
          </div>

          {/* Dashboard Floating Card */}
          <div
            onClick={() => setActiveTab('dashboard')}
            className={`absolute top-2 -right-2 sm:-right-4 w-44 sm:w-52 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-3 cursor-pointer transition-all duration-300 ${
              activeTab === 'dashboard'
                ? 'ring-2 ring-violet-500 z-40 scale-105'
                : 'z-20 hover:scale-102'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white">Dashboard Ads</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">
                +184%
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mb-1">Crescimento de Oportunidades</p>
            <strong className="text-lg font-extrabold text-white">R$ 480.000</strong>
          </div>

          {/* Photo Floating Card */}
          <div
            onClick={() => setActiveTab('photo')}
            className={`absolute top-24 -left-2 sm:-left-6 w-36 sm:w-44 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700/90 shadow-2xl p-2.5 cursor-pointer transition-all duration-300 ${
              activeTab === 'photo'
                ? 'ring-2 ring-violet-500 z-40 scale-105'
                : 'z-20 hover:scale-102'
            }`}
          >
            <div className="text-xs font-bold text-white mb-1.5">Fotografia Studio</div>
            <div className="h-20 rounded-xl overflow-hidden border border-slate-800 relative">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=70"
                alt="Ensaio Fotográfico"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Video Floating Card */}
          <div
            onClick={() => setActiveTab('video')}
            className={`absolute bottom-2 -right-2 sm:-right-5 w-40 sm:w-48 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-2.5 cursor-pointer transition-all duration-300 ${
              activeTab === 'video'
                ? 'ring-2 ring-violet-500 z-40 scale-105'
                : 'z-20 hover:scale-102'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-white">Produção Vídeo</span>
              <span className="text-[9px] text-rose-400 font-bold bg-rose-950 px-1.5 py-0.5 rounded">
                4K 60FPS
              </span>
            </div>
            <div className="h-20 rounded-xl overflow-hidden border border-slate-800 relative">
              <img
                src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=300&q=70"
                alt="Vídeo Cinema"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>✨ Ecossistema unificado: Mídia + Conteúdo + Vídeo</span>
          <span className="text-slate-300 font-semibold hidden sm:inline">100% Produção Própria</span>
        </div>
      </div>
    </div>
  );
};
