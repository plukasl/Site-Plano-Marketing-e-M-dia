/**
 * PLANO | Marketing e Media - Main Application Script
 * Clean Vanilla JavaScript - Designed for Direct Elementor & WordPress HTML Widget Execution
 */

// Global state variables
let currentStep = 1;
let selectedServicesList = ['Gestão de Tráfego Pago'];
let selectedBudget = 'R$ 3.000 a R$ 5.000/mês';

// Target WhatsApp URL requested by user
const TARGET_WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511999999999&text=Ol%C3%A1%21+Gostaria+de+conversar+com+a+equipe+de+estrat%C3%A9gia+da+Plano.&type=phone_number&app_absent=0";

// --- 0. TRACKING & ANALYTICS HOOKS (Meta Pixel & GTM / Google Analytics) ---
window.lpTrackEvent = function(eventName, eventParams) {
  // Meta Pixel Hook
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, eventParams);
  }
  // Google Tag Manager / Analytics Hook
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...eventParams });
  }
};

// --- 1. WHATSAPP TRIGGER ---
window.openWhatsApp = function(customMessage) {
  window.lpTrackEvent('WhatsApp_Click', { category: 'Engagement', label: customMessage || 'Default WhatsApp' });
  if (customMessage) {
    const encoded = encodeURIComponent(customMessage);
    window.open(`https://api.whatsapp.com/send/?phone=5511999999999&text=${encoded}&type=phone_number&app_absent=0`, '_blank');
  } else {
    window.open(TARGET_WHATSAPP_URL, '_blank');
  }
};

// --- 2. MOBILE MENU DRAWER ---
window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
};

// --- 3. DEVICE COMPOSITION TABS ---
window.setActiveDeviceTab = function(activeTabId) {
  const deviceTabs = document.querySelectorAll('.device-tab-btn');
  const deviceMockups = document.querySelectorAll('.device-mockup-item');

  deviceTabs.forEach(btn => {
    const tab = btn.getAttribute('data-tab');
    if (tab === activeTabId) {
      btn.className = 'device-tab-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-slate-800 text-violet-300 border border-violet-800/60 shadow-xs';
    } else {
      btn.className = 'device-tab-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-white';
    }
  });

  deviceMockups.forEach(mockup => {
    const mockupId = mockup.getAttribute('data-mockup');
    if (mockupId === activeTabId) {
      mockup.classList.add('ring-2', 'ring-violet-500', 'z-40', 'scale-105');
      mockup.classList.remove('z-10', 'z-20', 'opacity-90');
    } else {
      mockup.classList.remove('ring-2', 'ring-violet-500', 'scale-105');
      if (mockupId === 'notebook') {
        mockup.classList.add('z-10', 'opacity-90');
        mockup.classList.remove('z-40');
      } else {
        mockup.classList.add('z-20');
        mockup.classList.remove('z-40');
      }
    }
  });
};

// --- 4. FAQ ACCORDION ---
window.toggleFaq = function(index) {
  const ans = document.getElementById(`faqAns-${index}`);
  const icon = document.getElementById(`faqIcon-${index}`);
  
  if (!ans || !icon) return;

  const isHidden = ans.classList.contains('hidden');
  
  // Close all other FAQ items for clean accordions
  document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(el => {
    el.textContent = '+';
    el.classList.remove('text-violet-400');
  });

  if (isHidden) {
    ans.classList.remove('hidden');
    icon.textContent = '−';
    icon.classList.add('text-violet-400');
    window.lpTrackEvent('FAQ_Open', { index: index });
  }
};

// --- 5. PROPOSAL MODAL LOGIC & MULTI-STEP FORM ---
window.openProposalModal = function(serviceName) {
  const modal = document.getElementById('proposalModal');
  if (!modal) return;

  if (serviceName) {
    selectedServicesList = [serviceName];
    updateSelectedServicesUI();
  }

  // Reset state
  currentStep = 1;
  updateStepUI();

  document.getElementById('modalFormStepContainer')?.classList.remove('hidden');
  document.getElementById('modalSuccessState')?.classList.add('hidden');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent background scrolling

  window.lpTrackEvent('ProposalModal_Open', { service: serviceName || 'General' });
};

window.closeProposalModal = function() {
  const modal = document.getElementById('proposalModal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
};

window.setStep = function(stepNumber) {
  if (stepNumber === 2 && currentStep === 1) {
    if (selectedServicesList.length === 0) {
      alert('Por favor, selecione ao menos um serviço de interesse.');
      return;
    }
  }

  if (stepNumber === 3 && currentStep === 2) {
    const companyInput = document.getElementById('inputCompanyName');
    if (!companyInput || !companyInput.value.trim()) {
      alert('Por favor, informe o nome da sua empresa.');
      companyInput?.focus();
      return;
    }
  }

  currentStep = stepNumber;
  updateStepUI();
  window.lpTrackEvent('Form_Step_Change', { step: stepNumber });
};

function updateStepUI() {
  const step1Label = document.getElementById('stepIndicator1');
  const step2Label = document.getElementById('stepIndicator2');
  const step3Label = document.getElementById('stepIndicator3');

  if (step1Label) step1Label.className = currentStep >= 1 ? 'text-violet-400 font-bold' : 'text-slate-500';
  if (step2Label) step2Label.className = currentStep >= 2 ? 'text-violet-400 font-bold' : 'text-slate-500';
  if (step3Label) step3Label.className = currentStep >= 3 ? 'text-violet-400 font-bold' : 'text-slate-500';

  const step1Panel = document.getElementById('stepPanel1');
  const step2Panel = document.getElementById('stepPanel2');
  const step3Panel = document.getElementById('stepPanel3');

  step1Panel?.classList.toggle('hidden', currentStep !== 1);
  step2Panel?.classList.toggle('hidden', currentStep !== 2);
  step3Panel?.classList.toggle('hidden', currentStep !== 3);
}

// Multi-select service toggle
window.toggleServiceOption = function(serviceName) {
  const idx = selectedServicesList.indexOf(serviceName);
  if (idx > -1) {
    if (selectedServicesList.length > 1) {
      selectedServicesList.splice(idx, 1);
    }
  } else {
    selectedServicesList.push(serviceName);
  }
  updateSelectedServicesUI();
};

function updateSelectedServicesUI() {
  document.querySelectorAll('.service-option-btn').forEach(btn => {
    const sName = btn.getAttribute('data-service');
    const checkIcon = btn.querySelector('.check-icon');
    const isSelected = selectedServicesList.includes(sName);

    if (isSelected) {
      btn.className = 'service-option-btn flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all border-[#7C3AED] bg-violet-950/80 text-violet-200 font-semibold shadow-xs';
      if (checkIcon) checkIcon.classList.remove('hidden');
    } else {
      btn.className = 'service-option-btn flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900';
      if (checkIcon) checkIcon.classList.add('hidden');
    }
  });
}

// Budget selection
window.selectBudgetOption = function(budgetText) {
  selectedBudget = budgetText;
  document.querySelectorAll('.budget-option-btn').forEach(btn => {
    const bVal = btn.getAttribute('data-budget');
    if (bVal === selectedBudget) {
      btn.className = 'budget-option-btn p-3 rounded-xl border text-left text-xs font-bold transition-all border-[#7C3AED] bg-violet-950/80 text-violet-200';
    } else {
      btn.className = 'budget-option-btn p-3 rounded-xl border text-left text-xs font-medium transition-all border-slate-800 text-slate-400 hover:border-slate-700 bg-slate-950';
    }
  });
};

// Form submission handler sending email to lukascoelho.s.c@gmail.com
window.handleFormSubmit = async function(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('inputFullName');
  const emailInput = document.getElementById('inputEmail');
  const phoneInput = document.getElementById('inputPhone');
  const companyInput = document.getElementById('inputCompanyName');
  const segmentInput = document.getElementById('inputSegment');
  const messageInput = document.getElementById('inputMessage');

  const name = nameInput?.value;
  const email = emailInput?.value;
  const phone = phoneInput?.value;
  const company = companyInput?.value;
  const segment = segmentInput?.value || 'Não informado';
  const message = messageInput?.value || 'Sem observações';

  if (!name || !email || !phone || !company) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Find submit button and update loading state
  const submitBtn = event?.target ? event.target.querySelector('button[type="submit"]') : null;
  const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Enviando...</span>';
  }

  const payload = {
    _subject: `Nova Solicitação de Proposta - ${company} (PLANO Marketing)`,
    _replyto: email,
    _to: "lukascoelho.s.c@gmail.com",
    Nome: name,
    Email: email,
    Telefone: phone,
    Empresa: company,
    Segmento: segment,
    Servicos_Desejados: selectedServicesList.join(', '),
    Orcamento_Estimado: selectedBudget,
    Mensagem: message
  };

  try {
    // Send form data directly to lukascoelho.s.c@gmail.com via FormSubmit endpoint
    await fetch('https://formsubmit.co/ajax/lukascoelho.s.c@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    window.lpTrackEvent('Lead_Submitted', { company: company, services: selectedServicesList.join(', ') });
  } catch (err) {
    console.warn('Enviado com aviso no envio direto:', err);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }

    // Display company name in confirmation banner
    const companyBanner = document.getElementById('successCompanyName');
    if (companyBanner) companyBanner.textContent = company;

    // Show success view inside modal
    document.getElementById('modalFormStepContainer')?.classList.add('hidden');
    document.getElementById('modalSuccessState')?.classList.remove('hidden');
  }
};

// --- INITIALIZATION SUPPORTING BOTH DOMContentLoaded AND DYNAMIC ELEMENTOR INJECTION ---
function initLpApp() {
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('bg-[#0B0F17]/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-md', 'py-3.5');
      header?.classList.remove('bg-transparent', 'py-5');
    } else {
      header?.classList.remove('bg-[#0B0F17]/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-md', 'py-3.5');
      header?.classList.add('bg-transparent', 'py-5');
    }
  });

  // Device tabs event listeners
  const deviceTabs = document.querySelectorAll('.device-tab-btn');
  deviceTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab) window.setActiveDeviceTab(tab);
    });
  });

  // Esc key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProposalModal();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLpApp);
} else {
  initLpApp();
}
