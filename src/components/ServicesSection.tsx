
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const safeTranslate = (key: string) => {
    try {
      return t(key) || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  const services = [
    {
      key: 'web',
      icon: '⚡',
      color: 'from-red-600/20 to-red-800/20',
    },
    {
      key: 'mobile',
      icon: '📱',
      color: 'from-red-600/20 to-red-800/20',
    },
    {
      key: 'ui',
      icon: '🎨',
      color: 'from-red-600/20 to-red-800/20',
    },
    {
      key: 'logo',
      icon: '✦',
      color: 'from-red-600/20 to-red-800/20',
    },
    {
      key: 'pcb',
      icon: '⚙️',
      color: 'from-red-600/20 to-red-800/20',
    },
    {
      key: 'photo',
      icon: '📷',
      color: 'from-red-600/20 to-red-800/20',
    },
    {
      key: 'video',
      icon: '🎬',
      color: 'from-red-600/20 to-red-800/20',
    },
    {
      key: 'drone',
      icon: '✈️',
      color: 'from-red-600/20 to-red-800/20',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Enhanced Background with parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        
        {/* Geometric background elements */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <div className="absolute top-1/3 left-10 w-32 h-32 border border-red-500/10 rotate-45" />
          <div className="absolute bottom-1/3 right-10 w-24 h-24 border border-red-500/10 rotate-12" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div 
          className="text-center mb-16 animate-fade-in"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 elegant-font">
            {safeTranslate('services.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {safeTranslate('services.subtitle')}
          </p>
        </div>

        {/* Services Grid with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.key}
              className="glass-card hover:scale-105 transition-all duration-500 group cursor-pointer animate-scale-in border-red-500/20 hover:border-red-400/40 hover:bg-red-500/5"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * 0.02}px)`,
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="service-icon">
                  <span className="text-red-400 group-hover:text-red-300 transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  {safeTranslate(`services.${service.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {safeTranslate(`services.${service.key}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div 
          className="mt-20 text-center"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto border-red-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 elegant-font">
              Ready to transform your digital presence?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and create something extraordinary together. Your vision, our expertise.
            </p>
            <button className="cta-button text-lg group">
              Start Your Project
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
