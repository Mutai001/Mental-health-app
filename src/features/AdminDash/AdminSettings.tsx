import { Box, Typography, Switch, TextField, Button, Paper } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

const AdminSettings = () => {
  return (
    <Box sx={{ p: 3, color: "white" }}>
      <Typography variant="h4" gutterBottom>
        <SettingsApplicationsIcon sx={{ mr: 1, verticalAlign: "middle" }} /> Admin Settings
      </Typography>

      {/* Profile Settings */}
      <Paper sx={{ p: 3, mb: 3, backgroundColor: "#1F302B" }}>
        <Typography variant="h6" gutterBottom>
          <AccountCircleIcon sx={{ mr: 1 }} /> Profile Settings
        </Typography>
        <TextField label="Full Name" variant="outlined" fullWidth sx={{ mb: 2, backgroundColor: "white" }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2, backgroundColor: "white" }} />
        <Button variant="contained" color="primary">Update Profile</Button>
      </Paper>

      {/* Security Settings */}
      <Paper sx={{ p: 3, mb: 3, backgroundColor: "#1F302B" }}>
        <Typography variant="h6" gutterBottom>
          <SecurityIcon sx={{ mr: 1 }} /> Security Settings
        </Typography>
        <Typography>Enable Two-Factor Authentication</Typography>
        <Switch defaultChecked color="success" />
      </Paper>

      {/* System Preferences */}
      <Paper sx={{ p: 3, backgroundColor: "#1F302B" }}>
        <Typography variant="h6" gutterBottom>
          System Preferences
        </Typography>
        <Typography>Dark Mode</Typography>
        <Switch defaultChecked color="success" />
      </Paper>
    </Box>
  );
};

export default AdminSettings;
