import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, TextField, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const API_URL = "http://localhost:8000/api/bookings";

export function AdminAppointments() {
  interface Appointment {
    id: number;
    user_id: string;
    session_date: string;
    booking_status: string;
  }
  
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(API_URL);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      await axios.put(`${API_URL}/${id}`, { booking_status: newStatus });
      fetchAppointments();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const filteredAppointments =
    filter === "All" ? appointments : appointments.filter((appt) => appt.booking_status === filter);

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
              <TableCell sx={{ color: "white" }}>Status</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAppointments.map((appt) => (
              <TableRow key={appt.id}>
                <TableCell sx={{ color: "white" }}>{appt.user_id}</TableCell>
                <TableCell sx={{ color: "white" }}>{appt.session_date}</TableCell>
                <TableCell sx={{ color: appt.booking_status === "Canceled" ? "red" : "#6DA14E" }}>
                  {appt.booking_status}
                </TableCell>
                <TableCell>
                  <Button 
                    onClick={() => handleStatusChange(appt.id, "Confirmed")} 
                    sx={{ color: "white" }}>Confirm</Button>
                  <Button 
                    onClick={() => handleStatusChange(appt.id, "Canceled")} 
                    sx={{ color: "red" }}>Cancel</Button>
                  <Button 
                    onClick={() => handleDelete(appt.id)} 
                    sx={{ color: "white" }}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AdminAppointments;