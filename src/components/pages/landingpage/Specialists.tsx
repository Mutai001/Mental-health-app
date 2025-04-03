import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button, Box, Stack, CircularProgress, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaUser } from 'react-icons/fa';

interface Therapist {
  id: number;
  full_name: string;
  specialization: string;
  experience_years: number;
  profile_picture: string | null;
  contact_phone: string;
  email: string;
  available?: boolean; // We'll add this dynamically
}

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
        
        // Filter for therapists only and add availability status
        const therapistData = data
          .filter((user: { role: string }) => user.role === 'therapist')
          .map((therapist: Partial<Therapist>) => ({
            ...therapist,
            available: Math.random() > 0.3 // Random availability (70% chance available)
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
    <Box sx={{ backgroundColor: '#2C423F', color: '#FFFFFF', py: 12, px: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ 
          fontWeight: 'bold', 
          fontSize: { xs: '2rem', md: '3rem' }, 
          mb: 6,
          textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
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
          {therapists.map((therapist, index) => (
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
                  flexDirection: 'column'
                }}>
                  {therapist.profile_picture ? (
                    <motion.img
                      src={therapist.profile_picture}
                      alt={therapist.full_name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      style={{ 
                        borderRadius: '50%', 
                        border: '4px solid #6DA14E',
                        width: '112px',
                        height: '112px',
                        objectFit: 'cover',
                        margin: '0 auto 16px'
                      }}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        width: 112,
                        height: 112,
                        bgcolor: '#6DA14E',
                        margin: '0 auto 16px',
                        border: '4px solid #6DA14E'
                      }}
                    >
                      <FaUser size={48} />
                    </Avatar>
                  )}
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6DA14E' }}>
                      {therapist.full_name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#D1E8E2', mb: 1 }}>
                      {therapist.specialization}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#D1E8E2', mb: 1 }}>
                      Experience: {therapist.experience_years} years
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ 
                        fontWeight: 'bold', 
                        color: therapist.available ? '#6DA14E' : '#E57373',
                        display: 'block',
                        mb: 1
                      }}
                    >
                      {therapist.available ? 'Available for sessions' : 'Currently fully booked'}
                    </Typography>
                    
                    <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                      <FaLinkedin 
                        className="cursor-pointer hover:text-blue-500" 
                        size={20} 
                        onClick={() => window.open(`https://linkedin.com/search?q=${therapist.full_name}`, '_blank')}
                      />
                      <FaTwitter 
                        className="cursor-pointer hover:text-blue-400" 
                        size={20} 
                        onClick={() => window.open(`https://twitter.com/search?q=${therapist.full_name}`, '_blank')}
                      />
                      <FaFacebook 
                        className="cursor-pointer hover:text-blue-600" 
                        size={20} 
                        onClick={() => window.open(`https://facebook.com/search?q=${therapist.full_name}`, '_blank')}
                      />
                    </Stack>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ 
                          mt: 3, 
                          backgroundColor: '#6DA14E', 
                          borderRadius: '50px', 
                          '&:hover': { backgroundColor: '#5A8F3E' },
                          '&:disabled': {
                            backgroundColor: '#3D5A5A',
                            color: '#D1E8E2'
                          }
                        }}
                        onClick={() => navigate(`/book-appointment/${therapist.id}`)}
                        disabled={!therapist.available}
                      >
                        {therapist.available ? 'Book Appointment' : 'Notify When Available'}
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