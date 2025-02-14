import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const articles = [
  {
    title: "Opioid Overdose Survivors Report Having Had Suicidal Motivations",
    imageUrl: "https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg",
  },
  {
    title: "Compassionate Caregiving Born From Childhood Experience",
    imageUrl: "https://images.pexels.com/photos/5675678/pexels-photo-5675678.jpeg",
  },
  {
    title: "Everything You Need To Know About Anxiety nowadays",
    imageUrl: "https://images.pexels.com/photos/9109109/pexels-photo-9109109.jpeg",
  },
];

const Mindtraining: React.FC = () => {
  return (
    <Container style={{ marginTop: '40px', position: 'relative' }}>
      {/* Title */}
      <Typography
        variant="h4"
        gutterBottom
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
          color: '#111827', // Dark color for the title
        }}
      >
        Train Your Mind With Us
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              style={{
                borderRadius: '20px', // Rounded corners
                boxShadow: 'none',
                border: '1px solid #E0E0E0',
                position: 'relative',
                backgroundColor: '#F9FAFB', // Light background for the card
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={article.imageUrl}
                alt={article.title}
                style={{
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)', // Apply grayscale to match the muted image effect in the design
                }}
              />

              {/* Bottom section */}
              <Box
                style={{
                  backgroundColor: '#D1FAE5', // Light green for the bottom section
                  padding: '16px',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {/* Article Title */}
                <Typography variant="body1" style={{ fontWeight: 'bold', color: '#111827' }}> {/* Darker color for the text */}
                  {article.title}
                </Typography>

                {/* Arrow Icon */}
                <IconButton href="#" aria-label="read more" style={{ color: '#065F46' }}> {/* Dark green for the arrow */}
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Carousel Navigation Arrows */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <IconButton aria-label="previous" style={{ backgroundColor: '#FFF', color: '#000' }}>
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <IconButton aria-label="next" style={{ backgroundColor: '#FFF', color: '#000' }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Mindtraining;
