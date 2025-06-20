
import { Wifi, Car, TreePine, Bath, Bed, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CabinsSection = () => {
  const cabinFeatures = [
    { icon: TreePine, text: 'Historic Redwood Deck' },
    { icon: Wifi, text: 'Mountain WiFi' },
    { icon: Car, text: 'Free Parking' },
    { icon: Bath, text: 'Full Bathrooms' },
    { icon: Bed, text: 'Cozy Interiors' },
    { icon: Users, text: 'Family Friendly' }
  ];

  const cabinImages = [
    {
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      alt: 'Rustic cabin exterior with mountain views',
      title: 'Mountain Cabin Retreat'
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      alt: 'Historic redwood deck dining area',
      title: 'Famous Redwood Deck'
    },
    {
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      alt: 'Cozy cabin interior with rustic charm',
      title: 'Warm & Welcoming Interiors'
    }
  ];

  return (
    <section id="cabins" className="py-16 bg-gradient-to-br from-burnt-sienna-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green-800 mb-6">
            Historic Mountain Cabins
          </h2>
          <p className="font-inter text-xl text-forest-green-700 max-w-3xl mx-auto">
            Stay where generations of Sierra Nevada travelers have found comfort. 
            Our authentic cabins feature the rare historic redwood deck and rustic luxury 
            that blends pioneer spirit with modern amenities.
          </p>
        </div>

        {/* Hero Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cabinImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white/90 rounded-2xl p-8 mb-12 shadow-lg">
          <h3 className="font-playfair text-2xl font-bold text-center text-forest-green-800 mb-8">
            What Makes Our Cabins Special
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabinFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-forest-green-50 hover:bg-forest-green-100 transition-colors">
                <feature.icon className="h-6 w-6 text-burnt-sienna-600 flex-shrink-0" />
                <span className="font-inter text-forest-green-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-burnt-sienna-600 to-burnt-sienna-700 rounded-2xl p-8 text-white text-center mb-12">
          <Badge className="bg-gold-500 text-forest-green-800 font-medium mb-4">
            Historic Feature
          </Badge>
          <h3 className="font-playfair text-3xl font-bold mb-4">
            The Famous Redwood Deck
          </h3>
          <p className="font-inter text-lg opacity-90 max-w-2xl mx-auto">
            One of the few remaining historic redwood outdoor dining decks in the Sierra Nevada. 
            Built in the 1920s, this architectural treasure offers an unmatched dining experience 
            under towering pines with mountain breezes.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-6">
            <p className="font-inter text-lg text-forest-green-700 mb-2">
              <strong>Perfect basecamp for Yosemite adventures</strong>
            </p>
            <p className="font-inter text-forest-green-600">
              Just 1 hour from El Capitan, Half Dome, and Yosemite Valley
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-burnt-sienna-600 hover:bg-burnt-sienna-700 text-white font-medium text-lg px-8 py-3"
              onClick={() => window.open('tel:+12093724959', '_self')}
            >
              Check Availability
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-forest-green-600 text-forest-green-600 hover:bg-forest-green-600 hover:text-white font-medium text-lg px-8 py-3"
              onClick={() => window.open('mailto:info@prieststation.com', '_self')}
            >
              Email for Rates
            </Button>
          </div>
          
          <p className="font-inter text-sm text-forest-green-600 mt-4">
            Book directly for the best rates and personalized service
          </p>
        </div>
      </div>
    </section>
  );
};

export default CabinsSection;
