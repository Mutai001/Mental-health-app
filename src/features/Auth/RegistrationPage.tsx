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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useRegisterUserMutation } from "../../redux/registerApi";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const schema = z
  .object({
    full_name: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    contact_phone: z.string().min(10, "Invalid phone number"),
    address: z.string().min(3, "Address is required"),
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

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onSubmit = async (data: FormData) => {
    try {
      toast.loading("Registering user...", { id: "register" });

      const userData = {
        full_name: data.full_name,
        email: data.email,
        contact_phone: data.contact_phone,
        address: data.address,
        password: data.password,
        role: "user",
      };

      const response = await registerUser(userData).unwrap();
      toast.success("Registration successful! Redirecting...", { id: "register" });
      console.log("User registered:", response);

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error("Registration failed. Please try again.", { id: "register" });
      console.error("Registration failed:", err);
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
      <Toaster position="top-right" reverseOrder={false} />
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
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
              Register
            </Typography>
            <Avatar sx={{ width: 60, height: 60, margin: "auto", mb: 2, bgcolor: "#6DA14E" }}>
              <LockOpenIcon />
            </Avatar>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField fullWidth label="Full Name" {...register("full_name")} error={!!errors.full_name} helperText={errors.full_name?.message} sx={{ mb: 2 }} />
              <TextField fullWidth label="Email" type="email" {...register("email")} error={!!errors.email} helperText={errors.email?.message} sx={{ mb: 2 }} />
              <TextField fullWidth label="Phone Number" {...register("contact_phone")} error={!!errors.contact_phone} helperText={errors.contact_phone?.message} sx={{ mb: 2 }} />
              <TextField fullWidth label="Address" {...register("address")} error={!!errors.address} helperText={errors.address?.message} sx={{ mb: 2 }} />
              <TextField fullWidth label="Password" type="password" {...register("password")} error={!!errors.password} helperText={errors.password?.message} sx={{ mb: 2 }} />
              <TextField fullWidth label="Confirm Password" type="password" {...register("confirmPassword")} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} sx={{ mb: 2 }} />

              <Button type="submit" fullWidth variant="contained" disabled={isLoading} sx={{ backgroundColor: "#2C423F", color: "#fff", textTransform: "none", fontWeight: "bold", ":hover": { backgroundColor: "#1F302B" } }}>
                {isLoading ? <CircularProgress size={20} color="inherit" /> : "Register"}
              </Button>
            </form>

            <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
              Already have an account?
              <Button onClick={() => navigate("/login")} startIcon={<LoginIcon />} sx={{ color: "#2C423F", textTransform: "none", fontWeight: "bold" }}>
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
