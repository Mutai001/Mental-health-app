// import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AreaOfExpertise from './components/AreaOfExpertise';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Specialists from './components/Specialists';
import Mindtraining from './components/Mindtraining';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Header /> */}
        <Navbar />
        <HeroSection />
        <AreaOfExpertise />
        <CaseStudies />
        <Testimonials />
        <Specialists />
        <Mindtraining />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
