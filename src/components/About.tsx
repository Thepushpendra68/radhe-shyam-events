export default function About() {
  return (
    <section className="py-16 bg-[#FEF7ED] text-[#374151]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center">About Radhe Shyam Event Management</h2>
        <p className="text-lg mb-6 text-center font-inter">With over a decade of experience, we specialize in crafting magical destination weddings in the spiritual heart of Vrindavan and beyond. Our team is dedicated to making your special day truly divine and memorable.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>10+ years of wedding planning expertise</li>
              <li>500+ successful weddings</li>
              <li>Personalized, end-to-end service</li>
              <li>Exclusive Vrindavan venues</li>
              <li>Trusted vendor network</li>
              <li>International client experience</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">10 Years</div>
            <div className="text-lg font-semibold">of creating magical moments</div>
            <div className="mt-4 text-center">Serving clients across India and internationally</div>
          </div>
        </div>
      </div>
    </section>
  );
} 