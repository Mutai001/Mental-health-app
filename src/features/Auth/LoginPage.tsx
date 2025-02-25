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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLoginUserMutation } from "../../redux/loginApi";
import { toast, Slide } from "react-toastify";

// Validation schema
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

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Submitting data:", data); // Debugging

      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      const response = await loginUser(formData).unwrap();
      console.log("API Response:", response); // Debugging

      if (!response || !response.token || !response.role) {
        throw new Error("Invalid response from server. Missing token or role.");
      }

      toast.success("🎉 Login successful!", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
        theme: "colored",
      });

      // Store token
      localStorage.setItem("token", response.token);

      // Redirect based on role
      navigate(`/${response.role}`);
    } catch (error: unknown) {
      console.error("Login error:", error);

      let errorMessage = "Login failed. Please try again.";
      if (typeof error === "object" && error !== null && "data" in error && typeof (error as { data: { message: string } }).data === "object" && "message" in (error as { data: { message: string } }).data) {
        if (error && typeof error === "object" && "data" in error && typeof (error as { data: { message: string } }).data === "object") {
          errorMessage = (error as { data: { message: string } }).data.message; // API error message
        }
      } else if (error instanceof Error) {
        errorMessage = error.message; // JavaScript error
      }

      toast.error(`❌ ${errorMessage}`, {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
        theme: "colored",
      });
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
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}>
        <Card sx={{ maxWidth: 500, p: 3, textAlign: "center", boxShadow: 5, borderRadius: 3, backgroundColor: "#FFFFFF" }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
              Login
            </Typography>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Avatar sx={{ width: 60, height: 60, margin: "auto", mb: 2, bgcolor: "#6DA14E" }}>
                <LockOpenIcon />
              </Avatar>
            </motion.div>
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
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                  sx={{
                    backgroundColor: "#2C423F",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: "bold",
                    ":hover": { backgroundColor: "#1F302B" },
                  }}
                >
                  {isLoading ? <CircularProgress size={20} color="inherit" /> : "Login"}
                </Button>
              </motion.div>
            </form>
            <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#6DA14E", textDecoration: "none" }}>
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
