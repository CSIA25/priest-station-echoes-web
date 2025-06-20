
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
          alt="Sierra Nevada Mountains at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow">
          Welcome to
          <span className="block text-gold-400">Priest Station Cafe</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl mb-4 text-shadow opacity-90">
          175+ Years of California Hospitality
        </p>
        
        <p className="font-inter text-lg md:text-xl mb-8 text-shadow opacity-80 max-w-2xl mx-auto">
          Historic 6th-generation family cafe & cabin retreat on Highway 120, 
          just 1 hour from Yosemite Valley's El Capitan & Half Dome
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-burnt-sienna-600 hover:bg-burnt-sienna-700 text-white font-medium text-lg px-8 py-3 transition-all hover:scale-105"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-burnt-sienna-600 font-medium text-lg px-8 py-3 transition-all hover:scale-105"
            onClick={() => document.getElementById('cabins')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Stay With Us
            <Play className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
