
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedWorkSection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'photo-1498050108023-c5249f4df085',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'photo-1581091226825-a6a2a5aee158',
    },
    {
      title: 'Brand Identity Design',
      category: 'Creative Design',
      image: 'photo-1488590528505-98d2b5aba04b',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          {[...Array(10)].map((_, i) => (
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 elegant-font">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest projects and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-all duration-500 group cursor-pointer border-red-500/20 hover:border-red-400/40"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-t-lg relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=400&h=300`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-red-400 text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
