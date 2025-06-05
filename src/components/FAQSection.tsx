
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: "What services does IMPAXION offer?",
      answer: "We offer comprehensive digital solutions including web development, mobile app development, UI/UX design, brand identity, photography, video production, PCB design, and IoT solutions. We're your one-stop solution for all digital and creative needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. We believe in long-term partnerships and are here to help your project grow and evolve."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes 5 key phases: Discovery & Planning, Design & Strategy, Development & Creation, Testing & Refinement, and Launch & Support. We maintain transparent communication throughout each phase to ensure your vision is realized."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients globally and have experience collaborating across different time zones. We're fluent in both English and Indonesian, making communication seamless for international projects."
    },
    {
      question: "What makes IMPAXION different from other agencies?",
      answer: "Our unique combination of technical expertise, creative vision, and collaborative approach sets us apart. We don't just deliver projects – we partner with you to create solutions that drive real business impact and exceed expectations."
    },
    {
      question: "Can you help with both technical and creative aspects of a project?",
      answer: "Yes, that's our specialty! We have a diverse team that covers both technical development and creative design. This allows us to provide cohesive solutions where technology and creativity work together seamlessly."
    },
    {
      question: "How do you handle project communication and updates?",
      answer: "We believe in transparent communication and provide regular updates through your preferred channels. You'll have access to project dashboards, regular check-ins, and direct communication with your dedicated project team."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 elegant-font">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-red-500/20 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left text-white hover:text-red-400 transition-colors duration-300 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto border-red-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 elegant-font">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              We're here to help! Reach out to us directly and we'll get back to you as soon as possible.
            </p>
            <button className="cta-button group">
              Contact Us
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
