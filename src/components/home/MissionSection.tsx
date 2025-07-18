import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-card-foreground leading-relaxed text-center mb-8">
              TerraVi is a pioneering NGO dedicated to driving sustainable development through 
              community-driven initiatives, innovative solutions, and global partnerships. 
              Inspired by the UN Sustainable Development Goals, we work tirelessly to build 
              a resilient, equitable society where every individual has access to clean water, 
              healthy food, and a safe environment.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Targeted Solutions
                </h3>
                <p className="text-muted-foreground text-sm">
                  Addressing specific community needs with precision and care
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Global Impact
                </h3>
                <p className="text-muted-foreground text-sm">
                  Creating ripple effects that reach communities worldwide
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Community First
                </h3>
                <p className="text-muted-foreground text-sm">
                  Putting local communities at the center of every initiative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;