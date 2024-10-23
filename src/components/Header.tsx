import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/mindful logo.png'

const Header: React.FC = () => {
  return (
    <header className="bg-[#2A5B4D] py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Mindful Logo" className="h-8 w-8 mr-2" />
        <span className="text-white font-bold text-lg">Mindful</span>
      </div>

      {/* Navigation */}
      <nav className="space-x-8 hidden md:flex">
        <Link to="/services" className="text-white">Services</Link>
        <Link to="/case-studies" className="text-white">Case Studies</Link>
        <Link to="/testimonials" className="text-white">Testimonials</Link>
        <Link to="/team" className="text-white">Team</Link>
        <Link to="/blogs" className="text-white">Blogs</Link>
        <Link to="/about" className="text-white">About</Link>
      </nav>

      {/* Contact Button */}
      <Button
        variant="outlined"
        sx={{
          borderColor: '#A4D399',
          color: '#A4D399',
          '&:hover': { borderColor: '#A4D399' },
        }}
      >
        Contact Us
      </Button>
    </header>
  );
};

export default Header;
