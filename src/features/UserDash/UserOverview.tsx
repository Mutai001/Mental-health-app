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
  { title: "Active Bookings", count: 120, icon: <BookOnlineIcon />, color: "#6DA14E" },
  { title: "Payment History", count: 50, icon: <PaymentIcon />, color: "#1F302B" },
  { title: "Therapists Available", count: 25, icon: <PsychologyIcon />, color: "#6DA14E" },
];

const doughnutData = {
  labels: ["Active Bookings", "Payment History", "Therapists Available"],
  datasets: [
    {
      label: "Count",
      data: [120, 50, 25],
      backgroundColor: ["#6DA14E", "#1F302B", "#6DA14E"],
      borderColor: ["#6DA14E", "#1F302B", "#6DA14E"],
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Bookings",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "#6DA14E",
      borderColor: "#6DA14E",
      borderWidth: 1,
    },
  ],
};

function UserOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
        <Typography variant="h4" sx={{ color: "#FFFFFF", mb: 3, textAlign: "center" }}>
          User Dashboard
        </Typography>
        <Grid container spacing={3}>
          {stats.map(({ title, count, icon, color }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card sx={{ backgroundColor: color, color: "white", borderRadius: 3, boxShadow: 5 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2, fontSize: 40 }}>
                      {icon}
                    </Box>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>{count}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card sx={{ backgroundColor: "#1F302B", color: "white", borderRadius: 3, boxShadow: 5 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                    Bookings Overview
                  </Typography>
                  <Doughnut data={doughnutData} />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card sx={{ backgroundColor: "#1F302B", color: "white", borderRadius: 3, boxShadow: 5 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
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