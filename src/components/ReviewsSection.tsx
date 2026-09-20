import { Star } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-espresso">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmIvory mb-12">
          What's on the Table? Great Food & Experiences.
        </h2>
        
        <div className="inline-flex flex-col items-center justify-center p-10 bg-charcoal rounded-3xl border border-charcoal/50 shadow-2xl">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-8 h-8 fill-goldenAmber text-goldenAmber" />
            ))}
            <div className="relative w-8 h-8">
              <Star className="w-8 h-8 text-goldenAmber" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                <Star className="w-8 h-8 fill-goldenAmber text-goldenAmber" />
              </div>
            </div>
          </div>
          
          <div className="text-6xl font-serif font-bold text-warmIvory mb-2">
            3.8 <span className="text-3xl text-mutedBeige">/ 5</span>
          </div>
          <p className="text-mutedBeige text-lg mb-8">
            Based on 567 reviews.
          </p>
          
          <p className="text-sm text-mutedBeige italic mb-8 max-w-sm">
            "Customer experiences may vary. Explore recent reviews to learn more."
          </p>
          
          <a
            href="https://www.google.com/search?q=Tist+N+Taste+Kuttys"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-burntOrange text-burntOrange font-medium hover:bg-burntOrange hover:text-white transition-colors"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
