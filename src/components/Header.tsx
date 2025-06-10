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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: t("nav.home"),
      link: "home",
    },
    {
      name: t("nav.services"),
      link: "services",
    },
    {
      name: t("nav.contact"),
      link: "contact",
    },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            activeItem={activeSection}
            onItemClick={handleNavClick}
          />
          <div className="flex items-center gap-2">
            <NavbarButton
              variant="primary"
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded transition-all duration-300 ${
                language === "en"
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-red-600"
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
                  : "text-gray-400 hover:text-red-600"
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
                href={`#${item.link}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.link);
                }}
                className={`relative text-neutral-600 dark:text-neutral-300 ${
                  activeSection === item.link ? "font-bold text-red-500" : ""
                }`}
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
    </header>
  );
};

export default Header;
