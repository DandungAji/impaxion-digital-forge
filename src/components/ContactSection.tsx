import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background with parallax */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div
          className="text-center mb-20 animate-fade-in"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 elegant-font">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            {t("contact.subtitle")}
          </p>
          <p className="text-lg text-gray-500">{t("contact.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Form */}
          <Card
            className="glass-card animate-slide-in-left border-red-500/20"
            style={{
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white elegant-font">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-red-500/30 text-white placeholder:text-gray-400 focus:border-red-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("contact.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-red-500/30 text-white placeholder:text-gray-400 focus:border-red-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder={t("contact.subject")}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-red-500/30 text-white placeholder:text-gray-400 focus:border-red-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.message")}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-white/5 border-red-500/30 text-white placeholder:text-gray-400 focus:border-red-400 resize-none transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="cta-button w-full text-lg group"
                >
                  {t("contact.send")}
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div
            className="space-y-8 animate-slide-in-right"
            style={{
              transform: `translateY(${scrollY * -0.02}px)`,
            }}
          >
            <Card className="glass-card border-red-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white elegant-font">
                  {t("contact.info.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-red-500/10 transition-colors duration-300 border border-red-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">
                      {t("contact.info.email")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-red-500/10 transition-colors duration-300 border border-red-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">
                      {t("contact.info.phone")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-red-500/10 transition-colors duration-300 border border-red-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">
                      {t("contact.info.address")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Additional Info Card */}
            <Card className="glass-card border-red-500/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 elegant-font">
                  Ready to innovate?
                </h3>
                <p className="text-gray-400 mb-6">
                  Let's create something extraordinary together. Your vision,
                  our expertise.
                </p>
                <button className="cta-button group">
                  Let's Talk
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
