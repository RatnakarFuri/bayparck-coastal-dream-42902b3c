
import React from 'react';
import Layout from '@/components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="section-title">About SVN Bay Parck</h1>
            <p className="text-gray-600">
              An exclusive beachfront development redefining luxury by the shore
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="luxe-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-svn-primary">
                Welcome to SVN Bay Parck
              </h2>
              <p className="text-gray-600 mb-6">
                An exclusive beachfront development in Koshta Junction, Srikakulam, Andhra Pradesh. Spread across 40 acres, this gated luxury community offers 206 premium beach plots and a high-end resort with serviced beachfront villas.
              </p>
              <p className="text-gray-600">
                Designed for discerning investors and lifestyle seekers, SVN Bay Parck is the perfect blend of pristine coastal beauty and modern luxury.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-up">
              <img 
                src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                alt="SVN Bay Parck" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="section-title">About SVN Group</h2>
            <p className="text-gray-600">
              With a legacy of excellence and innovation, SVN Group is a pioneer in crafting premium real estate projects across residential, commercial, and hospitality sectors.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg animate-fade-up">
            <p className="text-gray-600 mb-6">
              Backed by an unwavering commitment to quality, SVN Group specializes in developing world-class living spaces that redefine luxury, comfort, and long-term value.
            </p>
            <p className="text-gray-600">
              SVN Bay Parck is a testament to this vision, offering an exclusive seaside haven for those who seek elegance and tranquility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-svn-primary mb-2">40+</div>
                <p className="text-gray-600">Acres of Premium Development</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-svn-primary mb-2">206</div>
                <p className="text-gray-600">Exclusive Beachfront Plots</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-svn-primary mb-2">9</div>
                <p className="text-gray-600">Acres of Luxury Resort</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
