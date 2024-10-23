// HeroSection.tsx
import React from 'react';
import { Button, Typography } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-green-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Typography variant="h3" className="text-green-800 font-bold mb-4">
            Embrace Your Mental Health
          </Typography>
          <Typography variant="body1" className="mb-8">
            We Understand the Challenges You Face. That's Why We Put People First in Everything.
          </Typography>
          <Button variant="contained" color="success" size="large">
            Book an Appointment
          </Button>
        </div>
        <div className="md:w-1/2">
          <img src="path-to-image" alt="Mental Health" className="rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
