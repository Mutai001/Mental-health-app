import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/pages/landingpage/Navbar';
import HeroSection from './components/pages/landingpage/HeroSection';
import AreaOfExpertise from './components/pages/landingpage/AreaOfExpertise';
import CaseStudies from './components/pages/landingpage/CaseStudies';
import Testimonials from './components/pages/landingpage/Testimonials';
import Specialists from './components/pages/landingpage/Specialists';
import Mindtraining from './components/pages/landingpage/Mindtraining';
import Footer from './components/pages/landingpage/Footer';
import NotFoundPage from './components/notfound/NotFoundPage';
import RegistrationPage from './features/Auth/RegistrationPage';
import LoginPage from './features/Auth/LoginPage';
import AboutUs from './components/pages/landingpage/AboutUs';
import AskAI from './components/pages/landingpage/AskAI';
import ContactUs from './components/pages/landingpage/ContactUs';
import UserDashboard from './features/UserDash/UserDashboard';
import AdminDashboard from './features/AdminDash/AdminDashboard';
import TherapistDashboard from './features/therapist/TherapistDashboard';
import UserProfilePage from './features/UserDash/UserProfile';
import TherapistProfile from './features/therapist/TherapistProfile';
import MessagesSection from './features/therapist/TherapistMessages';
import Patients from './features/therapist/Patients';
import TherapistSettings from './features/therapist/TherapistSettings';
import TherapistPayments from './features/therapist/TherapistPayments';
import Appointments from './features/therapist/Appointments';
//UserDashboard
import UserBookings from './features/UserDash/UserBookings/UserBooking';
import UserAskAI from './features/UserDash/UserAskAI';

//AdminDashboard
import AdminUserManagement from './features/AdminDash/AdminUserManagement';

// NavbarWrapper component to conditionally render the Navbar
const NavbarWrapper = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Check if current path is a dashboard route
  const isDashboardRoute = 
    path.includes('/user-dashboard') || 
    path.includes('/admin-dashboard') || 
    path.includes('/therapist-dashboard') ||
    path.includes('/user/') ||
    path.includes('/admin/') ||
    path.includes('/therapist/');
  
  // Only render Navbar if not on a dashboard route
  return isDashboardRoute ? null : <Navbar />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <>
            <NavbarWrapper />
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
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/ask-ai' element={<AskAI />} />
              <Route path='/contactus' element={<ContactUs />} />
              
              {/* Dashboard Routes - these won't render the Navbar */}
              <Route path='/user-dashboard' element={<UserDashboard />} />
              <Route path='/admin-dashboard' element={<AdminDashboard />} />
              <Route path='/therapist-dashboard' element={<TherapistDashboard />} />

              {/* TherapistDashboard */}
              <Route path='/therapist/therapist-profile' element={<TherapistProfile />}/>
              <Route path='/therapist/therapist-messages' element={<MessagesSection />}/>
              <Route path='/therapist/patients' element={<Patients />}/>
              <Route path='/therapist/therapist-settings' element={<TherapistSettings />}/>
              <Route path='/therapist/therapist-payments' element={<TherapistPayments />}/>
              <Route path='/therapist/appointments' element={<Appointments />}/>

              {/* UserDashboard */}
              <Route path='/user/user-bookings' element={<UserBookings/>}/>
              <Route path='/user/user-ask-ai' element={<UserAskAI/>}/>
              <Route path='/user/userprofile' element={<UserProfilePage />}/>

              {/* AdminDashboard */}
              <Route path='/admin/admin-user-management' element={<AdminUserManagement/>}/> 
            </Routes>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;