import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Final Call To Action */}
      <section className="relative py-32 bg-charcoal flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-20"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20 text-center max-w-3xl">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-warmIvory mb-6">
            Your Next Favorite Meal Is Waiting.
          </h2>
          <p className="text-mutedBeige text-xl mb-10">
            Gather your people, bring your appetite, and discover the flavors of Tist N Taste Kuttys.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#menu"
              className="bg-burntOrange text-white px-8 py-4 rounded-full font-medium hover:bg-goldenAmber transition-colors"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-warmIvory text-warmIvory px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-charcoal pt-16 pb-8 border-t border-espresso">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
            
            {/* Brand */}
            <div>
              <h3 className="font-serif text-3xl font-bold text-warmIvory mb-4">Tist N Taste Kuttys</h3>
              <p className="text-mutedBeige italic">&quot;Flavorful moments, one meal at a time.&quot;</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-goldenAmber font-bold uppercase tracking-wider mb-2">Navigation</h4>
              <Link href="#home" className="text-mutedBeige hover:text-warmIvory transition-colors">Home</Link>
              <Link href="#menu" className="text-mutedBeige hover:text-warmIvory transition-colors">Menu</Link>
              <Link href="#gallery" className="text-mutedBeige hover:text-warmIvory transition-colors">Gallery</Link>
              <Link href="#reviews" className="text-mutedBeige hover:text-warmIvory transition-colors">Reviews</Link>
              <Link href="#contact" className="text-mutedBeige hover:text-warmIvory transition-colors">Contact</Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-goldenAmber font-bold uppercase tracking-wider mb-2">Visit Us</h4>
              <p className="text-mutedBeige">3, 171, Rajiv Gandhi Salai, OMR,</p>
              <p className="text-mutedBeige">Mettukuppam, Thoraipakkam, Chennai 600097</p>
              <p className="text-mutedBeige mt-2">Phone: 081244 34101</p>
              <p className="text-mutedBeige mt-2">Open daily — closes at 12:00 AM</p>
            </div>
          </div>

          <div className="border-t border-espresso pt-8 text-center">
            <p className="text-mutedBeige text-sm">
              &copy; 2026 Tist N Taste Kuttys. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
