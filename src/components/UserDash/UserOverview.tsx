import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import PaymentIcon from "@mui/icons-material/Payment";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PsychologyIcon from "@mui/icons-material/Psychology";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const stats = [
  { title: "Total Bookings", count: 120, icon: <BookOnlineIcon />, color: "#6DA14E" },
  { title: "Total Payments", count: 50, icon: <PaymentIcon />, color: "#1F302B" },
  { title: "Therapists Available", count: 25, icon: <PsychologyIcon />, color: "#6DA14E" },
];

function UserOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box sx={{ p: 4, maxWidth: 900 }}>
        <Typography variant="h4" sx={{ color: "#FFFFFF", mb: 3, textAlign: "center" }}>
          Dashboard Overview
        </Typography>
        <Grid container spacing={3}>
          {stats.map(({ title, count, icon, color }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Card sx={{ backgroundColor: color, color: "white", borderRadius: 3, boxShadow: 5 }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                    {icon}
                  </Box>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>{count}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}

export default UserOverview;
