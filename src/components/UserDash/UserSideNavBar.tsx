import { useState } from "react";
import { Drawer, List, ListItemText, ListItemButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";

const UserDashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">User Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer}>
        <List>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4">Welcome to Your Dashboard</Typography>
      </Box>
    </Box>
  );
};

export default UserDashboard;
