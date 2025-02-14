import { useState } from "react";
import { TextField, Button, Typography, Container, Paper } from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Google from "@mui/icons-material/Google";

const schema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;

export default function RegistrationPage() {
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
    <Container maxWidth="sm" className="mt-10">
      <Paper className="p-6 shadow-lg rounded-lg bg-white">
        <Typography variant="h4" className="text-center font-semibold text-gray-800 mb-6">
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextField label="Full Name" fullWidth {...register("fullName")} error={!!errors.fullName} helperText={errors.fullName?.message} />
          <TextField label="Email" type="email" fullWidth {...register("email")} error={!!errors.email} helperText={errors.email?.message} />
          <TextField label="Password" type="password" fullWidth {...register("password")} error={!!errors.password} helperText={errors.password?.message} />
          <TextField label="Confirm Password" type="password" fullWidth {...register("confirmPassword")} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} />
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
          {/* <Button fullWidth variant="outlined" color="inherit" startIcon={<GoogleIcon />}>
            Register with Google
          </Button> */}
        </form>
      </Paper>
    </Container>
  );
}
