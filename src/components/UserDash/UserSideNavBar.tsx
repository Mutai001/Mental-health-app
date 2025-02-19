import { useState } from "react";
import { Drawer, List, ListItemText, ListItemButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Typography, Box, CssBaseline } from "@mui/material";

const UserDashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">User Dashboard</Typography>
        </Toolbar>
      </AppBar>
      
      {/* Responsive Drawer */}
      <Drawer 
        anchor="left" 
        open={open} 
        onClose={toggleDrawer} 
        sx={{
          "& .MuiDrawer-paper": { width: { xs: "75%", sm: "250px" } }
        }}
      >
        <List>
          {["Home", "Profile", "Settings"].map((text) => (
            <ListItemButton key={text} component="a" href="#">
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, width: "100%" }}>
        <Typography variant="h4">Welcome to Your Dashboard</Typography>
      </Box>
    </Box>
  );
};

export default UserDashboard;
