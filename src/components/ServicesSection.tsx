import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight-new";

import {
  CodeXml,
  TabletSmartphone,
  Camera,
  CircuitBoard,
  Tangent,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: CodeXml,
    name: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/web-dev.jpg"
        alt="Web Development"
        className="absolute h-full w-full object-cover opacity-60"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Camera,
    name: "Photography",
    description:
      "Professional photography services for products, events, and corporate needs.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/photo.jpg"
        alt="Photography"
        className="absolute h-full w-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: TabletSmartphone,
    name: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/mob-dev.jpg"
        alt="Mobil Development"
        className="absolute h-full w-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CircuitBoard,
    name: "PCB Design",
    description:
      "Professional circuit board design for electronic devices and IoT solutions.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/pcb.jpg"
        alt="PCB Design"
        className="absolute h-full w-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Tangent,
    name: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging and intuitive experiences.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/ui-design.png"
        alt="UI/UX Design"
        className="absolute h-full w-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      key: "web",
      icon: "⚡",
      color: "from-red-600/20 to-red-800/20",
    },
    {
      key: "mobile",
      icon: "📱",
      color: "from-red-600/20 to-red-800/20",
    },
    {
      key: "ui",
      icon: "🎨",
      color: "from-red-600/20 to-red-800/20",
    },
    {
      key: "logo",
      icon: "✦",
      color: "from-red-600/20 to-red-800/20",
    },
    {
      key: "pcb",
      icon: "⚙️",
      color: "from-red-600/20 to-red-800/20",
    },
    {
      key: "photo",
      icon: "📷",
      color: "from-red-600/20 to-red-800/20",
    },
    {
      key: "video",
      icon: "🎬",
      color: "from-red-600/20 to-red-800/20",
    },
    {
      key: "drone",
      icon: "✈️",
      color: "from-red-600/20 to-red-800/20",
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
            {safeTranslate("services.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {safeTranslate("services.subtitle")}
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        {/* Services Grid with enhanced styling
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
        </div> */}

        {/* CTA Section */}
        <div className="mt-40 h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="text-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Ready to Create Something
              <br />
              Amazing?
            </h1>
            <p className="mt-4 mb-8 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Let's discuss your project and bring your vision to life with our
              expertise.
            </p>
            <button className="cta-button text-lg group">
              Start Your Project
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
