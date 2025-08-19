import React from 'react';
import { ArrowLeft } from 'lucide-react';
import GalleryImage from '../components/GalleryImage';

const GalleryPage = ({ currentPage, galleries, onPageChange, onImageClick }) => {
  const gallery = galleries[currentPage];
  
  if (!gallery) return null;

  return (
    <div className={`min-h-screen ${gallery.bgColor}`}>
      <div className={`bg-gradient-to-r ${gallery.color} text-white py-12`}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <div className="flex items-center gap-4 mb-4">
            <gallery.icon size={40} />
            <h1 className="text-3xl md:text-4xl font-bold">{gallery.title}</h1>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">{gallery.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default GalleryPage;