
import React, { useState } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactFormSection from '../components/ContactFormSection';
import HowCanWeHelpSection from '../components/HowCanWeHelpSection';
import FAQSection from '../components/FAQSection';

const Contact: React.FC = () => {
  const [activeSection, setActiveSection] = useState('contact');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <ContactHeroSection />
        <ContactFormSection />
        <HowCanWeHelpSection />
        <FAQSection />
      </div>
    </LanguageProvider>
  );
};

export default Contact;
