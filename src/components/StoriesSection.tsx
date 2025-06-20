
import { Instagram, Heart, MessageCircle, Share } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const StoriesSection = () => {
  const stories = [
    {
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      caption: 'Early morning mist over the Sierra Nevada, as seen from our redwood deck ☕🏔️',
      likes: 234,
      comments: 18,
      time: '2 hours ago'
    },
    {
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
      caption: 'The Yosemite Burger - fueling adventures since 1849 🍔⛰️ #YosemiteBound',
      likes: 189,
      comments: 12,
      time: '5 hours ago'
    },
    {
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=600&q=80',
      caption: 'Our four-legged friends enjoying the mountain air 🦌 Wildlife visits daily!',
      likes: 456,
      comments: 31,
      time: '1 day ago'
    },
    {
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
      caption: 'Prospector\'s Pancakes with Sierra honey butter - a 175-year-old recipe 🥞✨',
      likes: 312,
      comments: 24,
      time: '2 days ago'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80',
      caption: 'Highway 120 views that make the journey as beautiful as the destination 🛣️🏔️',
      likes: 278,
      comments: 15,
      time: '3 days ago'
    },
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
      caption: 'Sunset dinner on our historic redwood deck - pure mountain magic 🌅',
      likes: 521,
      comments: 42,
      time: '4 days ago'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="h-8 w-8 text-burnt-sienna-600" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-green-800">
              Stories from the Road
            </h2>
          </div>
          <p className="font-inter text-xl text-forest-green-700 max-w-3xl mx-auto">
            Follow our mountain adventures and see what travelers are sharing from their Priest Station experience. 
            Every day brings new stories of Sierra Nevada hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-forest-green-100">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={story.image}
                  alt="Instagram story"
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-burnt-sienna-500 to-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PS</span>
                  </div>
                  <div>
                    <div className="font-inter font-medium text-forest-green-800">prieststationcafe</div>
                    <div className="font-inter text-xs text-forest-green-600">{story.time}</div>
                  </div>
                </div>
                
                <p className="font-inter text-sm text-forest-green-700 mb-3">
                  {story.caption}
                </p>
                
                <div className="flex items-center justify-between text-forest-green-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{story.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{story.comments}</span>
                    </div>
                  </div>
                  <Share className="h-4 w-4 cursor-pointer hover:text-burnt-sienna-600 transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-burnt-sienna-600 to-gold-600 hover:from-burnt-sienna-700 hover:to-gold-700 text-white font-medium text-lg px-8 py-3"
            onClick={() => window.open('https://instagram.com/prieststationcafe', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow Our Journey
          </Button>
          <p className="font-inter text-sm text-forest-green-600 mt-2">
            @prieststationcafe - Share your visit with #PriestStationCafe
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
