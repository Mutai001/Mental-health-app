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
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiAlert from "@mui/material/Alert";
import UserOverview from "./UserOverview";
import UserAskAI from "./UserAskAI";
import UserBookings from "./UserBookings/UserBooking";
import UserProfilePage from "./UserProfile";
import UserTherapists from "./UserTherapist";
import UserPayments from "./UserPayments/UserPayments";
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
      {/* AppBar for Mobile */}
      <AppBar position="fixed" sx={{ backgroundColor: "#1F302B", display: { sm: "none" } }}>
        <Toolbar>
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation */}
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
            <DashboardIcon />
          </Avatar>
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: "white" }}>
            {sidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <List>
          {menuItems.map(({ text, icon, route }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setActiveComponent(route)}>
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

      {/* Main Content Area */}
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
