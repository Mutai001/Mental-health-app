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
import { toast } from "react-toastify";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
      await loginUser(data).unwrap();
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/dashboard"); // Redirect after login
    } catch {
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
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
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card
          sx={{
            maxWidth: 500,
            p: 3,
            textAlign: "center",
            boxShadow: 5,
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}
            >
              Login
            </Typography>
            <motion.div whileHover={{ scale: 1.1 }}>
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
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <CircularProgress size={20} color="inherit" />
                    </motion.div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </motion.div>
            </form>
            <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{ color: "#6DA14E", textDecoration: "none" }}
              >
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
