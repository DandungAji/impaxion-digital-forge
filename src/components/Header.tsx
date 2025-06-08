import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Add error handling for translation function
  const safeTranslate = (key: string) => {
    try {
      return t(key) || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Services",
      link: "services",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton
              variant="primary"
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded transition-all duration-300 ${
                language === "en"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </NavbarButton>
            <span className="text-gray-500">|</span>
            <NavbarButton
              variant="primary"
              onClick={() => setLanguage("id")}
              className={`px-3 py-1 rounded transition-all duration-300 ${
                language === "id"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              ID
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex items-center gap-2">
              <NavbarButton
                variant="primary"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded transition-all duration-300 ${
                  language === "en"
                    ? "bg-red-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </NavbarButton>
              <span className="text-gray-500">|</span>
              <NavbarButton
                variant="primary"
                onClick={() => setLanguage("id")}
                className={`px-3 py-1 rounded transition-all duration-300 ${
                  language === "id"
                    ? "bg-red-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                ID
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Old Nav */}
      {/* <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold gradient-text cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection("home")}
          >
            IMPAXION
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["home", "services", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative py-2 px-4 transition-all duration-300 hover:text-red-500 ${
                  activeSection === section ? "text-red-500" : "text-white"
                }`}
              >
                {safeTranslate(`nav.${section}`)}
                {activeSection === section && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 animate-scale-in" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
