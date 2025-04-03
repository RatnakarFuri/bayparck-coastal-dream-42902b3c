
import React from 'react';
import Layout from '@/components/layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="section-title">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Your Luxury Beachfront Investment Starts Here
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="luxe-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-medium mb-8 text-svn-primary">
                Connect with SVN Bay Parck
              </h2>
              <p className="text-gray-600 mb-8">
                At SVN Bay Parck, we believe in offering more than just property—we offer an exclusive lifestyle. Whether you're looking to invest, vacation, or own a dream beachfront villa, our expert team is ready to assist you with a seamless, high-end experience.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-svn-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-svn-primary mb-2">Location</h3>
                    <p className="text-gray-600">Koshta Junction, Srikakulam, Andhra Pradesh</p>
                    <a 
                      href="https://maps.app.goo.gl/5zibrTfJhstxPzCP8" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-svn-secondary mt-2 inline-block hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-svn-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-svn-primary mb-2">Sales & Private Tours</h3>
                    <p className="text-gray-600">+91 85999 24242 / +91 85999 36363</p>
                    <a 
                      href="https://wa.me/918599936363" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-svn-secondary mt-2 inline-block hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-svn-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-svn-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-svn-primary mb-2">Email</h3>
                    <p className="text-gray-600">info@svnsjd.com</p>
                    <p className="text-gray-500 text-sm mt-2">For investor & partnership inquiries</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 space-y-4">
                <h3 className="text-xl font-medium text-svn-primary">Services</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Schedule a Private Tour – Experience SVN Bay Parck first-hand with an exclusive site visit.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Personalized Consultation – Our real estate specialists will guide you through the best investment opportunities.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-svn-primary mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Resort Booking – Secure your stay at our luxury beachfront resort.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-up">
              <div className="h-full flex flex-col">
                <div className="flex-grow rounded-lg overflow-hidden shadow-lg mb-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.5078040655417!2d83.7581077!3d18.140506799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c0f0027cff3bb%3A0xeabdd61628bb3c6!2sSVN%20Bay%20Parck!5e0!3m2!1sen!2sin!4v1743675650649!5m2!1sen!2sin" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    title="SVN Bay Parck Map"
                  ></iframe>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-medium text-svn-primary">Inquire Now</h3>
                    <p className="text-gray-600 text-sm mt-1">Fill out the form below and our team will get back to you shortly.</p>
                  </div>
                  <div className="p-6">
                    <div data-tf-live="01JQTPPNWK6ZN38YWCHJK66DJJ" data-tf-height="400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
