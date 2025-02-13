import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const drawerWidth = 240;

const SideNavBar: React.FC = () => {
  // Toggle state for the drawer (open/closed)
  const [open, setOpen] = useState(true);
  const handleToggle = () => setOpen(!open);

  // Navigation items with corresponding icons
  const navItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Profile", icon: <AccountCircleIcon /> },
    { text: "Chat", icon: <ChatIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Help", icon: <HelpOutlineIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: open ? drawerWidth : 60,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 60,
            boxSizing: "border-box",
            backgroundColor: "primary.main", // Uses the primary color from your theme
            color: "white",
          },
        }}
      >
        {/* Toolbar for spacing and toggle button */}
        <Toolbar>
          <IconButton onClick={handleToggle} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f4f6f8",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {/* Insert your main application content here */}
        <h1>Welcome to the Mental Health Platform</h1>
      </Box>
    </Box>
  );
};

export default SideNavBar;
