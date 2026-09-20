import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WhyChooseUs />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
