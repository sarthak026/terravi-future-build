import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Droplets, Zap, TreePine, Recycle, Heart, Users, Target } from 'lucide-react';

const Campaigns = () => {
  const activeCampaigns = [
    {
      id: 'onedropmatters',
      title: '#OneDropMatters',
      subtitle: 'Clean Water for Every Community',
      description: 'Providing access to clean, safe drinking water for rural communities across India through innovative filtration systems and community education.',
      icon: Droplets,
      goal: 1000000,
      raised: 750000,
      supporters: 2500,
      timeLeft: '45 days left',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'greenenergy',
      title: 'Green Energy Revolution',
      subtitle: 'Powering Communities with Renewable Energy',
      description: 'Installing solar panels and renewable energy systems in off-grid communities to provide sustainable, affordable electricity.',
      icon: Zap,
      goal: 500000,
      raised: 320000,
      supporters: 1800,
      timeLeft: '60 days left',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'treemission',
      title: '3 Million Tree Mission',
      subtitle: 'Reforesting India for Climate Action',
      description: 'Planting 3 million trees across degraded lands to combat climate change, restore ecosystems, and create sustainable livelihoods.',
      icon: TreePine,
      goal: 300000,
      raised: 180000,
      supporters: 5200,
      timeLeft: '90 days left',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'plasticfree',
      title: 'Plastic-Free India',
      subtitle: 'Zero Waste Communities Initiative',
      description: 'Creating plastic-free zones through community engagement, waste management education, and sustainable alternatives.',
      icon: Recycle,
      goal: 200000,
      raised: 95000,
      supporters: 1200,
      timeLeft: '75 days left',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const seasonalCampaigns = [
    {
      title: 'Monsoon Water Harvesting',
      period: 'June - September',
      description: 'Installing rainwater harvesting systems during monsoon season'
    },
    {
      title: 'Winter Health Drive',
      period: 'November - February',
      description: 'Providing healthcare and nutrition support during winter months'
    },
    {
      title: 'Summer Solar Initiative',
      period: 'March - May',
      description: 'Maximum solar panel installations during peak sunlight season'
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
              Our Campaigns
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Join our active campaigns and be part of the solution. Together, we can 
              create lasting change in communities around the world.
            </p>
          </div>
        </section>

        {/* Active Campaigns */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Active Campaigns</h2>
              <p className="text-xl text-muted-foreground">
                Support our ongoing initiatives making real impact today
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {activeCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-smooth">
                  <div className={`${campaign.bgColor} p-6`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4`}>
                        <campaign.icon className={`h-6 w-6 ${campaign.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{campaign.title}</h3>
                        <p className="text-gray-600 text-sm">{campaign.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">{campaign.description}</p>

                    {/* Action Button */}
                    <div className="flex justify-center">
                      <Button variant="outline" className="px-8">
                        <Users className="mr-2 h-4 w-4" />
                        Join Campaign
                      </Button>
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Start Your Own Campaign</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have an idea for a sustainability initiative? Partner with TerraVi 
                to launch your own campaign and create meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero">
                  Propose a Campaign
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Campaigns;