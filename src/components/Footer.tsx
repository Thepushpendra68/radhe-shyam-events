import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-playfair font-bold mb-2">Radhe Shyam Event Management</div>
          <div className="mb-2 flex items-center gap-2"><MapPin size={18} /> Vrindavan, India</div>
          <div className="mb-2 flex items-center gap-2"><Phone size={18} /> +91-9876543210</div>
          <div className="mb-2 flex items-center gap-2"><Mail size={18} /> info@radheshyamevents.com</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}><Link href={link.href} className="hover:underline">{link.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-orange-400"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-400"><Instagram /></a>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="text-sm mb-2">&copy; {new Date().getFullYear()} Radhe Shyam Event Management</div>
          <div className="text-sm">Made with <span className="text-orange-400">❤️</span> in Vrindavan</div>
        </div>
      </div>
    </footer>
  );
} 