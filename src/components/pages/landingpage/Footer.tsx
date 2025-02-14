import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import logo from '../../../assets/images/mindful logo.png';

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

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const Logo = () => (
  <motion.div variants={fadeInUp}>
    <img src={logo} alt="Mindful Logo" style={{ height: '40px', marginBottom: '16px' }} />
  </motion.div>
);

const Footer: React.FC = () => {
  return (
    <motion.footer
      style={{ backgroundColor: '#2C423F', color: '#FFFFFF', padding: '40px 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Logo Section */}
        <Logo />

        {/* Title */}
        <motion.div variants={fadeInUp}>
          <Typography
            variant="h4"
            style={{ marginBottom: '16px', fontWeight: 'bold', color: '#FFFFFF' }}
          >
            Get our latest resources and event invites right in your inbox!
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeInUp}>
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#D1D5DB' }}>
            All of Our Resources and Special Invites Can Be Easily Accessible by Our Subscribers Anywhere.
          </Typography>
        </motion.div>

        {/* Subscribe Section */}
        <motion.div variants={fadeInUp}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '16px',
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                gap: '10px',
              },
            }}
          >
            <TextField
              placeholder="Your Email Here"
              variant="outlined"
              fullWidth
              sx={{
                maxWidth: '350px',
                backgroundColor: '#FFFFFF',
                borderRadius: '30px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '30px',
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#6DA14E',
                color: '#FFFFFF',
                fontWeight: 'bold',
                height: '56px',
                borderRadius: '30px',
                marginLeft: { xs: 0, sm: '16px' },
                padding: '0 24px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#558D39',
                },
              }}
            >
              SUBSCRIBE NOW
            </Button>
          </Box>
        </motion.div>

        {/* Copyright Text */}
        <motion.div variants={fadeInUp}>
          <Typography variant="body2" style={{ marginBottom: '16px', color: '#D1D5DB' }}>
            © 2023. All Rights Reserved. Privacy Policy | Terms & Conditions
          </Typography>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}
          variants={staggerContainer}
        >
          {['Services', 'Case Studies', 'Testimonials', 'Team', 'Blogs', 'About'].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              style={{ color: '#FFFFFF', textDecoration: 'none' }}
              variants={scaleUp}
              whileHover={{ scale: 1.1, color: '#6DA14E' }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}
          variants={staggerContainer}
        >
          {[
            { icon: <FacebookIcon fontSize="large" />, color: '#1877F2' },
            { icon: <TwitterIcon fontSize="large" />, color: '#1DA1F2' },
            { icon: <InstagramIcon fontSize="large" />, color: '#E4405F' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              style={{ color: '#FFFFFF' }}
              variants={scaleUp}
              whileHover={{ scale: 1.2, color: social.color }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;