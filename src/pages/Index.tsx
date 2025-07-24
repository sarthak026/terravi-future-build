import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import MissionSection from '@/components/home/MissionSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import ImpactSection from '@/components/home/ImpactSection';
import FocusAreasSection from '@/components/home/FocusAreasSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WelcomeSection />
        <MissionSection />
        <GalleryPreview />
        <ImpactSection />
        <FocusAreasSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
