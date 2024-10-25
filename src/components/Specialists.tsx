import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

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
          fontSize: '2.5rem',
          letterSpacing: '0.1rem',
        }}
      >
        Get Treatment From Our Specialist
      </Typography>
      <Grid container spacing={4} style={{ justifyContent: 'center' }}>
        {specialists.map((specialist, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              style={{
                backgroundColor: '#ccf5d1', // Light green background for cards
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out', // Hover animation effect
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <img
                  src={specialist.img}
                  alt={specialist.name}
                  style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    marginBottom: '15px',
                  }}
                />
              </div>
              <CardContent>
                <Typography 
                  variant="h6" 
                  style={{ fontWeight: 'bold', color: '#2f855a' }}
                >
                  {specialist.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  style={{ marginBottom: '15px', color: '#6D757D' }}
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
                    padding: '10px 20px',
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
