
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TrustedBySection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    'TechCorp', 'InnovateLab', 'DigitalFlow', 'StartupHub', 'CreativeSpace', 'BusinessPro'
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black">
        <div 
          className="absolute inset-0 opacity-3"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(220,38,38,0.1),transparent_50%)]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 elegant-font">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 border-red-500/20 hover:border-red-400/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg mx-auto mb-3 flex items-center justify-center border border-red-500/30">
                <span className="text-red-400 font-bold text-lg">{partner.charAt(0)}</span>
              </div>
              <h3 className="text-white font-medium text-sm">{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
