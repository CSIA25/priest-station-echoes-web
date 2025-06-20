
import { Mountain, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-gold-400" />
              <span className="font-playfair font-bold text-2xl">
                Priest Station Cafe
              </span>
            </div>
            <p className="font-inter text-forest-green-200 mb-4 max-w-md">
              175+ years of California hospitality on Historic Highway 120. 
              Your gateway to Yosemite National Park and Sierra Nevada adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-green-200 hover:text-gold-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-forest-green-200 hover:text-gold-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#about" className="text-forest-green-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-forest-green-200 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#cabins" className="text-forest-green-200 hover:text-white transition-colors">Cabin Stays</a></li>
              <li><a href="#yosemite" className="text-forest-green-200 hover:text-white transition-colors">Yosemite Guide</a></li>
              <li><a href="#contact" className="text-forest-green-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-gold-400">
              Visit Us
            </h3>
            <div className="space-y-2 font-inter text-forest-green-200">
              <p>9979 Highway 120</p>
              <p>Groveland, CA 95321</p>
              <p className="pt-2">
                <a href="tel:+12093724959" className="hover:text-white transition-colors">
                  (209) 372-4959
                </a>
              </p>
              <p>Daily 6:00 AM - 3:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-green-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-inter text-forest-green-200 text-sm mb-4 md:mb-0">
            © 2024 Priest Station Cafe. 6th generation family business since 1849.
          </div>
          <div className="flex items-center space-x-1 font-inter text-forest-green-200 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-burnt-sienna-400" />
            <span>in the Sierra Nevada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
