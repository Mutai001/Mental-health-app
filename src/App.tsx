// App.tsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AreaOfExpertise from './components/AreaOfExpertise';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AreaOfExpertise />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default App;
