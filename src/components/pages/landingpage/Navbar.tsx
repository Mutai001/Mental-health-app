import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import mindfulLogo from '../../../assets/images/mindful logo.png'; // Import your logo here
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // For navigation

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: 'home', path: '/' },
    { label: 'casestudies', path: '/casestudies' },
    { label: 'therapist', path: '/specialists' },
    { label: 'About', path: '/aboutus' },
    { label: 'ask ai', path: '/ask-ai' },


  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#2C423F',
        padding: { xs: '0.5rem 1rem', sm: '1rem 2rem' },
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={mindfulLogo} alt="Mindful Logo" style={{ width: '40px', marginRight: '0.5rem' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
              Mindful
            </Typography>
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            backgroundColor: '#3B544D',
            borderRadius: '20px',
            padding: '0.5rem 1rem',
            display: { xs: 'none', md: 'flex' },
            gap: '1rem',
          }}
        >
          {navLinks.map(({ label, path }) => (
            <Button
              key={label}
              component={Link}
              to={path}
              sx={{
                color: '#FFFFFF',
                fontWeight: '500',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                '&:hover': { backgroundColor: '#6DA14E' },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Contact Us Button */}
        <Button
          variant="outlined"
          component={Link}
          to="/contact"
          sx={{
            display: { xs: 'none', md: 'block' },
            color: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '0.5rem 1.5rem',
            '&:hover': { backgroundColor: '#6DA14E', borderColor: '#6DA14E' },
          }}
        >
          Contact Us →
        </Button>

        {/* Mobile Menu */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
          <List>
            {navLinks.map(({ label, path }) => (
              <ListItem key={label} disablePadding>
                <ListItemText>
                  <Button component={Link} to={path} sx={{ color: '#2C423F', width: '100%' }}>{label}</Button>
                </ListItemText>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemText>
                <Button
                  component={Link}
                  to="/contactus"
                  sx={{
                    color: '#FFFFFF',
                    backgroundColor: '#6DA14E',
                    borderRadius: '20px',
                    padding: '0.5rem 1.5rem',
                    width: '100%',
                    '&:hover': { backgroundColor: '#558D39' },
                  }}
                >
                  Contact Us →
                </Button>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
