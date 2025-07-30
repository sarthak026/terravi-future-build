import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Blogs
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Discover insights, stories, and perspectives on sustainability, 
              environmental action, and community impact.
            </p>
          </div>
        </section>

        {/* Blog Entries Placeholder */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Latest Blog Posts</h2>
              <p className="text-xl text-muted-foreground">
                Coming soon - inspiring stories and insights from our community
              </p>
            </div>

            {/* Placeholder for 10 blog entries */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                  <div className="bg-muted rounded-lg h-48 mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Blog Post {index + 1}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-muted rounded h-4 w-3/4"></div>
                    <div className="bg-muted rounded h-3 w-full"></div>
                    <div className="bg-muted rounded h-3 w-2/3"></div>
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

export default Blogs;