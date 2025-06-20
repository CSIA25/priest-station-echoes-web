
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import CabinsSection from '@/components/CabinsSection';
import YosemiteSection from '@/components/YosemiteSection';
import StoriesSection from '@/components/StoriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CabinsSection />
      <YosemiteSection />
      <StoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
