// src/components/ContactUs.tsx
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const ContactUs: React.FC = () => {
  return (
    <Container className="py-16">
      <Typography variant="h4" className="text-center text-green-600 font-bold mb-8">
        Contact Us
      </Typography>
      <form className="flex flex-col space-y-4 max-w-md mx-auto">
        <TextField label="Your Name" variant="outlined" fullWidth required />
        <TextField label="Email" variant="outlined" fullWidth required />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
        <Button type="submit" variant="contained" className="bg-green-600 hover:bg-green-700">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;
