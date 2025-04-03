import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariant = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
};

// Define the user data interface that matches your Zod schema
interface UserData {
  full_name: string;
  email: string;
  contact_phone?: string;
  address?: string;
  password: string;
  role: "patient";
}

export function RegistrationPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Form errors
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    contactPhone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      email: "",
      contactPhone: "",
      address: "",
      password: "",
      confirmPassword: "",
    };

    // Full name validation
    if (fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Password validation
    if (password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
      valid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      toast.loading("Registering user...", { id: "register" });
      
      // Create user data with type that matches the Zod schema
      const userData: UserData = {
        full_name: fullName,
        email,
        contact_phone: contactPhone || undefined, // Handle optional field
        address: address || undefined, // Handle optional field
        password,
        role: "patient", // Always set to patient, can't be changed by user
      };

      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      
      toast.success("Registration successful! Redirecting...", { id: "register" });
      
      // Store user data
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed", { id: "register" });
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 120px)", // Subtract header/footer height
        padding: "20px 0",
        backgroundColor: "#2C423F",
        backgroundImage: 'linear-gradient(rgba(44, 66, 63, 0.9), rgba(44, 66, 63, 0.9)), url(/lines.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Toaster position="top-right" />
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <Card
          sx={{
            width: "100%",
            p: 3,
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <CardContent>
            <motion.div variants={itemVariant}>
              <Avatar 
                sx={{ 
                  width: 60, 
                  height: 60, 
                  margin: "auto", 
                  mb: 2, 
                  bgcolor: "#6DA14E" 
                }}
              >
                <LockOpenIcon />
              </Avatar>
            </motion.div>

            <motion.div variants={itemVariant}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: "bold", 
                  color: "#2C423F", 
                  mb: 2,
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Create an Account
              </Typography>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariant}>
                <TextField 
                  fullWidth 
                  label="Full Name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: { borderRadius: 2 }
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariant}>
                <TextField 
                  fullWidth 
                  label="Email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: { borderRadius: 2 }
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariant}>
                <TextField 
                  fullWidth 
                  label="Phone Number" 
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  error={!!errors.contactPhone}
                  helperText={errors.contactPhone}
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: { borderRadius: 2 }
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariant}>
                <TextField 
                  fullWidth 
                  label="Address" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  error={!!errors.address}
                  helperText={errors.address}
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: { borderRadius: 2 }
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariant}>
                <TextField 
                  fullWidth 
                  label="Password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: { borderRadius: 2 }
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariant}>
                <TextField 
                  fullWidth 
                  label="Confirm Password" 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: { borderRadius: 2 }
                  }}
                />
              </motion.div>

              <motion.div 
                variants={itemVariant}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  fullWidth 
                  variant="contained" 
                  disabled={isLoading} 
                  sx={{ 
                    backgroundColor: "#6DA14E", 
                    color: "#fff", 
                    textTransform: "none", 
                    fontWeight: "bold",
                    padding: "10px 0",
                    borderRadius: 2,
                    ":hover": { 
                      backgroundColor: "#5A8F3E",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                    }
                  }}
                >
                  {isLoading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
                </Button>
              </motion.div>
            </form>

            <motion.div variants={itemVariant}>
              <Typography 
                variant="body2" 
                sx={{ 
                  mt: 3, 
                  textAlign: "center",
                  fontFamily: 'Poppins, sans-serif',
                  color: "#6D757D" 
                }}
              >
                Already have an account?{" "}
                <Button 
                  onClick={() => navigate("/login")} 
                  startIcon={<LoginIcon />} 
                  sx={{ 
                    color: "#6DA14E", 
                    textTransform: "none", 
                    fontWeight: "bold" 
                  }}
                >
                  Sign In
                </Button>
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default RegistrationPage;