// import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

// Framer Motion Variants for Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const articles = [
  {
    title: 'Opioid Overdose Survivors Report Having Had Suicidal Motivations',
    imageUrl: 'https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg',
  },
  {
    title: 'Compassionate Caregiving Born From Childhood Experience',
    imageUrl: 'https://images.pexels.com/photos/5675678/pexels-photo-5675678.jpeg',
  },
  {
    title: 'Everything You Need To Know About Anxiety Nowadays',
    imageUrl: 'https://images.pexels.com/photos/9109109/pexels-photo-9109109.jpeg',
  },
];

const Mindtraining: React.FC = () => {
  return (
    <Container
      sx={{
        marginTop: '40px',
        position: 'relative',
        padding: { xs: '2rem 1rem', md: '3rem 2rem' },
      }}
    >
      {/* Title */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '24px',
            color: '#2C423F', // Dark green from Navbar
          }}
        >
          Train Your Mind With Us
        </Typography>
      </motion.div>

      {/* Cards Section */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    borderRadius: '20px',
                    boxShadow: 'none',
                    border: '1px solid #E0E0E0',
                    position: 'relative',
                    backgroundColor: '#FFFFFF', // White background for the card
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  {/* Image */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.imageUrl}
                    alt={article.title}
                    sx={{
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      objectFit: 'cover',
                      filter: 'grayscale(100%)', // Grayscale effect
                      transition: 'filter 0.3s ease-in-out',
                      '&:hover': {
                        filter: 'grayscale(0%)', // Remove grayscale on hover
                      },
                    }}
                  />

                  {/* Bottom Section */}
                  <Box
                    sx={{
                      backgroundColor: '#6DA14E', // Green from Navbar
                      padding: '16px',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {/* Article Title */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 'bold',
                        color: '#FFFFFF', // White text for contrast
                      }}
                    >
                      {article.title}
                    </Typography>

                    {/* Arrow Icon */}
                    <IconButton
                      href="#"
                      aria-label="read more"
                      sx={{ color: '#FFFFFF' }} // White arrow
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Mindtraining;