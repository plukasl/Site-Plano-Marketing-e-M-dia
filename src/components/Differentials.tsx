import React from 'react';

export const Differentials: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="py-20 sm:py-28 bg-[#0D131F] border-b border-slate-800/80 elementor-container-differentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED]">
            Por que a PLANO?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Diferenciais que garantem a performance da sua marca
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 transition-all hover:border-slate-700">
            <h3 className="text-base sm:text-lg font-bold text-white">Atendimento Proativo & Consultivo</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Não somos apenas executores. Sugerimos melhorias e alinhamos estratégias constantemente.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 transition-all hover:border-slate-700">
            <h3 className="text-base sm:text-lg font-bold text-white">Foco Absoluto em Métricas de Negócio</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Olhamos para o seu faturamento e ROI, não apenas para métricas de vaidade como curtidas.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 transition-all hover:border-slate-700">
            <h3 className="text-base sm:text-lg font-bold text-white">Produção Audiovisual In-House</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Equipamentos e profissionais próprios de foto e vídeo de alta qualidade para seus anúncios e redes.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 transition-all hover:border-slate-700">
            <h3 className="text-base sm:text-lg font-bold text-white">Transparência Total & Dashboards ao Vivo</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Acompanhe em tempo real para onde está indo cada centavo e o retorno gerado pelas campanhas.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 transition-all hover:border-slate-700">
            <h3 className="text-base sm:text-lg font-bold text-white">Agilidade de Execução Sem Burocracia</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Aprovações ágeis e adaptação rápida às tendências de mercado para não perder tempo.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 transition-all hover:border-slate-700">
            <h3 className="text-base sm:text-lg font-bold text-white">Equipe Multidisciplinar Especializada</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Especialistas dedicados em tráfego, copywriting, design e captação de vídeo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
