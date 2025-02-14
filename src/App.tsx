import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/landingpage/Navbar';
import HeroSection from './components/pages/landingpage/HeroSection';
import AreaOfExpertise from './components/pages/landingpage/AreaOfExpertise';
import CaseStudies from './components/pages/landingpage/CaseStudies';
import Testimonials from './components/pages/landingpage/Testimonials';
import Specialists from './components/pages/landingpage/Specialists';
import Mindtraining from './components/pages/landingpage/Mindtraining';
import Footer from './components/pages/landingpage/Footer';
import NotFoundPage from './components/notfound/NotFoundPage';
import RegistrationPage from './components/Auth/RegistrationPage';
import LoginPage from './components/Auth/LoginPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Landing Page with all sections */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <HeroSection />
              </div>
              <div id="services">
                <AreaOfExpertise />
              </div>
              <div id="casestudies">
                <CaseStudies />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
              <div id="team">
                <Specialists />
              </div>
              <div id="mindtraining">
                <Mindtraining />
              </div>
              <Footer />
            </>
          }
        />
        {/* Authentication Routes */}
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Catch-All Route */}
        <Route path="*" element={<NotFoundPage />} />
        {/* route component */}
        <Route path='/areaofexpertise' element={<AreaOfExpertise />} />
        <Route path='/casestudies' element={<CaseStudies />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/mindtraining' element={<Mindtraining />} />
        <Route path='/footer' element={<Footer />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
