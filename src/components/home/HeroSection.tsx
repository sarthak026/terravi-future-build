import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/eccca76f-66f1-476c-89e4-1a31a41e6ff8.png" alt="Ocean waves representing TerraVi's water conservation mission" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40 bg-lime-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Tomorrow's 
            <span className="block gradient-text bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-zinc-50">
              World Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Join TerraVi in creating a sustainable, equitable future where people and planet 
            thrive together through innovative solutions and community action.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" className="!bg-primary-foreground !text-primary hover:!bg-primary-foreground/90">
              Start Your Impact Journey
              <ArrowRight className="ml-2 h-5 w-5" />
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