'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  onOrderClick: () => void;
}

export function WhatsAppFloat({ onOrderClick }: WhatsAppFloatProps) {
  return (
    <button
      onClick={onOrderClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer"
      style={{ pointerEvents: 'auto' }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}