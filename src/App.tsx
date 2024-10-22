// src/App.tsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServiceCards />
      <Footer />
    </div>
  );
};

export default App;
