import { Metadata } from 'next';
import Image from 'next/image';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Check, Star, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wedding Packages & Services - Radhe Shyam Event Management | Vrindavan',
  description: 'Explore our premium wedding packages: Radhe Package (₹5L), Shyam Package (₹10L), and Vrindavan Royal (₹15L). Complete destination wedding planning in Vrindavan.',
  keywords: 'wedding packages vrindavan, destination wedding cost, wedding planning services, vrindavan wedding prices',
};

const packages = [
  {
    name: 'Radhe Package',
    price: '₹5,00,000',
    originalPrice: '₹6,00,000',
    guests: '50 guests',
    popular: false,
    features: [
      'Beautiful traditional decoration',
      'Professional photography (6 hours)',
      'Vegetarian multi-course catering',
      'Accommodation assistance',
      'Basic sound system & microphones',
      'Mehendi artist',
      'Transportation coordination',
      'Wedding coordination team',
      'Basic lighting setup',
      'Mandap decoration'
    ],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop'
  },
  {
    name: 'Shyam Package',
    price: '₹10,00,000',
    originalPrice: '₹12,00,000',
    guests: '100 guests',
    popular: true,
    features: [
      'Premium decoration & flower arrangements',
      'Professional photography + videography',
      'Multi-cuisine catering (Indian & Continental)',
      'Luxury accommodation for couple',
      'DJ & sound system',
      'Mehendi & sangeet setup',
      'Bridal makeup artist',
      'Transportation for guests',
      'Premium lighting & effects',
      'Designer mandap setup',
      'Welcome drinks & cocktails',
      'Live music performance'
    ],
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop'
  },
  {
    name: 'Vrindavan Royal',
    price: '₹15,00,000',
    originalPrice: '₹18,00,000',
    guests: '150 guests',
    popular: false,
    features: [
      'Luxury decoration with imported flowers',
      'Cinematic photography & videography',
      'Premium multi-cuisine catering',
      'Luxury accommodation for families',
      'Live music & DJ',
      'Complete event management',
      'Professional bridal team',
      'VIP transportation',
      'Premium lighting & special effects',
      'Designer mandap with gold accents',
      'Welcome ceremony setup',
      'Traditional dhol & shehnai',
      'Fireworks display',
      'Helicopter entry (optional)',
      'Destination coordination'
    ],
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=400&fit=crop'
  }
];

const additionalServices = [
  {
    title: 'Pre-Wedding Photoshoot',
    description: 'Capture your love story in beautiful Vrindavan locations',
    price: '₹25,000',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=300&h=200&fit=crop'
  },
  {
    title: 'Destination Coordination',
    description: 'Complete travel and accommodation management',
    price: '₹50,000',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop'
  },
  {
    title: 'Traditional Ceremonies',
    description: 'Haldi, Sangeet, and other traditional ceremonies',
    price: '₹75,000',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop'
  }
];

const faqs = [
  {
    question: 'What is included in the base package price?',
    answer: 'Each package includes decoration, catering, photography, accommodation assistance, and coordination. Specific details vary by package tier.'
  },
  {
    question: 'Can we customize the packages?',
    answer: 'Absolutely! We offer complete customization of all packages to match your preferences and budget. Contact us for a personalized quote.'
  },
  {
    question: 'How far in advance should we book?',
    answer: 'We recommend booking 6-12 months in advance, especially for peak wedding seasons (October-March). This ensures availability and better planning.'
  },
  {
    question: 'Do you handle destination weddings outside Vrindavan?',
    answer: 'Yes, we plan destination weddings across India and internationally. Additional charges apply for travel and coordination.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellation policies vary by package and timing. Generally, 25% advance is non-refundable, and cancellations within 30 days incur 50% charges.'
  },
  {
    question: 'Do you provide wedding photography and videography?',
    answer: 'Yes, all packages include professional photography. Premium packages include videography and cinematic coverage.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=800&fit=crop"
          alt="Wedding services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-blue-900/80" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl font-inter">Premium Wedding Packages Tailored for You</p>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center text-gray-800">Choose Your Perfect Package</h2>
          <p className="text-lg font-inter text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each package is carefully crafted to provide you with the best wedding experience within your budget.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative p-8 shadow-xl ${pkg.popular ? 'border-2 border-orange-500' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-2 flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-orange-500">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-gray-600 font-inter">{pkg.guests}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 font-inter text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-800 hover:bg-gray-900'} text-white font-semibold py-3`}
                >
                  Choose {pkg.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-[#FEF7ED]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center text-gray-800">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 font-inter mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">{service.price}</span>
                  <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                    Add to Package
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-xl font-inter mb-8">
            Every wedding is unique. Let us create a personalized package that perfectly matches your vision and budget.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call Us: +91-9876543210
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 font-inter">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 