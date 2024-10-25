import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

// Case studies data with image URLs
const caseStudies = [
  {
    title: 'Perinatal Mental Health Advice in Hywel Dda',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0vxBOGCXnUCyAruVjg5bJfOssGK-RXLxC7hwyAqfBJ1Zyf1hAr_J4RlE1sw3SiKZo_g&usqp=CAU',
  },
  {
    title: 'Mental Health Advice in Greater Glasgow and Clyde',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9frjZxovxhEHWOXhxO7-kMqR-fxx2pQQR0Q&s',
  },
  {
    title: '5 Minutes With Old Age Consultant & Clinical Director',
    img: 'https://people.com/thmb/1NfhQJBBa3D-z-rqRkjQJndQOxE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(554x339:556x341)/covid-mental-health-d0f1607a9b0440eb999b6301dd61c0f4.jpg',
  },
];

const handleButtonClick = (title: string) => {
  alert(`You clicked on: ${title}`);
};

const CaseStudies: React.FC = () => {
  return (
    <section style={{ padding: '50px 0', backgroundColor: '#2C423F' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <Typography 
          variant="h4" 
          style={{ color: '#fff', fontWeight: 'bold' }}
        >
          Case Studies
        </Typography>
        <Button 
          variant="outlined" 
          style={{
            color: '#fff', 
            borderColor: '#fff', 
            borderRadius: '20px',
            textTransform: 'none',
          }}
        >
          View All ➔
        </Button>
      </div>
      <Grid container spacing={4} style={{ justifyContent: 'center' }}>
        {caseStudies.map((study) => (
          <Grid item xs={12} sm={6} md={4} key={study.title}>
            <Card 
              style={{
                backgroundColor: '#6DA14E',
                color: '#fff',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardMedia
                component="img"
                image={study.img}
                alt={study.title}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px 15px 0 0',
                }}
              />
              <CardContent style={{ padding: '20px', position: 'relative' }}>
                <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                  {study.title}
                </Typography>
                <Button 
                  variant="contained" 
                  style={{
                    backgroundColor: '#E9C46A', 
                    color: '#264653',
                    borderRadius: '50%',
                    minWidth: '40px',
                    minHeight: '40px',
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                  }}
                  onClick={() => handleButtonClick(study.title)}
                >
                  ➔
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default CaseStudies;
