"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1599487405270-817eb662a5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Grilled Chicken", className: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Biryani", className: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Restaurant Atmosphere", className: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Tandoori Special", className: "md:col-span-1 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Beverages", className: "md:col-span-1 md:row-span-1" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.className}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-pointer"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-goldenAmber transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
