// src/components/Footer.tsx
import React from 'react';
import { Typography, Container, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white py-4">
      <Container className="flex justify-between items-center">
        <Typography variant="body1">© 2024 MindThera</Typography>
        <div className="flex space-x-2">
          <IconButton href="https://facebook.com" target="_blank" className="text-white">
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" className="text-white">
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" className="text-white">
            <Instagram />
          </IconButton>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
