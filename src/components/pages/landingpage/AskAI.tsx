import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AskAI: React.FC = () => {
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
        {/* Left Side: AI Description */}
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
              Need Immediate Support? Ask Our AI
            </Typography>
            <Typography sx={{ marginTop: "1rem", maxWidth: "500px" }}>
              Our AI-powered assistant is available 24/7 to offer guidance, mental
              health tips, and support tailored to your needs.
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
                  startIcon={<ChatIcon />}
                  sx={{
                    backgroundColor: "#6DA14E",
                    padding: { xs: "0.8rem 1.5rem", md: "1rem 2rem" },
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    borderRadius: "50px",
                    "&:hover": { backgroundColor: "#5A8F3E" },
                  }}
                  onClick={() => navigate("/ask-ai")}
                >
                  Start Chatting
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Grid>

        {/* Right Side: AI Assistant Image */}
        <Grid item xs={12} md={6} container justifyContent="center">
          <motion.img
            src="https://www.mdpi.com/brainsci/brainsci-10-00706/article_deploy/html/images/brainsci-10-00706-g001.png"
            alt="AI Mental Health Assistant"
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

export default AskAI;
