import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5fcf9]">
      <h1 className="text-6xl font-bold text-bg-gcolor mb-4">404</h1>
      <h2 className="text-2xl font-medium text-[#8C8C8C] mb-4">Page Not Found</h2>
      <p className="text-[#555555] mb-8">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-bg-gcolor text-white py-2 px-4 rounded-md hover:bg-[#288F69] transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
