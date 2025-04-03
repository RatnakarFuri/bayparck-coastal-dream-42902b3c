
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import OverviewSection from '@/components/home/OverviewSection';
import FeatureSection from '@/components/home/FeatureSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <OverviewSection />
      <FeatureSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
