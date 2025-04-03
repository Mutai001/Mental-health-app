import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

interface ExpertiseItem {
  name: string;
  imageUrl: string;
  description: string;
}

const expertise: ExpertiseItem[] = [
  { 
    name: "Trauma", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5iINf5K1x6-2cWZYUSu1SKVFI1O9IEzr-Q&s",
    description: "Trauma therapy helps individuals process distressing events that have overwhelmed their ability to cope. We use evidence-based approaches like EMDR and trauma-focused CBT to help you regain control, reduce symptoms of PTSD, and rebuild a sense of safety."
  },
  { 
    name: "Anxiety", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8E7ELemL_MX9DpXSjfswp4lFXFfhWviHoNg&s",
    description: "Anxiety treatment focuses on identifying triggers, challenging negative thought patterns, and developing coping strategies. Through cognitive-behavioral techniques and mindfulness practices, we help you manage symptoms and regain confidence in daily life."
  },
  { 
    name: "Depression", 
    imageUrl: "https://www.piedmont.org/media/BlogImages/Depression-symptoms.jpg",
    description: "Depression therapy addresses feelings of hopelessness, low energy, and loss of interest. Our approach combines behavioral activation, cognitive restructuring, and self-compassion techniques to help restore motivation and improve mood."
  },
  { 
    name: "Autism", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmhvf3A6qBd5VHXgZeh2O0eRrhH2E-S_edQ&s",
    description: "Autism support focuses on developing social skills, emotional regulation, and adaptive behaviors. We create individualized plans that respect neurodiversity while helping individuals navigate social expectations and sensory challenges."
  },
  { 
    name: "Life Transitions", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KMR9KqzROT0yf6YxoxFKFFZPafTp2ggddA&s",
    description: "Life transition counseling helps during career changes, relationship shifts, or other major life events. We provide support in navigating uncertainty, building resilience, and creating meaningful next chapters in your life story."
  },
  { 
    name: "Grief & Loss", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1ziSmveXowmIXQjLZxJsOghZF6NaXJpTAQ&s",
    description: "Grief therapy offers a compassionate space to process loss at your own pace. We help you honor your unique grieving process while finding ways to carry memories forward and gradually rebuild your life."
  },
  { 
    name: "Parenting", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbX_nSmQzaEAtlgwUCc0y0r9a4t8Nxx-gRA&s",
    description: "Parenting support helps navigate challenges at any stage. We focus on strengthening parent-child connections, setting appropriate boundaries, and developing strategies that align with your family values and children's needs."
  },
  { 
    name: "OCD", 
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqHXZucgrWnPGjBpYrqlEIGoe6groyAjt0g&s",
    description: "OCD treatment uses exposure and response prevention (ERP) to reduce compulsive behaviors and intrusive thoughts. We create gradual, personalized exposure hierarchies to help you regain control over your responses."
  },
  { 
    name: "ADHD", 
    imageUrl: "https://auditorycenter.com/wp-content/uploads/2020/01/boy-with-ADHD.jpg",
    description: "ADHD management focuses on developing organizational strategies, improving focus, and harnessing strengths. We combine behavioral techniques with environmental modifications to help you thrive with your unique neurology."
  },
];

const AreaOfExpertise: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleCardClick = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

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
      
      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                animate={{ rotate: [0, 1, -1, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                onClick={() => handleCardClick(item.name)}
                style={{ cursor: "pointer", width: "100%" }}
              >
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
                    animate={{ opacity: hoveredItem === item.name || expandedItem === item.name ? 1 : 0 }}
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

              <AnimatePresence>
                {expandedItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%", overflow: "hidden" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#3A5A55",
                        color: "#FFFFFF",
                        p: 3,
                        borderRadius: "0 0 4px 4px",
                        textAlign: "left",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AreaOfExpertise;