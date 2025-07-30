import React from 'react';
import { Heart, Users, Leaf } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Message */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Welcome to Our
              <span className="block text-primary">Green Community</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We believe in the power of community action to create lasting environmental change. 
              Through hands-on conservation, education, and sustainable practices, we're growing 
              a movement that heals both communities and our planet.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Community First",
                description: "Building strong, resilient communities through environmental stewardship and mutual support."
              },
              {
                icon: Leaf,
                title: "Nature Centered",
                description: "Every action we take puts the health of our ecosystems and biodiversity at the forefront."
              },
              {
                icon: Users,
                title: "Collaborative Impact",
                description: "Working together with local leaders, schools, and organizations to multiply our positive impact."
              }
            ].map((pillar, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-bounce"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                  <pillar.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '25,000+', label: 'Students Empowered' },
                { number: '100+', label: 'Communities Served' },
                { number: '5000+', label: 'Trees Planted' },
                { number: '150+', label: 'Women Empowered' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;