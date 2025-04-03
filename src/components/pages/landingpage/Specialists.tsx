import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Button, 
  Box, 
  Stack, 
  CircularProgress, 
  Avatar,
  IconButton 
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

// Type definitions
interface Therapist {
  id: number;
  full_name: string;
  specialization: string;
  experience_years: number;
  contact_phone: string;
  email: string;
  available?: boolean;
  gender?: 'male' | 'female' | 'neutral';
}

// Animated character images
const THERAPIST_IMAGES = {
  male: 'https://cdn-icons-png.flaticon.com/512/3011/3011270.png',
  female: 'https://cdn-icons-png.flaticon.com/512/3011/3011292.png',
  neutral: 'https://cdn-icons-png.flaticon.com/512/3011/3011310.png'
} as const;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Specialists: React.FC = () => {
  const navigate = useNavigate();
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch therapists');
        }
        const data = await response.json();
        
        // Process and limit to 4 therapists
        const therapistData = data
          .filter((user: { role: string }) => user.role === 'therapist')
          .slice(0, 4) // Only take first 4 therapists
          .map((therapist: Therapist) => ({
            ...therapist,
            available: Math.random() > 0.3,
            gender: ['male', 'female', 'neutral'][Math.floor(Math.random() * 3)] as 'male' | 'female' | 'neutral'
          }));
        
        setTherapists(therapistData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTherapists();
  }, []);

  if (loading) {
    return (
      <Box sx={{ 
        backgroundColor: '#2C423F', 
        color: '#FFFFFF', 
        py: 12, 
        px: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px'
      }}>
        <CircularProgress sx={{ color: '#6DA14E' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        backgroundColor: '#2C423F', 
        color: '#FFFFFF', 
        py: 12, 
        px: 4,
        textAlign: 'center'
      }}>
        <Typography variant="h6" sx={{ color: '#E57373' }}>
          Error loading specialists: {error}
        </Typography>
        <Button 
          variant="contained" 
          sx={{ 
            mt: 2, 
            backgroundColor: '#6DA14E',
            '&:hover': { backgroundColor: '#5A8F3E' }
          }}
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      backgroundColor: '#2C423F', 
      color: '#FFFFFF', 
      py: 12, 
      px: 4,
      backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(106, 179, 68, 0.1) 0%, transparent 25%)'
    }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ 
          fontWeight: 'bold', 
          fontSize: { xs: '2rem', md: '3rem' }, 
          mb: 6,
          textShadow: '0px 2px 4px rgba(0,0,0,0.2)',
          position: 'relative',
          '&::after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#6DA14E',
            margin: '16px auto 0',
            borderRadius: '2px'
          }
        }}
      >
        Meet Our Specialists
      </Typography>
      
      {therapists.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ color: '#D1E8E2' }}>
          No specialists available at the moment.
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {therapists.map((therapist) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={therapist.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  backgroundColor: '#3D5A5A', 
                  color: '#FFFFFF', 
                  borderRadius: 3, 
                  p: 3, 
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)'
                  }
                }}>
                  <Avatar
                    src={THERAPIST_IMAGES[therapist.gender || 'neutral']}
                    sx={{
                      width: 120,
                      height: 120,
                      margin: '0 auto 16px',
                      border: '4px solid #6DA14E',
                      backgroundColor: '#2C423F'
                    }}
                  />
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 'bold', 
                      color: '#6DA14E',
                      mb: 1,
                      fontSize: '1.25rem'
                    }}>
                      {therapist.full_name}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#D1E8E2', 
                      mb: 1,
                      fontStyle: 'italic'
                    }}>
                      {therapist.specialization}
                    </Typography>
                    <Box sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      p: 1,
                      mb: 2
                    }}>
                      <Typography variant="body2" sx={{ color: '#D1E8E2' }}>
                        {therapist.experience_years}+ years experience
                      </Typography>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{ 
                        fontWeight: 'bold', 
                        color: therapist.available ? '#6DA14E' : '#E57373',
                        display: 'block',
                        mb: 2,
                        fontSize: '0.9rem'
                      }}
                    >
                      {therapist.available ? '✅ Available now' : '⏳ Booked until next week'}
                    </Typography>
                    
                    <Stack direction="row" justifyContent="center" spacing={2} mt={2} mb={3}>
                      <IconButton 
                        sx={{ 
                          color: '#D1E8E2',
                          '&:hover': { color: '#0A66C2' }
                        }}
                        onClick={() => window.open(`https://linkedin.com/search?q=${therapist.full_name}`, '_blank')}
                      >
                        <FaLinkedin size={20} />
                      </IconButton>
                      <IconButton 
                        sx={{ 
                          color: '#D1E8E2',
                          '&:hover': { color: '#1DA1F2' }
                        }}
                        onClick={() => window.open(`https://twitter.com/search?q=${therapist.full_name}`, '_blank')}
                      >
                        <FaTwitter size={20} />
                      </IconButton>
                      <IconButton 
                        sx={{ 
                          color: '#D1E8E2',
                          '&:hover': { color: '#1877F2' }
                        }}
                        onClick={() => window.open(`https://facebook.com/search?q=${therapist.full_name}`, '_blank')}
                      >
                        <FaFacebook size={20} />
                      </IconButton>
                    </Stack>
                    
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ 
                          mt: 1, 
                          backgroundColor: '#6DA14E', 
                          borderRadius: '50px', 
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: '600',
                          textTransform: 'none',
                          '&:hover': { 
                            backgroundColor: '#5A8F3E',
                            transform: 'translateY(-2px)'
                          },
                          '&:disabled': {
                            backgroundColor: '#3D5A5A',
                            color: '#D1E8E2'
                          },
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => navigate(`/book-appointment/${therapist.id}`)}
                        disabled={!therapist.available}
                      >
                        {therapist.available ? 'Book Session' : 'Join Waitlist'}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Specialists;