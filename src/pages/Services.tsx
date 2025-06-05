
import React, { useState } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import ServicesHeroSection from '../components/ServicesHeroSection';
import DevelopmentServicesSection from '../components/DevelopmentServicesSection';
import CreativeServicesSection from '../components/CreativeServicesSection';
import TechnicalServicesSection from '../components/TechnicalServicesSection';
import EventsCoverSection from '../components/EventsCoverSection';
import ProcessSection from '../components/ProcessSection';
import CallToActionSection from '../components/CallToActionSection';

const Services: React.FC = () => {
  const [activeSection, setActiveSection] = useState('services');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <ServicesHeroSection />
        <DevelopmentServicesSection />
        <CreativeServicesSection />
        <TechnicalServicesSection />
        <EventsCoverSection />
        <ProcessSection />
        <CallToActionSection />
      </div>
    </LanguageProvider>
  );
};

export default Services;
