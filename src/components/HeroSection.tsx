import { Box, Typography, Button, Grid } from '@mui/material';
import personImage from '../assets/images/Serious man.png';

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
        <Grid item xs={12} md={6}>
          <Typography variant="h1">
            Embrace Your <br /> Mental Health
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: '2rem' }}
          >
            Book an Appointment
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
            <Typography>Trustpilot</Typography>
            <Typography sx={{ marginLeft: '0.5rem', color: 'yellow' }}>★ 4.8</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={personImage} alt="Person" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
