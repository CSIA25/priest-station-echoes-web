
import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Stay', href: '#cabins' },
    { name: 'Yosemite', href: '#yosemite' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className={`h-8 w-8 ${isScrolled ? 'text-burnt-sienna-600' : 'text-white'}`} />
            <span className={`font-playfair font-bold text-xl ${
              isScrolled ? 'text-burnt-sienna-600' : 'text-white'
            }`}>
              Priest Station Cafe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-inter font-medium transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-forest-green-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="bg-burnt-sienna-600 hover:bg-burnt-sienna-700 text-white font-medium px-6"
              onClick={() => window.open('tel:+12093724959', '_self')}
            >
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-burnt-sienna-600' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-forest-green-700 font-inter font-medium hover:text-burnt-sienna-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button 
                  className="w-full bg-burnt-sienna-600 hover:bg-burnt-sienna-700 text-white"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('tel:+12093724959', '_self');
                  }}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
