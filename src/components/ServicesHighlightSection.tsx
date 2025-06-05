
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ServicesHighlightSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlightServices = [
    { icon: '⚡', title: 'Web Development', description: 'Custom websites and applications' },
    { icon: '📱', title: 'Mobile Development', description: 'iOS and Android solutions' },
    { icon: '🎨', title: 'Creative Design', description: 'Brand identity and UI/UX' },
    { icon: '⚙️', title: 'Technical Solutions', description: 'PCB design and IoT development' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/10 to-black">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="absolute top-1/3 left-10 w-32 h-32 border border-red-500/10 rotate-45" />
          <div className="absolute bottom-1/3 right-10 w-24 h-24 border border-red-500/10 rotate-12" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 elegant-font">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlightServices.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-500 border-red-500/20 hover:border-red-400/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon mb-4">
                <span className="text-red-400 text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/services')}
            className="cta-button text-lg group"
          >
            Explore All Services
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlightSection;
