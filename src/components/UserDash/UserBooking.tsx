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
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface Booking {
  id: number;
  therapist_name: string;
  date: string;
  time: string;
  status: string;
}

import { ChipProps } from "@mui/material";

const statusColors: Record<string, ChipProps["color"]> = {
  Confirmed: "success",
  Pending: "warning",
  Cancelled: "error",
};

const UserBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/user-bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3, display: "flex", justifyContent: "center" }}>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card
          sx={{
            maxWidth: 700,
            mx: "auto",
            mt: 5,
            p: 3,
            textAlign: "center",
            boxShadow: 5,
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}
            >
              Your Bookings
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#2C423F" }}>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Therapist</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Date</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Time</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <motion.tr key={booking.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <TableRow>
                          <TableCell>{booking.therapist_name}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>{booking.time}</TableCell>
                          <TableCell>
                            <Chip
                              label={booking.status}
                              color={statusColors[booking.status] || "default"}
                            />
                          </TableCell>
                        </TableRow>
                      </motion.tr>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} sx={{ textAlign: "center", py: 3, color: "#6DA14E" }}>
                        No Bookings Found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default UserBookings;
