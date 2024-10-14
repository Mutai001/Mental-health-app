import React from 'react';
import Button from '../common/Button';
import healthImage from '../../assets/images/mental_health.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-heading mb-4">Welcome to Mental Health Support</h1>
      <p className="text-lg">
        Access personalized mental health support and information with full confidentiality.
      </p>
      <img src={healthImage} alt="Mental Health" className="my-8 w-full h-auto rounded-lg shadow-md" />
      <Button label="Get Started" onClick={() => console.log('Get Started Clicked')} />
    </div>
  );
};

export default HomePage;
