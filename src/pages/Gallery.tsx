import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: '/lovable-uploads/16308e3f-b473-4bdd-b84f-7fda012bd781.png',
      title: 'Growing in Harmony',
      description: 'Young environmental stewards connecting with nature through hands-on learning in natural grasslands.',
      category: 'Community'
    },
    {
      id: 2,
      type: 'image',
      src: '/lovable-uploads/5141d097-3c80-4807-91fa-861ebd4ef802.png',
      title: 'Next Generation Leaders',
      description: 'Empowering youth to become environmental ambassadors and champions of sustainable practices.',
      category: 'Education'
    },
    {
      id: 3,
      type: 'image',
      src: '/lovable-uploads/68096ca5-43c7-417a-b5b0-fbf272367887.png',
      title: 'Planting Tomorrow',
      description: 'Community members nurturing young saplings that will grow into forests for future generations.',
      category: 'Nature'
    },
    {
      id: 4,
      type: 'image',
      src: '/lovable-uploads/f7e90635-864f-4cf8-be38-4a350cd4dfeb.png',
      title: 'Hands in the Earth',
      description: 'Direct engagement with nature through tree planting and soil conservation initiatives.',
      category: 'Nature'
    },
    {
      id: 5,
      type: 'image',
      src: '/lovable-uploads/74f04444-6f36-419e-b130-9f016c167dc1.png',
      title: 'Forest Restoration',
      description: 'Dedicated volunteers working to restore damaged ecosystems through careful reforestation efforts.',
      category: 'Nature'
    },
    {
      id: 6,
      type: 'image',
      src: '/lovable-uploads/c9022949-a593-4782-b685-b1db09e7c105.png',
      title: 'Community Champions',
      description: 'Local heroes leading environmental change with joy, dedication, and unwavering commitment.',
      category: 'Community'
    },
    {
      id: 7,
      type: 'image',
      src: '/lovable-uploads/2609eeba-c90c-487e-81c5-162503a37f42.png',
      title: 'Sustainable Futures',
      description: 'Building green infrastructure and sustainable practices for resilient communities.',
      category: 'Community'
    },
    {
      id: 8,
      type: 'image',
      src: '/lovable-uploads/38212533-3173-4c45-b810-c868d8e90f19.png',
      title: 'Research & Innovation',
      description: 'Conducting vital research to understand and protect natural ecosystems.',
      category: 'Research'
    },
    {
      id: 9,
      type: 'image',
      src: '/lovable-uploads/d43f398d-55d0-4ce7-8272-7fa5fa166c01.png',
      title: 'Embracing Nature',
      description: 'Young environmental advocate connecting with the natural world and sharing the joy of sustainability.',
      category: 'Community'
    },
    {
      id: 10,
      type: 'image',
      src: '/lovable-uploads/d4d520e1-e736-4380-a26e-00d133eb6b74.png',
      title: 'Hands-On Conservation',
      description: 'Community member actively participating in tree planting and environmental restoration efforts.',
      category: 'Nature'
    },
  ];

  const categories = ['All', 'Community', 'Education', 'Nature', 'Research'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Impact in Action
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the stories, moments, and communities that drive our mission forward. 
              Every image tells a story of hope, growth, and positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-smooth transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs font-medium bg-primary/90 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us in creating more moments of impact. Every contribution helps us grow stronger communities and a healthier planet.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;