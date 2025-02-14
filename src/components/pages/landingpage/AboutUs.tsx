import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#2C423F",
        color: "#FFFFFF",
        padding: "4rem 2rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: "bold" }}
            >
              About Our Mission
            </Typography>
            <Typography sx={{ marginTop: "1rem", maxWidth: "500px" }}>
              We believe mental health support should be accessible, engaging,
              and personalized. Our AI-powered platform connects you with
              professionals and resources tailored to your needs, helping you
              achieve mental wellness.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: "2rem" }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6DA14E",
                    padding: { xs: "0.8rem 1.5rem", md: "1rem 2rem" },
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    borderRadius: "50px",
                    "&:hover": { backgroundColor: "#5A8F3E" },
                  }}
                  onClick={() => navigate("/mindtraining")}
                >
                  Explore Services
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} container justifyContent="center">
          <motion.img
            src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg"
            alt="About Us"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
