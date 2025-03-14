import { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Grid, Paper, CircularProgress, Alert } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoneyIcon from "@mui/icons-material/Money";
import PeopleIcon from "@mui/icons-material/People";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

// Define interfaces for the API responses
interface Transaction {
  id: string;
  phoneNumber: string;
  amount: number;
  referenceCode: string;
  isSuccessful: boolean;
  createdAt?: string;
}

interface Booking {
  id: string;
  status: string;
  createdAt?: string;
}

interface User {
  id: string;
}

// Fallback mock data in case APIs are unavailable
const mockTransactions: Transaction[] = [
  { id: "1", phoneNumber: "254712345678", amount: 2500, referenceCode: "TX12345", isSuccessful: true, createdAt: "2025-01-15" },
  { id: "2", phoneNumber: "254723456789", amount: 3500, referenceCode: "TX12346", isSuccessful: true, createdAt: "2025-01-20" },
  { id: "3", phoneNumber: "254734567890", amount: 1200, referenceCode: "TX12347", isSuccessful: false, createdAt: "2025-02-05" },
  { id: "4", phoneNumber: "254745678901", amount: 4000, referenceCode: "TX12348", isSuccessful: true, createdAt: "2025-02-10" },
  { id: "5", phoneNumber: "254756789012", amount: 2800, referenceCode: "TX12349", isSuccessful: true, createdAt: "2025-03-01" },
  { id: "6", phoneNumber: "254767890123", amount: 3200, referenceCode: "TX12350", isSuccessful: false, createdAt: "2025-03-10" },
];

const mockBookings: Booking[] = [
  { id: "1", status: "active", createdAt: "2025-01-05" },
  { id: "2", status: "active", createdAt: "2025-01-12" },
  { id: "3", status: "completed", createdAt: "2025-01-20" },
  { id: "4", status: "active", createdAt: "2025-02-01" },
  { id: "5", status: "canceled", createdAt: "2025-02-10" },
];

const mockUsers: User[] = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
];

export function AdminReports() {
  // State variables for storing API data
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Properly typed error state
  const [usingMockData, setUsingMockData] = useState(false);
  const [revenueData, setRevenueData] = useState<{ name: string; revenue: number }[]>([]);

  useEffect(() => {
    // Function to fetch data from all APIs
    const fetchAllData = async () => {
      try {
        // Fetch all data in parallel with timeouts to avoid long waiting times
        const [transactionsRes, bookingsRes, usersRes] = await Promise.all([
          axios.get("http://localhost:8000/api/mpesa/transactions", { timeout: 5000 })
            .catch(err => {
              console.error("Error fetching transactions:", err);
              setError("Failed to fetch transactions. Using demo data.");
              return { data: mockTransactions };
            }),
          axios.get("http://localhost:8000/api/bookings", { timeout: 5000 })
            .catch(err => {
              console.error("Error fetching bookings:", err);
              setError("Failed to fetch bookings. Using demo data.");
              return { data: mockBookings };
            }),
          axios.get("http://localhost:8000/api/users", { timeout: 5000 })
            .catch(err => {
              console.error("Error fetching users:", err);
              setError("Failed to fetch users. Using demo data.");
              return { data: mockUsers };
            })
        ]);

        // Process the responses
        const transactionsData = Array.isArray(transactionsRes.data) ? transactionsRes.data : 
          (transactionsRes.data && transactionsRes.data.data && Array.isArray(transactionsRes.data.data)) ? 
          transactionsRes.data.data : [];
        
        const bookingsData = Array.isArray(bookingsRes.data) ? bookingsRes.data : 
          (bookingsRes.data && bookingsRes.data.data && Array.isArray(bookingsRes.data.data)) ? 
          bookingsRes.data.data : [];
        
        const usersData = Array.isArray(usersRes.data) ? usersRes.data : 
          (usersRes.data && usersRes.data.data && Array.isArray(usersRes.data.data)) ? 
          usersRes.data.data : [];

        // Check if we're using mock data
        if (transactionsRes.data === mockTransactions || 
            bookingsRes.data === mockBookings || 
            usersRes.data === mockUsers) {
          setUsingMockData(true);
        }

        setTransactions(transactionsData);
        setBookings(bookingsData);
        setUsers(usersData);

        // Process revenue data for the chart
        processRevenueData(transactionsData);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Using demo data.");
        
        // Use mock data as fallback
        setTransactions(mockTransactions);
        setBookings(mockBookings);
        setUsers(mockUsers);
        processRevenueData(mockTransactions);
        
        setUsingMockData(true);
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Function to process transactions and generate monthly revenue data
  const processRevenueData = (transactionsData: Transaction[]) => {
    // Only consider successful transactions
    const successfulTransactions = transactionsData.filter(t => t.isSuccessful);
    
    // Create an object to hold monthly totals
    const monthlyTotals: { [key: string]: number } = {};
    
    // Calculate revenue per month
    successfulTransactions.forEach(transaction => {
      if (transaction.createdAt) {
        const date = new Date(transaction.createdAt);
        const monthName = date.toLocaleString('default', { month: 'short' });
        monthlyTotals[monthName] = (monthlyTotals[monthName] || 0) + transaction.amount;
      }
    });

    // Ensure we have data for all months, with zeros for months with no data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Convert to format required by chart
    const chartData = months.map(month => ({
      name: month,
      revenue: monthlyTotals[month] || 0
    }));

    setRevenueData(chartData);
  };

  // Calculate total revenue from successful transactions (in KSH)
  const totalRevenue = transactions
    .filter(t => t.isSuccessful)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  // Calculate pending payments (amounts from unsuccessful transactions in KSH)
  const pendingPayments = transactions
    .filter(t => !t.isSuccessful)
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  // Count active bookings
  const activeBookings = bookings.filter(b => b.status === "active").length;

  // Stats array with dynamic data
  const stats = [
    { 
      title: "Total Users", 
      value: users.length, 
      icon: <PeopleIcon />, 
      color: "#4CAF50" 
    },
    { 
      title: "Total Revenue", 
      value: `KSH ${totalRevenue.toLocaleString()}`, 
      icon: <MoneyIcon />, 
      color: "#FF9800" 
    },
    { 
      title: "Active Bookings", 
      value: activeBookings, 
      icon: <TrendingUpIcon />, 
      color: "#2196F3" 
    },
    { 
      title: "Pending Payments", 
      value: `KSH ${pendingPayments.toLocaleString()}`, 
      icon: <BarChartIcon />, 
      color: "#F44336" 
    },
  ];

  // Loading state
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, color: "white", width: "100%" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#6DA14E" }}>
        Admin Reports
      </Typography>
      
      {/* Error and mock data warnings */}
      {error && (
        <Alert 
          severity="error" 
          sx={{ mb: 3, backgroundColor: "rgba(244, 67, 54, 0.1)", color: "#F44336", borderColor: "#F44336" }}
        >
          {error}
        </Alert>
      )}
      {usingMockData && (
        <Alert 
          severity="warning" 
          sx={{ mb: 3, backgroundColor: "rgba(255, 152, 0, 0.1)", color: "#FFD700", borderColor: "#FFD700" }}
        >
          Some API endpoints could not be reached. Displaying demo data for visualization purposes.
        </Alert>
      )}
      
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
        <Typography variant="h6" sx={{ color: "#6DA14E" }}>Revenue Overview (KSH)</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip formatter={(value) => [`KSH ${value.toLocaleString()}`, "Revenue"]} />
            <Line type="monotone" dataKey="revenue" stroke="#4CAF50" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}

export default AdminReports;