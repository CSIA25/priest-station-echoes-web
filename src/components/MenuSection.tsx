
import { useState } from 'react';
import { Coffee, Utensils, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MenuSection = () => {
  const menuCategories = {
    breakfast: {
      icon: Sun,
      title: 'Breakfast',
      subtitle: 'Hearty mountain mornings',
      items: [
        {
          name: 'Prospector\'s Pancakes',
          description: 'Three fluffy buttermilk pancakes with Sierra honey butter and real maple syrup',
          price: '$14',
          image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Gold Rush Breakfast',
          description: 'Two farm eggs, thick-cut bacon, breakfast potatoes, and sourdough toast',
          price: '$16',
          image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Mountain Man Omelet',
          description: 'Three-egg omelet with local cheese, bell peppers, onions, and mushrooms',
          price: '$15',
          image: 'https://images.unsplash.com/photo-1612240498936-c8371cc64de6?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Trail Mix French Toast',
          description: 'Thick brioche with cinnamon, toasted nuts, and fresh berries',
          price: '$13',
          image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=80'
        }
      ]
    },
    lunch: {
      icon: Utensils,
      title: 'Lunch',
      subtitle: 'Fuel for your adventure',
      items: [
        {
          name: 'Yosemite Burger',
          description: 'Grass-fed beef patty with aged cheddar, lettuce, tomato, and our secret sauce',
          price: '$18',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Sierra Club Sandwich',
          description: 'Turkey, avocado, bacon, and sprouts on fresh sourdough',
          price: '$16',
          image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Climber\'s Chili',
          description: 'Hearty beef and bean chili with cornbread and cheese',
          price: '$14',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Half Dome Salad',
          description: 'Mixed greens, grilled chicken, nuts, dried fruit, and balsamic vinaigrette',
          price: '$15',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80'
        }
      ]
    },
    coffee: {
      icon: Coffee,
      title: 'Coffee & Drinks',
      subtitle: 'Mountain-roasted perfection',
      items: [
        {
          name: 'Priest Station Blend',
          description: 'Our signature dark roast, smooth and bold like the Sierra peaks',
          price: '$4',
          image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'El Capitan Espresso',
          description: 'Double shot of locally roasted espresso, strong as granite',
          price: '$3',
          image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Mist Trail Mocha',
          description: 'Rich chocolate and espresso with whipped cream',
          price: '$6',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80'
        },
        {
          name: 'Gold Country Cold Brew',
          description: 'Smooth cold brew served over ice with a touch of cream',
          price: '$5',
          image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80'
        }
      ]
    }
  };

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green-800 mb-6">
            Mountain Comfort Food
          </h2>
          <p className="font-inter text-xl text-forest-green-700 max-w-3xl mx-auto">
            From hearty breakfast to trail-ready lunches, our menu celebrates Sierra Nevada flavors 
            with recipes passed down through six generations of mountain hospitality.
          </p>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-forest-green-100">
            {Object.entries(menuCategories).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="font-inter font-medium data-[state=active]:bg-burnt-sienna-600 data-[state=active]:text-white"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="text-center mb-8">
                <category.icon className="w-12 h-12 text-burnt-sienna-600 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-forest-green-800 mb-2">
                  {category.title}
                </h3>
                <p className="font-inter text-forest-green-600">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-forest-green-100">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-gold-500 text-white px-2 py-1 rounded-md font-bold">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-playfair text-lg font-semibold text-forest-green-800 mb-2">
                        {item.name}
                      </h4>
                      <p className="font-inter text-sm text-forest-green-600">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-burnt-sienna-600 hover:bg-burnt-sienna-700 text-white font-medium text-lg px-8 py-3"
            onClick={() => window.open('tel:+12093724959', '_self')}
          >
            Order Ahead - Call Now
          </Button>
          <p className="font-inter text-sm text-forest-green-600 mt-2">
            Open daily 6:00 AM - 3:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
