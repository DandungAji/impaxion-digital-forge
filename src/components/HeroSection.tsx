
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const safeTranslate = (key: string) => {
    try {
      return t(key) || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated particles with parallax */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                transform: `translateY(${scrollY * (0.2 + Math.random() * 0.3)}px)`,
              }}
            />
          ))}
        </div>

        {/* Background geometric shapes with parallax */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-red-500/20 rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-red-500/10 rotate-12" />
        </div>
      </div>

      {/* 3D Scene with enhanced parallax */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-70"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y + scrollY * 0.2}px) scale(${1 - scrollY * 0.0005})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Scene3D />
      </div>

      {/* Main Content with parallax */}
      <div 
        className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold elegant-font">
              <span className="gradient-text block leading-tight">
                {safeTranslate('hero.title')}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {safeTranslate('hero.subtitle')}
            </h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            {safeTranslate('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => scrollToSection('services')}
              className="cta-button text-lg font-bold tracking-wide"
            >
              {safeTranslate('hero.cta')}
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              {safeTranslate('hero.contact')}
            </Button>
          </div>
        </div>

        {/* Stats Section with parallax */}
        <div 
          className="lg:block hidden animate-slide-in-right"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <h3 className="text-2xl font-bold gradient-text elegant-font">{safeTranslate('about.title')}</h3>
            <p className="text-gray-300">{safeTranslate('about.description')}</p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: safeTranslate('about.stat1') },
                { value: '50+', label: safeTranslate('about.stat2') },
                { value: '8+', label: safeTranslate('about.stat3') },
                { value: '5+', label: safeTranslate('about.stat4') },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 glass-effect rounded-lg hover:bg-red-500/10 transition-colors duration-300">
                  <div className="text-2xl font-bold text-red-500 elegant-font">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-red-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
