// import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const specialists = [
  {
    name: 'Dr. Faith Peter',
    experience: '10 Years',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggejiIMZ2n0rLLLaL8rEkX-PVchTbqo3d6g&s',
    available: true,
  },
  {
    name: 'Dr. Ray Lawson',
    experience: '8 Years',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAa-ZLtaVSmgMFvWul5lhfmF5kkudgjRN7gQ&s',
    available: false,
  },
  {
    name: 'Dr. Christine Jordan',
    experience: '6 Years',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRkTtVMKhJJeJSYgXJoKod7f81cgLmX-XnA&s',
    available: true,
  },
  {
    name: 'Dr. Cyrus Freeman',
    experience: '4 Years',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9OWhpKZluSAJ2kpNJzLYGNVn41kb_MQEUg&s',
    available: false,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Specialists: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#2C423F', color: '#FFFFFF', py: 12, px: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' }, mb: 6 }}
      >
        Meet Our Specialists
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {specialists.map((specialist, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card sx={{ backgroundColor: '#3D5A5A', color: '#FFFFFF', borderRadius: 3, p: 3, textAlign: 'center' }}>
                <motion.img
                  src={specialist.img}
                  alt={specialist.name}
                  className="rounded-full w-28 h-28 object-cover mx-auto mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={{ borderRadius: '50%', border: '4px solid #6DA14E' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6DA14E' }}>{specialist.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#D1E8E2', mb: 1 }}>
                    Experience: {specialist.experience}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 'bold', color: specialist.available ? '#6DA14E' : '#E57373' }}
                  >
                    {specialist.available ? 'Available' : 'Currently Busy'}
                  </Typography>
                  <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                    <FaLinkedin className="cursor-pointer hover:text-blue-500" size={20} />
                    <FaTwitter className="cursor-pointer hover:text-blue-400" size={20} />
                    <FaFacebook className="cursor-pointer hover:text-blue-600" size={20} />
                  </Stack>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      sx={{ mt: 3, backgroundColor: '#6DA14E', borderRadius: '50px', '&:hover': { backgroundColor: '#5A8F3E' } }}
                      onClick={() => navigate('/register')}
                    >
                      Book an Appointment
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Specialists;
