// Specialists.tsx
import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const specialists = [
  {
    name: 'Dr. Rachel Porter',
    experience: '10 Years',
    img: 'path-to-image-specialist-1',
  },
  {
    name: 'Dr. Roy Lawson',
    experience: '8 Years',
    img: 'path-to-image-specialist-2',
  },
  {
    name: 'Dr. Dorothy Jordan',
    experience: '6 Years',
    img: 'path-to-image-specialist-3',
  },
  {
    name: 'Dr. Jane Freeman',
    experience: '4 Years',
    img: 'path-to-image-specialist-4',
  },
];

const Specialists: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <Typography variant="h4" className="text-center mb-8">
        Get Treatment From Our Specialist
      </Typography>
      <Grid container spacing={4} className="container mx-auto">
        {specialists.map((specialist, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent className="text-center">
                <img
                  src={specialist.img}
                  alt={specialist.name}
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <Typography variant="h6">{specialist.name}</Typography>
                <Typography variant="body2" className="mb-4">
                  Experience: {specialist.experience}
                </Typography>
                <Button variant="contained" color="success">
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
