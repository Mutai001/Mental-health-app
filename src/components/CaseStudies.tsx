// CaseStudies.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const caseStudies = [
  {
    title: 'Perinatal Mental Health Advice in Hywel Dda',
    img: 'path-to-image-1',
  },
  {
    title: 'Mental Health Advice in Greater Glasgow and Clyde',
    img: 'path-to-image-2',
  },
  {
    title: '5 Minutes With Old Age Consultant & Clinical Director',
    img: 'path-to-image-3',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <Typography variant="h4" className="text-center mb-8">
        Case Studies
      </Typography>
      <Grid container spacing={4} className="container mx-auto">
        {caseStudies.map((study) => (
          <Grid item xs={12} sm={6} md={4} key={study.title}>
            <Card>
              <CardContent>
                <img src={study.img} alt={study.title} className="mb-4 rounded" />
                <Typography variant="h6">
                  {study.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default CaseStudies;
