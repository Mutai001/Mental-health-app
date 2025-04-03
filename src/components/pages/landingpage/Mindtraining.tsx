import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Typography, IconButton, Box, Button, Dialog, DialogContent } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Article data with expanded content
const articles = [
  {
    id: 1,
    title: 'Opioid Overdose Survivors Report Having Had Suicidal Motivations',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    summary: 'New research reveals complex psychological factors behind opioid misuse that challenge traditional treatment approaches.',
    content: `A groundbreaking study published in the Journal of Addiction Medicine found that 42% of opioid overdose survivors reported suicidal motivations prior to their overdose. This challenges the conventional view of opioid misuse as purely substance-seeking behavior.

Key findings:
• 68% reported untreated mental health conditions
• 54% had experienced childhood trauma
• Only 23% received mental health counseling post-overdose

The research suggests integrated mental health and addiction treatment could significantly improve outcomes.`
  },
  {
    id: 2,
    title: 'Compassionate Caregiving Born From Childhood Experience',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    summary: 'How personal adversity shapes exceptional mental health professionals',
    content: `Interviews with 50 award-winning mental health professionals revealed a striking pattern - 82% had significant childhood experiences with mental health challenges, either personally or within their families.

Common themes:
• Early exposure created deep empathy
• Many sought to "fix" their childhood situations through their work
• All emphasized trauma-informed care approaches

"Patients can tell when you truly understand," noted Dr. Sarah Chen, whose mother battled depression. This lived experience appears to translate to more effective therapeutic alliances.`
  },
  {
    id: 3,
    title: 'The Neuroscience of Anxiety in Modern Society',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    summary: 'Understanding why anxiety disorders have increased 25% in the past decade',
    content: `Recent fMRI studies show modern digital lifestyles are literally rewiring our brains for heightened anxiety responses. The constant "threat monitoring" required by social media and 24/7 news activates the amygdala disproportionately.

Key insights:
• Average person checks phone 150x/day, creating chronic low-grade stress
• Digital stimuli trigger dopamine-amygdala feedback loops
• Mindfulness practices can rebuild prefrontal cortex regulation

Practical solutions:
• Digital detox protocols
• Cognitive behavioral therapy adaptations
• Neurofeedback training options`
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.2, 0.8, 0.4, 1] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    },
  },
};

const Mindtraining: React.FC = () => {
  const [currentArticle, setCurrentArticle] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleArrowClick = (direction: 'left' | 'right') => {
    setDirection(direction);
    setCurrentArticle(prev => {
      if (prev === null) return 0;
      if (direction === 'right') {
        return (prev + 1) % articles.length;
      } else {
        return (prev - 1 + articles.length) % articles.length;
      }
    });
  };

  const handleClose = () => {
    setCurrentArticle(null);
  };

  return (
    <Container
      sx={{
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 70% 30%, rgba(106, 179, 68, 0.08) 0%, transparent 30%)',
          zIndex: -1
        }
      }}
    >
      {/* Title Section */}
      <Box textAlign="center" mb={6}>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#2C423F',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Expand Your Mind
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#6D757D',
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Evidence-based insights to enhance your mental wellbeing journey
          </Typography>
        </motion.div>
      </Box>

      {/* Articles Grid */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} md={4} key={article.id}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={article.imageUrl}
                    alt={article.title}
                    sx={{
                      filter: 'brightness(0.9)',
                      transition: 'filter 0.4s ease',
                      '&:hover': {
                        filter: 'brightness(1)'
                      }
                    }}
                  />
                  <Box 
                    sx={{ 
                      p: 3, 
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#2C423F',
                        mb: 2,
                        flexGrow: 1
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#6D757D',
                        mb: 3
                      }}
                    >
                      {article.summary}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Button 
                        variant="text" 
                        sx={{ 
                          color: '#6DA14E',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'rgba(106, 179, 68, 0.08)'
                          }
                        }}
                        onClick={() => setCurrentArticle(article.id - 1)}
                      >
                        Read More
                      </Button>
                      <IconButton
                        aria-label="read full article"
                        sx={{ 
                          color: '#6DA14E',
                          '&:hover': {
                            backgroundColor: 'rgba(106, 179, 68, 0.1)'
                          }
                        }}
                        onClick={() => setCurrentArticle(article.id - 1)}
                      >
                        <ArrowForward />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Navigation Arrows */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 2 }}>
        <IconButton
          aria-label="previous article"
          sx={{
            backgroundColor: 'white',
            color: '#2C423F',
            border: '1px solid #E0E0E0',
            '&:hover': {
              backgroundColor: '#F5F5F5',
              transform: 'translateX(-2px)'
            },
            transition: 'all 0.3s ease',
            width: 56,
            height: 56
          }}
          onClick={() => handleArrowClick('left')}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          aria-label="next article"
          sx={{
            backgroundColor: '#6DA14E',
            color: 'white',
            '&:hover': {
              backgroundColor: '#5A8F3E',
              transform: 'translateX(2px)'
            },
            transition: 'all 0.3s ease',
            width: 56,
            height: 56
          }}
          onClick={() => handleArrowClick('right')}
        >
          <ArrowForward />
        </IconButton>
      </Box>

      {/* Article Dialog */}
      <AnimatePresence>
        {currentArticle !== null && (
          <Dialog
            open={currentArticle !== null}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: '16px',
                overflow: 'hidden'
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: direction === 'right' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'right' ? -100 : 100 }}
              transition={{ duration: 0.4 }}
            >
              <DialogContent sx={{ p: 0 }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="360"
                    image={articles[currentArticle].imageUrl}
                    alt={articles[currentArticle].title}
                    sx={{ width: '100%', objectFit: 'cover' }}
                  />
                  <Box sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: '#2C423F' }}>
                      {articles[currentArticle].title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#6D757D', 
                        whiteSpace: 'pre-line',
                        lineHeight: 1.8,
                        fontSize: '1.1rem'
                      }}
                    >
                      {articles[currentArticle].content}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#6DA14E',
                          borderRadius: '50px',
                          px: 4,
                          py: 1.5,
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#5A8F3E'
                          }
                        }}
                        onClick={handleClose}
                      >
                        Close
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </DialogContent>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Mindtraining;