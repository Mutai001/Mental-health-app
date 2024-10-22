// src/components/HeroSection.tsx
import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover h-screen flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b')",
      }}
    >
      <Container className="text-white max-w-lg">
        <Typography variant="h3" className="font-bold">
          Mental Health & Counseling Services
        </Typography>
        <Typography variant="body1" className="my-4">
          We provide compassionate and professional mental health services tailored to your needs.
        </Typography>
        <Button variant="contained" className="bg-green-600 hover:bg-green-700">
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
