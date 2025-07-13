import Hero from '../components/Hero';
import About from '../components/About';
import ServicesOverview from '../components/ServicesOverview';
import GalleryPreview from '../components/GalleryPreview';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <About />
      <ServicesOverview />
      <GalleryPreview />
      <Testimonials />
    </main>
  );
}
