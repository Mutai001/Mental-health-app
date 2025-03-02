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
} from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Appointments = () => {
  interface Appointment {
    id: number;
    patient_name: string;
    date: string;
    time: string;
    status: string;
  }

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    // Fetch appointments from API
    fetch("http://localhost:8000/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error("Error fetching appointments:", err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card sx={{ p: 3, boxShadow: 5, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Upcoming Appointments
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Patient Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.patient_name}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Appointments;
