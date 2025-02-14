import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Client testimonials data
const testimonials = [
  {
    title: 'Best Service Ever!',
    text: 'One of the Best Place Where You Can Open-up About Your Things. You Can Easily Rely on Them. Thank You Guys for Your Wonderful Service!',
    video: 'https://player.vimeo.com/video/76979871', // Replace with actual video URL from Pexels
    rating: 5,
    tags: ['Depression', 'Life Transitions'],
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', // Replace with client image URL
  },
  {
    title: 'Well-mannered Doctors!',
    text: 'The Doctors Know How to Treat You in Your Worst. Connecting Them is Valuable. I am Literally Having Good Experience With You Guys!',
    video: 'https://player.vimeo.com/video/70591645', // Replace with actual video URL from Pexels
    rating: 5,
    tags: ['Depression', 'Trauma'],
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', // Replace with client image URL
  },
];

// Component to display star rating
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div style={{ display: 'flex', marginBottom: '10px' }}>
    {[...Array(rating)].map((_, index) => (
      <StarIcon key={index} style={{ color: '#F4A261' }} />
    ))}
  </div>
);

const ClientTestimonials: React.FC = () => {
  return (
    <section style={{ padding: '50px 0', backgroundColor: '#F5F5F5' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <Typography 
          variant="h4" 
          style={{ color: '#2C423F', fontWeight: 'bold' }}
        >
          Love We Got From Our Clients
        </Typography>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button 
            variant="outlined" 
            style={{
              color: '#2C423F', 
              borderColor: '#2C423F', 
              borderRadius: '50%',
              minWidth: '40px',
              minHeight: '40px',
              padding: '5px',
            }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </Button>
          <Button 
            variant="outlined" 
            style={{
              color: '#2C423F', 
              borderColor: '#2C423F', 
              borderRadius: '50%',
              minWidth: '40px',
              minHeight: '40px',
              padding: '5px',
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                gap: '20px',
              }}
            >
              <div style={{ width: '40%', position: 'relative' }}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.title} 
                  style={{
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '10px', 
                    objectFit: 'cover',
                  }} 
                />
                <a 
                  href={testimonial.video} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    backgroundColor: '#6DA14E', 
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  <PlayArrowIcon fontSize="large" />
                </a>
              </div>
              <CardContent style={{ flex: 1 }}>
                <StarRating rating={testimonial.rating} />
                <Typography 
                  variant="h6" 
                  style={{ fontWeight: 'bold', marginBottom: '10px' }}
                >
                  {testimonial.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  style={{ color: '#6D757D', marginBottom: '15px' }}
                >
                  {testimonial.text}
                </Typography>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {testimonial.tags.map((tag, idx) => (
                    <Chip 
                      key={idx} 
                      label={tag} 
                      variant="outlined" 
                      style={{ color: '#2C423F', borderColor: '#2C423F' }} 
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ClientTestimonials;
