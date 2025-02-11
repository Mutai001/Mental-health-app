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
// import ProfilePage from './components/UserDash/Profile'; 

const App: React.FC = () => {
  return (
    <BrowserRouter>
     <div id="about">
     <Navbar />
     </div>
      <div id='herosection'>
        <HeroSection />
        </div>
      <div id='areaofexpertise'>
        <AreaOfExpertise />
        </div>
      <div className="casestudies">
      <CaseStudies />
      </div>
      <div id='testimonials'>
        <Testimonials />
        </div>
      <div id='specialists'>
        <Specialists />
        </div>
      <div id='mindtraining'>
        <Mindtraining />
        </div>
      <div id='footer'>
        <Footer />
        </div>
      {/* <div id='profile'>
        <ProfilePage />
        </div> */}
    </BrowserRouter>
  );
};

export default App;
