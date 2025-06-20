
import { MapPin, Clock, Camera, Mountain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const YosemiteSection = () => {
  const attractions = [
    {
      name: 'El Capitan',
      distance: '45 miles',
      time: '1 hour',
      description: 'World-famous granite monolith and rock climbing mecca',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Half Dome',
      distance: '50 miles',
      time: '1 hour 10 min',
      description: 'Iconic granite dome and challenging hiking destination',
      image: 'https://images.unsplash.com/photo-1570798623326-c0a7db7f5c21?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Yosemite Falls',
      distance: '48 miles',
      time: '1 hour 5 min',
      description: 'North America\'s tallest waterfall at 2,425 feet',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Tunnel View',
      distance: '52 miles',
      time: '1 hour 15 min',
      description: 'Classic Yosemite Valley viewpoint for photography',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const tips = [
    'Start early to avoid crowds and secure parking',
    'Bring layers - mountain weather changes quickly',
    'Pack plenty of water and snacks for your adventures',
    'Check current trail conditions and closures',
    'Consider midweek visits for a more peaceful experience',
    'Don\'t forget your camera and extra batteries'
  ];

  return (
    <section id="yosemite" className="py-16 bg-gradient-to-br from-forest-green-800 to-forest-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Your Gateway to Yosemite
          </h2>
          <p className="font-inter text-xl opacity-90 max-w-3xl mx-auto">
            Perfectly positioned on Highway 120, Priest Station Cafe is your ideal basecamp 
            for exploring Yosemite National Park. Fuel up with our hearty mountain breakfast, 
            then venture into America's most iconic wilderness.
          </p>
        </div>

        {/* Distance Highlight */}
        <div className="bg-burnt-sienna-600 rounded-2xl p-8 text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-gold-300" />
            <span className="font-playfair text-3xl font-bold">Just 1 Hour Away</span>
          </div>
          <p className="font-inter text-lg opacity-90">
            From our historic cafe to El Capitan and Half Dome
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {attractions.map((attraction, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-white/20 overflow-hidden hover:bg-white/20 transition-all hover:scale-105">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-gold-500 text-forest-green-800 font-medium">
                    {attraction.time}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-playfair text-xl font-bold mb-2">
                  {attraction.name}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-gold-300" />
                  <span className="font-inter text-sm opacity-80">
                    {attraction.distance}
                  </span>
                </div>
                <p className="font-inter text-sm opacity-80">
                  {attraction.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-2 mb-6">
              <Mountain className="h-6 w-6 text-gold-300" />
              <h3 className="font-playfair text-2xl font-bold">
                Insider Tips
              </h3>
            </div>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gold-300 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="font-inter opacity-90">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-gold-300" />
              <h3 className="font-playfair text-2xl font-bold">
                Perfect Day Plan
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 text-forest-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="font-medium">6:30 AM - Hearty Breakfast</div>
                  <div className="text-sm opacity-80">Fuel up at Priest Station Cafe</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 text-forest-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="font-medium">8:00 AM - Hit the Road</div>
                  <div className="text-sm opacity-80">Scenic 1-hour drive to Yosemite</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 text-forest-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="font-medium">9:00 AM - Adventure Time</div>
                  <div className="text-sm opacity-80">Explore trails, climb, or photograph</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 text-forest-green-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <div className="font-medium">Evening - Return Home</div>
                  <div className="text-sm opacity-80">Relax on our historic redwood deck</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YosemiteSection;
