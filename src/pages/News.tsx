import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Download, ExternalLink } from 'lucide-react';

const News = () => {
  const recentNews = [
    {
      date: "December 2024",
      title: "TerraVi Wins National Recognition for Water Innovation",
      summary: "Our revolutionary water filtration system received the National Green Innovation Award, recognizing its impact on rural health and environmental protection.",
      category: "Awards",
      readTime: "3 min read"
    },
    {
      date: "November 2024",
      title: "50,000 Students Milestone Achieved",
      summary: "We're thrilled to announce that we've reached our goal of impacting 50,000 students through environmental education programs across 15 states.",
      category: "Education",
      readTime: "2 min read"
    },
    {
      date: "October 2024",
      title: "New Partnership with Agricultural Universities",
      summary: "Strategic partnerships have been established with 5 agricultural universities to expand our waste-to-energy programs and research initiatives.",
      category: "Partnerships",
      readTime: "4 min read"
    }
  ];

  const upcomingEvents = [
    {
      date: "January 2025",
      title: "Clean Water Summit Delhi",
      description: "Join 500+ stakeholders discussing innovative water solutions. Registration is open for community leaders, students, and professionals.",
      status: "Registration Open"
    },
    {
      date: "February 2025",
      title: "Green Energy Expo Mumbai",
      description: "Showcasing our latest renewable energy innovations alongside a demonstration of agricultural waste conversion technologies.",
      status: "Coming Soon"
    },
    {
      date: "March 2025",
      title: "Women in Sustainability Conference",
      description: "Celebrating women environmental leaders and launching new programs supporting women in green entrepreneurship.",
      status: "Save the Date"
    }
  ];

  const pressReleases = [
    {
      title: "TerraVi Partners with Government for Rural Electrification",
      description: "New collaboration will bring renewable energy to 200 additional villages, benefiting 50,000+ people with clean, affordable power.",
      date: "Dec 15, 2024"
    },
    {
      title: "International Expansion: TerraVi's Model Goes Global",
      description: "Our water filtration technology has been selected for implementation in Kenya and Bangladesh through UN development partnerships.",
      date: "Nov 28, 2024"
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
              News & Updates
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Stay informed about our latest achievements, upcoming events, and the impact 
              we're creating in communities across India and beyond.
            </p>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Recent News</h2>
              <p className="text-xl text-muted-foreground">
                Latest updates on our programs, achievements, and community impact
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {recentNews.map((news, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-smooth">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{news.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-smooth cursor-pointer">
                      {news.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {news.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {news.date}
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-smooth flex items-center">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground">
                Join us at conferences, workshops, and community gatherings
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-card">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {event.date}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.status === 'Registration Open' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth flex items-center">
                        Learn More <ExternalLink className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Press Releases</h2>
              <p className="text-xl text-muted-foreground">
                Official announcements and media updates from TerraVi
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 hover:text-primary transition-smooth cursor-pointer">
                        {release.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{release.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {release.date}
                      </div>
                    </div>
                    <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-smooth">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
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

export default News;