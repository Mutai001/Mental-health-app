// AreaOfExpertise.tsx
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const expertise = [
  'Trauma', 'Anxiety', 'Depression', 'Autism', 'Life Transitions', 
  'Grief & Loss', 'Parenting', 'OCD', 'ADHD'
];

const AreaOfExpertise: React.FC = () => {
  return (
    <section className="py-12">
      <Typography variant="h4" className="text-center mb-8">
        Area of Expertise
      </Typography>
      <Grid container spacing={4} className="container mx-auto">
        {expertise.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Card className="bg-green-50">
              <CardContent>
                <Typography variant="h6" className="text-green-700">
                  {item}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default AreaOfExpertise;
