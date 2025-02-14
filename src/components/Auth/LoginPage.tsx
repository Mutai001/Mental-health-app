import { useState } from "react";
import { Avatar, Button, TextField, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      console.log("User logged in:", data);
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
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
          Login
        </Typography>
        <Avatar sx={{ width: 60, height: 60, margin: "auto", mb: 2, bgcolor: "#6DA14E" }}>
          <LockOpenIcon />
        </Avatar>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ mb: 2 }}
          />
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
            {loading ? <CircularProgress size={20} color="inherit" /> : "Login"}
          </Button>
        </form>
        <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
          Don't have an account? <Link to="/register" style={{ color: "#6DA14E", textDecoration: "none" }}>Register</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LoginPage;
