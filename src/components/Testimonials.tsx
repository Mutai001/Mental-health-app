// src/components/Testimonials.tsx
import React from 'react';
import { Avatar, Typography, Container, Grid, Paper } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'The counseling services helped me overcome stress and find balance in my life.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    feedback: 'My family has become closer after attending therapy sessions here.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Container className="py-16 bg-green-50">
      <Typography variant="h4" className="text-center text-green-600 font-bold mb-12">
        What Our Clients Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper className="p-6 shadow-lg">
              <Avatar src={testimonial.image} alt={testimonial.name} className="mb-4 mx-auto" />
              <Typography variant="h6" className="text-center text-green-600">
                {testimonial.name}
              </Typography>
              <Typography variant="body1" className="text-gray-700 text-center mt-2">
                "{testimonial.feedback}"
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
