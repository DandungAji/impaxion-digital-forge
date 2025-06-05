
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowCanWeHelpSection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const helpServices = [
    { 
      icon: '💡', 
      title: 'Project Consultation', 
      description: 'Get expert advice on your project scope, timeline, and technical requirements' 
    },
    { 
      icon: '🚀', 
      title: 'MVP Development', 
      description: 'Build a minimum viable product to validate your idea and get to market faster' 
    },
    { 
      icon: '🔧', 
      title: 'Technical Solutions', 
      description: 'Solve complex technical challenges with our experienced development team' 
    },
    { 
      icon: '🎨', 
      title: 'Design Services', 
      description: 'Create stunning visual designs that captivate your audience and enhance user experience' 
    },
    { 
      icon: '📈', 
      title: 'Growth Strategy', 
      description: 'Develop strategies to scale your business and reach your target audience effectively' 
    },
    { 
      icon: '🛠️', 
      title: 'Maintenance & Support', 
      description: 'Ongoing maintenance and support to keep your systems running smoothly' 
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 elegant-font">
            How Can We Help?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to completion, we're here to support your journey with comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpServices.map((service, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-all duration-500 group border-red-500/20 hover:border-red-400/40 cursor-pointer"
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
                <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
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

export default HowCanWeHelpSection;
