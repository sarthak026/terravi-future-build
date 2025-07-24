import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: '/assets/clean-water.jpg',
      title: 'Clean Water Initiative',
      description: 'Bringing fresh water access to rural communities through sustainable well projects.',
      category: 'Water Conservation'
    },
    {
      id: 2,
      type: 'image',
      src: '/assets/education.jpg',
      title: 'Education for All',
      description: 'Empowering the next generation with quality education and learning resources.',
      category: 'Education'
    },
    {
      id: 3,
      type: 'image',
      src: '/assets/renewable-energy.jpg',
      title: 'Renewable Energy Projects',
      description: 'Solar panel installations bringing clean energy to underserved areas.',
      category: 'Clean Energy'
    },
    {
      id: 4,
      type: 'image',
      src: '/assets/hero-image.jpg',
      title: 'Community Gardens',
      description: 'Growing food security and environmental awareness in local communities.',
      category: 'Food Security'
    },
  ];

  const categories = ['All', 'Water Conservation', 'Education', 'Clean Energy', 'Food Security'];
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden shadow-card hover:shadow-hero transition-smooth">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
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
          <button className="hero-button">
            Get Involved Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;