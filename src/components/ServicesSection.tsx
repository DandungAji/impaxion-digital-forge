
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'web',
      icon: '💻',
      color: 'from-red-500 to-pink-500',
    },
    {
      key: 'mobile',
      icon: '📱',
      color: 'from-red-500 to-orange-500',
    },
    {
      key: 'ui',
      icon: '🎨',
      color: 'from-red-500 to-purple-500',
    },
    {
      key: 'logo',
      icon: '🏷️',
      color: 'from-red-500 to-yellow-500',
    },
    {
      key: 'pcb',
      icon: '⚡',
      color: 'from-red-500 to-green-500',
    },
    {
      key: 'photo',
      icon: '📸',
      color: 'from-red-500 to-blue-500',
    },
    {
      key: 'video',
      icon: '🎬',
      color: 'from-red-500 to-indigo-500',
    },
    {
      key: 'drone',
      icon: '🚁',
      color: 'from-red-500 to-teal-500',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.key}
              className="glass-card hover:scale-105 transition-all duration-500 group cursor-pointer animate-scale-in border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  {t(`services.${service.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                  {t(`services.${service.key}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to transform your digital presence?
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
