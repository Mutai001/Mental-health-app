import React from 'react';
import { Card, CardContent, Typography, Grid, Button, useMediaQuery, useTheme } from '@mui/material';

// Specialists data
const specialists = [
  {
    name: 'Dr. Rachel Porter',
    experience: '10 Years',
    img: 'https://media.istockphoto.com/id/1351031406/photo/handsome-mature-man-with-arms-crossed-studio-portrait-isolated-on-grey-background.jpg?s=612x612&w=0&k=20&c=SKXxsNfRFoGn_Fwjxz7ZFxanpXpAsO4xQVNznDy1xcM=',
  },
  {
    name: 'Dr. Roy Lawson',
    experience: '8 Years',
    img: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
  },
  {
    name: 'Dr. Dorothy Jordan',
    experience: '6 Years',
    img: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
  },
  {
    name: 'Dr. Jane Freeman',
    experience: '4 Years',
    img: 'https://media.istockphoto.com/id/1317784594/photo/headshot-of-mature-50-years-old-asian-business-woman-on-grey-background.jpg?s=612x612&w=0&k=20&c=eOmdf5BbEG75m9MBSTvhjA5uMDmUj0zDtXd3lv0nm8U=',
  },
];

const Specialists: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check for mobile
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Check for tablet

  return (
    <section style={{ padding: '50px 0', backgroundColor: '#F5F5F5' }}>
      <Typography 
        variant="h4" 
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#2f855a', // Dark green for the title
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Consistent shadow effect
          fontSize: isSmallScreen ? '1.8rem' : isMediumScreen ? '2.2rem' : '2.5rem', // Responsive font size
          letterSpacing: '0.1rem',
        }}
      >
        Get Treatment From Our Specialist
      </Typography>
      <Grid container spacing={4} style={{ justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        {specialists.map((specialist, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            key={index}
            style={{ display: 'flex', justifyContent: 'center' }} // Centering content on mobile
          >
            <Card 
              style={{
                backgroundColor: '#ccf5d1', // Light green background for cards
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: isSmallScreen ? '15px' : '20px', // Smaller padding on mobile
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',
                width: isSmallScreen ? '90%' : '100%', // Adjust width for small screens
                maxWidth: '300px', // Limit max width for all cards
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <div style={{ marginBottom: isSmallScreen ? '10px' : '20px' }}>
                <img
                  src={specialist.img}
                  alt={specialist.name}
                  style={{
                    borderRadius: '50%',
                    width: isSmallScreen ? '80px' : '100px', // Smaller image on mobile
                    height: isSmallScreen ? '80px' : '100px', // Adjust image size based on screen
                    objectFit: 'cover',
                    marginBottom: '15px',
                  }}
                />
              </div>
              <CardContent>
                <Typography 
                  variant="h6" 
                  style={{ 
                    fontWeight: 'bold', 
                    color: '#2f855a',
                    fontSize: isSmallScreen ? '1rem' : '1.2rem' // Adjust font size on smaller screens
                  }}
                >
                  {specialist.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  style={{ 
                    marginBottom: '15px', 
                    color: '#6D757D',
                    fontSize: isSmallScreen ? '0.9rem' : '1rem' // Adjust font size for mobile
                  }}
                >
                  Experience: {specialist.experience}
                </Typography>
                <Button 
                  variant="contained" 
                  style={{
                    backgroundColor: '#2f855a', // Dark green for button
                    color: '#FFFFFF',
                    borderRadius: '20px',
                    textTransform: 'none',
                    padding: isSmallScreen ? '8px 15px' : '10px 20px', // Adjust padding for mobile
                    fontSize: isSmallScreen ? '0.8rem' : '1rem', // Smaller font size on mobile
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Book an Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Specialists;
