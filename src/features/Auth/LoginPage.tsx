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

type FormData = {
  email: string;
  password: string;
};

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
      // Log what we're about to send
      console.log("Attempting login with:", {
        email: data.email,
        password: "***REDACTED***" // For security, don't log actual password
      });
      
      // Send the data directly as a plain object
      const response = await loginUser({
        email: data.email,
        password: data.password
      }).unwrap();
      
      console.log("Login successful:", response);
      
      // Validate response
      if (!response || !response.token || !response.role) {
        throw new Error("Invalid response from server. Missing token or role.");
      }
      
      // Store token in localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("userRole", response.role);
      
      // Success message
      toast.success("🎉 Login successful!", {
        position: "top-right",
        autoClose: 3000,
        transition: Slide,
        theme: "colored",
      });

      // Redirect based on role
      switch (response.role) {
        case "user":
          navigate("/user");
          break;
        case "admin":
          navigate("/admin");
          break;
        case "therapist":
          navigate("/therapist");
          break;
        default:
          console.error("Unknown role:", response.role);
          navigate("/");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);

      // Handle ZodError specifically
      if (error && typeof error === "object" && "data" in error) {
        const errorData = error.data as { name?: string; issues?: { path: string[]; message: string }[]; status?: number; error?: string; message?: string };
        
        if (errorData?.name === "ZodError" && Array.isArray(errorData?.issues)) {
          // Extract all error messages
          const zodErrorMessages = errorData.issues.map((issue: { path: string[]; message: string }) => {
            return `${issue.path.join('.')}: ${issue.message}`;
          }).join(', ');
          
          toast.error(`❌ Validation error: ${zodErrorMessages}`, {
            position: "top-right",
            autoClose: 5000,
            transition: Slide,
            theme: "colored",
          });
          return;
        }
        
        // Handle 401 Unauthorized specifically
        if ("status" in error && error.status === 401) {
          const errorMessage = errorData?.error || "Invalid email or password";
          
          toast.error(`❌ ${errorMessage}`, {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
            theme: "colored",
          });
          return;
        }
        
        // Check for error message in various formats
        if (errorData?.error) {
          toast.error(`❌ ${errorData.error}`, {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
            theme: "colored",
          });
          return;
        }
        
        if (errorData?.message) {
          toast.error(`❌ ${errorData.message}`, {
            position: "top-right",
            autoClose: 3000,
            transition: Slide,
            theme: "colored",
          });
          return;
        }
      }
      
      // Default error message
      toast.error(`❌ Login failed. Please try again.`, {
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