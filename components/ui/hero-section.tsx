'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
}

export function HeroSection({ onOrderClick }: HeroSectionProps) {
  const collageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = collageRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / rect.width; // -0.5..0.5
      const dy = (e.clientY - centerY) / rect.height; // -0.5..0.5

      const elements = container.querySelectorAll<HTMLElement>('[data-parallax]');
      elements.forEach((el) => {
        const factor = Number(el.dataset.parallax || 0);
        el.style.setProperty('--tx', `${dx * factor}px`);
        el.style.setProperty('--ty', `${dy * factor}px`);
        el.style.transform = `translate3d(var(--tx, 0px), var(--ty, 0px), 0)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-20">
      {/* Layered premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cream-50 to-beige-50"></div>
        {/* Radial accents */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_60%)] blur-2xl"></div>
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),transparent_60%)] blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-[11px] tracking-[0.2em] uppercase text-gray-700 animate-fade-up delay-80">
              House of Modern Bakes
            </div>
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up delay-160">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Desserts, Reimagined.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600/90 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up delay-240">
                Custom cakes and artisanal treats crafted to elevate your moments.
              </p>
            </div>

            {/* Minimal layout: removed badges for a cleaner, premium look */}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <button
                onClick={onOrderClick}
                className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-8 sm:px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 animate-pop-in delay-320"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative flex items-center justify-center whitespace-nowrap">
                  Start an order
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('products');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative px-8 sm:px-10 py-4 rounded-full font-semibold text-pink-700 hover:text-pink-800 border border-pink-200/70 hover:border-pink-300 bg-white/60 hover:bg-white/80 backdrop-blur-md transition-colors animate-pop-in delay-380"
              >
                Browse signatures
              </button>
            </div>
          </div>

          {/* Collage stack (three cards) */}
          <div ref={collageRef} className="relative lg:mt-0 mt-8 h-[520px] sm:h-[560px] lg:h-[620px]">
            {/* soft glow */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-tr from-pink-500/15 via-rose-400/10 to-amber-300/10 rounded-[3rem] blur-3xl"></div>

            {/* card A */}
            <div className="absolute top-2 left-0 sm:left-4 w-[58%] sm:w-[52%] md:w-[48%] rotate-[-4deg]">
              <div data-parallax="-10" className="p-[6px] rounded-3xl bg-gradient-to-tr from-pink-500/60 via-rose-400/60 to-amber-300/60 shadow-2xl animate-fade-up delay-140 animate-float-soft">
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  <img
                    src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Signature chocolate cake"
                    className="h-[220px] sm:h-[260px] md:h-[300px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* card B */}
            <div className="absolute right-0 top-16 w-[70%] sm:w-[64%] md:w-[60%] z-20 rotate-[2deg]">
              <div data-parallax="8" className="p-[6px] rounded-3xl bg-gradient-to-tr from-rose-400/60 via-pink-500/60 to-amber-300/60 shadow-2xl animate-fade-up delay-220 animate-float-soft">
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  <img
                    src="https://images.pexels.com/photos/4040643/pexels-photo-4040643.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Salted caramel brownies"
                    className="h-[260px] sm:h-[300px] md:h-[360px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* card C */}
            <div className="absolute bottom-2 left-8 sm:left-16 w-[60%] sm:w-[54%] md:w-[50%] z-10 rotate-[6deg]">
              <div data-parallax="-6" className="p-[6px] rounded-3xl bg-gradient-to-tr from-amber-300/60 via-rose-400/60 to-pink-500/60 shadow-2xl animate-fade-up delay-300 animate-float-soft">
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  <img
                    src="https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Artisan cookies"
                    className="h-[220px] sm:h-[240px] md:h-[260px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}