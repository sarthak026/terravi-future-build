import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
const HeroSection = () => {
  return <section className="nature-hero">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
            Rooted in Nature,
            <span className="block text-primary-foreground bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text">
              Growing Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-primary-foreground/95 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Where communities flourish through environmental stewardship, sustainable practices, 
            and the powerful connection between people and the earth we share.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in">
            <Button variant="hero" className="!bg-primary-foreground !text-primary hover:!bg-primary-foreground/90 !px-10 !py-5 !text-xl shadow-2xl">
              Join the Movement
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button variant="outline" className="!border-primary-foreground/30 !text-primary-foreground hover:!bg-primary-foreground/10 !px-8 !py-4 !text-lg">
              <Play className="mr-3 h-5 w-5" />
              See Our Journey
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[{
            number: '50,000+',
            label: 'Students Empowered'
          }, {
            number: '100+',
            label: 'Communities Served'
          }, {
            number: '20,000+',
            label: 'Trees Planted'
          }, {
            number: '150+',
            label: 'Women Empowered'
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;