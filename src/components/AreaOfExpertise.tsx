import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const expertise = [
  { name: 'Trauma', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5iINf5K1x6-2cWZYUSu1SKVFI1O9IEzr-Q&s' },
  { name: 'Anxiety', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8E7ELemL_MX9DpXSjfswp4lFXFfhWviHoNg&s' },
  { name: 'Depression', imageUrl: 'https://www.piedmont.org/media/BlogImages/Depression-symptoms.jpg' },
  { name: 'Autism', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmhvf3A6qBd5VHXgZeh2O0eRrhH2E-S_edQ&s' },
  { name: 'Life Transitions', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KMR9KqzROT0yf6YxoxFKFFZPafTp2ggddA&s' },
  { name: 'Grief & Loss', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1ziSmveXowmIXQjLZxJsOghZF6NaXJpTAQ&s' },
  { name: 'Parenting', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbX_nSmQzaEAtlgwUCc0y0r9a4t8Nxx-gRA&s' },
  { name: 'OCD', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqHXZucgrWnPGjBpYrqlEIGoe6groyAjt0g&s' },
  { name: 'ADHD', imageUrl: 'https://auditorycenter.com/wp-content/uploads/2020/01/boy-with-ADHD.jpg' },
];

const AreaOfExpertise: React.FC = () => {
  // State to manage hover effect
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="flex flex-col items-center">
        <Typography 
          variant="h4" 
          className="text-center mb-8 text-green-700"
          style={{ 
            fontWeight: 'bold', 
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow for depth
            fontSize: '2.5rem', // Increases font size for better visibility
            letterSpacing: '0.1rem', // Adds spacing between letters
            margin: '0 16px', // Additional margin for spacing
            padding: '10px 20px', // Padding around the title
          }}
        >
          Areas of Expertise
        </Typography>
        <Grid container spacing={3} className="container mx-auto justify-center">
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
              <Card
                className="bg-green-100 flex items-center justify-center relative overflow-hidden"
                style={{
                  height: '120px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: '#ccf5d1',
                  position: 'relative',
                  transition: 'background-color 0.3s ease-in-out',
                }}
              >
                {/* Background Image on Hover */}
                <div
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: hoveredItem === item.name ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                  }}
                />
                <CardContent
                  style={{
                    zIndex: 2, 
                    color: hoveredItem === item.name ? '#fff' : '#2f855a',
                  }}
                >
                  <Typography
                    variant="h6"
                    className="text-center"
                    style={{ 
                      fontWeight: hoveredItem === item.name ? 'bold' : 'normal',
                      transition: 'color 0.3s ease-in-out',
                    }}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default AreaOfExpertise;
