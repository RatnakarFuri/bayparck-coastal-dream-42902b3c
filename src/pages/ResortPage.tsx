
import React from 'react';
import Layout from '@/components/layout/Layout';

const ResortPage = () => {
  const amenities = [
    {
      title: 'Serviced Beachfront Villas',
      description: '2 BHK (1,000 sq. ft.) & 4 BHK (2,000 sq. ft.) villas with stunning ocean views.'
    },
    {
      title: 'Private Beach Access',
      description: 'Direct access to the pristine shores of the Bay of Bengal.'
    },
    {
      title: 'Infinity Pool',
      description: 'Spectacular pool overlooking the ocean with sunbeds and cabanas.'
    },
    {
      title: 'Fine Dining Restaurants',
      description: 'Gourmet culinary experiences with fresh, locally-sourced ingredients.'
    },
    {
      title: 'Signature Spa',
      description: 'Rejuvenating treatments and therapies inspired by coastal wellness traditions.'
    },
    {
      title: 'Water Sports',
      description: 'Exciting activities including jet skiing, kayaking, and paddleboarding.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="section-title">Luxury Resort</h1>
            <p className="text-xl text-gray-600">
              A Five-Star Coastal Escape
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="luxe-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-up order-2 lg:order-1">
              <img 
                src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                alt="Luxury Resort" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="animate-fade-up order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-svn-primary">
                Unparalleled Luxury by the Ocean
              </h2>
              <p className="text-gray-600 mb-6">
                The 9-acre Luxury Resort at SVN Bay Parck offers an unparalleled retreat with ultra-luxury serviced beachfront villas designed to provide effortless comfort and sophistication.
              </p>
              <p className="text-gray-600">
                The resort combines world-class hospitality with bespoke beachfront living, ensuring every guest experiences the ultimate coastal getaway.
              </p>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/918599936363" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  Book Your Stay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="section-title">Resort Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-svn-primary mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="section-title">Tailored Experiences</h2>
            <p className="text-gray-600">
              At SVN Bay Parck Luxury Resort, we believe in creating memorable experiences tailored to your preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg animate-fade-up">
              <h3 className="text-xl font-medium text-svn-primary mb-4">Personalized Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Dedicated concierge services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Private chef and in-villa dining</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Spa treatments in the privacy of your villa</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Butler service for ultimate convenience</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg animate-fade-up">
              <h3 className="text-xl font-medium text-svn-primary mb-4">Exclusive Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Sunset yacht cruises along the coastline</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Private beachside bonfires and dinners</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Guided local excursions and cultural experiences</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Wellness retreats and yoga sessions by the beach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResortPage;
