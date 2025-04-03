import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Case studies data
const caseStudies = [
  {
    title: 'Perinatal Mental Health Advice in Hywel Dda',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0vxBOGCXnUCyAruVjg5bJfOssGK-RXLxC7hwyAqfBJ1Zyf1hAr_J4RlE1sw3SiKZo_g&usqp=CAU',
    content: 'This study explores perinatal mental health support in Hywel Dda, focusing on early interventions and community-based resources to support new parents through the critical perinatal period.',
    tags: ['Perinatal', 'Community Care', 'Early Intervention']
  },
  {
    title: 'Mental Health Advice in Greater Glasgow and Clyde',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9frjZxovxhEHWOXhxO7-kMqR-fxx2pQQR0Q&s',
    content: 'An in-depth look at mental health services in Glasgow, highlighting innovative approaches to therapy and accessibility improvements that have increased service utilization by 40%.',
    tags: ['Urban Health', 'Innovation', 'Accessibility']
  },
  {
    title: '5 Minutes With Old Age Consultant & Clinical Director',
    img: 'https://people.com/thmb/1NfhQJBBa3D-z-rqRkjQJndQOxE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(554x339:556x341)/covid-mental-health-d0f1607a9b0440eb999b6301dd61c0f4.jpg',
    content: 'A discussion with a leading clinical director on the challenges and advancements in geriatric mental health care, including new protocols that have reduced medication use by 25%.',
    tags: ['Geriatric Care', 'Clinical Leadership', 'Best Practices']
  },
];

const CaseStudies: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <Box sx={{ 
      padding: { xs: '40px 20px', md: '60px 0' }, 
      backgroundColor: '#2C423F',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(106, 179, 68, 0.1) 0%, transparent 30%)'
      }
    }}>
      {/* Animated title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            color: '#A3E635', 
            fontWeight: 700, 
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' },
            textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          Case Studies
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {caseStudies.map((study, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: expandedCard === index ? '#3A5A55' : '#6DA14D',
                  color: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  border: expandedCard === index ? '2px solid #A3E635' : '2px solid transparent'
                }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <CardMedia
                  component="img"
                  image={study.img}
                  alt={study.title}
                  sx={{ 
                    height: '200px', 
                    objectFit: 'cover',
                    filter: expandedCard === index ? 'brightness(0.8)' : 'brightness(0.9)',
                    transition: 'filter 0.3s ease'
                  }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {study.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    {study.tags.map((tag, i) => (
                      <Typography 
                        key={i}
                        variant="caption"
                        sx={{
                          backgroundColor: '#A3E635',
                          color: '#264653',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '12px',
                          fontWeight: 600,
                          fontSize: '0.65rem'
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>

                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                          {study.content}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: '#A3E635',
                            color: '#264653',
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: '#8CC63F'
                            }
                          }}
                        >
                          Download Full Study
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Decorative elements */}
      <Box sx={{
        position: 'absolute',
        bottom: -50,
        right: -50,
        width: 200,
        height: 200,
        borderRadius: '50%',
        backgroundColor: 'rgba(163, 230, 53, 0.1)',
        zIndex: 0
      }} />
    </Box>
  );
};

export default CaseStudies;