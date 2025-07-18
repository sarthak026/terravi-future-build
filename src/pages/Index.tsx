import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import ImpactSection from '@/components/home/ImpactSection';
import FocusAreasSection from '@/components/home/FocusAreasSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <MissionSection />
        <ImpactSection />
        <FocusAreasSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
