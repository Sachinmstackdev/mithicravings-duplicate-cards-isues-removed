'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavigationProps {
  onOrderClick: () => void;
}

export function Navigation({ onOrderClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner */}
      <div className="relative bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-10 animate-sparkle"></div>
        <div className="container mx-auto">
          <p className="px-4 py-2 text-sm font-medium text-center tracking-wide">
            ✨ Handcrafted with Love | Free Delivery on Orders Above ₹500 ✨
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`relative ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } transition-all duration-300`}>
        <div className="container mx-auto">
          <div className={`px-4 transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-lg">
                  <span className="text-white font-bold text-xl font-playfair">M</span>
                </div>
                <div className="transform transition-transform group-hover:translate-x-1">
                  <h1 className="font-playfair text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Mithi Cravings
                  </h1>
                  <p className="text-xs text-gray-600 font-medium tracking-wider uppercase">
                    Premium Handmade Bakery
                  </p>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {[
                  ['Home', 'home'],
                  ['Products', 'products'],
                  ['About', 'about'],
                  ['Reviews', 'testimonials'],
                  ['Contact', 'contact'],
                ].map(([label, section]) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="relative text-gray-700 hover:text-pink-600 font-medium transition-colors cursor-pointer group"
                  >
                    {label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </button>
                ))}
                <button
                  onClick={onOrderClick}
                  className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-2.5 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Order Now
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors cursor-pointer rounded-lg hover:bg-pink-50"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 mt-4 border-t border-pink-100 space-y-4">
                {[
                  ['Home', 'home'],
                  ['Products', 'products'],
                  ['About', 'about'],
                  ['Reviews', 'testimonials'],
                  ['Contact', 'contact'],
                ].map(([label, section]) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="w-full text-left text-gray-700 hover:text-pink-600 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-pink-50/50 flex items-center space-x-2"
                  >
                    <span>{label}</span>
                  </button>
                ))}
                <button
                  onClick={onOrderClick}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}