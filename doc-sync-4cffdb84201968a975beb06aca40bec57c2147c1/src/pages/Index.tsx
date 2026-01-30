import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ChiSonoSection from '@/components/sections/ChiSonoSection';
import TraguardiSection from '@/components/sections/TraguardiSection';
import ProgettiSection from '@/components/sections/ProgettiSection';
import SalaStampaSection from '@/components/sections/SalaStampaSection';
import LibroSection from '@/components/sections/LibroSection';
import ServizioCivileSection from '@/components/sections/ServizioCivileSection';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <ChiSonoSection />
        <TraguardiSection />
        <ProgettiSection />
        <SalaStampaSection />
        <LibroSection />
        <ServizioCivileSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
