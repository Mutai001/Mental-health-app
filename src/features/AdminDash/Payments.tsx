import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const API_URL = "http://localhost:8000/api/mpesa/transactions"; // Replace with your actual API endpoint

export default function AdminPayments() {
  const [filter, setFilter] = useState("All");
  interface Payment {
    id: string;
    phoneNumber: string;
    amount: number;
    referenceCode: string;
    isSuccessful: boolean;
  }

  const [filteredPayments, setFilteredPayments] = useState<Payment[]>([]);
  const [paymentsData, setPaymentsData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPayments();
  }, []);

  useEffect(() => {
    // Check if paymentsData is an array before filtering
    if (paymentsData && Array.isArray(paymentsData)) {
      if (filter === "All") {
        setFilteredPayments(paymentsData);
      } else {
        setFilteredPayments(paymentsData.filter((p) => (filter === "Completed" ? p.isSuccessful : !p.isSuccessful)));
      }
    } else {
      // If paymentsData is not an array, set filteredPayments to empty array
      setFilteredPayments([]);
    }
  }, [filter, paymentsData]);

  const fetchPayments = async () => {
    try {
      const response = await axios.get(API_URL);
      // Make sure response.data is treated as an array
      const data = Array.isArray(response.data) ? response.data : 
                  (response.data && response.data.data && Array.isArray(response.data.data)) ? response.data.data : [];
      setPaymentsData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching payments:", error);
      setError("Failed to fetch payments data");
      setLoading(false);
    }
  };

  // Calculate completed and pending counts safely
  const completedCount = Array.isArray(paymentsData) ? paymentsData.filter(p => p.isSuccessful).length : 0;
  const pendingCount = Array.isArray(paymentsData) ? paymentsData.filter(p => !p.isSuccessful).length : 0;

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: 3, color: "white" }}>
        <Typography variant="h4" gutterBottom>
          Payments Management
        </Typography>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3, color: "white" }}>
      <Typography variant="h4" gutterBottom>
        Payments Management
      </Typography>
      
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <Card sx={{ backgroundColor: "#1F302B", color: "white", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Total Payments</Typography>
            <Typography variant="h5">{Array.isArray(paymentsData) ? paymentsData.length : 0}</Typography>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "#1F302B", color: "white", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Completed</Typography>
            <Typography variant="h5">
              <DoneIcon sx={{ color: "#6DA14E" }} /> {completedCount}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "#1F302B", color: "white", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Pending</Typography>
            <Typography variant="h5">
              <HourglassEmptyIcon sx={{ color: "#FFD700" }} /> {pendingCount}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      
      <FormControl sx={{ marginBottom: 2, minWidth: 200 }}>
        <InputLabel sx={{ color: "white" }}>Filter by Status</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{ backgroundColor: "#1F302B", color: "white" }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </Select>
      </FormControl>
      
      <TableContainer component={Paper} sx={{ backgroundColor: "#1F302B" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Phone Number</TableCell>
              <TableCell sx={{ color: "white" }}>Amount ($)</TableCell>
              <TableCell sx={{ color: "white" }}>Reference Code</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell sx={{ color: "white" }}>{payment.phoneNumber}</TableCell>
                <TableCell sx={{ color: "white" }}>{payment.amount}</TableCell>
                <TableCell sx={{ color: "white" }}>{payment.referenceCode}</TableCell>
                <TableCell sx={{ color: payment.isSuccessful ? "#6DA14E" : "#FFD700" }}>
                  {payment.isSuccessful ? "Completed" : "Pending"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}