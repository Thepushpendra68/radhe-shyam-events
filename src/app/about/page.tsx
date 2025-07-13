import { Metadata } from 'next';
import Image from 'next/image';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { CalendarDays, Users, Award, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Radhe Shyam Event Management | Vrindavan Wedding Planners',
  description: 'Learn about Radhe Shyam Event Management - 10+ years of experience creating magical destination weddings in Vrindavan with 500+ successful celebrations.',
  keywords: 'about radhe shyam events, vrindavan wedding planners, destination wedding experience, wedding planning team',
};

const teamMembers = [
  {
    name: 'Radha Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c57c7c8e?w=400&h=400&fit=crop&crop=face',
    description: 'With 15+ years in event management, Radha brings passion and expertise to every wedding.'
  },
  {
    name: 'Shyam Gupta',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'Shyam specializes in traditional Indian wedding ceremonies and cultural authenticity.'
  },
  {
    name: 'Priya Agarwal',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'Priya ensures seamless execution and coordinates all aspects of your special day.'
  },
  {
    name: 'Amit Verma',
    role: 'Photography Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    description: 'Amit captures the divine moments with his cinematic approach to wedding photography.'
  }
];

const achievements = [
  { icon: CalendarDays, title: '10+ Years', description: 'Of dedicated service in wedding planning' },
  { icon: Users, title: '500+ Weddings', description: 'Successfully planned and executed' },
  { icon: Award, title: 'Award Winning', description: 'Best Destination Wedding Planner 2023' },
  { icon: MapPin, title: 'Pan India', description: 'Serving clients across India and internationally' }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=800&fit=crop"
          alt="Our team at work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-blue-900/80" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-inter">Creating Divine Weddings with Passion and Precision</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg font-inter text-gray-600 mb-4">
                Founded in 2014 in the holy city of Vrindavan, Radhe Shyam Event Management began with a simple vision: to create weddings that are not just celebrations, but spiritual journeys that unite souls in divine love.
              </p>
              <p className="text-lg font-inter text-gray-600 mb-4">
                Over the years, we have grown from a small team of passionate planners to a renowned destination wedding company, trusted by families across India and around the world.
              </p>
              <p className="text-lg font-inter text-gray-600 mb-6">
                Our expertise lies in blending traditional Indian wedding customs with modern elegance, creating experiences that honor heritage while embracing contemporary comfort.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-500 text-white">Destination Weddings</Badge>
                <Badge className="bg-blue-500 text-white">Cultural Expertise</Badge>
                <Badge className="bg-gold-500 text-white">Luxury Events</Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=400&fit=crop"
                alt="Traditional Indian wedding ceremony"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[#FEF7ED]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center text-gray-800">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center shadow-lg border-orange-100 border-2">
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{achievement.title}</h3>
                <p className="text-gray-600 font-inter">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center text-gray-800">Meet Our Team</h2>
          <p className="text-lg font-inter text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our passionate team of wedding experts is dedicated to making your special day absolutely perfect.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 font-inter text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-orange-600">Our Mission</h3>
              <p className="text-lg font-inter text-gray-700">
                To create unforgettable wedding experiences that honor tradition while embracing innovation, 
                ensuring every couple&apos;s special day is a perfect reflection of their love story in the divine land of Vrindavan.
              </p>
            </Card>
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-lg font-inter text-gray-700">
                To be the most trusted destination wedding company in India, known for our cultural authenticity, 
                creative excellence, and commitment to making every wedding a celebration of love and tradition.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 