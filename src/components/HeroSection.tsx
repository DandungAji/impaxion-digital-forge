
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Scene3D from './Scene3D';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 3D Scene */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-70"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {t('hero.subtitle')}
            </h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              {t('hero.cta')}
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="px-8 py-4 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="lg:block hidden animate-slide-in-right">
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold gradient-text">{t('about.title')}</h3>
            <p className="text-gray-300">{t('about.description')}</p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: t('about.stat1') },
                { value: '50+', label: t('about.stat2') },
                { value: '8+', label: t('about.stat3') },
                { value: '5+', label: t('about.stat4') },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
