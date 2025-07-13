'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-playfair font-bold text-orange-600">Radhe Shyam Event Management</Link>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-inter hover:text-orange-500 transition-colors">{link.name}</Link>
          ))}
          <span className="ml-6 text-base font-semibold text-blue-900">📞 +91-9876543210</span>
        </div>
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Open menu">
          <span className="w-7 h-1 bg-orange-500 rounded" />
          <span className="w-7 h-1 bg-orange-500 rounded" />
          <span className="w-7 h-1 bg-orange-500 rounded" />
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-white shadow-lg px-4 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-inter hover:text-orange-500 transition-colors" onClick={() => setOpen(false)}>{link.name}</Link>
          ))}
          <span className="text-base font-semibold text-blue-900">📞 +91-9876543210</span>
        </nav>
      )}
    </header>
  );
} 