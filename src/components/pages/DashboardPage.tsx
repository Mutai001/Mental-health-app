import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-heading mb-4">Your Dashboard</h1>
      <p className="text-lg">
        View your mental health insights and track your progress over time.
      </p>
    </div>
  );
};

export default DashboardPage;
