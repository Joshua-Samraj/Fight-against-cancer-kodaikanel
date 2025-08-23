import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GalleryImage from '../components/GalleryImage';
import { GALLERIES_DATA } from '../data/galleriesData';

const AwarenessPage = ({ onImageClick }) => {
  const gallery = GALLERIES_DATA.Awareness;

  if (!gallery || !gallery.images || gallery.images.length === 0) {
    return (
      <div className={`min-h-screen ${gallery?.bgColor || 'bg-gray-50'} py-12`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{gallery?.title || 'Awareness'}</h1>
            <p className="text-gray-600">No images available for this gallery yet.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${gallery?.bgColor || 'bg-gray-50'} py-12`}>
      <div className="container mx-auto px-4">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-blue-600 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {gallery.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {gallery.description}
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
            <span className="font-medium">{gallery.images.length} Images</span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {gallery.images.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={index}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwarenessPage;