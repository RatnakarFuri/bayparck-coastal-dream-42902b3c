import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" alt="SVN Bay Parck Beachfront" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="luxe-container">
          <div className="max-w-3xl animate-fade-in">
            
            <p className="text-xl md:text-2xl text-white font-allura mb-8 font-medium text-center lg:text-6xl">Endless horizons, Timeless elegance</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/plots" className="btn-primary">
                Explore Beachfront Villa Plots
              </Link>
              <Link to="/resort" className="btn-secondary">
                Discover Luxury Resort
              </Link>
              <a href="https://wa.me/918599936363" target="_blank" rel="noopener noreferrer" className="btn-outline border-white text-white hover:bg-white hover:text-svn-primary">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#overview" className="text-white flex flex-col items-center" aria-label="Scroll Down">
          <span className="mb-2 text-sm">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>;
};
export default HeroSection;