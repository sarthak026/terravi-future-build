import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Download, FileText, BookOpen, Users, ExternalLink } from 'lucide-react';

const Resources = () => {
  const educationalMaterials = [
    {
      title: "Climate Change Action Guide",
      description: "Practical steps for individuals and communities to take meaningful climate action",
      type: "PDF Guide",
      size: "2.5 MB"
    },
    {
      title: "Water Conservation Handbook",
      description: "Comprehensive guide to water-saving techniques for households and communities",
      type: "PDF Handbook",
      size: "3.2 MB"
    },
    {
      title: "Renewable Energy Basics",
      description: "Introduction to clean energy options for homes and small communities",
      type: "PDF Guide",
      size: "1.8 MB"
    },
    {
      title: "Waste Management Toolkit",
      description: "Step-by-step guide to implementing community recycling programs",
      type: "PDF Toolkit",
      size: "4.1 MB"
    }
  ];

  const researchReports = [
    {
      title: "Annual Impact Report 2024",
      description: "Comprehensive analysis of our environmental and social impact across all programs",
      type: "Annual Report",
      size: "8.5 MB",
      featured: true
    },
    {
      title: "Rural Renewable Energy Study",
      description: "Research findings on agricultural waste-to-energy potential in rural India",
      type: "Research Report",
      size: "5.3 MB"
    },
    {
      title: "Water Quality Assessment Report",
      description: "Analysis of water contamination issues in target regions and solutions implemented",
      type: "Research Report",
      size: "6.2 MB"
    },
    {
      title: "Community Resilience Index",
      description: "Measuring climate adaptation capacity in rural communities",
      type: "Research Study",
      size: "3.9 MB"
    }
  ];

  const volunteerResources = [
    {
      title: "Volunteer Handbook",
      description: "Complete guide for new volunteers including roles, responsibilities, and guidelines",
      type: "Handbook",
      size: "2.1 MB"
    },
    {
      title: "Training Materials",
      description: "Educational content and presentation materials for community workshops",
      type: "Training Pack",
      size: "15.2 MB"
    },
    {
      title: "Event Planning Kit",
      description: "Resources and templates for organizing environmental awareness events",
      type: "Planning Kit",
      size: "4.7 MB"
    },
    {
      title: "Digital Advocacy Guide",
      description: "Best practices for online environmental communication and social media engagement",
      type: "Digital Guide",
      size: "1.9 MB"
    }
  ];

  const ResourceCard = ({ resource, icon: Icon }) => (
    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-smooth">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {resource.featured && (
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
      <p className="text-muted-foreground mb-4">{resource.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <span className="block">{resource.type}</span>
          <span>{resource.size}</span>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-smooth flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Download
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Resources & Downloads
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Access our comprehensive collection of educational materials, research reports, 
              and resources to support your sustainability journey.
            </p>
          </div>
        </section>

        {/* Educational Materials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                <BookOpen className="h-10 w-10 mr-3 text-primary" />
                Educational Materials
              </h2>
              <p className="text-xl text-muted-foreground">
                Practical guides and resources for individuals and communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationalMaterials.map((resource, index) => (
                <ResourceCard key={index} resource={resource} icon={BookOpen} />
              ))}
            </div>
          </div>
        </section>

        {/* Research Reports */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                <FileText className="h-10 w-10 mr-3 text-primary" />
                Research Reports
              </h2>
              <p className="text-xl text-muted-foreground">
                In-depth studies and impact assessments from our programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchReports.map((resource, index) => (
                <ResourceCard key={index} resource={resource} icon={FileText} />
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 mr-3 text-primary" />
                Volunteer Resources
              </h2>
              <p className="text-xl text-muted-foreground">
                Tools and materials to support our volunteer community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {volunteerResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} icon={Users} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Quick Access</h2>
              <p className="text-xl text-muted-foreground">
                Frequently requested resources and important documents
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Annual Reports</h3>
                <p className="text-muted-foreground mb-4">
                  Access all our annual impact reports and transparency documents
                </p>
                <button className="text-primary hover:text-primary/80 transition-smooth flex items-center mx-auto">
                  View All Reports <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Educational Hub</h3>
                <p className="text-muted-foreground mb-4">
                  Complete collection of educational materials for schools and communities
                </p>
                <button className="text-primary hover:text-primary/80 transition-smooth flex items-center mx-auto">
                  Browse Resources <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Volunteer Portal</h3>
                <p className="text-muted-foreground mb-4">
                  Training materials and resources for our volunteer community
                </p>
                <button className="text-primary hover:text-primary/80 transition-smooth flex items-center mx-auto">
                  Access Portal <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need Something Specific?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you access 
              the resources you need for your sustainability initiatives.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-smooth">
              Contact Resource Team
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;