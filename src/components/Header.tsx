
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add error handling for translation function
  const safeTranslate = (key: string) => {
    try {
      return t(key) || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold gradient-text cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection('home')}
          >
            IMPAXION
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative py-2 px-4 transition-all duration-300 hover:text-red-500 ${
                  activeSection === section ? 'text-red-500' : 'text-white'
                }`}
              >
                {safeTranslate(`nav.${section}`)}
                {activeSection === section && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 animate-scale-in" />
                )}
              </button>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-gray-500">|</span>
            <button
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 rounded transition-all duration-300 ${
                language === 'id' 
                  ? 'bg-red-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
