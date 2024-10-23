// Footer.tsx
import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto text-center">
        <Typography variant="h6" className="mb-4">
          Get our latest resources and event invites right in your inbox!
        </Typography>
        <div className="flex justify-center items-center mb-4">
          <TextField
            label="Your Email Here"
            variant="outlined"
            className="bg-white rounded"
          />
          <Button variant="contained" color="primary" className="ml-4">
            Subscribe Now
          </Button>
        </div>
        <Typography variant="body2">© 2024. All Rights Reserved. Privacy Policy | Terms & Conditions</Typography>
      </div>
    </footer>
  );
};

export default Footer;
