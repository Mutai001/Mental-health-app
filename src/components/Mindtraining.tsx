import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const articles = [
  {
    title: "Opioid Overdose Survivors Report Having Had Suicidal Motivations",
    imageUrl: "https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg",
  },
  {
    title: "Compassionate Caregiving Born From Childhood Experience",
    imageUrl: "https://images.pexels.com/photos/5675678/pexels-photo-5675678.jpeg",
  },
  {
    title: "Everything You Need To Know About Anxiety nowadays",
    imageUrl: "https://images.pexels.com/photos/9109109/pexels-photo-9109109.jpeg",
  },
];

const Mindtraining: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Train Your Mind With Us
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="body1" component="p">
                  {article.title}
                </Typography>
                <IconButton href="#" aria-label="read more">
                  <ArrowForwardIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Mindtraining;
