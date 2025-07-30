import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Leaf, Users, DollarSign, Award, TreePine, Droplets, Zap, GraduationCap, Recycle } from 'lucide-react';

const Impact = () => {
  const environmentalImpact = [
    { metric: "250,000+", label: "Pounds CO2 emissions prevented", icon: Leaf },
    { metric: "5,000+", label: "Trees planted", icon: TreePine },
    { metric: "500+", label: "tons of waste recycled through community programs", icon: Recycle },
  ];

  const socialImpact = [
    { metric: "25,000+", label: "Students reached through education", icon: GraduationCap },
    { metric: "150+", label: "Women waste-pickers empowered", icon: Users },
    { metric: "60%", label: "Reduction in waterborne diseases", icon: Droplets },
  ];

  const economicImpact = [
    { metric: "₹2.5 crores", label: "Additional farmer income", icon: DollarSign },
    { metric: "₹5 crores", label: "Saved through renewable energy", icon: DollarSign },
    { metric: "₹10 crores", label: "Invested in rural communities", icon: DollarSign },
    { metric: "1,000+", label: "People trained in green skills", icon: GraduationCap },
  ];

  const awards = [
    {
      year: "2024",
      title: "UN SDG Action Award",
      description: "Outstanding contribution to SDG 6 (Clean Water)",
      icon: Award
    },
    {
      year: "2023",
      title: "National Green Innovation Award",
      description: "Renewable energy solutions",
      icon: Award
    },
    {
      year: "2023",
      title: "Community Impact Recognition",
      description: "Ministry of Rural Development",
      icon: Award
    },
    {
      year: "2022",
      title: "Youth Engagement Excellence",
      description: "National Youth Policy Framework",
      icon: Award
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
              Impact & Achievements
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Measuring our success through meaningful environmental, social, and economic impact 
              across communities in India and beyond.
            </p>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Environmental Impact</h2>
              <p className="text-xl text-muted-foreground">
                Creating positive change for our planet's health and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {environmentalImpact.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Impact */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Social Impact</h2>
              <p className="text-xl text-muted-foreground">
                Empowering communities and improving lives across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {socialImpact.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Recognition & Awards */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Recognition & Awards</h2>
              <p className="text-xl text-muted-foreground">
                Acknowledged for our outstanding contributions to sustainable development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {awards.map((award, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <award.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-primary font-semibold mb-1">{award.year}</div>
                      <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Impact Story</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of supporters who are helping us create measurable, lasting change 
              in communities across India and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth">
                Support Our Mission
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;