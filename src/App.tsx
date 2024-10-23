// App.tsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AreaOfExpertise from './components/AreaOfExpertise';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Specialists from './components/Specialists';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AreaOfExpertise />
      <CaseStudies />
      <Testimonials />
      <Specialists />
      <Footer />
    </div>
  );
};

export default App;
