import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/mindful logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-[#2A5B4D] py-4 px-8 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Mindful Logo" className="h-8 w-8 mr-3" />
        <span className="text-white font-bold text-xl tracking-wide">Mindful</span>
      </div>

      {/* Navigation */}
      <nav className="space-x-8 hidden md:flex">
        <Link to="/services" className="text-white hover:text-[#A4D399] transition duration-300">
          Services
        </Link>
        <Link to="/case-studies" className="text-white hover:text-[#A4D399] transition duration-300">
          Case Studies
        </Link>
        <Link to="/testimonials" className="text-white hover:text-[#A4D399] transition duration-300">
          Testimonials
        </Link>
        <Link to="/team" className="text-white hover:text-[#A4D399] transition duration-300">
          Team
        </Link>
        <Link to="/blogs" className="text-white hover:text-[#A4D399] transition duration-300">
          Blogs
        </Link>
        <Link to="/about" className="text-white hover:text-[#A4D399] transition duration-300">
          About
        </Link>
      </nav>

      {/* Contact Button */}
      <Button
        variant="outlined"
        sx={{
          borderColor: '#A4D399',
          color: '#A4D399',
          padding: '8px 16px',
          fontWeight: 'bold',
          '&:hover': { borderColor: '#A4D399', backgroundColor: '#A4D399', color: '#234E40' },
          transition: 'all 0.3s ease',
        }}
      >
        Contact Us
      </Button>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
