'use client';

import { ArrowRight, Heart, Award, Clock, Star, ChefHat } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
}

export function HeroSection({ onOrderClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-20">
      {/* Background with enhanced gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-cream-50 to-beige-50 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 bg-repeat"></div>
      </div>
      
      {/* Refined Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-pink-300/40 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-beige-200/40 to-beige-300/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-20 h-20 bg-gradient-to-br from-cream-200/40 to-cream-300/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100/80 to-pink-200/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium shadow-soft transform hover:scale-105 transition-transform duration-300">
              <Star className="w-4 h-4 mr-2 text-pink-600" />
              <span className="bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                Premium Handcrafted Delights
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Welcome to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 drop-shadow-sm mt-2">
                  Mithi Cravings
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience the artistry of premium baking where every creation is a masterpiece. 
                Handcrafted with love, using only the finest ingredients for moments of pure delight.
              </p>
            </div>

            {/* Refined USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="group bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-102">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ChefHat className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="font-medium text-gray-800">Artisanal Quality</span>
                </div>
              </div>
              <div className="group bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-102">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="font-medium text-gray-800">Fresh Daily</span>
                </div>
              </div>
              <div className="group bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-102">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="font-medium text-gray-800">Made with Love</span>
                </div>
              </div>
            </div>

            {/* Refined CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6">
              <button
                onClick={onOrderClick}
                className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white px-8 sm:px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative flex items-center justify-center whitespace-nowrap">
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('products');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative w-full sm:w-auto overflow-hidden px-8 sm:px-10 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <span className="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                <span className="relative text-pink-600 group-hover:text-pink-700 flex items-center justify-center whitespace-nowrap">
                  Explore Menu
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced Hero Image Section */}
          <div className="relative animate-slide-in-right lg:mt-0 mt-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium handcrafted desserts"
                className="relative w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Refined Floating Cards */}
            <div className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-float transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-pink-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">500+</p>
                  <p className="text-sm font-medium text-gray-600">Delighted Customers</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-float transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-beige-100 to-beige-200 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-beige-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl bg-gradient-to-r from-beige-600 to-beige-800 bg-clip-text text-transparent">Premium</p>
                  <p className="text-sm font-medium text-gray-600">Artisanal Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}