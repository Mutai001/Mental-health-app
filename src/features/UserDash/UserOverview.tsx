import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import PaymentIcon from "@mui/icons-material/Payment";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { title: "Active Bookings", count: 120, icon: <BookOnlineIcon />, color: "#4CAF50" },
  { title: "Payment History", count: 50, icon: <PaymentIcon />, color: "#2196F3" },
  { title: "Therapists Available", count: 25, icon: <PsychologyIcon />, color: "#FF9800" },
];

const doughnutData = {
  labels: ["Active Bookings", "Payment History", "Therapists Available"],
  datasets: [
    {
      label: "Count",
      data: [120, 50, 25],
      backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"],
      borderColor: ["#4CAF50", "#2196F3", "#FF9800"],
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Bookings",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "#4CAF50",
      borderColor: "#4CAF50",
      borderWidth: 1,
    },
  ],
};

function UserOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box sx={{ p: 3, maxWidth: 1000, mx: "auto" }}>
        <Typography variant="h5" sx={{ color: "#333", mb: 2, textAlign: "center", fontWeight: "bold" }}>
          User Dashboard
        </Typography>
        <Grid container spacing={2}>
          {stats.map(({ title, count, icon, color }) => (
            <Grid item xs={12} sm={4} key={title}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card sx={{ backgroundColor: color, color: "white", borderRadius: 2, boxShadow: 3 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 1, fontSize: 30 }}>
                      {icon}
                    </Box>
                    <Typography variant="body1" fontWeight="bold">{title}</Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>{count}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card sx={{ backgroundColor: "#F5F5F5", borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, textAlign: "center", color: "#333" }}>
                    Bookings Overview
                  </Typography>
                  <Doughnut data={doughnutData} />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card sx={{ backgroundColor: "#F5F5F5", borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, textAlign: "center", color: "#333" }}>
                    Monthly Bookings
                  </Typography>
                  <Bar data={barData} />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}

export default UserOverview;
