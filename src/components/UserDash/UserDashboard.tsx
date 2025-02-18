import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
import UserOverview from "./UserOverview";
import UserAskAI from "./UserAskAI";
import UserBookings from "./UserBooking";
import UserProfilePage from "./UserProfile";
import UserTherapists from "./UserTherapist";
import UserPayments from "./UserPayments";
import UserSettings from "./UserSettings"



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

  const handleLogout = () => {
    setTimeout(() => {
      alert("Logged out successfully!");
      navigate("/login");
    }, 1500);
  };

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
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {activeComponent === "overview" && <UserOverview />}
        {activeComponent === "ask-ai" && <UserAskAI />}
        {activeComponent === "bookings" && <UserBookings />}
        {activeComponent === "profile" && <UserProfilePage />}
        {activeComponent === "therapists" && <UserTherapists />}
        {activeComponent === "payments" && <UserPayments/>}
        {activeComponent === "settings" && <UserSettings/>}

        {/* Future imports for Profile, Bookings, etc. can be placed here */}
      </Box>
    </Box>
  );
}

export default UserDashboard;
