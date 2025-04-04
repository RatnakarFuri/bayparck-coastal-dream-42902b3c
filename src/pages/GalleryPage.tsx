import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { X } from 'lucide-react';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';

const GalleryPage = () => {
  useScrollToAnchor();
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      category: 'Aerial Views',
      items: [
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Aerial view of SVN Bay Parck' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Aerial view of Resort' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Beachfront from above' },
      ]
    },
    {
      category: 'Luxury Villas',
      items: [
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Beachfront villa exterior' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Villa interior living space' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Villa bedroom with ocean view' },
      ]
    },
    {
      category: 'Resort Spaces',
      items: [
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Infinity pool overlooking ocean' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Spa treatment room' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Beachside restaurant' },
      ]
    },
    {
      category: 'Coastal Charm',
      items: [
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Pristine beach at sunset' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Palm-lined walkways' },
        { src: '/lovable-uploads/c04e2b9d-583f-404b-ac32-9bd4b1787760.png', alt: 'Beachfront landscape' },
      ]
    },
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 md:py-32 bg-gray-50">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h1 className="section-title">Gallery</h1>
            <p className="text-xl text-gray-600">
              Experience the Beauty of SVN Bay Parck
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      {galleryItems.map((section, sectionIndex) => (
        <section 
          key={sectionIndex} 
          className={`section-padding ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="luxe-container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-medium text-svn-primary">{section.category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-up"
                  style={{ animationDelay: `${itemIndex * 100}ms` }}
                  onClick={() => openLightbox(item.src)}
                >
                  <div className="relative aspect-w-4 aspect-h-3">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600">{item.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none z-20"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <div 
            className="relative max-w-5xl max-h-[80vh] w-full h-full mx-4 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Gallery item" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
