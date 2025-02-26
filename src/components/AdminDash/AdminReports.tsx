import { Box, Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoneyIcon from "@mui/icons-material/Money";
import PeopleIcon from "@mui/icons-material/People";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { title: "Total Users", value: 2345, icon: <PeopleIcon />, color: "#4CAF50" },
  { title: "Total Revenue", value: "$123,456", icon: <MoneyIcon />, color: "#FF9800" },
  { title: "Active Bookings", value: 189, icon: <TrendingUpIcon />, color: "#2196F3" },
  { title: "Pending Payments", value: "$9,876", icon: <BarChartIcon />, color: "#F44336" },
];

const data = [
  { name: "Jan", revenue: 5000 },
  { name: "Feb", revenue: 8000 },
  { name: "Mar", revenue: 12000 },
  { name: "Apr", revenue: 15000 },
  { name: "May", revenue: 18000 },
];

export function AdminReports() {
  return (
    <Box sx={{ p: 3, color: "white", width: "100%" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#6DA14E" }}>
        Admin Reports
      </Typography>
      
      {/* Stats Cards */}
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: "#1F302B", color: "white", display: "flex", alignItems: "center", p: 2 }}>
              <Box sx={{ bgcolor: stat.color, p: 2, borderRadius: "50%", mr: 2 }}>{stat.icon}</Box>
              <CardContent>
                <Typography variant="h6">{stat.title}</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Revenue Chart */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: "#1F302B" }}>
        <Typography variant="h6" sx={{ color: "#6DA14E" }}>Revenue Overview</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#4CAF50" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}

export default AdminReports;
