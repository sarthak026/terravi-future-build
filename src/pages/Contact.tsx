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
      question: "How can I volunteer with TerraVi?",
      answer: "Visit our Get Involved page to explore various volunteer opportunities. We offer roles for different skills and time commitments."
    },
    {
      question: "Where do my donations go?",
      answer: "100% of donations go directly to our programs. We maintain complete transparency with annual reports showing exact fund allocation."
    },
    {
      question: "Do you operate internationally?",
      answer: "While we're based in India, we're expanding globally. We also partner with international organizations for broader impact."
    },
    {
      question: "How can schools partner with TerraVi?",
      answer: "We offer various school programs including sustainability education, student exchange, and project-based learning initiatives."
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
                    <p>123 Sustainability Street</p>
                    <p>New Delhi, India 110001</p>
                  </div>
                </div>

                {/* Regional Offices */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-4">Regional Offices</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-medium">Mumbai Office</p>
                      <p className="text-sm">456 Marine Drive, Mumbai 400001</p>
                    </div>
                    <div>
                      <p className="font-medium">Bangalore Office</p>
                      <p className="text-sm">789 MG Road, Bangalore 560001</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 11 2345 6789</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contact@terravi.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Monday - Friday: 9:00 AM - 6:00 PM IST</span>
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