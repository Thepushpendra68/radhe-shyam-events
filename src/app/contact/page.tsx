'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    guestCount: '',
    packageType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        guestCount: '',
        packageType: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
          alt="Contact us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-blue-900/80" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl font-inter">Let&apos;s Start Planning Your Dream Wedding</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-lg">
              <h2 className="text-2xl font-playfair font-bold mb-6 text-gray-800">Get in Touch</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your inquiry! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 9876543210"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Wedding Date
                    </label>
                    <Input
                      id="weddingDate"
                      name="weddingDate"
                      type="date"
                      value={formData.weddingDate}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="50"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="packageType" className="block text-sm font-medium text-gray-700 mb-2">
                      Package Interest
                    </label>
                    <select
                      id="packageType"
                      name="packageType"
                      value={formData.packageType}
                      onChange={(e) => handleSelectChange('packageType', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a package</option>
                      <option value="radhe">Radhe Package - ₹5,00,000</option>
                      <option value="shyam">Shyam Package - ₹10,00,000</option>
                      <option value="royal">Vrindavan Royal - ₹15,00,000</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dream wedding..."
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">
                        Krishna Nagar, Vrindavan<br />
                        Mathura District, Uttar Pradesh 281121<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+91-9876543210</p>
                      <p className="text-gray-600">+91-9876543211</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">info@radheshyamevents.com</p>
                      <p className="text-gray-600">bookings@radheshyamevents.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Office Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Contact</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp: +91-9876543210
                  </Button>
                  <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-3">
                    Call Now: +91-9876543210
                  </Button>
                </div>
              </Card>

              <Card className="p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ 10+ years of experience</li>
                  <li>✓ 500+ successful weddings</li>
                  <li>✓ Personalized service</li>
                  <li>✓ Trusted vendor network</li>
                  <li>✓ 24/7 support during events</li>
                  <li>✓ Transparent pricing</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center text-gray-800">
            Find Us in Vrindavan
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.4829739002426!2d77.7002064!3d27.5820538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736e84d8e6c6a5%3A0x736d7e2b4c7f9c8!2sVrindavan%2C%20Uttar%20Pradesh%20281121!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vrindavan Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-xl font-inter mb-8">
            Let&apos;s discuss your vision and create a personalized wedding experience that exceeds your expectations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 font-semibold">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 font-semibold">
              View Our Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 