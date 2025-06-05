
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/20">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-16 rounded-3xl max-w-4xl mx-auto border-red-500/30 text-center">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6 elegant-font">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to create something extraordinary. Your success is our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="cta-button text-lg group"
            >
              Start Your Project
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
