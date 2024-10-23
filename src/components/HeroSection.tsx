// import React from 'react';
import { Button } from '@mui/material';
import man from '../assets/images/Serious man.png';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#234E40] text-white py-16 px-8 md:px-32 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Text */}
      <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Embrace Your <br /> Mental Health
        </h1>
        <p className="mt-4 text-lg max-w-md mx-auto md:mx-0">
          We understand the challenges you face. That's why we put people first in everything.
        </p>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#A4D399',
            color: '#234E40',
            fontWeight: 'bold',
            padding: '12px 24px',
            fontSize: '1.125rem',
            marginTop: '24px',
            '&:hover': { backgroundColor: '#90C58B' },
          }}
        >
          Book an Appointment
        </Button>

        {/* TrustPilot Rating */}
        <div className="mt-6 flex items-center justify-center md:justify-start">
          <span className="text-[#A4D399] font-semibold">Trustpilot</span>
          <span className="ml-2 text-white font-bold">★ 4.8</span>
        </div>
      </div>

      {/* Right Side - Image and Services */}
      <div className="flex-1 flex flex-col items-center md:items-end relative">
        {/* Main Image */}
        <img
          src={man}
          alt="Serious Man"
          className="w-full h-auto rounded-lg object-cover max-w-md"
        />

        {/* Floating Cards for Services */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 mt-8 md:mt-0 flex flex-col space-y-4 text-center md:text-right md:-right-10 md:left-auto">
          <Button
            variant="outlined"
            sx={{
              borderColor: '#A4D399',
              color: '#A4D399',
              fontWeight: 'bold',
              padding: '8px 16px',
              '&:hover': { borderColor: '#A4D399' },
            }}
          >
            Family Counselling
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#A4D399',
              color: '#A4D399',
              fontWeight: 'bold',
              padding: '8px 16px',
              '&:hover': { borderColor: '#A4D399' },
            }}
          >
            Individual Therapy
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#A4D399',
              color: '#A4D399',
              fontWeight: 'bold',
              padding: '8px 16px',
              '&:hover': { borderColor: '#A4D399' },
            }}
          >
            Corporate Counselling
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
