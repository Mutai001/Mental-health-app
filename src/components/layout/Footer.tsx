import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-6 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Mental Health App</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          We are dedicated to providing reliable and supportive resources for mental health. Your well-being is our priority.
        </p>
        
        <div className="mb-4">
          <a href="/" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300">Home</a>
          <a href="/dashboard" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300">Dashboard</a>
          <a href="/support" className="mx-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300">Support</a>
        </div>

        <div className="mb-4 flex justify-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        <p className="text-sm">
          © 2024 Mental Health App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
