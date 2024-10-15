import React, { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaHome, FaLifeRing } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to the document body based on darkMode state
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppBar position="static" className="bg-primary dark:bg-gray-900">
      <Toolbar className="flex justify-between items-center">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="text-white font-bold">
          Mental Health App
        </Typography>
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center text-white hover:text-blue-300 transition duration-300">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/dashboard" className="flex items-center text-white hover:text-blue-300 transition duration-300">
            <MdDashboard className="mr-1" /> Dashboard
          </Link>
          <Link to="/support" className="flex items-center text-white hover:text-blue-300 transition duration-300">
            <FaLifeRing className="mr-1" /> Support
          </Link>
        </div>
        <IconButton color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
