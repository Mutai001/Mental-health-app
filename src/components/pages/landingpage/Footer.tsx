import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import logo from '../../../assets/images/mindful logo.png'

// Placeholder logo (you can replace this with an actual logo image)
const Logo = () => (
  <img src= {logo} alt="Mindful Logo" style={{ height: '40px', marginBottom: '16px' }} />
);

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#335D4F', color: '#FFFFFF', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Logo Section */}
        <Logo />
        <Typography variant="h4" style={{ marginBottom: '16px', fontWeight: 'bold' }}>
          Get our latest resources and event invites right in your inbox!
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          All of Our Resources and Special Invites Can Be Easily Accessible by Our Subscribers Anywhere.
        </Typography>
        
        {/* Subscribe Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '16px',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              gap: '10px',
            },
          }}
        >
          <TextField
            placeholder="Your Email Here"
            variant="outlined"
            fullWidth
            sx={{
              maxWidth: '350px',
              backgroundColor: '#FFFFFF',
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Rounded edges
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#A3E635',
              color: '#000',
              fontWeight: 'bold',
              height: '56px',
              borderRadius: '30px', // Rounded button edges
              marginLeft: { xs: 0, sm: '16px' },
              padding: '0 24px',
              textTransform: 'none',
            }}
          >
            SUBSCRIBE NOW
          </Button>
        </Box>

        <Typography variant="body2" style={{ marginBottom: '16px' }}>
          © 2023. All Rights Reserved. Privacy Policy | Terms & Conditions
        </Typography>

        {/* Footer Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Services</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Case Studies</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Testimonials</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Team</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Blogs</a>
          <a href="#" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About</a>
        </div>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <a href="#" style={{ color: '#FFFFFF' }}><FacebookIcon fontSize="large" /></a>
          <a href="#" style={{ color: '#FFFFFF' }}><TwitterIcon fontSize="large" /></a>
          <a href="#" style={{ color: '#FFFFFF' }}><InstagramIcon fontSize="large" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
