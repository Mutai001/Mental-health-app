import {
  Avatar,
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
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      alert("Logged out successfully!");
      navigate("/login");
    }, 1500);
  };

  const adminMenuItems = [
    { text: "User Management", icon: <PeopleIcon />, route: "/admin-user-management" },
    { text: "Reports", icon: <BarChartIcon />, route: "/admin/reports" },
    { text: "Appointments", icon: <CalendarTodayIcon />, route: "/admin/appointments" },
    { text: "Payments", icon: <PaymentIcon />, route: "/admin/payments" },
    { text: "Settings", icon: <SettingsIcon />, route: "/admin/settings" },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#2C423F" }}>
      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "#1F302B",
            color: "white",
          },
        }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Avatar sx={{ bgcolor: "#6DA14E", width: 60, height: 60, mx: "auto" }}>
            <DashboardIcon />
          </Avatar>
          <Typography variant="h6" sx={{ mt: 1 }}>Admin Panel</Typography>
        </Box>
        <List>
          {adminMenuItems.map(({ text, icon, route }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(route)}>
                <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ color: "red" }}>
              <ListItemIcon sx={{ color: "red" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
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
                Welcome to Admin Dashboard
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Manage users, reports, appointments, and payments efficiently.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
