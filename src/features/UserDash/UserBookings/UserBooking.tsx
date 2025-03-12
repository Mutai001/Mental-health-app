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
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import axiosInstance from "../../../components/utils/axiosInstance";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface Booking {
  id: number;
  user_id: number;
  therapist_id: number;
  session_date: string;
  booking_status: string;
  created_at: string;
  updated_at: string;
}

const statusColors: Record<string, "success" | "warning" | "error" | "default"> = {
  confirmed: "success",
  pending: "warning",
  cancelled: "error",
};

const UserBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [open, setOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
  const [formData, setFormData] = useState({
    therapist_id: "",
    session_date: "",
    booking_status: "pending",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axiosInstance.get("/bookings");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleOpen = (booking: Booking | null) => {
    setCurrentBooking(booking);
    if (booking) {
      setFormData({
        therapist_id: booking.therapist_id.toString(),
        session_date: booking.session_date,
        booking_status: booking.booking_status,
      });
    } else {
      setFormData({
        therapist_id: "",
        session_date: "",
        booking_status: "pending",
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentBooking(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (currentBooking) {
        await axiosInstance.put(`/bookings/${currentBooking.id}`, formData);
      } else {
        await axiosInstance.post("/bookings", formData);
      }
      fetchBookings();
      handleClose();
    } catch (error) {
      console.error("Error saving booking:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axiosInstance.delete(`/bookings/${id}`);
      fetchBookings();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2, display: "flex", justifyContent: "center" }}>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card
          sx={{
            maxWidth: 800,
            width: "100%",
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen(null)}
              sx={{ mb: 2, backgroundColor: "#2C423F", "&:hover": { backgroundColor: "#1E2E2C" } }}
            >
              Add New Booking
            </Button>
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#2C423F" }}>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Therapist ID</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Session Date</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Status</TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.length > 0 ? (
                    bookings.map((booking) => (
                      <TableRow key={booking.id} component={motion.tr} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                        <TableCell>{booking.therapist_id}</TableCell>
                        <TableCell>{booking.session_date}</TableCell>
                        <TableCell>
                          <Chip
                            label={booking.booking_status}
                            color={statusColors[booking.booking_status.toLowerCase()] || "default"}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleOpen(booking)}
                            sx={{ mr: 1, backgroundColor: "#2C423F", "&:hover": { backgroundColor: "#1E2E2C" } }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleDelete(booking.id)}
                            sx={{ backgroundColor: "#D32F2F", "&:hover": { backgroundColor: "#B71C1C" } }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
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

      <Dialog open={open} onClose={handleClose} fullScreen={isMobile}>
        <DialogTitle sx={{ backgroundColor: "#2C423F", color: "#fff" }}>
          {currentBooking ? "Edit Booking" : "Add New Booking"}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <TextField
            margin="dense"
            label="Therapist ID"
            type="number"
            fullWidth
            name="therapist_id"
            value={formData.therapist_id}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Session Date"
            type="date"
            fullWidth
            name="session_date"
            value={formData.session_date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="dense"
            label="Status"
            type="text"
            fullWidth
            name="booking_status"
            value={formData.booking_status}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#F5F5F5" }}>
          <Button onClick={handleClose} sx={{ color: "#D32F2F" }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} sx={{ color: "#2C423F" }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserBookings;