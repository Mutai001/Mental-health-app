import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const TherapistProfile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Jane Doe",
    email: "jane.doe@example.com",
    phone: "+123 456 7890",
    specialization: "Cognitive Behavioral Therapy",
  });

  const handleEdit = () => setEditing(!editing);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Card sx={{ maxWidth: 500, mx: "auto", p: 3, boxShadow: 5, borderRadius: 3 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar sx={{ width: 80, height: 80, mx: "auto" }}>
              {profile.name.charAt(0)}
            </Avatar>
            <IconButton
              sx={{ position: "absolute", bottom: 0, right: 0, bgcolor: "#6DA14E" }}
              size="small"
              onClick={handleEdit}
            >
              {editing ? <SaveIcon sx={{ color: "white" }} /> : <EditIcon sx={{ color: "white" }} />}
            </IconButton>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            {editing ? (
              <TextField name="name" value={profile.name} onChange={handleChange} fullWidth />
            ) : (
              profile.name
            )}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {editing ? (
              <TextField name="specialization" value={profile.specialization} onChange={handleChange} fullWidth />
            ) : (
              profile.specialization
            )}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Email:
            </Typography>
            {editing ? (
              <TextField name="email" value={profile.email} onChange={handleChange} fullWidth />
            ) : (
              <Typography>{profile.email}</Typography>
            )}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Phone:
            </Typography>
            {editing ? (
              <TextField name="phone" value={profile.phone} onChange={handleChange} fullWidth />
            ) : (
              <Typography>{profile.phone}</Typography>
            )}
          </Box>
          {editing && (
            <Button
              variant="contained"
              sx={{ mt: 3, bgcolor: "#6DA14E" }}
              onClick={handleEdit}
            >
              Save Changes
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TherapistProfile;
