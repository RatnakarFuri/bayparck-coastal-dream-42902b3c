
import React from 'react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="luxe-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-up">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Your Luxury Beachfront Investment Starts Here. Whether you're looking to invest, vacation, or own a dream beachfront villa, our expert team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-svn-primary">Location</h3>
                  <p className="text-gray-600">Koshta Junction, Srikakulam, Andhra Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-svn-primary">Phone</h3>
                  <p className="text-gray-600">+91 85999 24242 / +91 85999 36363</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-svn-primary">Email</h3>
                  <p className="text-gray-600">info@svnsjd.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://goo.gl/maps/5zibrTfJhstxPzCP8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center"
              >
                <span>View on Google Maps</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <div className="h-full flex flex-col">
              <div className="flex-grow rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.5078040655417!2d83.7581077!3d18.140506799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c0f0027cff3bb%3A0xeabdd61628bb3c6!2sSVN%20Bay%20Parck!5e0!3m2!1sen!2sin!4v1743675650649!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "400px" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="SVN Bay Parck Map"
                ></iframe>
              </div>
              
              <div className="mt-8">
                <div data-tf-live="01JQTPPNWK6ZN38YWCHJK66DJJ" data-tf-height="400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
