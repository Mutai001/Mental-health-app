import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const expertise = [
  { name: "Trauma", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5iINf5K1x6-2cWZYUSu1SKVFI1O9IEzr-Q&s" },
  { name: "Anxiety", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8E7ELemL_MX9DpXSjfswp4lFXFfhWviHoNg&s" },
  { name: "Depression", imageUrl: "https://www.piedmont.org/media/BlogImages/Depression-symptoms.jpg" },
  { name: "Autism", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmhvf3A6qBd5VHXgZeh2O0eRrhH2E-S_edQ&s" },
  { name: "Life Transitions", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KMR9KqzROT0yf6YxoxFKFFZPafTp2ggddA&s" },
  { name: "Grief & Loss", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1ziSmveXowmIXQjLZxJsOghZF6NaXJpTAQ&s" },
  { name: "Parenting", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbX_nSmQzaEAtlgwUCc0y0r9a4t8Nxx-gRA&s" },
  { name: "OCD", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqHXZucgrWnPGjBpYrqlEIGoe6groyAjt0g&s" },
  { name: "ADHD", imageUrl: "https://auditorycenter.com/wp-content/uploads/2020/01/boy-with-ADHD.jpg" },
];

const AreaOfExpertise: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <Box sx={{ backgroundColor: "#2C423F", color: "#FFFFFF", py: 12, textAlign: "center" }}>
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
            fontSize: "2.5rem",
            letterSpacing: "0.1rem",
            marginBottom: "2rem",
            color: "#6DA14E",
          }}
        >
          Areas of Expertise
        </Typography>
      </motion.div>
      <Grid container spacing={3} justifyContent="center">
        {expertise.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.name}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div whileHover={{ scale: 1.05 }} animate={{ rotate: [0, 1, -1, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
              <Card
                sx={{
                  height: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: hoveredItem === item.name ? "#5A8F3E" : "#6DA14E",
                  position: "relative",
                  overflow: "hidden",
                  transition: "background-color 0.3s ease-in-out",
                  boxShadow: hoveredItem === item.name ? "0px 4px 15px rgba(0, 0, 0, 0.3)" : "none",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.7,
                  }}
                />
                <CardContent sx={{ zIndex: 2, color: "#FFFFFF" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AreaOfExpertise;
