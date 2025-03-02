import { useState } from "react";
import { Box, Card, CardContent, Typography, TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const appointments = [
  { id: 1, user: "John Doe", date: "2024-07-28", time: "10:00 AM", status: "Confirmed" },
  { id: 2, user: "Jane Smith", date: "2024-07-29", time: "2:00 PM", status: "Pending" },
  { id: 3, user: "Mark Lee", date: "2024-07-30", time: "4:00 PM", status: "Canceled" },
];

export function AdminAppointments() {
  const [filter, setFilter] = useState("All");

  const filteredAppointments =
    filter === "All" ? appointments : appointments.filter((appt) => appt.status === filter);

  return (
    <Box sx={{ p: 3, color: "white" }}>
      <Typography variant="h4" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <CalendarTodayIcon /> Appointments
      </Typography>
      
      <Card sx={{ backgroundColor: "#1F302B", mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>Filter Appointments</Typography>
          <TextField
            select
            fullWidth
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          >
            {["All", "Confirmed", "Pending", "Canceled"].map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </CardContent>
      </Card>

      <TableContainer component={Paper} sx={{ backgroundColor: "#2C423F" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>User</TableCell>
              <TableCell sx={{ color: "white" }}>Date</TableCell>
              <TableCell sx={{ color: "white" }}>Time</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAppointments.map((appt) => (
              <TableRow key={appt.id}>
                <TableCell sx={{ color: "white" }}>{appt.user}</TableCell>
                <TableCell sx={{ color: "white" }}>{appt.date}</TableCell>
                <TableCell sx={{ color: "white" }}>{appt.time}</TableCell>
                <TableCell sx={{ color: appt.status === "Canceled" ? "red" : "#6DA14E" }}>{appt.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AdminAppointments;
