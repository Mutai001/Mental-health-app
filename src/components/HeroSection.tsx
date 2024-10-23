import React from 'react';
import { Button } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#234E40] text-white py-16 px-8 md:px-32 flex flex-col md:flex-row items-center">
      {/* Left Side - Text */}
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold">
          Embrace Your <br /> Mental Health
        </h1>
        <p className="mt-4 text-lg">
          We understand the challenges you face. That's why we put people first in everything.
        </p>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#A4D399',
            color: '#234E40',
            fontWeight: 'bold',
            mt: 4,
            '&:hover': { backgroundColor: '#90C58B' },
          }}
        >
          Book an Appointment
        </Button>

        {/* TrustPilot Rating */}
        <div className="mt-4 flex items-center">
          <span className="text-[#A4D399]">Trustpilot</span>
          <span className="ml-2">★ 4.8</span>
        </div>
      </div>

      {/* Right Side - Image and Services */}
      <div className="flex-1 flex flex-col items-center">
        {/* Main Image */}
        <img
          src="/hero-image.png"
          alt="Serious Man"
          className="w-full h-auto rounded-lg mb-8 md:mb-0"
        />

        {/* Floating Cards for Services */}
        <div className="flex flex-col space-y-4">
          <Button
            variant="outlined"
            sx={{
              borderColor: '#A4D399',
              color: '#A4D399',
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
