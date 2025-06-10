import React from "react";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = ({
  setActiveSection,
}: {
  setActiveSection: (section: string) => void;
}) => {
  const { t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-muted mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Impaxion
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "home")}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.contactTitle")}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">{t("contact.info.email")}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">{t("contact.info.phone")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
