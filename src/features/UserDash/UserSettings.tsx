import { useState } from "react";
import { Card, CardContent, TextField, Button, Typography, Switch, FormControlLabel } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CircularProgress from "@mui/material/CircularProgress";

const UserSettings = () => {
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Settings Updated Successfully!");
    }, 2000);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        textAlign: "center",
        boxShadow: 5,
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
          User Settings
        </Typography>

        <FormControlLabel
          control={<Switch checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />}
          label="Enable Notifications"
          sx={{ display: "block", mb: 2 }}
        />

        <TextField
          fullWidth
          label="Change Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          disabled={loading}
          sx={{
            backgroundColor: "#2C423F",
            color: "#fff",
            textTransform: "none",
            fontWeight: "bold",
            ":hover": { backgroundColor: "#1F302B" },
          }}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserSettings;
