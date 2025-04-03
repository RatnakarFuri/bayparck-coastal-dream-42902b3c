
import React from 'react';
import Layout from '@/components/layout/Layout';

const AmenitiesPage = () => {
  const amenitiesGroups = [
    {
      title: 'Leisure & Recreation',
      items: [
        { name: 'Private Beach Access', description: 'Exclusive entry to pristine shoreline' },
        { name: 'Infinity Pool', description: 'Stunning oceanfront swimming experience' },
        { name: 'Clubhouse', description: 'Social hub with various entertainment options' },
        { name: 'Tennis Courts', description: 'Professional-grade courts for sports enthusiasts' },
        { name: 'Beach Volleyball', description: 'Fun shoreline sporting activities' },
        { name: 'Water Sports', description: 'Exciting ocean activities and equipment' },
      ]
    },
    {
      title: 'Wellness & Relaxation',
      items: [
        { name: 'Signature Spa', description: 'Rejuvenating treatments with ocean-inspired therapies' },
        { name: 'Fitness Center', description: 'State-of-the-art equipment with ocean views' },
        { name: 'Yoga Pavilion', description: 'Serene space for mindfulness and wellness' },
        { name: 'Meditation Gardens', description: 'Tranquil settings for peace and relaxation' },
        { name: 'Jogging Tracks', description: 'Scenic paths for running and walking' },
        { name: 'Steam & Sauna', description: 'Luxurious facilities for ultimate relaxation' },
      ]
    },
    {
      title: 'Dining & Entertainment',
      items: [
        { name: 'Gourmet Restaurants', description: 'Fine dining with locally-sourced ingredients' },
        { name: 'Beachside Bar', description: 'Refreshing cocktails with stunning views' },
        { name: 'Private Dining', description: 'Exclusive settings for special occasions' },
        { name: 'Event Spaces', description: 'Versatile venues for gatherings and celebrations' },
        { name: 'Outdoor Cinema', description: 'Movie nights under the stars' },
        { name: 'Beach Bonfires', description: 'Evening gatherings by the shoreline' },
      ]
    },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="section-title">Premium Amenities</h1>
            <p className="text-xl text-gray-600">
              Handpicked lifestyle amenities for an unmatched living experience
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="luxe-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-svn-primary">
                Luxury at Every Turn
              </h2>
              <p className="text-gray-600 mb-6">
                SVN Bay Parck offers a comprehensive suite of amenities designed to provide the ultimate luxury lifestyle. From relaxation and wellness to recreation and entertainment, every aspect of elevated living has been thoughtfully considered.
              </p>
              <p className="text-gray-600">
                Live a lifestyle of indulgence, tranquility, and endless recreation at SVN Bay Parck.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-up">
              <img 
                src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                alt="SVN Bay Parck Amenities" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {amenitiesGroups.map((group, groupIndex) => (
        <section 
          key={groupIndex} 
          className={`section-padding ${groupIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="luxe-container">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="section-title">{group.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-up"
                  style={{ animationDelay: `${itemIndex * 100}ms` }}
                >
                  <h3 className="text-xl font-medium text-svn-primary mb-3">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gray-50">
        <div className="luxe-container">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                  alt="SVN Bay Parck Amenity" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                  alt="SVN Bay Parck Amenity" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                  alt="SVN Bay Parck Amenity" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png" 
                  alt="SVN Bay Parck Amenity" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AmenitiesPage;
