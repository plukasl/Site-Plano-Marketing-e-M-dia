import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section
      id="metodologia"
      className="py-20 sm:py-28 bg-[#0B0F17] border-b border-slate-800/80 elementor-container-methodology"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED]">
            Nosso Processo
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Metodologia PLANO<span className="text-[#7C3AED]">.</span> de Crescimento
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Um caminho claro e previsível para transformar a comunicação da sua marca em resultados financeiros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-3xl font-black text-[#7C3AED]">01</span>
            <h3 className="text-base font-bold text-white">Diagnóstico & Imersão</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Análise detalhada do seu mercado, concorrentes e histórico de marketing atual.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-3xl font-black text-[#7C3AED]">02</span>
            <h3 className="text-base font-bold text-white">Planejamento Estratégico</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Desenvolvimento do plano estratégico sob medida com metas bem definidas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-3xl font-black text-[#7C3AED]">03</span>
            <h3 className="text-base font-bold text-white">Execução & Produção</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Produção de conteúdo, gravações e ativação das campanhas de tráfego.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-3xl font-black text-[#7C3AED]">04</span>
            <h3 className="text-base font-bold text-white">Otimização & Escala</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Análise contínua dos dados para refinar o investimento e escalar os resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
