import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";

export function TherapistSettings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSaveChanges = () => {
    alert("Settings saved successfully!");
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
      <Card sx={{ maxWidth: 500, p: 3, boxShadow: 5, borderRadius: 3, backgroundColor: "#FFFFFF" }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
            Therapist Settings
          </Typography>
          <TextField
            label="Full Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} />}
            label="Enable Notifications"
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TherapistSettings;
