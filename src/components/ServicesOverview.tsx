import { Card } from './ui/card';
import { Button } from './ui/button';

const packages = [
  {
    name: 'Radhe Package',
    price: '₹5,00,000',
    guests: '50 guests',
    features: [
      'Basic decoration',
      'Professional photography',
      'Vegetarian catering',
      'Accommodation assistance',
      'Basic sound setup',
    ],
  },
  {
    name: 'Shyam Package',
    price: '₹10,00,000',
    guests: '100 guests',
    features: [
      'Premium decoration',
      'Photo + video coverage',
      'Multi-cuisine catering',
      'Accommodation included',
      'DJ & Mehendi setup',
    ],
  },
  {
    name: 'Vrindavan Royal',
    price: '₹15,00,000',
    guests: '150 guests',
    features: [
      'Luxury decoration',
      'Cinematic coverage',
      'Premium catering',
      'Luxury accommodation',
      'Live music & full management',
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">Our Wedding Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="p-6 flex flex-col items-center shadow-lg border-orange-100 border-2">
              <div className="text-2xl font-bold text-orange-500 mb-2">{pkg.name}</div>
              <div className="text-xl font-semibold mb-1">{pkg.price}</div>
              <div className="mb-4 text-gray-600">{pkg.guests}</div>
              <ul className="mb-6 space-y-1 text-left w-full">
                {pkg.features.map((f) => (
                  <li key={f} className="before:content-['•'] before:text-orange-500 before:mr-2">{f}</li>
                ))}
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full">Learn More</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 