
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-svn-primary text-white">
      <div className="luxe-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <img
              src="/lovable-uploads/66e5d48c-1b51-4187-b1f1-08329e697478.png"
              alt="SVN BAY PARCK"
              className="h-16 mb-4 invert"
            />
            <p className="text-sm">
              Luxury Redefined by the Shore – Experience Exclusive Beachfront Living at SVN Bay Parck
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-svn-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-svn-secondary transition-colors">About Us</Link></li>
              <li><Link to="/plots" className="text-sm hover:text-svn-secondary transition-colors">Beachfront Villa Plots</Link></li>
              <li><Link to="/resort" className="text-sm hover:text-svn-secondary transition-colors">Luxury Resort</Link></li>
              <li><Link to="/amenities" className="text-sm hover:text-svn-secondary transition-colors">Amenities</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-svn-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-svn-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p>Koshta Junction, Srikakulam, Andhra Pradesh</p>
              <p>Phone: +91 85999 24242 / +91 85999 36363</p>
              <p>Email: info@svnsjd.com</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/svnbayparck?igsh=ajJ5bGZhcndtdTlq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-svn-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/16Gsh3Cfhg/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-svn-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://g.co/kgs/TXnG4wr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-svn-secondary transition-colors"
                aria-label="Google Business"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                  <path d="M11 7H13V9H11V7Z" />
                  <path d="M11 11H13V17H11V11Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <p className="text-sm mb-4">AP RERA NO: P01070381701</p>
            <p className="text-xs">*Images in this presentation are for illustrative purposes only. Layout, specifications and facilities are subject to change.*</p>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-white/20 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} SVN BAY PARCK. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
