import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "IMPAXION",
    "hero.subtitle": "Digital Excellence Redefined",
    "hero.description":
      "We are a multidisciplinary digital team specializing in cutting-edge web development, mobile solutions, and creative design services that drive your business forward.",
    "hero.cta": "Explore Our Work",
    "hero.contact": "Get In Touch",

    // About Section
    "about.title": "About Impaxion",
    "about.description":
      "We combine creativity with technical expertise to deliver exceptional digital solutions. Our team of specialists works collaboratively to bring your vision to life with precision and innovation.",
    "about.stat1": "Projects Completed",
    "about.stat2": "Happy Clients",
    "about.stat3": "Team Members",
    "about.stat4": "Years Experience",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive Digital Solutions",
    "services.web.title": "Web Development",
    "services.web.description":
      "Custom websites and web applications built with modern technologies and best practices.",
    "services.mobile.title": "Mobile Development",
    "services.mobile.description":
      "Native and cross-platform mobile applications for iOS and Android.",
    "services.ui.title": "UI/UX Design",
    "services.ui.description":
      "User-centered design solutions that create engaging and intuitive experiences.",
    "services.logo.title": "Logo Design",
    "services.logo.description":
      "Memorable brand identities that capture your company's essence and values.",
    "services.pcb.title": "PCB Design",
    "services.pcb.description":
      "Professional circuit board design for electronic devices and IoT solutions.",
    "services.photo.title": "Photography",
    "services.photo.description":
      "Professional photography services for products, events, and corporate needs.",
    "services.video.title": "Videography",
    "services.video.description":
      "High-quality video production for marketing, events, and promotional content.",
    "services.drone.title": "Drone Services",
    "services.drone.description":
      "Aerial photography, videography, and mapping services with certified pilots.",
    "services.cta.title": "Ready to Create Something Amazing?",
    "services.cta.description":
      "Let's discuss your project and bring your vision to life with our expertise.",
    "services.cta.button": "Start Your Project",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to Start Your Project?",
    "contact.description":
      "Let's discuss how we can help bring your ideas to life. Contact us today for a free consultation.",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "hello@impaxion.com",
    "contact.info.phone": "+1 (555) 123-4567",
    "contact.info.address": "Jakarta, Indonesia",

    // Footer
    "footer.description":
      "A digital agency crafting exceptional experiences through innovative design and cutting-edge technology.",
    "footer.quickLinks": "Quick Links",
    "footer.contactTitle": "Contact",
    "footer.copyright": "© 2024 Impaxion. All rights reserved.",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.contact": "Kontak",

    // Hero Section
    "hero.title": "IMPAXION",
    "hero.subtitle": "Keunggulan Digital Didefinisikan Ulang",
    "hero.description":
      "Kami adalah tim digital multidisiplin yang mengkhususkan diri dalam pengembangan web terdepan, solusi mobile, dan layanan desain kreatif yang mendorong bisnis Anda maju.",
    "hero.cta": "Jelajahi Karya Kami",
    "hero.contact": "Hubungi Kami",

    // About Section
    "about.title": "Tentang Impaxion",
    "about.description":
      "Kami menggabungkan kreativitas dengan keahlian teknis untuk memberikan solusi digital yang luar biasa. Tim spesialis kami bekerja secara kolaboratif untuk mewujudkan visi Anda dengan presisi dan inovasi.",
    "about.stat1": "Proyek Selesai",
    "about.stat2": "Klien Puas",
    "about.stat3": "Anggota Tim",
    "about.stat4": "Tahun Pengalaman",

    // Services
    "services.title": "Layanan Kami",
    "services.subtitle": "Solusi Digital Komprehensif",
    "services.web.title": "Pengembangan Web",
    "services.web.description":
      "Website dan aplikasi web kustom yang dibangun dengan teknologi modern dan praktik terbaik.",
    "services.mobile.title": "Pengembangan Mobile",
    "services.mobile.description":
      "Aplikasi mobile native dan cross-platform untuk iOS dan Android.",
    "services.ui.title": "Desain UI/UX",
    "services.ui.description":
      "Solusi desain berpusat pada pengguna yang menciptakan pengalaman yang menarik dan intuitif.",
    "services.logo.title": "Desain Logo",
    "services.logo.description":
      "Identitas merek yang berkesan yang menangkap esensi dan nilai perusahaan Anda.",
    "services.pcb.title": "Desain PCB",
    "services.pcb.description":
      "Desain papan sirkuit profesional untuk perangkat elektronik dan solusi IoT.",
    "services.photo.title": "Fotografi",
    "services.photo.description":
      "Layanan fotografi profesional untuk produk, acara, dan kebutuhan korporat.",
    "services.video.title": "Videografi",
    "services.video.description":
      "Produksi video berkualitas tinggi untuk pemasaran, acara, dan konten promosi.",
    "services.drone.title": "Layanan Drone",
    "services.drone.description":
      "Layanan fotografi udara, videografi, dan pemetaan dengan pilot bersertifikat.",
    "services.cta.title": "Siap Menciptakan Sesuatu yang Luar Biasa?",
    "services.cta.description":
      "Mari diskusikan proyek Anda dan wujudkan visi Anda dengan keahlian kami.",
    "services.cta.button": "Mulai Proyek Anda",

    // Contact
    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Siap Memulai Proyek Anda?",
    "contact.description":
      "Mari diskusikan bagaimana kami dapat membantu mewujudkan ide Anda. Hubungi kami hari ini untuk konsultasi gratis.",
    "contact.name": "Nama Lengkap",
    "contact.email": "Alamat Email",
    "contact.subject": "Subjek",
    "contact.message": "Pesan",
    "contact.send": "Kirim Pesan",
    "contact.info.title": "Informasi Kontak",
    "contact.info.email": "hello@impaxion.com",
    "contact.info.phone": "+62 123 456 7890",
    "contact.info.address": "Jakarta, Indonesia",

    // Footer
    "footer.description":
      "Agensi digital yang menciptakan pengalaman luar biasa melalui desain inovatif dan teknologi terdepan.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.contactTitle": "Kontak",
    "footer.copyright": "© 2024 Impaxion. Hak cipta dilindungi undang-undang.",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
