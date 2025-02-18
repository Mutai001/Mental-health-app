import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAlert from "@mui/material/Alert";
import UserOverview from "./UserOverview";
import UserAskAI from "./UserAskAI";
import UserBookings from "./UserBooking";
import UserProfilePage from "./UserProfile";
import UserTherapists from "./UserTherapist";
import UserPayments from "./UserPayments";
import UserSettings from "./UserSettings";

const menuItems = [
  { text: "Profile", icon: <PersonIcon />, route: "profile" },
  { text: "Bookings", icon: <BookOnlineIcon />, route: "bookings" },
  { text: "Therapists", icon: <PsychologyIcon />, route: "therapists" },
  { text: "Ask AI", icon: <HelpIcon />, route: "ask-ai" },
  { text: "Payments", icon: <PaymentIcon />, route: "payments" },
  { text: "Settings", icon: <SettingsIcon />, route: "settings" },
];

export function UserDashboard() {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("overview");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [logoutToast, setLogoutToast] = useState(false);

  const handleLogout = () => {
    setLogoutToast(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#2C423F" }}>
      {/* AppBar for Mobile Menu */}
      <AppBar position="fixed" sx={{ backgroundColor: "#1F302B", display: { sm: "none" } }}>
        <Toolbar>
          <IconButton onClick={() => setOpenDrawer(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Sidebar Navigation */}
      <Drawer
        variant={openDrawer ? "temporary" : "permanent"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#1F302B",
            color: "white",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Avatar sx={{ bgcolor: "#6DA14E", width: 60, height: 60, mx: "auto" }}>
            <DashboardIcon />
          </Avatar>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setActiveComponent("overview")}>
              <ListItemIcon sx={{ color: "white" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          {menuItems.map(({ text, icon, route }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setActiveComponent(route)}>
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

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, p: 3, display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 6, sm: 0 } }}>
        {activeComponent === "overview" && <UserOverview />}
        {activeComponent === "ask-ai" && <UserAskAI />}
        {activeComponent === "bookings" && <UserBookings />}
        {activeComponent === "profile" && <UserProfilePage />}
        {activeComponent === "therapists" && <UserTherapists />}
        {activeComponent === "payments" && <UserPayments />}
        {activeComponent === "settings" && <UserSettings />}
      </Box>

      {/* Logout Snackbar */}
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

export default UserDashboard;