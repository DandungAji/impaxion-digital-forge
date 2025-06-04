
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold gradient-text mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <p className="text-lg text-gray-500 mt-4">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder={t('contact.subject')}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-red-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                >
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  {t('contact.info.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">{t('contact.info.email')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">{t('contact.info.phone')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">{t('contact.info.address')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="glass-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to innovate?
                </h3>
                <p className="text-gray-400">
                  Let's create something extraordinary together. Your vision, our expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
