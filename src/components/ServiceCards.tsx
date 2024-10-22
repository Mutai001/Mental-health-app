// src/components/ServiceCards.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const services = [
  {
    title: 'Mental Health Counseling',
    image: 'https://images.unsplash.com/photo-1504185945335-7a6a446a5c8f',
  },
  {
    title: 'Family Therapy',
    image: 'https://images.unsplash.com/photo-1601758123927-812cc25f6ef8',
  },
  {
    title: 'Stress Management',
    image: 'https://images.unsplash.com/photo-1491955478222-69ae25414368',
  },
];

const ServiceCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {services.map((service, index) => (
        <Card key={index} className="hover:shadow-xl bg-white">
          <CardMedia
            component="img"
            height="160"
            image={service.image}
            alt={service.title}
          />
          <CardContent>
            <Typography variant="h6" className="font-bold text-green-600">
              {service.title}
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec urna in mi aliquet blandit.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCards;
