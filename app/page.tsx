'use client';

import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { ProductsSection } from '@/components/ui/products-section';
import { TestimonialsSection } from '@/components/ui/testimonials-section';
import { AboutSection } from '@/components/ui/about-section';
import { ContactSection } from '@/components/ui/contact-section';
import { Footer } from '@/components/ui/footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

export default function Home() {
  const RAZORPAY_PAGE_URL = '/pay';

  const handleWhatsAppOrder = (message?: string) => {
    const defaultMessage = 'Hi! I\'d like to place an order from Mithi Cravings. Please share your menu and pricing details.';
    const whatsappMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/917044085442?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleRazorpayAll = () => {
    window.location.href = RAZORPAY_PAGE_URL;
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation onOrderClick={handleRazorpayAll} />

      {/* Hero Section */}
      <HeroSection onOrderClick={handleRazorpayAll} />

      {/* Products Section */}
      <ProductsSection onWhatsAppOrder={handleWhatsAppOrder} razorpayAllUrl={RAZORPAY_PAGE_URL} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection onWhatsAppOrder={handleWhatsAppOrder} />

      {/* Footer */}
      <Footer onWhatsAppOrder={handleWhatsAppOrder} />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat onOrderClick={() => handleWhatsAppOrder()} />
    </div>
  );
}