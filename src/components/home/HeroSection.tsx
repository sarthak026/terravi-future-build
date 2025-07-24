import React from 'react';
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/938d7ae2-dd33-4978-bfad-1b1bf41b8e58.png"
          alt="Community member planting in nature"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Rooted in Nature.
            <span className="block text-white">
              United for Change.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Join us in building a greener, more sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in">
            <button 
              className="bg-white text-primary hover:bg-white/90 px-10 py-5 text-xl font-semibold rounded-lg shadow-2xl transition-all hover:scale-105"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore More
              <span className="ml-3">→</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[{
              number: '50,000+',
              label: 'Students Empowered'
            }, {
              number: '100+',
              label: 'Communities Served'
            }, {
              number: '20,000+',
              label: 'Trees Planted'
            }, {
              number: '150+',
              label: 'Women Empowered'
            }].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;