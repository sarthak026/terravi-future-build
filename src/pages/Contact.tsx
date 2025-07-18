import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, HelpCircle } from 'lucide-react';

const Contact = () => {
  const faqs = [
    {
      question: "How is TerraVi different from other environmental NGOs?",
      answer: "TerraVi focuses on science-based, community-driven solutions that address multiple SDGs simultaneously. Our integrated approach combines water access, renewable energy, education, and economic empowerment in a single program."
    },
    {
      question: "Are donations to TerraVi tax-deductible?",
      answer: "Yes, TerraVi is registered under Section 12A and 80G of the Income Tax Act. All donations are eligible for tax deductions."
    },
    {
      question: "How can I verify TerraVi's impact claims?",
      answer: "We publish detailed annual impact reports, maintain third-party audits, and provide transparent project updates. Visit our transparency portal for real-time project data."
    },
    {
      question: "Do I need prior experience to volunteer?",
      answer: "No prior experience necessary. We provide comprehensive training for all volunteer roles and match opportunities to your skills and interests."
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes! We offer remote opportunities in digital advocacy, research, content creation, and online education support."
    },
    {
      question: "How do you choose communities for your programs?",
      answer: "We use data-driven selection criteria, including need assessment, community readiness, local partnerships, and potential for sustainable impact."
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
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Ready to join our mission? Get in touch with us to learn more about 
              how you can make a difference.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What is this about?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="hero" className="w-full">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    We'd love to hear from you. Here's how you can reach our team.
                  </p>
                </div>

                {/* Headquarters */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Headquarters
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-medium">TerraVi Foundation</p>
                    <p>Green Tower, Sector 21</p>
                    <p>Gurugram, Haryana 122016</p>
                    <p>Phone: +91-124-TERRAVI</p>
                    <p>Email: info@terravi.org</p>
                  </div>
                </div>

                {/* Regional Offices */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-4">Regional Offices</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-medium">North India Hub</p>
                      <p className="text-sm">Delhi NCR Regional Office</p>
                      <p className="text-sm">Email: north@terravi.org</p>
                      <p className="text-sm">Phone: +91-11-TERRAVI</p>
                    </div>
                    <div>
                      <p className="font-medium">West India Hub</p>
                      <p className="text-sm">Mumbai Regional Office</p>
                      <p className="text-sm">Email: west@terravi.org</p>
                      <p className="text-sm">Phone: +91-22-TERRAVI</p>
                    </div>
                    <div>
                      <p className="font-medium">South India Hub</p>
                      <p className="text-sm">Bangalore Regional Office</p>
                      <p className="text-sm">Email: south@terravi.org</p>
                      <p className="text-sm">Phone: +91-80-TERRAVI</p>
                    </div>
                  </div>
                </div>

                {/* Specialized Contact */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-4">Specialized Contact</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div>
                      <p className="font-medium">Volunteer Coordination</p>
                      <p>volunteer@terravi.org | +91-124-VOLUNTEER</p>
                    </div>
                    <div>
                      <p className="font-medium">Media & Press</p>
                      <p>media@terravi.org | +91-124-MEDIA</p>
                    </div>
                    <div>
                      <p className="font-medium">Partnership Inquiries</p>
                      <p>partnerships@terravi.org | +91-124-PARTNER</p>
                    </div>
                    <div>
                      <p className="font-medium">Donor Relations</p>
                      <p>donors@terravi.org | +91-124-DONORS</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-600">Emergency Contact</p>
                      <p>emergency@terravi.org | +91-124-URGENT (24/7)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 gradient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <HelpCircle className="inline h-10 w-10 mr-2 text-primary" />
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about TerraVi
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have a different question? We're here to help!
              </p>
              <Button variant="outline">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;