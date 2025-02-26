import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import PsychologyIcon from "@mui/icons-material/Psychology";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const therapists = [
  { name: "Dr. John Doe", specialization: "Cognitive Therapy", availability: "Available" },
  { name: "Dr. Jane Smith", specialization: "Behavioral Therapy", availability: "Available" },
  { name: "Dr. Mark Wilson", specialization: "Psychodynamic Therapy", availability: "Busy" },
];

const UserTherapist = () => {
  const [availableTherapists, setAvailableTherapists] = useState(therapists);

  useEffect(() => {
    // Simulated API call (replace with actual fetch if needed)
    setTimeout(() => setAvailableTherapists(therapists), 500);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box sx={{ p: 4, maxWidth: 1000, mx: "auto", backgroundColor: "#F5F5F5", borderRadius: 3, boxShadow: 3 }}>
        <Typography
          variant="h4"
          sx={{ color: "#2C423F", mb: 3, textAlign: "center", fontWeight: "bold", textTransform: "uppercase" }}
        >
          Available Therapists
        </Typography>
        <Grid container spacing={3}>
          {availableTherapists.map(({ name, specialization, availability }) => (
            <Grid item xs={12} sm={6} md={4} key={name}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Card
                  sx={{
                    backgroundColor: availability === "Available" ? "#4CAF50" : "#D32F2F",
                    color: "white",
                    borderRadius: 3,
                    boxShadow: 5,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                      <PsychologyIcon fontSize="large" sx={{ fontSize: 50 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>{name}</Typography>
                    <Typography variant="body1" sx={{ fontStyle: "italic", mb: 1 }}>{specialization}</Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        mt: 1,
                        color: availability === "Available" ? "#FFD700" : "#FFEB3B",
                        fontSize: "1rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {availability}
                    </Typography>
                    {availability === "Available" && (
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          backgroundColor: "#1F302B",
                          "&:hover": { backgroundColor: "#163022" },
                          padding: "8px 16px",
                          borderRadius: "8px",
                        }}
                      >
                        Book Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default UserTherapist;
