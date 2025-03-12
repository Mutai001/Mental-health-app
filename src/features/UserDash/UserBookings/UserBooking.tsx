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
import axiosInstance from "../../../components/utils/axiosInstance";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
    const fetchBookings = async () => {
      try {
        const response = await axiosInstance.get("/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2, display: "flex", justifyContent: "center" }}>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card
          sx={{
            maxWidth: 600,
            mx: "auto",
            mt: 4,
            p: 2,
            textAlign: "center",
            boxShadow: 4,
            borderRadius: 2,
            backgroundColor: "#F5F5F5",
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
                      <motion.tr key={booking.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
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
