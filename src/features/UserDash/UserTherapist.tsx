import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Pagination,
  CircularProgress,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { useAppSelector } from "../../redux/store"; // Adjust the path as needed
import { toast } from "react-toastify";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface Therapist {
  id: number;
  full_name: string;
  specialization: string;
  experience_years: number;
  contact_phone: string;
  profile_image_url: string | null; // Allow profile_image_url to be null
}

const UserTherapist = () => {
  const [availableTherapists, setAvailableTherapists] = useState<Therapist[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth); // Get authentication state

  const therapistsPerPage = 6; // Number of therapists per page

  useEffect(() => {
    // Fetch therapists from the API
    const fetchTherapists = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/therapists?page=${page}&limit=${therapistsPerPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request headers
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch therapists");
        }

        const data = await response.json();
        setAvailableTherapists(data.therapists || []); // Ensure therapists is an array
        setTotalPages(data.totalPages || 1); // Ensure totalPages is a number
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch therapists. Please try again later.");
        console.error(error);
        setLoading(false);
      }
    };

    if (token) {
      fetchTherapists(); // Fetch therapists only if the token is available
    }
  }, [token, page]); // Re-fetch therapists if the token or page changes

  const handleBookTherapist = async (therapistId: number) => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to book a therapist.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use the token from Redux store
        },
        body: JSON.stringify({ therapist_id: therapistId, user_id: user?.id }), // Use the user ID from Redux store
      });

      if (!response.ok) {
        throw new Error("Failed to book therapist");
      }

      const result = await response.json();
      toast.success("Therapist booked successfully!");
      console.log(result);
    } catch (error) {
      toast.error("Failed to book therapist. Please try again.");
      console.error(error);
    }
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#2C423F" }}>
        Available Therapists
      </Typography>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#2C423F" }}>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Profile</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Specialization</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Experience</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Contact</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {availableTherapists.map(
                  ({ id, full_name, specialization, experience_years, contact_phone, profile_image_url }) => (
                    <TableRow key={id} component={motion.tr} initial="hidden" animate="visible" variants={fadeIn}>
                      <TableCell>
                        <Avatar
                          src={profile_image_url || "/default-avatar.png"} // Use default avatar if profile_image_url is null
                          alt={full_name}
                          sx={{ width: 60, height: 60 }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ fontWeight: "bold", color: "#2C423F" }}>
                          {full_name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={specialization}
                          sx={{ backgroundColor: "#2C423F", color: "#fff" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography>{experience_years} years</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{contact_phone}</Typography>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#2C423F",
                            "&:hover": { backgroundColor: "#1E2E2C" },
                          }}
                          onClick={() => handleBookTherapist(id)}
                        >
                          Book Now
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#2C423F",
                },
                "& .Mui-selected": {
                  backgroundColor: "#2C423F",
                  color: "#fff",
                },
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default UserTherapist;