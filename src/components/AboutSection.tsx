import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-espresso">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmIvory leading-tight">
              Good Food. Great Company. Every Time.
            </h2>
            <p className="text-mutedBeige text-lg leading-relaxed">
              At Tist N Taste Kuttys, we bring together the comforting flavors of South Indian cuisine and a selection of delicious favorites for every kind of craving. Whether you&apos;re stopping by for a hearty biryani, enjoying grilled specialties with friends, or sharing a meal with family, there&apos;s something to look forward to.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-charcoal/50">
              <div>
                <h3 className="font-bold text-goldenAmber mb-2 font-serif text-xl">Flavorful Favorites</h3>
                <p className="text-sm text-mutedBeige">A menu designed to satisfy.</p>
              </div>
              <div>
                <h3 className="font-bold text-goldenAmber mb-2 font-serif text-xl">Casual Dining</h3>
                <p className="text-sm text-mutedBeige">A relaxed, inviting atmosphere.</p>
              </div>
              <div>
                <h3 className="font-bold text-goldenAmber mb-2 font-serif text-xl">OMR Location</h3>
                <p className="text-sm text-mutedBeige">Conveniently in Thoraipakkam.</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Authentic restaurant interior
                alt="Tist N Taste Kuttys Dining Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
