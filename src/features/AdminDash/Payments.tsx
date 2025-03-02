import { useState, useEffect } from "react";
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
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const paymentsData = [
  { id: 1, user: "John Doe", amount: 250, status: "Completed" },
  { id: 2, user: "Jane Smith", amount: 500, status: "Pending" },
  { id: 3, user: "Alice Brown", amount: 300, status: "Completed" },
  { id: 4, user: "Michael Johnson", amount: 150, status: "Pending" },
];

export default function AdminPayments() {
  const [filter, setFilter] = useState("All");
  const [filteredPayments, setFilteredPayments] = useState(paymentsData);

  useEffect(() => {
    if (filter === "All") {
      setFilteredPayments(paymentsData);
    } else {
      setFilteredPayments(paymentsData.filter((p) => p.status === filter));
    }
  }, [filter]);

  return (
    <Box sx={{ padding: 3, color: "white" }}>
      <Typography variant="h4" gutterBottom>
        Payments Management
      </Typography>
      
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <Card sx={{ backgroundColor: "#1F302B", color: "white", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Total Payments</Typography>
            <Typography variant="h5">{paymentsData.length}</Typography>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "#1F302B", color: "white", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Completed</Typography>
            <Typography variant="h5">
              <DoneIcon sx={{ color: "#6DA14E" }} /> {paymentsData.filter(p => p.status === "Completed").length}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ backgroundColor: "#1F302B", color: "white", flex: 1 }}>
          <CardContent>
            <Typography variant="h6">Pending</Typography>
            <Typography variant="h5">
              <HourglassEmptyIcon sx={{ color: "#FFD700" }} /> {paymentsData.filter(p => p.status === "Pending").length}
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
              <TableCell sx={{ color: "white" }}>User</TableCell>
              <TableCell sx={{ color: "white" }}>Amount ($)</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell sx={{ color: "white" }}>{payment.user}</TableCell>
                <TableCell sx={{ color: "white" }}>{payment.amount}</TableCell>
                <TableCell sx={{ color: payment.status === "Completed" ? "#6DA14E" : "#FFD700" }}>
                  {payment.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
