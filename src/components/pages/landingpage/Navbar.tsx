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
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = ['Services', 'Case Studies', 'Testimonials', 'Team', 'Blogs', 'About'];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#2C423F', // Background color for the entire navbar
        padding: { xs: '0.5rem 1rem', sm: '1rem 2rem' }, // Adjust padding for different screen sizes
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left side: Logo (Icon + Name) */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={mindfulLogo} alt="Mindful Logo" style={{ width: '40px', marginRight: '0.5rem' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
            Mindful
          </Typography>
        </Box>

        {/* Center: Navigation Links with lighter background (hide on small screens) */}
        <Box
          sx={{
            backgroundColor: '#3B544D',
            borderRadius: '20px',
            padding: '0.5rem 1rem',
            display: { xs: 'none', md: 'flex' }, // Hide links on small screens
            gap: '1rem',
          }}
        >
          {navLinks.map((text) => (
            <ScrollLink
              key={text}
              to={text.toLowerCase().replace(' ', '')} // Scroll to section ID
              spy={true}
              smooth={true}
              offset={-70} // Offset to account for navbar height
              duration={500}
            >
              <Button
                sx={{
                  color: '#FFFFFF',
                  fontWeight: '500',
                  borderRadius: '20px',
                  padding: '0.5rem 1rem',
                  '&:hover': {
                    backgroundColor: '#6DA14E',
                  },
                }}
              >
                {text}
              </Button>
            </ScrollLink>
          ))}
        </Box>

        {/* Right side: Contact Us Button (hide on small screens) */}
        <Button
          variant="outlined"
          sx={{
            display: { xs: 'none', md: 'block' }, // Hide button on small screens
            color: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '0.5rem 1.5rem',
            '&:hover': {
              backgroundColor: '#6DA14E',
              borderColor: '#6DA14E',
            },
          }}
        >
          Contact Us →
        </Button>

        {/* Hamburger Menu Icon for small screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
          <List>
            {navLinks.map((text) => (
              <ListItem component="div" key={text}>
                <ScrollLink
                  to={text.toLowerCase().replace(' ', '')}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <ListItemText primary={text} />
                </ScrollLink>
              </ListItem>
            ))}
            <ListItem component="div">
              <Button
                sx={{
                  color: '#FFFFFF',
                  backgroundColor: '#6DA14E',
                  borderRadius: '20px',
                  padding: '0.5rem 1.5rem',
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: '#558D39',
                  },
                }}
              >
                Contact Us →
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
