'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop"
        alt="Indian wedding ceremony background"
        fill
        priority
        className="object-cover object-center z-0"
      />
      {/* Saffron Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/80 via-black/40 to-transparent z-10" />
      {/* Content */}
      <div className="relative z-20 text-center w-full max-w-2xl mx-auto px-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-playfair font-bold mb-4 drop-shadow-lg text-white"
        >
          Radhe Shyam Event Management
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl mb-8 font-inter text-white/90"
        >
          Creating Divine Weddings in the Holy Land of Vrindavan
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-10"
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:outline-none">
            <span className="inline-block animate-pulse">View Packages</span>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:outline-none">
            Contact Us
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-white/90 drop-shadow"
        >
          <span>10+ Years Experience</span>
          <span>|</span>
          <span>500+ Weddings</span>
          <span>|</span>
          <span>Pan-India & International</span>
        </motion.div>
      </div>
    </section>
  );
} 