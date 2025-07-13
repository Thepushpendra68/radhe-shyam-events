import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Image from 'next/image';

const images = [
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop', category: 'Ceremony' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop', category: 'Mehendi' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop', category: 'Pre-wedding' },
  { src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop', category: 'Ceremony' },
  { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop', category: 'Mehendi' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop', category: 'Pre-wedding' },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 bg-[#FEF7ED]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">Gallery Preview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg shadow-md">
              <Image src={img.src} alt={img.category} width={400} height={300} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Badge className="bg-orange-500 text-white text-sm px-3 py-1">{img.category}</Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-8 py-3">View Full Gallery</Button>
        </div>
      </div>
    </section>
  );
} 