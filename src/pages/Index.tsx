import React, { useState, useEffect } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Pointer } from "@/components/magicui/pointer";

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main>
          <HeroSection setActiveSection={setActiveSection} />
          <ServicesSection />
          <ContactSection />
        </main>

        <Footer setActiveSection={setActiveSection} />
        <SmoothCursor />
        {/* <Pointer /> */}
      </div>
    </LanguageProvider>
  );
};

export default Index;
