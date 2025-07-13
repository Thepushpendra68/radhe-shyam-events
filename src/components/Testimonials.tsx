'use client';

import { useState } from 'react';

const testimonials = [
  {
    client: 'Priya & Arjun',
    date: 'Feb 2024',
    pkg: 'Vrindavan Royal',
    rating: 5,
    review: 'Our wedding was a dream come true! The team handled everything with such grace and professionalism. Highly recommended!'
  },
  {
    client: 'Meera & Rohan',
    date: 'Nov 2023',
    pkg: 'Shyam Package',
    rating: 5,
    review: 'Beautiful decor, delicious food, and seamless management. Thank you for making our day so special!'
  },
  {
    client: 'Amit & Sneha',
    date: 'Jan 2024',
    pkg: 'Radhe Package',
    rating: 5,
    review: 'The best wedding planners in Vrindavan! Every detail was perfect.'
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % testimonials.length);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">What Our Clients Say</h2>
        <div className="bg-[#FEF7ED] rounded-lg p-8 shadow-md mb-6">
          <div className="text-xl font-semibold mb-2">{t.client}</div>
          <div className="text-sm text-gray-500 mb-2">{t.date} &mdash; {t.pkg}</div>
          <div className="flex justify-center mb-2">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-orange-500 text-lg">★</span>
            ))}
          </div>
          <div className="text-lg font-inter">&ldquo;{t.review}&rdquo;</div>
        </div>
        <div className="flex justify-center gap-4">
          <button onClick={prev} className="px-4 py-2 bg-orange-100 rounded-full hover:bg-orange-200">Prev</button>
          <button onClick={next} className="px-4 py-2 bg-orange-100 rounded-full hover:bg-orange-200">Next</button>
        </div>
      </div>
    </section>
  );
} 