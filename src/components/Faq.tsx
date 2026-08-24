import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    q: 'Qual o investimento mínimo recomendado para começar?',
    a: 'O investimento varia conforme o objetivo. Para campanhas de tráfego pago com coleta rápida de dados, recomendamos uma verba de mídia inicial a partir de R$ 1.500/mês diretamente nas plataformas de anúncios.'
  },
  {
    id: 2,
    q: 'Em quanto tempo verei os primeiros resultados?',
    a: 'Com tráfego pago, os primeiros leads e mensagens começam a chegar nas primeiras 48 a 72 horas. Para construção de marca e relevância orgânica, a consolidação ocorre de 3 a 6 meses.'
  },
  {
    id: 3,
    q: 'Como funciona o acompanhamento e os relatórios?',
    a: 'Você terá acesso a um dashboard online atualizado periodicamente e reuniões quinzenais ou mensais de alinhamento com seu gestor de conta.'
  },
  {
    id: 4,
    q: 'A PLANO cuida de toda a parte de criação e vídeos?',
    a: 'Sim! Nossa estrutura é completa. Cuidamos do roteiro, gravação, edição de vídeo, fotos e design final das peças publicitárias.'
  },
  {
    id: 5,
    q: 'Minha empresa precisa de contrato com fidelidade?',
    a: 'Trabalhamos com contratos flexíveis, recomendando um período mínimo inicial de 3 meses para curva de aprendizado e maturação das campanhas.'
  }
];

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#0B0F17] border-b border-slate-800/80 elementor-container-faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED]">
            Tire suas dúvidas
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left font-bold text-white text-sm sm:text-base flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`faq-icon text-xl font-bold transition-colors ${
                      isOpen ? 'text-violet-400' : 'text-slate-400'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
