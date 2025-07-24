import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About TerraVi
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Pioneering sustainable development through community-driven initiatives, 
              innovative solutions, and global partnerships since our founding.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <img 
                    src="/lovable-uploads/d43f398d-55d0-4ce7-8272-7fa5fa166c01.png" 
                    alt="Young environmental steward with arms outstretched in nature"
                    className="w-full h-96 object-cover rounded-2xl shadow-gallery"
                  />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Founded as a response to India's urgent need for sustainable development solutions, 
                    TerraVi emerged from the recognition that environmental challenges require community-
                    centered approaches. We believe that lasting change happens when local communities are 
                    empowered with the tools, knowledge, and resources they need to create their sustainable 
                    future.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through hands-on engagement with nature and community-driven initiatives, we're building 
                    a movement that connects people to the earth and to each other, fostering both 
                    environmental stewardship and social resilience.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <img 
                    src="/lovable-uploads/d4d520e1-e736-4380-a26e-00d133eb6b74.png" 
                    alt="Community member planting and nurturing young plants"
                    className="w-full h-96 object-cover rounded-2xl shadow-gallery"
                  />
                </div>
                <div className="md:order-1">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our approach is rooted in the understanding that environmental restoration and community 
                    empowerment go hand in hand. Every tree planted, every skill shared, and every life touched 
                    contributes to a larger tapestry of positive change that extends far beyond individual actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To create a world where every individual has access to clean water, healthy food, 
                  and a safe environment, while ensuring the preservation of natural ecosystems for 
                  future generations.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To promote sustainable development through community-driven initiatives, 
                  innovative solutions, and global partnerships, building a resilient and 
                  equitable society where people and planet thrive together.
                </p>
              </div>

              {/* Values */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Core Values</h3>
                <ul className="text-muted-foreground text-left space-y-2">
                  <li>• Community First: We believe in grassroots solutions that empower local communities</li>
                  <li>• Innovation for Impact: We harness science-based technologies for maximum positive impact</li>
                  <li>• Collaboration: We work with governments, civil society, the private sector, and communities</li>
                  <li>• Transparency: We maintain open communication about our impact and challenges</li>
                  <li>• Sustainability: Every solution we implement considers long-term environmental and social impact</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Placeholder */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground">
                Meet the passionate leaders driving our mission forward
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl p-8 shadow-card text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Leadership Profile</h3>
                  <p className="text-primary font-medium mb-2">Executive Position</p>
                  <p className="text-muted-foreground text-sm">
                    Profile details will be updated soon.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;