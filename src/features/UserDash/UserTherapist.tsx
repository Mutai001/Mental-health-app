import { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useAppSelector } from "../../redux/store"; // Adjust the path as needed
import { toast } from "react-toastify";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const UserTherapist = () => {
  const [availableTherapists, setAvailableTherapists] = useState([]);
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth); // Get authentication state

  useEffect(() => {
    // Fetch therapists from the API
    const fetchTherapists = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/therapists", {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch therapists");
        }

        const data = await response.json();
        setAvailableTherapists(data);
      } catch (error) {
        toast.error("Failed to fetch therapists. Please try again later.");
        console.error(error);
      }
    };

    if (token) {
      fetchTherapists(); // Fetch therapists only if the token is available
    }
  }, [token]); // Re-fetch therapists if the token changes

  const handleBookTherapist = async (therapistId: string) => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to book a therapist.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/book-therapist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use the token from Redux store
        },
        body: JSON.stringify({ therapistId, userId: user?.id }), // Use the user ID from Redux store
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

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Available Therapists
      </Typography>
      <Grid container spacing={3}>
        {availableTherapists.map(({ id, name, specialization, availability }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <PsychologyIcon sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {name}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {specialization}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: availability === "Available" ? "green" : "red" }}
                  >
                    {availability}
                  </Typography>
                  {availability === "Available" && (
                    <Button
                      variant="contained"
                      sx={{ mt: 2 }}
                      onClick={() => handleBookTherapist(id)}
                    >
                      Book Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserTherapist;