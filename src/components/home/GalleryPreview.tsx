import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const previewImages = [
    {
      src: '/lovable-uploads/16308e3f-b473-4bdd-b84f-7fda012bd781.png',
      title: 'Growing in Harmony'
    },
    {
      src: '/lovable-uploads/5141d097-3c80-4807-91fa-861ebd4ef802.png',
      title: 'Next Generation Leaders'
    },
    {
      src: '/lovable-uploads/68096ca5-43c7-417a-b5b0-fbf272367887.png',
      title: 'Planting Tomorrow'
    },
    {
      src: '/lovable-uploads/c9022949-a593-4782-b685-b1db09e7c105.png',
      title: 'Community Champions'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-primary mr-3" />
              <span className="text-lg font-medium text-primary">Our Story in Pictures</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Moments of Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every photograph tells a story of growth, community, and positive change. 
              Discover the faces and places that make our mission come alive.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {previewImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-gallery hover:shadow-hero transition-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-smooth transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/gallery">
              <Button 
                variant="hero" 
                className="!bg-primary !text-primary-foreground hover:!bg-primary/90 !px-8 !py-4 !text-lg shadow-hero group"
              >
                See Full Gallery
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <p className="text-muted-foreground mt-4">
              Explore all our community stories, events, and environmental initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;