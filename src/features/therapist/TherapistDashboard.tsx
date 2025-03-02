import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import MuiAlert from "@mui/material/Alert";

import TherapistProfile from "./TherapistProfile";
import TherapistAppointments from "./Appointments";
import TherapistMessages from "./TherapistMessages";
import TherapistPatients from "./Patients";
import TherapistPayments from "./TherapistPayments";
import TherapistSettings from "./TherapistSettings";

const therapistMenuItems = [
  { text: "Profile", icon: <PersonIcon />, component: <TherapistProfile /> },
  { text: "Appointments", icon: <CalendarMonthIcon />, component: <TherapistAppointments /> },
  { text: "Messages", icon: <MessageIcon />, component: <TherapistMessages /> },
  { text: "Patients", icon: <PsychologyIcon />, component: <TherapistPatients /> },
  { text: "Payments", icon: <PaymentIcon />, component: <TherapistPayments /> },
  { text: "Settings", icon: <SettingsIcon />, component: <TherapistSettings /> },
];

export function TherapistDashboard() {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState(<TherapistProfile />);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [logoutToast, setLogoutToast] = useState(false);

  const handleLogout = () => {
    setLogoutToast(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#2C423F" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1F302B", display: { sm: "none" } }}>
        <Toolbar>
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            width: sidebarOpen ? 250 : 70,
            transition: "width 0.3s",
            backgroundColor: "#1F302B",
            color: "white",
            overflowX: "hidden",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
          <Avatar sx={{ bgcolor: "#6DA14E", width: 50, height: 50 }}>
            <PersonIcon />
          </Avatar>
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: "white" }}>
            {sidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <List>
          {therapistMenuItems.map(({ text, icon, component }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setActiveComponent(component)}>
                <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                {sidebarOpen && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ color: "red" }}>
              <ListItemIcon sx={{ color: "red" }}>
                <LogoutIcon />
              </ListItemIcon>
              {sidebarOpen && <ListItemText primary="Logout" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          transition: "margin-left 0.3s",
          ml: sidebarOpen ? "250px" : "70px",
          width: "100%",
          height: "100%",
        }}
      >
        {activeComponent}
      </Box>

      <Snackbar
        open={logoutToast}
        autoHideDuration={2000}
        onClose={() => setLogoutToast(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert severity="success" elevation={6} variant="filled" onClose={() => setLogoutToast(false)}>
          Logged out successfully!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}

export default TherapistDashboard;
