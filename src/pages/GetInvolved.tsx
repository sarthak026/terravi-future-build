import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Wrench, 
  TreePine, 
  Smartphone, 
  Heart, 
  Zap, 
  GraduationCap, 
  Building2,
  School,
  Handshake 
} from 'lucide-react';

const GetInvolved = () => {
  const volunteerRoles = [
    {
      title: 'Community Educator',
      icon: Users,
      requirements: ['Bachelor\'s degree', 'Communication skills', 'Passion for sustainability'],
      benefits: ['Travel opportunities', 'Skill development', 'Certificate of recognition'],
      commitment: '10-15 hours/week',
      location: 'Field-based'
    },
    {
      title: 'Water Filter Technician',
      icon: Wrench,
      requirements: ['Technical background', 'Problem-solving skills', 'Physical fitness'],
      benefits: ['Technical training', 'Equipment certification', 'Direct impact visibility'],
      commitment: '8-12 hours/week',
      location: 'Rural communities'
    },
    {
      title: 'Tree Plantation Coordinator',
      icon: TreePine,
      requirements: ['Environmental awareness', 'Leadership skills', 'Team coordination'],
      benefits: ['Environmental education', 'Leadership development', 'Network building'],
      commitment: '6-10 hours/week',
      location: 'Various sites'
    },
    {
      title: 'Digital Advocate',
      icon: Smartphone,
      requirements: ['Social media expertise', 'Content creation', 'Digital marketing'],
      benefits: ['Portfolio building', 'Digital skills', 'Remote flexibility'],
      commitment: '5-8 hours/week',
      location: 'Remote'
    }
  ];

  const donationPrograms = [
    {
      title: 'Water for All',
      icon: Heart,
      amounts: [500, 1000, 2500, 5000],
      impact: {
        500: 'Provides clean water for 1 family for 1 month',
        1000: 'Installs 1 water filter system',
        2500: 'Supports water access for 1 village for 1 month',
        5000: 'Funds complete water system for small community'
      },
      color: 'text-blue-600'
    },
    {
      title: 'Clean Energy Champion',
      icon: Zap,
      amounts: [1000, 2500, 5000, 10000],
      impact: {
        1000: 'Solar lights for 5 households',
        2500: 'Solar panel for 1 household',
        5000: 'Community solar charging station',
        10000: 'Complete microgrid for village center'
      },
      color: 'text-yellow-600'
    },
    {
      title: 'Green Education Sponsor',
      icon: GraduationCap,
      amounts: [750, 1500, 3000, 6000],
      impact: {
        750: 'Educational materials for 10 students',
        1500: 'Digital learning tablet for classroom',
        3000: 'Sustainability curriculum for 1 school',
        6000: 'Complete education program for 50 students'
      },
      color: 'text-green-600'
    },
    {
      title: 'Tree Adoption Program',
      icon: TreePine,
      amounts: [100, 500, 1000, 2500],
      impact: {
        100: 'Plants and maintains 1 tree for 1 year',
        500: 'Creates mini forest of 10 trees',
        1000: 'Establishes community orchard',
        2500: 'Funds forest restoration of 1 acre'
      },
      color: 'text-green-700'
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
              Get Involved
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Be the change you want to see. Join our community of changemakers 
              and help build a sustainable future for all.
            </p>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Volunteer Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                Find the perfect role that matches your skills and passion
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {volunteerRoles.map((role, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-lg transition-smooth">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <role.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary">{role.commitment}</Badge>
                        <Badge variant="outline">{role.location}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {role.requirements.map((req, i) => (
                          <li key={i}>• {req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {role.benefits.map((benefit, i) => (
                          <li key={i}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full">
                    Apply for This Role
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Programs */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Donation Programs</h2>
              <p className="text-xl text-muted-foreground">
                Choose how you want to make an impact with transparent, targeted giving
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {donationPrograms.map((program, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-card">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <program.icon className={`h-7 w-7 ${program.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{program.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {program.amounts.map((amount) => (
                      <div key={amount} className="border rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-smooth cursor-pointer">
                        <div className="text-lg font-bold text-center mb-2">₹{amount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground text-center">
                          {program.impact[amount]}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Partnership Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                Collaborate with us to amplify your impact and reach
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Corporate Partnerships */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Corporate Partnerships</h3>
                <p className="text-muted-foreground mb-6">
                  Align your CSR goals with our mission. Custom partnership packages available 
                  for employee engagement and brand impact.
                </p>
                <Button variant="outline" className="w-full">
                  <Handshake className="mr-2 h-4 w-4" />
                  Partner With Us
                </Button>
              </div>

              {/* School Programs */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <School className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">School & University Programs</h3>
                <p className="text-muted-foreground mb-6">
                  Integrate sustainability education into your curriculum. Student exchange 
                  and research collaboration opportunities.
                </p>
                <Button variant="outline" className="w-full">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Join Program
                </Button>
              </div>

              {/* Government Collaboration */}
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Government Collaboration</h3>
                <p className="text-muted-foreground mb-6">
                  Policy advocacy and implementation support. Joint initiatives for 
                  large-scale sustainable development projects.
                </p>
                <Button variant="outline" className="w-full">
                  <Handshake className="mr-2 h-4 w-4" />
                  Collaborate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Every action counts. Whether you volunteer your time, donate resources, 
              or partner with us, you're helping build a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="px-8 py-3">
                Start Volunteering Today
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3">
                Make a Donation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;