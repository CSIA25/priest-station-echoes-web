
import { MapPin, Phone, Clock, Mail, Car } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(209) 372-4959',
      action: 'tel:+12093724959'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@prieststation.com',
      action: 'mailto:info@prieststation.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '9979 Highway 120, Groveland, CA 95321',
      action: 'https://maps.google.com/search/9979+Highway+120+Groveland+CA'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Daily 6:00 AM - 3:00 PM',
      subdetails: 'Cabins available 24/7'
    }
  ];

  const directions = [
    'From Modesto: Take Highway 120 East toward Yosemite (45 minutes)',
    'From Sacramento: Take Highway 120 East via Manteca (1.5 hours)',
    'From San Francisco: Take I-580 to Highway 120 East (2.5 hours)',
    'From Fresno: Take Highway 41 North to Highway 120 West (1.5 hours)'
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-forest-green-50 to-burnt-sienna-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green-800 mb-6">
            Find Us on the Mountain
          </h2>
          <p className="font-inter text-xl text-forest-green-700 max-w-3xl mx-auto">
            Located on Historic Highway 120, the original route to Yosemite National Park. 
            We've been welcoming travelers at this same spot for over 175 years.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center bg-white hover:shadow-lg transition-all hover:scale-105 border-forest-green-100">
              <info.icon className="h-8 w-8 text-burnt-sienna-600 mx-auto mb-4" />
              <h3 className="font-playfair text-lg font-semibold text-forest-green-800 mb-2">
                {info.title}
              </h3>
              {info.action ? (
                <a 
                  href={info.action}
                  className="font-inter text-forest-green-700 hover:text-burnt-sienna-600 transition-colors block"
                >
                  {info.details}
                </a>
              ) : (
                <div className="font-inter text-forest-green-700">
                  {info.details}
                </div>
              )}
              {info.subdetails && (
                <div className="font-inter text-sm text-forest-green-600 mt-1">
                  {info.subdetails}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Map and Directions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Map Placeholder */}
          <Card className="p-6 bg-white border-forest-green-100">
            <h3 className="font-playfair text-2xl font-bold text-forest-green-800 mb-4">
              Our Location
            </h3>
            <div className="aspect-video bg-forest-green-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-burnt-sienna-600 mx-auto mb-2" />
                <p className="font-inter text-forest-green-700">
                  Interactive map loading...
                </p>
                <Button 
                  variant="outline"
                  className="mt-2 border-burnt-sienna-600 text-burnt-sienna-600 hover:bg-burnt-sienna-600 hover:text-white"
                  onClick={() => window.open('https://maps.google.com/search/9979+Highway+120+Groveland+CA', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
            <p className="font-inter text-sm text-forest-green-600">
              Right on Highway 120 - look for our historic wooden sign and the famous redwood deck!
            </p>
          </Card>

          {/* Directions */}
          <Card className="p-6 bg-white border-forest-green-100">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-burnt-sienna-600" />
              <h3 className="font-playfair text-2xl font-bold text-forest-green-800">
                Driving Directions
              </h3>
            </div>
            <div className="space-y-3">
              {directions.map((direction, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="font-inter text-forest-green-700">
                    {direction}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gold-50 rounded-lg border border-gold-200">
              <p className="font-inter text-sm text-forest-green-700">
                <strong>Pro Tip:</strong> We're the perfect breakfast stop before entering Yosemite! 
                Fuel up with our hearty mountain fare, then continue just 1 hour to El Capitan and Half Dome.
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-burnt-sienna-600 to-burnt-sienna-700 rounded-2xl p-8 text-white">
          <h3 className="font-playfair text-3xl font-bold mb-4">
            Ready for Your Mountain Adventure?
          </h3>
          <p className="font-inter text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Whether you're planning a Yosemite expedition or just need a great meal on Highway 120, 
            we're here to welcome you with 175+ years of Sierra Nevada hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-burnt-sienna-600 hover:bg-gold-50 font-medium text-lg px-8 py-3"
              onClick={() => window.open('tel:+12093724959', '_self')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call for Reservations
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-burnt-sienna-600 font-medium text-lg px-8 py-3"
              onClick={() => window.open('https://maps.google.com/search/9979+Highway+120+Groveland+CA', '_blank')}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
