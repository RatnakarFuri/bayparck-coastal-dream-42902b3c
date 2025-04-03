
import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: 'True Beachfront Living',
      description: 'Direct access to the golden sands and turquoise waters of the Bay of Bengal.',
      icon: (
        <svg className="w-10 h-10 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
    },
    {
      title: 'Exclusive Luxury',
      description: 'Secure, gated community with high-end infrastructure and future-ready developments.',
      icon: (
        <svg className="w-10 h-10 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
    },
    {
      title: 'Premium Investment',
      description: 'High appreciation potential in a rapidly growing coastal real estate market.',
      icon: (
        <svg className="w-10 h-10 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
    {
      title: 'Fully Developed Plots',
      description: 'Internal roads, water supply, electricity, and modern landscaping included.',
      icon: (
        <svg className="w-10 h-10 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxe-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="section-title">Why Choose SVN Bay Parck</h2>
          <p className="text-gray-600">
            Whether as a holiday home, rental property, or personal retreat, SVN Bay Parck promises unmatched exclusivity and a life of indulgence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-svn-secondary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-svn-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
