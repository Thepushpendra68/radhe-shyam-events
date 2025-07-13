'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = '+919876543210';
  const message = 'Hi, I\'m interested in wedding planning services from Radhe Shyam Event Management';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
          <span className="whitespace-nowrap font-semibold">WhatsApp Us</span>
        </span>
      </button>
    </div>
  );
} 