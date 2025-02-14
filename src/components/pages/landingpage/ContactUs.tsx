// import React from "react";
import { Box, Typography, Button, Grid, TextField, Stack } from "@mui/material";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactUs: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C423F",
        color: "#FFFFFF",
        padding: "4rem 2rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center" maxWidth="lg">
        {/* Left Side: Contact Information */}
        <Grid item xs={12} md={6}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: "bold" }}
            >
              Get in Touch
            </Typography>
            <Typography sx={{ marginTop: "1rem", maxWidth: "500px" }}>
              Need support or have any questions? Reach out to us, and our team will get back to you shortly.
            </Typography>
            <Stack spacing={2} sx={{ marginTop: "2rem" }}>
              <Typography>Email: support@mindfulai.com</Typography>
              <Typography>Phone: +254722227154</Typography>
              <Typography>Location: 30100 Kutus, Kirinyaga Kenya</Typography>
            </Stack>
          </motion.div>
        </Grid>

        {/* Right Side: Contact Form */}
        <Grid item xs={12} md={6}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Box
              sx={{
                backgroundColor: "#3B544D",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Stack spacing={2}>
                <TextField fullWidth label="Your Name" variant="outlined" sx={{ backgroundColor: "#FFFFFF", borderRadius: "5px" }} />
                <TextField fullWidth label="Your Email" variant="outlined" sx={{ backgroundColor: "#FFFFFF", borderRadius: "5px" }} />
                <TextField fullWidth multiline rows={4} label="Your Message" variant="outlined" sx={{ backgroundColor: "#FFFFFF", borderRadius: "5px" }} />
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#6DA14E",
                      padding: "1rem",
                      fontSize: "1rem",
                      borderRadius: "50px",
                      "&:hover": { backgroundColor: "#5A8F3E" },
                    }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </Stack>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
