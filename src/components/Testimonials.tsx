// Testimonials.tsx
import React from 'react';
import { Card, CardContent, Typography, Grid, Rating } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    review: 'Best Service Ever! One of the best places where you can open up about your feelings. You can truly rely on them. Thank you guys for your wonderful service!',
    rating: 4.8,
    tags: ['Depression', 'Life Transitions'],
    img: 'path-to-image-client-1',
  },
  {
    name: 'Jane Smith',
    review: 'Well-mannered doctors! The doctors know how to treat you in your worst. Connecting them is invaluable. I am really having a good experience with you guys!',
    rating: 4.9,
    tags: ['Depression', 'Trauma'],
    img: 'path-to-image-client-2',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-green-50">
      <Typography variant="h4" className="text-center mb-8">
        Love We Got From Our Clients
      </Typography>
      <Grid container spacing={4} className="container mx-auto">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Rating value={testimonial.rating} precision={0.1} readOnly />
                  </div>
                </div>
                <Typography variant="body2" className="mb-4">
                  {testimonial.review}
                </Typography>
                <div className="flex space-x-2">
                  {testimonial.tags.map((tag, idx) => (
                    <Typography
                      key={idx}
                      variant="caption"
                      className="bg-green-200 text-green-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </Typography>
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

export default Testimonials;
