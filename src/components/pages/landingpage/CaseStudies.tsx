import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { motion } from 'framer-motion';

// Case studies data
const caseStudies = [
  {
    title: 'Perinatal Mental Health Advice in Hywel Dda',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0vxBOGCXnUCyAruVjg5bJfOssGK-RXLxC7hwyAqfBJ1Zyf1hAr_J4RlE1sw3SiKZo_g&usqp=CAU',
    content: 'This study explores perinatal mental health support in Hywel Dda, focusing on early interventions and community-based resources.'
  },
  {
    title: 'Mental Health Advice in Greater Glasgow and Clyde',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9frjZxovxhEHWOXhxO7-kMqR-fxx2pQQR0Q&s',
    content: 'An in-depth look at mental health services in Glasgow, highlighting innovative approaches to therapy and accessibility.'
  },
  {
    title: '5 Minutes With Old Age Consultant & Clinical Director',
    img: 'https://people.com/thmb/1NfhQJBBa3D-z-rqRkjQJndQOxE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(554x339:556x341)/covid-mental-health-d0f1607a9b0440eb999b6301dd61c0f4.jpg',
    content: 'A discussion with a leading clinical director on the challenges and advancements in geriatric mental health care.'
  },
];

const CaseStudies: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<{ title: string; content: string } | null>(null);

  const handleOpen = (study: { title: string; content: string }) => {
    setSelectedStudy(study);
    setOpen(true);
  };

  return (
    <section style={{ padding: '50px 0', backgroundColor: '#335D4F' }}>
      <Typography variant="h4" align="center" style={{ color: '#fff', fontWeight: 'bold', marginBottom: '30px' }}>
        Case Studies
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {caseStudies.map((study, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card
                style={{
                  backgroundColor: '#A3E635',
                  color: '#264653',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <CardMedia
                  component="img"
                  image={study.img}
                  alt={study.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <CardContent style={{ padding: '20px', textAlign: 'center' }}>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    {study.title}
                  </Typography>
                  <Button
                    variant="contained"
                    style={{ marginTop: '10px', backgroundColor: '#264653', color: '#fff' }}
                    onClick={() => handleOpen(study)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for case study details */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{selectedStudy?.title}</DialogTitle>
        <DialogContent>
          <Typography>{selectedStudy?.content}</Typography>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudies;
