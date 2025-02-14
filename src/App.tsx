import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import Header from './components/Header';
import Navbar from './components/pages/landingpage/Navbar';
import HeroSection from './components/pages/landingpage/HeroSection';
import AreaOfExpertise from './components/pages/landingpage/AreaOfExpertise';
import CaseStudies from './components/pages/landingpage/CaseStudies';
import Testimonials from './components/pages/landingpage/Testimonials';
import Specialists from './components/pages/landingpage/Specialists';
import Mindtraining from './components/pages/landingpage/Mindtraining';
import Footer from './components/pages/landingpage/Footer';
import SideNavBar from './components/UserDash/SideNavBar';
import ProfilePage from './components/UserDash/Profile'; 
import LoginPage from './components/Auth/LoginPage';
import RegistrationPage from './components/Auth/RegistrationPage';
import NotFoundPage from './components/notfound/NotFoundPage';


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
      <div id='sidenav'>
        <SideNavBar />
        </div>
      <div id='profile'>
        <ProfilePage />
        </div>
      <div id='login'>
        <LoginPage />
        </div>
      <div id='register'>
        <RegistrationPage />
        </div>
      <div id='notfound'>
        <NotFoundPage />
        </div>
    </BrowserRouter>

  );
};

export default App;
