"use client";

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', // Authentic looking grilled/cooked food
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-charcoal/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-goldenAmber font-semibold tracking-[0.2em] uppercase text-sm mb-6"
        >
          AUTHENTIC FLAVORS • OMR, CHENNAI
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold text-warmIvory leading-tight mb-6"
        >
          Where Every Bite Tells a Delicious Story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-mutedBeige text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Discover flavorful biryanis, smoky grills, South Indian favorites, and more at Tist N Taste Kuttys, your neighborhood food destination in Thoraipakkam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="bg-burntOrange text-white px-8 py-4 rounded-full font-medium hover:bg-goldenAmber transition-colors w-full sm:w-auto"
          >
            Explore Our Menu
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-warmIvory text-warmIvory px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-mutedBeige uppercase tracking-wider"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-goldenAmber"></span> ₹200–₹800 per person
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-goldenAmber"></span> Dine-in
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-goldenAmber"></span> Takeaway & Delivery
          </span>
        </motion.div>
      </div>
    </section>
  );
}
