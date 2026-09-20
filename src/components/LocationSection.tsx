import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmIvory">
            Find Your Way to Something Delicious.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-espresso p-2 md:p-4 rounded-3xl">
          {/* Map */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583594165507!2d80.229158!3d12.934444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0c756b2707%3A0xbcc0e1ef3a1b0a85!2sTist%20N%20Taste%20Kuttys!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-goldenAmber shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-warmIvory mb-2 font-serif">Address</h3>
                  <p className="text-mutedBeige leading-relaxed">
                    Tist N Taste Kuttys<br />
                    3, 171, Rajiv Gandhi Salai, OMR,<br />
                    Mettukuppam, Thoraipakkam,<br />
                    Chennai, Tamil Nadu 600097
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-goldenAmber shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-warmIvory mb-2 font-serif">Phone</h3>
                  <a href="tel:08124434101" className="text-mutedBeige hover:text-goldenAmber transition-colors">
                    081244 34101
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-goldenAmber shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-warmIvory mb-2 font-serif">Opening Hours</h3>
                  <p className="text-mutedBeige">Open daily — closes at 12:00 AM.</p>
                  <p className="text-sm text-goldenAmber mt-2">Dine-in • Drive-through • No-contact delivery</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-charcoal/50 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=Tist+N+Taste+Kuttys+OMR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-transparent border border-warmIvory text-warmIvory px-6 py-3 rounded-lg text-center font-medium hover:bg-white/10 transition-colors"
              >
                Get Directions
              </a>
              <a
                href="tel:08124434101"
                className="flex-1 bg-burntOrange text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-goldenAmber transition-colors"
              >
                Call Restaurant
              </a>
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-goldenAmber text-charcoal px-6 py-3 rounded-lg text-center font-bold hover:bg-white transition-colors"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
