'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop',
    category: 'Ceremony',
    title: 'Sacred Wedding Ceremony',
    description: 'Traditional Hindu wedding ceremony in Vrindavan temple'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop',
    category: 'Reception',
    title: 'Grand Reception',
    description: 'Elegant reception celebration with family and friends'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=400&fit=crop',
    category: 'Mehendi',
    title: 'Mehendi Ceremony',
    description: 'Beautiful mehendi designs and celebration'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop',
    category: 'Pre-wedding',
    title: 'Pre-Wedding Photoshoot',
    description: 'Romantic pre-wedding shoot in Vrindavan gardens'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop',
    category: 'Sangeet',
    title: 'Sangeet Night',
    description: 'Vibrant sangeet celebration with music and dance'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop',
    category: 'Ceremony',
    title: 'Ring Exchange',
    description: 'Beautiful ring exchange ceremony moment'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
    category: 'Reception',
    title: 'Reception Decor',
    description: 'Stunning reception venue decoration'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
    category: 'Mehendi',
    title: 'Mehendi Celebration',
    description: 'Joyful mehendi ceremony with traditional music'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=400&fit=crop',
    category: 'Pre-wedding',
    title: 'Couple Portrait',
    description: 'Beautiful couple portrait session'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop',
    category: 'Sangeet',
    title: 'Dance Performance',
    description: 'Energetic dance performance at sangeet'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop',
    category: 'Ceremony',
    title: 'Mandap Setup',
    description: 'Beautifully decorated mandap for wedding ceremony'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1545288242-c7f4c565fbdf?w=600&h=400&fit=crop',
    category: 'Reception',
    title: 'Reception Lighting',
    description: 'Spectacular lighting arrangement for reception'
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    category: 'Mehendi',
    title: 'Henna Art',
    description: 'Intricate henna art design for bride'
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
    category: 'Pre-wedding',
    title: 'Traditional Attire',
    description: 'Couple in traditional Indian wedding attire'
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    category: 'Sangeet',
    title: 'Musical Celebration',
    description: 'Live music performance at sangeet ceremony'
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
    category: 'Ceremony',
    title: 'Sacred Rituals',
    description: 'Traditional wedding rituals and ceremonies'
  },
  {
    id: 17,
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop',
    category: 'Reception',
    title: 'First Dance',
    description: 'Couple\'s first dance at reception'
  },
  {
    id: 18,
    src: 'https://images.unsplash.com/photo-1582131503261-bed8c5d75e79?w=600&h=400&fit=crop',
    category: 'Mehendi',
    title: 'Mehendi Preparations',
    description: 'Bride preparing for mehendi ceremony'
  }
];

const categories = ['All', 'Ceremony', 'Reception', 'Mehendi', 'Sangeet', 'Pre-wedding'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(12);

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, visibleImages);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, filteredImages.length));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop"
          alt="Wedding gallery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-blue-900/80" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">Wedding Gallery</h1>
          <p className="text-xl md:text-2xl font-inter">Capturing Divine Moments & Sacred Celebrations</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'text-gray-700 border-gray-300 hover:border-orange-500 hover:text-orange-500'
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleImages(12);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages < filteredImages.length && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMoreImages}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold rounded-full"
              >
                Load More Images
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="relative">
              <Image
                src={filteredImages[currentImageIndex]?.src}
                alt={filteredImages[currentImageIndex]?.title}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{filteredImages[currentImageIndex]?.title}</h3>
                <p className="text-lg">{filteredImages[currentImageIndex]?.description}</p>
                <Badge className="mt-2 bg-orange-500">
                  {filteredImages[currentImageIndex]?.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Ready to Create Your Own Story?</h2>
          <p className="text-xl font-inter mb-8">
            Let us capture your special moments and create memories that will last a lifetime.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 font-semibold">
            Book Your Wedding
          </Button>
        </div>
      </section>
    </div>
  );
} 