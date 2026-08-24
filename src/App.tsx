import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Differentials } from './components/Differentials';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenModal = (service?: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div
      id="lp-page"
      className="min-h-screen bg-[#0B0F17] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#7C3AED] selection:text-white"
    >
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Services onSelectService={handleOpenModal} />
        <Methodology />
        <Differentials />
        <Faq />
        <FinalCta onOpenModal={handleOpenModal} />
      </main>
      <Footer />

      <ProposalModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialService={selectedService}
      />
    </div>
  );
}
