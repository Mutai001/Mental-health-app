import { Card, CardContent, Typography } from '@mui/material';

const services = [
  {
    title: 'Cognitive Behavioral Therapy',
    description: 'Effective for treating depression and anxiety disorders.',
  },
  {
    title: 'Counseling Services',
    description: 'Providing a safe space to talk about your problems.',
  },
  {
    title: 'Psychiatric Evaluation',
    description: 'Comprehensive evaluations by licensed professionals.',
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-8">Our Services</h2>
      <div className="flex justify-center space-x-8">
        {services.map((service, index) => (
          <Card key={index} className="max-w-sm shadow-md">
            <CardContent>
              <Typography variant="h5" className="font-bold">
                {service.title}
              </Typography>
              <Typography className="mt-4">{service.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
