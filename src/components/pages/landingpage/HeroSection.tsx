import { Box, Typography, Button, Grid, Stack } from '@mui/material';
import personImage from '../../../assets/images/Serious man.png';
import trustpilot from '../../../assets/images/trustpilot-hd-logo.png';
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2C423F',
        color: '#FFFFFF',
        padding: '4rem 2rem',
        minHeight: '100vh',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Text and Buttons */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
            }}
          >
            Embrace Your <br /> Mental Health
          </Typography>
          <Typography sx={{ marginTop: '1rem', maxWidth: '500px' }}>
            We understand the challenges you face. That's why we put people first in everything.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '2rem',
              backgroundColor: '#6DA14E',
              padding: '1rem 2rem',
              fontSize: '1rem',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#5A8F3E',
              },
            }}
          >
            Book an Appointment
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
            <img src={trustpilot} alt="Trustpilot" style={{ height: '24px' }} />
            <Typography sx={{ marginLeft: '0.5rem' }}>★ 4.8</Typography>
          </Box>
        </Grid>

        {/* Right Side: Centered Image */}
        <Grid item xs={12} md={6} container justifyContent="center">
          <img
            src={personImage}
            alt="Person"
            style={{
              width: '100%',
              maxWidth: '450px',
            }}
          />
        </Grid>
      </Grid>

      {/* "We understand the challenges" section */}
      <Box
        sx={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#2C423F',
            padding: '1.5rem 2.5rem',
            borderRadius: '10px',
            maxWidth: '350px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#FFFFFF' }}>
            We understand the challenges you face. That's why we put people first in everything.
          </Typography>
          <Button
            variant="text"
            sx={{
              marginTop: '1rem',
              color: '#6DA14E',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            All Services →
          </Button>
        </Box>
      </Box>

      {/* Counselling Options */}
      <Box
        sx={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {['Family Counselling', 'Individual Therapy', 'Corporate Counselling'].map((service) => (
          <Stack
            key={service}
            sx={{
              backgroundColor: '#6DA14E',
              color: '#FFFFFF',
              padding: '1rem 2rem',
              borderRadius: '50px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              width: { xs: '100%', sm: '45%', md: '30%' },
            }}
          >
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{service}</Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;