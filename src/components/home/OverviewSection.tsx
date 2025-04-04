import React from 'react';
import { Link } from 'react-router-dom';
const OverviewSection = () => {
  return <section id="overview" className="section-padding bg-white">
      <div className="luxe-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="section-title">Welcome to SVN Bay Parck</h2>
          <p className="text-gray-600">
            An exclusive beachfront development in Koshta Junction, Srikakulam, Andhra Pradesh. Spread across 40 acres, this gated luxury community offers 206 premium beach plots and a high-end resort with serviced beachfront villas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
            <img alt="Beachfront Villa Plots" className="w-full h-48 object-cover" src="/lovable-uploads/89efbef9-8037-4af7-8b2b-2f45d370fa29.jpg" />
            <div className="p-6">
              <h3 className="text-xl font-medium text-svn-primary mb-2">Beachfront Villa Plots</h3>
              <p className="text-gray-600 mb-4">
                These 200 to 267 sq. yard plots are pre-demarcated and ready for development, giving you complete freedom to build your dream beachfront villa.
              </p>
              <Link to="/plots" className="text-svn-primary font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
            <img alt="Luxury Resort" className="w-full h-48 object-cover" src="/lovable-uploads/ce1aa369-bde7-4c90-9c13-f9ba1b2f9c47.jpg" />
            <div className="p-6">
              <h3 className="text-xl font-medium text-svn-primary mb-2">Luxury Resort</h3>
              <p className="text-gray-600 mb-4">
                The 9-acre Luxury Resort offers an unparalleled retreat with ultra-luxury serviced beachfront villas designed for effortless comfort and sophistication.
              </p>
              <Link to="/resort" className="text-svn-primary font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
            <img alt="Premium Amenities" className="w-full h-48 object-cover" src="/lovable-uploads/bfb7c1b3-6108-4ddb-9eae-87d38faebec4.jpg" />
            <div className="p-6">
              <h3 className="text-xl font-medium text-svn-primary mb-2">Premium Amenities</h3>
              <p className="text-gray-600 mb-4">
                From private beach access and infinity pools to gourmet dining and signature spa services, SVN Bay Parck offers a complete luxury lifestyle.
              </p>
              <Link to="/amenities" className="text-svn-primary font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OverviewSection;