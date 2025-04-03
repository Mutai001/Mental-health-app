import React, { useState } from 'react';
import { Grid, Card, Typography, Chip, Box, Avatar, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Define type for character images
type CharacterImages = {
  male: string;
  female: string;
};

// Animated character images
const CHARACTERS: CharacterImages = {
  male: 'https://cdn-icons-png.flaticon.com/512/236/236831.png',
  female: 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png'
};

// Define testimonial type
type Testimonial = {
  id: number;
  title: string;
  text: string;
  rating: number;
  tags: string[];
  gender: keyof CharacterImages; // Ensures only 'male' or 'female'
  date: string;
};

// Client testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Life-Changing Experience',
    text: 'The support I received helped me navigate through my darkest times. The therapists are compassionate and truly understand mental health struggles.',
    rating: 5,
    tags: ['Depression', 'Life Transitions'],
    gender: 'female',
    date: '2 weeks ago'
  },
  {
    id: 2,
    title: 'Exceptional Care',
    text: 'My therapist provided tools that transformed my approach to anxiety. I now feel equipped to handle challenges I never thought possible.',
    rating: 5,
    tags: ['Anxiety', 'Trauma'],
    gender: 'male',
    date: '1 month ago'
  },
  {
    id: 3,
    title: 'Professional & Kind',
    text: 'From the first session, I felt heard and understood. The personalized treatment plan made all the difference in my recovery journey.',
    rating: 4,
    tags: ['PTSD', 'Counseling'],
    gender: 'female',
    date: '3 weeks ago'
  },
  {
    id: 4,
    title: 'Highly Recommend',
    text: 'The team created a safe space where I could open up without judgment. My mental health has improved dramatically since starting therapy.',
    rating: 5,
    tags: ['Self-Esteem', 'Relationships'],
    gender: 'male',
    date: '2 months ago'
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <Box sx={{ display: 'flex', mb: 1 }}>
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} sx={{ color: i < rating ? '#FFD700' : '#E0E0E0', fontSize: '1.2rem' }} />
    ))}
  </Box>
);

const ClientTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left'|'right'>('right');

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <Box sx={{
      py: 8,
      px: { xs: 2, sm: 4 },
      backgroundColor: '#F8F9FA',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 80% 20%, rgba(106, 179, 68, 0.05) 0%, transparent 30%)'
      }
    }}>
      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto',
        position: 'relative',
        zIndex: 1
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 6,
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#2C423F', 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textShadow: '0px 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              Client Success Stories
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#6D757D', 
                mt: 1,
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Hear what our clients say about their healing journey
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                backgroundColor: 'white',
                color: '#2C423F',
                border: '1px solid #E0E0E0',
                '&:hover': {
                  backgroundColor: '#F0F0F0'
                }
              }}
            >
              <ArrowBackIos fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                backgroundColor: 'white',
                color: '#2C423F',
                border: '1px solid #E0E0E0',
                '&:hover': {
                  backgroundColor: '#F0F0F0'
                }
              }}
            >
              <ArrowForwardIos fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ position: 'relative', height: '400px' }}>
          <AnimatePresence custom={direction}>
            <Grid container spacing={4} sx={{ position: 'absolute', width: '100%' }}>
              {visibleTestimonials.map((testimonial, index) => (
                <Grid 
                  item 
                  xs={12} 
                  md={4} 
                  key={testimonial.id}
                  sx={{
                    display: 'flex',
                    justifyContent: index === 1 ? 'center' : index === 0 ? 'flex-start' : 'flex-end'
                  }}
                >
                  <motion.div
                    key={testimonial.id}
                    custom={direction}
                    initial={{ 
                      opacity: 0, 
                      x: index === 1 ? (direction === 'right' ? 100 : -100) : 0,
                      scale: index === 1 ? 0.9 : 0.8
                    }}
                    animate={{ 
                      opacity: index === 1 ? 1 : 0.6, 
                      x: 0,
                      scale: index === 1 ? 1 : 0.9
                    }}
                    exit={{ 
                      opacity: 0,
                      x: direction === 'right' ? -100 : 100,
                      scale: 0.8
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '100%',
                      maxWidth: index === 1 ? '380px' : '340px'
                    }}
                  >
                    <Card 
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        p: 3,
                        height: '100%',
                        boxShadow: index === 1 ? '0 10px 25px rgba(0,0,0,0.1)' : '0 5px 15px rgba(0,0,0,0.05)',
                        border: index === 1 ? 'none' : '1px solid #F0F0F0',
                        opacity: index === 1 ? 1 : 0.8
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          src={CHARACTERS[testimonial.gender]}
                          sx={{ 
                            width: 60, 
                            height: 60,
                            mr: 2,
                            bgcolor: testimonial.gender === 'male' ? '#E3F2FD' : '#FCE4EC'
                          }}
                        />
                        <Box>
                          <StarRating rating={testimonial.rating} />
                          <Typography variant="caption" sx={{ color: '#6D757D' }}>
                            {testimonial.date}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 2,
                          color: '#2C423F'
                        }}
                      >
                        {testimonial.title}
                      </Typography>

                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#6D757D', 
                          mb: 3,
                          fontStyle: 'italic'
                        }}
                      >
                        "{testimonial.text}"
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {testimonial.tags.map((tag, idx) => (
                          <Chip 
                            key={idx} 
                            label={tag} 
                            size="small"
                            sx={{ 
                              backgroundColor: '#E8F5E9',
                              color: '#2C423F',
                              fontWeight: 500
                            }} 
                          />
                        ))}
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientTestimonials;