import { useState } from "react";
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
import { z } from "zod";
import { useForm, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Fade-in animation for the card
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Zod schema for form validation
const schema = z
  .object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export function RegistrationPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      console.log("User registered:", data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#2C423F",
      }}
    >
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card
          sx={{
            maxWidth: 500,
            mx: "auto",
            p: 3,
            textAlign: "center",
            boxShadow: 5,
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent>
            {/* Title */}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}
            >
              Register
            </Typography>

            {/* Avatar Icon */}
            <Avatar
              sx={{
                width: 60,
                height: 60,
                margin: "auto",
                mb: 2,
                bgcolor: "#6DA14E",
              }}
            >
              <LockOpenIcon />
            </Avatar>

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name Field */}
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                {...register("fullName")}
                error={!!errors.fullName}
                helperText={(errors.fullName as FieldError)?.message || ""}
                sx={{ mb: 2 }}
              />

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                {...register("email")}
                error={!!errors.email}
                helperText={(errors.email as FieldError)?.message || ""}
                sx={{ mb: 2 }}
              />

              {/* Password Field */}
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={(errors.password as FieldError)?.message || ""}
                sx={{ mb: 2 }}
              />

              {/* Confirm Password Field */}
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type="password"
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={(errors.confirmPassword as FieldError)?.message || ""}
                sx={{ mb: 2 }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: "#2C423F",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#1F302B" },
                }}
              >
                {loading ? <CircularProgress size={20} color="inherit" /> : "Register"}
              </Button>
            </form>

            {/* Login Link */}
            <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
              Already have an account?
              <Button
                onClick={() => navigate("/login")}
                startIcon={<LoginIcon />}
                sx={{
                  color: "#2C423F",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Click here to login
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default RegistrationPage;