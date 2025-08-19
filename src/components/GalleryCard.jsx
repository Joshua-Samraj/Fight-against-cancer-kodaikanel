import React from 'react';

const GalleryCard = ({ galleryKey, gallery, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(galleryKey)}
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden h-80">
        <div className={`bg-gradient-to-br ${gallery.color} text-white p-6 h-32 flex items-center justify-between relative overflow-hidden`}>
          <div className="relative z-10">
            <gallery.icon size={32} className="mb-2" />
            <h3 className="text-xl font-bold">{gallery.title}</h3>
          </div>
          <div className="absolute -top-4 -right-4 opacity-20">
            <gallery.icon size={80} />
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {gallery.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-500">
              {gallery.images.length} Images
            </span>
            <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
              Explore Gallery →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;