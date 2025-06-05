
import React, { useState } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedWorkSection from '../components/FeaturedWorkSection';
import ServicesHighlightSection from '../components/ServicesHighlightSection';
import TrustedBySection from '../components/TrustedBySection';
import CallToActionSection from '../components/CallToActionSection';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <HeroSection setActiveSection={setActiveSection} />
        <FeaturedWorkSection />
        <ServicesHighlightSection />
        <TrustedBySection />
        <CallToActionSection />
      </div>
    </LanguageProvider>
  );
};

export default Home;
