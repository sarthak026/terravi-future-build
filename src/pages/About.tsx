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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  TerraVi was born from a simple yet powerful belief: that sustainable development 
                  is not just an aspiration, but an achievable reality when communities, innovation, 
                  and dedicated action come together. Founded by a group of passionate changemakers, 
                  our organization emerged from the recognition that the world's most pressing challenges 
                  require localized solutions with global impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our journey began in rural communities across India, where we witnessed firsthand 
                  the transformative power of clean water access, renewable energy, and education. 
                  What started as small-scale interventions has grown into a comprehensive approach 
                  to sustainable development, touching thousands of lives and inspiring countless others 
                  to join our mission.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, TerraVi stands as a beacon of hope and practical action, proving that with 
                  the right approach, we can indeed build tomorrow's world today.
                </p>
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
                  A world where every community has access to clean water, sustainable energy, 
                  quality education, and a healthy environment, creating a future where people 
                  and planet thrive in harmony.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To drive sustainable development through community-driven initiatives, 
                  innovative solutions, and global partnerships, inspired by the UN 
                  Sustainable Development Goals.
                </p>
              </div>

              {/* Values */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="text-muted-foreground text-left space-y-2">
                  <li>• Community-first approach</li>
                  <li>• Transparency & accountability</li>
                  <li>• Innovation & sustainability</li>
                  <li>• Inclusivity & equity</li>
                  <li>• Collaboration & partnership</li>
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