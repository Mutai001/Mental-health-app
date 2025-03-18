import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, Slide } from 'react-toastify';

// Redux imports
import { loginUser } from '../../redux/loginApi';
import { useAppDispatch, useAppSelector } from '../../redux/store';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const resultAction = await dispatch(loginUser(data));

      if (loginUser.fulfilled.match(resultAction)) {
        const user = resultAction.payload.user;

        // Display success toast
        toast.success('🎉 Login successful!', {
          position: 'top-right',
          autoClose: 3000,
          transition: Slide,
          theme: 'colored',
        });

        // Redirect based on user role
        switch (user.role) {
          case 'user':
            navigate('/user');
            break;
          case 'admin':
            navigate('/admin');
            break;
          case 'therapist':
            navigate('/therapist');
            break;
          default:
            navigate('/');
        }
      }
    } catch {
      // Handle any errors during login
      toast.error('❌ Login failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        transition: Slide,
        theme: 'colored',
      });
    }
  };

  // Display server error if exists
  React.useEffect(() => {
    if (error) {
      toast.error(`❌ ${error}`, {
        position: 'top-right',
        autoClose: 3000,
        transition: Slide,
        theme: 'colored',
      });
    }
  }, [error]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2C423F',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <Card
          sx={{
            maxWidth: 500,
            p: 3,
            textAlign: 'center',
            boxShadow: 5,
            borderRadius: 3,
            backgroundColor: '#FFFFFF',
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: '#2C423F', mb: 2 }}
            >
              Login
            </Typography>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  margin: 'auto',
                  mb: 2,
                  bgcolor: '#6DA14E',
                }}
              >
                <LockOpenIcon />
              </Avatar>
            </motion.div>

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
              />

              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ mb: 2 }}
              />

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                  sx={{
                    backgroundColor: '#2C423F',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    ':hover': { backgroundColor: '#1F302B' },
                  }}
                >
                  {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Login'}
                </Button>
              </motion.div>
            </form>

            <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#6DA14E', textDecoration: 'none' }}>
                Register
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default LoginPage;