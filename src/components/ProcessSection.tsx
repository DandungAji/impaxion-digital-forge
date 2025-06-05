
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const processSteps = [
    { 
      step: '01', 
      title: 'Discovery & Planning', 
      description: 'We start by understanding your needs, goals, and vision for the project' 
    },
    { 
      step: '02', 
      title: 'Design & Strategy', 
      description: 'Creating detailed plans, wireframes, and strategies tailored to your requirements' 
    },
    { 
      step: '03', 
      title: 'Development & Creation', 
      description: 'Building your solution with cutting-edge technology and creative expertise' 
    },
    { 
      step: '04', 
      title: 'Testing & Refinement', 
      description: 'Rigorous testing and refinement to ensure quality and performance' 
    },
    { 
      step: '05', 
      title: 'Launch & Support', 
      description: 'Successful deployment with ongoing support and maintenance' 
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 elegant-font">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A transparent, collaborative approach that ensures your project's success from start to finish
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-all duration-500 group border-red-500/20 hover:border-red-400/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 elegant-font">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
