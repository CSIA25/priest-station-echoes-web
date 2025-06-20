
import { Clock, Users, Award, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const milestones = [
    { year: '1849', event: 'Margaret Kirkwood establishes Priest Station during Gold Rush' },
    { year: '1880s', event: 'Becomes essential stop for Sierra Nevada travelers' },
    { year: '1920s', event: 'Redwood deck construction - rare outdoor dining' },
    { year: '1960s', event: '4th generation modernizes while preserving heritage' },
    { year: '1990s', event: 'Cabin accommodations added for Yosemite visitors' },
    { year: 'Today', event: '6th generation continues 175+ year legacy' }
  ];

  const features = [
    {
      icon: Clock,
      title: '175+ Years',
      description: 'Continuous family operation since the California Gold Rush'
    },
    {
      icon: Users,
      title: '6 Generations',
      description: 'Passed down through generations of California pioneers'
    },
    {
      icon: Award,
      title: 'Historic Landmark',
      description: 'Authentic piece of Sierra Nevada and Yosemite history'
    },
    {
      icon: Heart,
      title: 'Family Values',
      description: 'Genuine hospitality rooted in mountain community spirit'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-forest-green-50 to-burnt-sienna-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green-800 mb-6">
            A Legacy Born in the Gold Rush
          </h2>
          <p className="font-inter text-xl text-forest-green-700 max-w-3xl mx-auto leading-relaxed">
            Founded by Margaret Kirkwood in 1849, Priest Station Cafe has been welcoming travelers 
            to the Sierra Nevada for over 175 years. From gold rush pioneers to modern Yosemite adventurers, 
            our story is woven into the fabric of California's mountain heritage.
          </p>
        </div>

        {/* Margaret's Quote */}
        <div className="bg-white/80 rounded-2xl p-8 mb-16 shadow-lg border border-gold-200">
          <blockquote className="text-center">
            <p className="font-playfair text-2xl md:text-3xl italic text-burnt-sienna-700 mb-4">
              "Every traveler deserves a warm meal, a kind word, and a safe place to rest 
              their weary bones in these mighty mountains."
            </p>
            <footer className="font-inter text-forest-green-600 font-medium">
              — Margaret Kirkwood, Founder (1849)
            </footer>
          </blockquote>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-white/90 hover:bg-white transition-all hover:shadow-lg hover:scale-105 border-forest-green-100">
              <feature.icon className="h-12 w-12 text-burnt-sienna-600 mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-forest-green-800 mb-2">
                {feature.title}
              </h3>
              <p className="font-inter text-forest-green-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white/90 rounded-2xl p-8 shadow-lg">
          <h3 className="font-playfair text-3xl font-bold text-center text-forest-green-800 mb-8">
            Our Historic Journey
          </h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold font-playfair group-hover:bg-burnt-sienna-600 transition-colors">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-grow pt-2">
                  <div className="font-playfair text-lg font-semibold text-burnt-sienna-700">
                    {milestone.year}
                  </div>
                  <div className="font-inter text-forest-green-700">
                    {milestone.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
