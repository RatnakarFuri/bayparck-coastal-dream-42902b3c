
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-70px)] flex items-center justify-center bg-gray-50 py-24">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold text-svn-primary mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
          <p className="text-gray-500 mb-8">
            The page at <span className="font-medium">{location.pathname}</span> could not be found.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
