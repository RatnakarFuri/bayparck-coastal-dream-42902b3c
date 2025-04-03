
import React from 'react';
import Layout from '@/components/layout/Layout';

const PlotsPage = () => {
  const features = [
    {
      title: 'True Beachfront Living',
      description: 'Direct access to the golden sands and turquoise waters of the Bay of Bengal.'
    },
    {
      title: 'Exclusive Luxury',
      description: 'Secure, gated community with high-end infrastructure and future-ready developments.'
    },
    {
      title: 'Premium Investment',
      description: 'High appreciation potential in a rapidly growing coastal real estate market.'
    },
    {
      title: 'Fully Developed Plots',
      description: 'Internal roads, water supply, electricity, and modern landscaping included.'
    },
    {
      title: 'Customizable Designs',
      description: 'Freedom to build your dream beachfront villa according to your preferences.'
    },
    {
      title: 'Resort Amenities',
      description: 'Access to the luxury resort facilities and premium services.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="section-title">Beachfront Villa Plots</h1>
            <p className="text-xl text-gray-600">
              Where Luxury Meets the Shoreline
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="luxe-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-svn-primary">
                Your Private Beachfront Paradise
              </h2>
              <p className="text-gray-600 mb-6">
                Imagine waking up to the sound of waves and endless ocean views. SVN Bay Parck's Beachfront Villa Plots offer an unparalleled opportunity to own a slice of paradise.
              </p>
              <p className="text-gray-600">
                These 200 to 267 sq. yard plots are pre-demarcated and ready for development, giving you complete freedom to build your dream beachfront villa.
              </p>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/918599936363" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  Inquire About Plots
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-up">
              <img 
                src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                alt="Beachfront Villa Plots" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="section-title">Why Choose SVN Bay Parck Beachfront Plots?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-svn-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="section-title">Investment Opportunity</h2>
            <p className="text-gray-600">
              Whether as a holiday home, rental property, or personal retreat, these platinum-class beach plots promise unmatched exclusivity and a life of indulgence.
            </p>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-svn-primary mb-4">Plot Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Plot sizes from 200 to 267 sq. yards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">DTCP approved layouts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Clear titles and legal documentation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">AP RERA registered project</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-svn-primary mb-4">Development Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Gated community with 24/7 security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Underground electrical connections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Water supply infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">Landscaped gardens and walkways</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlotsPage;
