import React, { useState, useEffect } from 'react';
import { PlanoLogo } from './PlanoLogo';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const AVAILABLE_SERVICES = [
  'Gestão de Tráfego Pago',
  'Produção de Conteúdo',
  'Estratégia de Marca',
  'Produção Audiovisual'
];

const BUDGET_OPTIONS = [
  'Até R$ 3.000/mês',
  'R$ 3.000 a R$ 5.000/mês',
  'R$ 5.000 a R$ 10.000/mês',
  'Acima de R$ 10.000/mês'
];

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    initialService || 'Gestão de Tráfego Pago'
  ]);
  const [selectedBudget, setSelectedBudget] = useState('R$ 3.000 a R$ 5.000/mês');

  const [companyName, setCompanyName] = useState('');
  const [segment, setSegment] = useState('');
  const [message, setMessage] = useState('');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedServices([initialService]);
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setCurrentStep(1);
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleNextStep1 = () => {
    if (selectedServices.length === 0) {
      alert('Por favor, selecione ao menos um serviço de interesse.');
      return;
    }
    setCurrentStep(2);
  };

  const handleNextStep2 = () => {
    if (!companyName.trim()) {
      alert('Por favor, informe o nome da sua empresa.');
      return;
    }
    setCurrentStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !companyName) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      _subject: `Nova Solicitação de Proposta - ${companyName} (PLANO Marketing)`,
      _replyto: email,
      _to: 'lukascoelho.s.c@gmail.com',
      Nome: fullName,
      Email: email,
      Telefone: phone,
      Empresa: companyName,
      Segmento: segment || 'Não informado',
      Servicos_Desejados: selectedServices.join(', '),
      Orcamento_Estimado: selectedBudget,
      Mensagem: message || 'Sem observações'
    };

    try {
      await fetch('https://formsubmit.co/ajax/lukascoelho.s.c@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Enviado com aviso:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div
      id="proposalModal"
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden text-slate-100 my-8 animate-slide-up">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-violet-400 border border-slate-800 flex items-center justify-center font-bold text-sm p-2">
              <PlanoLogo className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Solicitar uma proposta</h3>
              <p className="text-xs text-slate-400">
                Análise personalizada e sem compromisso para sua empresa
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step Indicators */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4 text-xs font-semibold text-slate-400">
              <span className={currentStep >= 1 ? 'text-violet-400 font-bold' : 'text-slate-500'}>
                1. Serviços & Verba
              </span>
              <span className="text-slate-700">•</span>
              <span className={currentStep >= 2 ? 'text-violet-400 font-bold' : 'text-slate-500'}>
                2. Dados da Empresa
              </span>
              <span className="text-slate-700">•</span>
              <span className={currentStep >= 3 ? 'text-violet-400 font-bold' : 'text-slate-500'}>
                3. Contato Direto
              </span>
            </div>

            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-2">
                    Quais soluções sua empresa busca? <span className="text-violet-400">*</span>
                  </label>
                  <p className="text-xs text-slate-400 mb-3">
                    Selecione uma ou mais opções de interesse
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {AVAILABLE_SERVICES.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      const displayTitle = srv === 'Produção Audiovisual' ? 'Produção Audiovisual & Foto' : srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                            isSelected
                              ? 'border-[#7C3AED] bg-violet-950/80 text-violet-200 font-semibold shadow-xs'
                              : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span>{displayTitle}</span>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-md bg-[#7C3AED] text-white flex items-center justify-center font-bold text-xs">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-2">
                    Estimativa mensal de investimento em mídia/anúncios
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {BUDGET_OPTIONS.map((bud) => {
                      const isSelected = selectedBudget === bud;
                      return (
                        <button
                          key={bud}
                          type="button"
                          onClick={() => setSelectedBudget(bud)}
                          className={`p-3 rounded-xl border text-left text-xs transition-all ${
                            isSelected
                              ? 'border-[#7C3AED] bg-violet-950/80 text-violet-200 font-bold'
                              : 'border-slate-800 text-slate-400 hover:border-slate-700 bg-slate-950 font-medium'
                          }`}
                        >
                          {bud}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep1}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-semibold rounded-xl text-sm transition-all shadow-sm"
                  >
                    <span>Próximo passo</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-1.5">
                    Nome da empresa / marca <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Ex: Tech Solutions Ltda"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#7C3AED] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-1.5">
                    Segmento de atuação
                  </label>
                  <input
                    type="text"
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    placeholder="Ex: E-commerce, Saúde, Tecnologia, Serviços B2B"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#7C3AED] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-1.5">
                    Observações ou objetivos específicos (opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte brevemente o momento atual da sua empresa..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#7C3AED] text-sm"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep2}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-semibold rounded-xl text-sm transition-all shadow-sm"
                  >
                    <span>Próximo passo</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-200 mb-1.5">
                    Seu nome completo <span className="text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Carlos Andrade"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#7C3AED] text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-1.5">
                      E-mail corporativo <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="carlos@suaempresa.com.br"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#7C3AED] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-200 mb-1.5">
                      Telefone / WhatsApp <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#7C3AED] text-sm"
                    />
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                  🔒 Guardamos suas informações com total privacidade. Sem spam.
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-400 hover:text-white"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-bold rounded-xl text-sm transition-all shadow-md disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar solicitação'}</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          <div className="p-8 text-center sm:p-12">
            <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
              ✓
            </div>
            <h4 className="text-2xl font-extrabold text-white mb-2">
              Proposta solicitada com sucesso!
            </h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
              Recebemos os detalhes da sua empresa{' '}
              <strong className="text-white">{companyName}</strong>. Nosso time de estratégia
              entrará em contato em até 2 horas úteis.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3.5 bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-bold rounded-xl transition-all text-sm shadow-md"
            >
              Fechar janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
