'use client';

import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onWhatsAppOrder: (message?: string) => void;
}

export function Footer({ onWhatsAppOrder }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-pink-400 mb-4">
              Mithi Cravings
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting sweet memories with handmade cakes, cookies, and brownies. 
              Made with love, delivered with care. No preservatives, just pure indulgence.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  <span className="font-semibold">Store Address</span>: 262 Westened Marg, Saidulayajabb, Saket, New Delhi 110030 (Near Physics Walla)
                  <br />
                  <span className="font-semibold">Stall Address</span>: Saket Anupum PVR, Beside Sukla Paan bhandar, opposite to Look Saloon | Fri-Sun 5 PM - 10 PM
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">
                  +91 70440 85442
                  <br />
                  +91 98048 61575
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">
                  hello@mithicravings.com
                  <br />
                  mithicravings2023@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Specialties</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onWhatsAppOrder('Hi! I\'m interested in your custom celebration cakes. Please share details.')}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-left"
                >
                  Celebration Cakes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onWhatsAppOrder('Hi! I\'d like to know more about your artisan cookies. Please share your menu.')}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-left"
                >
                  Artisan Cookies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onWhatsAppOrder('Hi! I\'m interested in your gourmet brownies. What flavors do you have?')}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-left"
                >
                  Gourmet Brownies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onWhatsAppOrder('Hi! Do you offer custom orders for special occasions?')}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-left"
                >
                  Custom Orders
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                © {currentYear} Mithi Cravings. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center md:justify-end">
                Made with <Heart className="h-3 w-3 text-pink-400 mx-1" /> for sweet moments
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">We Accept</p>
            <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
              <span className="bg-gray-800 px-3 py-1 rounded">UPI</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Cards</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Net Banking</span>
              <span className="bg-gray-800 px-3 py-1 rounded">Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}