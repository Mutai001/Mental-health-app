import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export function TherapistDashboard() {
  const navigate = useNavigate();
  const [, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Logged out successfully!");
      navigate("/login");
      setLoading(false);
    }, 1500);
  };

  const menuItems = [
    { text: "Profile", icon: <PersonIcon />, route: "/therapist-profile" },
    { text: "Appointments", icon: <CalendarMonthIcon />, route: "/appointments" },
    { text: "Messages", icon: <MessageIcon />, route: "/therapist-messages" },
    { text: "Patients", icon: <PsychologyIcon />, route: "/patients" },
    { text: "Payments", icon: <PaymentIcon />, route: "/therapist-payments" },
    { text: "Settings", icon: <SettingsIcon />, route: "/therapist-settings" },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#2C423F" }}>
      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 250 : 80,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 250 : 80,
            boxSizing: "border-box",
            backgroundColor: "#1F302B",
            color: "white",
            transition: "width 0.3s ease-in-out",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
          {open && <Typography variant="h6">Therapist Dashboard</Typography>}
          <IconButton onClick={() => setOpen(!open)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map(({ text, icon, route }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(route)}>
                <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                {open && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ color: "red" }}>
              <ListItemIcon sx={{ color: "red" }}>
                <LogoutIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Logout" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
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
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
                Welcome to Your Therapist Dashboard
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Manage your profile, appointments, messages, and clients.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
}

export default TherapistDashboard;
