import { useState } from "react";
import { Avatar, Button, TextField, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

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
    <Card
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        textAlign: "center",
        boxShadow: 5,
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
          Register
        </Typography>
        <Avatar sx={{ width: 60, height: 60, margin: "auto", mb: 2, bgcolor: "#6DA14E" }}>
          <LockOpenIcon />
        </Avatar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField fullWidth label="Full Name" variant="outlined" {...register("fullName")} error={!!errors.fullName} helperText={errors.fullName?.message} sx={{ mb: 2 }} />
          <TextField fullWidth label="Email" variant="outlined" type="email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} sx={{ mb: 2 }} />
          <TextField fullWidth label="Password" variant="outlined" type="password" {...register("password")} error={!!errors.password} helperText={errors.password?.message} sx={{ mb: 2 }} />
          <TextField fullWidth label="Confirm Password" variant="outlined" type="password" {...register("confirmPassword")} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} sx={{ mb: 2 }} />
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
        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          Already have an account? 
          <Button 
            onClick={() => navigate("/login")} 
            startIcon={<LoginIcon />} 
            sx={{ color: "#2C423F", textTransform: "none", fontWeight: "bold" }}
          >
            Click here to login
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RegistrationPage;