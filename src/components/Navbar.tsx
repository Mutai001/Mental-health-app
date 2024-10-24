import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import mindfulLogo from '../assets/images/mindful logo.png'; // Add your logo here

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#2C423F', // Background color for the entire navbar
        padding: '1rem 2rem',
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
          <img src={mindfulLogo} alt="Mindful Logo" style={{ width: '50px', marginRight: '0.5rem' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
            Mindful
          </Typography>
        </Box>

        {/* Center: Navigation Links with lighter background and border-radius */}
        <Box
          sx={{
            backgroundColor: '#3B544D', // Slightly lighter background color for the links container
            borderRadius: '20px', // Rounded edges for the container
            padding: '0.5rem 1rem',
            display: 'flex',
            gap: '1.5rem',
          }}
        >
          {['Services', 'Case Studies', 'Testimonials', 'Team', 'Blogs', 'About'].map((text) => (
            <Button
              key={text}
              sx={{
                color: '#FFFFFF',
                fontWeight: '500',
                borderRadius: '20px', // Rounded edges on individual buttons
                padding: '0.5rem 1.5rem',
                '&:hover': {
                  backgroundColor: '#6DA14E', // Hover color (greenish as in image)
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* Right side: Contact Us Button */}
        <Button
          variant="outlined"
          sx={{
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
