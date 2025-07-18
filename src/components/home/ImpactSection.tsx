import React from 'react';
import { Users, Zap, Trees, Trash2, Droplets, Award } from 'lucide-react';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Students Empowered',
      description: 'across 15+ states in India',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      number: '100+',
      label: 'Rural Communities',
      description: 'provided with renewable energy solutions',
      color: 'text-yellow-600'
    },
    {
      icon: Trees,
      number: '20,000+',
      label: 'Trees Planted',
      description: 'generating 2.5 million pounds of oxygen annually',
      color: 'text-green-600'
    },
    {
      icon: Droplets,
      number: '500,000+',
      label: 'Pounds of CO2',
      description: 'emissions prevented through initiatives',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      number: '150+',
      label: 'Women Waste-Pickers',
      description: 'empowered and supported',
      color: 'text-purple-600'
    },
    {
      icon: Trash2,
      number: '1,000+',
      label: 'Tons of Waste',
      description: 'recycled through community programs',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Impact at a Glance
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we're making a real difference in communities across India and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-lg transition-smooth hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-4`}>
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-card-foreground">
                    {stat.number}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Every number represents real lives touched and communities transformed
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 rounded-full">
            <span className="text-primary font-semibold">Join us in making an even bigger impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;