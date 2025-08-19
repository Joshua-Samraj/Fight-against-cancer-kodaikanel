import React from 'react';
import GalleryCard from '../components/GalleryCard';
import HeroSection from '../components/HeroSection';

const HomePage = ({ galleries, onCardClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <HeroSection />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Cancer Awareness Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore different aspects of our comprehensive approach to cancer awareness, 
            support, and prevention in the Kodaikanel community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {Object.entries(galleries).map(([key, gallery]) => (
            <GalleryCard 
              key={key}
              galleryKey={key}
              gallery={gallery}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Every action counts in the fight against cancer. Whether through awareness, 
            support, or prevention, you can make a difference in our community.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Get Involved Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;