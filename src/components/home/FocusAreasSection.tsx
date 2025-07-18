import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Droplets, Zap, GraduationCap, Leaf, Waves, Recycle } from 'lucide-react';
import cleanWaterImg from '@/assets/clean-water.jpg';
import renewableEnergyImg from '@/assets/renewable-energy.jpg';
import educationImg from '@/assets/education.jpg';

const FocusAreasSection = () => {
  const focusAreas = [
    {
      icon: Droplets,
      title: 'Clean Water & Sanitation Revolution',
      challenge: 'Over 2 billion people lack access to safely managed drinking water at home.',
      solution: 'Installing community water filtration systems and promoting hygiene education.',
      image: cleanWaterImg,
      metrics: '50+ water projects completed'
    },
    {
      icon: Zap,
      title: 'Renewable Energy Innovation',
      challenge: 'Rural communities often lack reliable access to clean, affordable energy.',
      solution: 'Solar panel installations and renewable energy education programs.',
      image: renewableEnergyImg,
      metrics: '100+ communities powered'
    },
    {
      icon: GraduationCap,
      title: 'Education & Empowerment Programs',
      challenge: 'Educational inequality limits opportunities for sustainable development.',
      solution: 'Digital learning platforms and sustainability-focused curriculum development.',
      image: educationImg,
      metrics: '50,000+ students reached'
    },
    {
      icon: Leaf,
      title: 'Climate Action & Global Warming Mitigation',
      challenge: 'Climate change threatens communities and ecosystems worldwide.',
      solution: 'Tree plantation drives, carbon offset programs, and climate awareness campaigns.',
      image: cleanWaterImg,
      metrics: '20,000+ trees planted'
    },
    {
      icon: Waves,
      title: 'Ocean & Marine Conservation',
      challenge: 'Marine ecosystems face threats from pollution and overfishing.',
      solution: 'Coastal cleanup initiatives and sustainable fishing practices education.',
      image: renewableEnergyImg,
      metrics: '25+ coastal cleanups'
    },
    {
      icon: Recycle,
      title: 'Circular Economy & Waste Management',
      challenge: 'Improper waste disposal creates environmental and health hazards.',
      solution: 'Community recycling programs and waste-to-energy initiatives.',
      image: educationImg,
      metrics: '1,000+ tons recycled'
    }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Focus Areas
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six key areas where we're driving sustainable change and creating lasting impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-smooth hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {area.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{area.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-600 mb-1">Our Solution:</h4>
                      <p className="text-sm text-muted-foreground">{area.solution}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-primary">
                      {area.metrics}
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="hero">
            <Link to="/work">
              Explore All Our Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;