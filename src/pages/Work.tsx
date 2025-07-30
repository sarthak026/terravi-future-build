import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Droplets, Zap, GraduationCap, TreePine, Waves, Recycle, Users, Target, Lightbulb } from 'lucide-react';

const Work = () => {
  const focusAreas = [
    {
      icon: Droplets,
      title: "Clean Water & Sanitation Revolution",
      challenge: "1.7 billion people worldwide lack access to clean and safe drinking water.",
      solution: "Our founder has developed affordable, easy-to-use water filtration devices specifically designed for rural households. Our filters selectively remove contaminants, including dissolved solids, biological contents, heavy metals, chemicals, and pesticides, while improving taste and odor.",
      impact: [
        "Distributed water filters across remote villages in INDIA, reducing waterborne diseases by 60%",
        "Trained local technicians to maintain and repair filtration systems, creating sustainable employment",
        "Established community water monitoring programs led by local women"
      ]
    },
    {
      icon: Zap,
      title: "Renewable Energy Innovation",
      challenge: "998 million tons of agricultural waste are produced annually worldwide, creating environmental, economic, and social consequences.",
      solution: "We transform agricultural waste like rice straw into valuable bioenergy sources, including bioethanol, biochemicals, and biogas through low-cost, environmentally sustainable processes.",
      impact: [
        "MULTIPLE rural communities now powered by renewable energy",
        "12% average increase in agricultural income for participating farmers",
        "250,000+ Pounds CO2 emissions prevented"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education & Empowerment Programs",
      challenge: "Education and empowerment are the foundation of sustainable development.",
      solution: "We provide communities with the knowledge, skills, and tools they need to understand and address environmental, social, and economic challenges.",
      impact: [
        "EcoEducators Initiative: Environmental education in schools",
        "Community Leadership Development: Training local environmental champions",
        "Women's Empowerment: Supporting women waste-pickers with skills and resources",
        "Youth Climate Champions: Engaging students across India"
      ]
    },
    {
      icon: TreePine,
      title: "Climate Action & Global Warming Mitigation",
      challenge: "Comprehensive approach to reducing greenhouse gas emissions through community action.",
      solution: "A comprehensive approach to reducing greenhouse gas emissions through community action, renewable energy adoption, and forest conservation.",
      impact: [
        "Carbon Footprint Reduction: Community-based programs reducing household emissions",
        "Renewable Energy Transition: Supporting communities in adopting clean energy",
        "Reforestation Projects: 5000+ trees planted in urban and rural areas",
        "Climate Education: Raising awareness about climate change impacts and solutions"
      ]
    },
    {
      icon: Waves,
      title: "Ocean & Marine Conservation",
      challenge: "Over 17 million metric tons of pollution enter oceans annually, with plastic being the most harmful pollutant.",
      solution: "Comprehensive marine conservation programs addressing pollution and community education.",
      impact: [
        "Plastic-Free Communities: Eliminating single-use plastics in target communities",
        "Coastal Cleanup Drives: Regular beach and waterway cleaning initiatives",
        "Marine Education Programs: Teaching coastal communities about ocean conservation",
        "Microplastics Research: Supporting studies on microplastic impact and solutions"
      ]
    },
    {
      icon: Recycle,
      title: "Circular Economy & Waste Management",
      challenge: "Creating zero waste communities where all materials are reused, recycled, or composted.",
      solution: "Our vision is zero waste communities where all materials are reused, recycled, or composted.",
      impact: [
        "Community Recycling Centers: Establishing local waste processing facilities",
        "Waste-to-Energy Projects: Converting organic waste into biogas",
        "Plastic Upcycling Workshops: Teaching communities to create useful products from waste",
        "E-Waste Management: Safe disposal and recycling of electronic waste"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Work & Focus Areas
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Driving sustainable development through innovative solutions across six key areas 
              that address the most pressing environmental and social challenges of our time.
            </p>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {focusAreas.map((area, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-card rounded-xl p-8 shadow-card h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <area.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{area.title}</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-primary">The Challenge</h3>
                          <p className="text-muted-foreground">{area.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-primary">Our Solution</h3>
                          <p className="text-muted-foreground">{area.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
                      <h3 className="font-semibold text-xl mb-6 text-primary flex items-center">
                        <Target className="mr-2 h-5 w-5" />
                        Impact Stories & Success Metrics
                      </h3>
                      <ul className="space-y-3">
                        {area.impact.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in creating sustainable solutions that address the most pressing challenges of our time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth">
                <Users className="mr-2 h-5 w-5 inline" />
                Volunteer With Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;