import { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Box,
  Link
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const API_URL = "http://localhost:8000/api/auth/login";
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.message || "Login failed");
      }
      
      if (!responseData.token || !responseData.user || !responseData.user.role) {
        throw new Error("Invalid response from server");
      }

      // Store user data in localStorage
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("user", JSON.stringify(responseData.user));
      localStorage.setItem("role", responseData.user.role);

      // Show success toast
      toast.success(`Welcome back, ${responseData.user.full_name || 'User'}!`, {
        position: "top-right",
        autoClose: 2000,
        transition: Slide,
        theme: "colored",
      });

      // Redirect based on user role
      setTimeout(() => {
        switch (responseData.user.role) {
          case 'therapist':
            navigate(`/therapist-dashboard/${responseData.user.id}`);
            break;
          case 'admin':
            navigate('/admin-dashboard');
            break;
          default:
            navigate('/user-dashboard');
        }
      }, 2500);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Login failed";
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        transition: Slide,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2C423F',
        backgroundImage: 'linear-gradient(rgba(44, 66, 63, 0.9), rgba(44, 66, 63, 0.9)), url(/lines.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <Card
          sx={{
            maxWidth: 500,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            borderRadius: 3,
            backgroundColor: '#FFFFFF',
          }}
        >
          <CardContent>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  margin: 'auto',
                  mb: 2,
                  backgroundColor: '#6DA14E',
                  color: '#fff',
                }}
              >
                <LockOpenIcon fontSize="large" />
              </Avatar>
            </motion.div>

            <Typography
              variant="h4"
              sx={{ 
                fontWeight: 'bold', 
                color: '#2C423F', 
                mb: 1,
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: '#6D757D', 
                mb: 3,
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Sign in to continue your journey
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 2 }}
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />

              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ mb: 3 }}
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />

              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                  startIcon={!isLoading && <LockOpenIcon />}
                  sx={{
                    backgroundColor: '#6DA14E',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1rem',
                    ':hover': { 
                      backgroundColor: '#5A8F3E',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    },
                  }}
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </motion.div>
            </form>

            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#6D757D',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Don't have an account?{' '}
                <Link 
                  href="/register" 
                  sx={{ 
                    color: '#6DA14E', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Register now
                </Link>
              </Typography>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#6D757D',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <Link 
                  href="/forgot-password" 
                  sx={{ 
                    color: '#6DA14E', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Forgot your password?
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default LoginPage;