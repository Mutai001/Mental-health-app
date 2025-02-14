import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HeroSection: React.FC = () => {
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
        {/* Left Side: Text and Buttons */}
        <Grid item xs={12} md={6}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3.5rem" },
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              Prioritize Your Mental Well-being
            </Typography>
            <Typography sx={{ marginTop: "1rem", maxWidth: "500px" }}>
              Mental health is just as important as physical health. We provide
              professional support tailored to your needs.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
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
                >
                  Book an Appointment
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#6DA14E",
                    borderColor: "#6DA14E",
                    padding: { xs: "0.8rem 1.5rem", md: "1rem 2rem" },
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#5A8F3E", color: "#5A8F3E" },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={6} container justifyContent="center">
          <motion.img
            src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2022/06/07084322/312_How_AI_can_make_therapy_better-1200x672.jpg"
            alt="Mental Health"
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

export default HeroSection;