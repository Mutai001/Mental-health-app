import { Card, CardContent, Typography, Grid, Box, Button } from "@mui/material";
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

function UserTherapist() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
        <Typography variant="h4" sx={{ color: "#FFFFFF", mb: 3, textAlign: "center" }}>
          Available Therapists
        </Typography>
        <Grid container spacing={3}>
          {therapists.map(({ name, specialization, availability }) => (
            <Grid item xs={12} sm={6} md={4} key={name}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card sx={{ backgroundColor: "#6DA14E", color: "white", borderRadius: 3, boxShadow: 5 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2, fontSize: 40 }}>
                      <PsychologyIcon fontSize="large" />
                    </Box>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body1">{specialization}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bold", mt: 1 }}>{availability}</Typography>
                    {availability === "Available" && (
                      <Button variant="contained" sx={{ mt: 2, backgroundColor: "#1F302B" }}>
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
}

export default UserTherapist;
