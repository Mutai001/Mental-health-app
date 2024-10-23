// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-green-700">
          Mindful
        </Typography>
        <div className="flex space-x-4">
          <Button color="inherit">Services</Button>
          <Button color="inherit">Case Studies</Button>
          <Button color="inherit">Testimonials</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">About</Button>
        </div>
        <Button variant="outlined" color="success">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
