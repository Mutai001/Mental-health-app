// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="bg-green-600">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="font-bold text-white">
          MindThera
        </Typography>
        <div className="space-x-4">
          <Button className="text-white">Home</Button>
          <Button className="text-white">Services</Button>
          <Button className="text-white">About Us</Button>
          <Button className="text-white">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
