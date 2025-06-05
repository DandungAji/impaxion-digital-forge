
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechnicalServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technicalServices = [
    { icon: '⚙️', title: 'PCB Design', description: 'Professional circuit board design and prototyping' },
    { icon: '🔧', title: 'IoT Solutions', description: 'Internet of Things development and integration' },
    { icon: '📡', title: 'Embedded Systems', description: 'Custom embedded hardware and software solutions' },
    { icon: '🛠️', title: 'Technical Consulting', description: 'Expert technical guidance and support' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 elegant-font">
            Technical Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced technical solutions for complex engineering challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalServices.map((service, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-all duration-500 group border-red-500/20 hover:border-red-400/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="service-icon">
                  <span className="text-red-400 group-hover:text-red-300 transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalServicesSection;
