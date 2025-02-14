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
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const drawerWidth = 240;

const UserSideNavBar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => setOpen(!open);

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
          width: open ? drawerWidth : 70,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 70,
            transition: "width 0.3s ease-in-out",
            boxSizing: "border-box",
            backgroundColor: "#2C423F",
            color: "white",
            borderRight: "1px solid #3B544D",
          },
        }}
      >
        {/* Toolbar with Toggle Button */}
        <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
          {open && <Box sx={{ fontWeight: "bold", color: "#6DA14E" }}>Mindful</Box>}
          <IconButton onClick={handleToggle} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider sx={{ borderColor: "#3B544D" }} />
        <List>
          {navItems.map((item, index) => (
            <Tooltip title={!open ? item.text : ""} placement="right" key={index}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 50,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#6DA14E",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={item.text} />}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>
      {/* Main Content */}
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f4f6f8",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
      </Box> */}
    </Box>
  );
};

export default UserSideNavBar;
