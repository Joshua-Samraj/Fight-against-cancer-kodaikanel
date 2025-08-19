import React from 'react';

const GalleryCard = ({ galleryKey, gallery, onCardClick }) => {
  const cardImage = gallery.cardImage;
  
  return (
    <div
      onClick={() => onCardClick(galleryKey)}
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden h-80">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden">
          {cardImage ? (
            <img
              src={cardImage.src}
              alt={cardImage.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
          ) : null}
          
          {/* Fallback gradient background */}
          <div 
            className={`bg-gradient-to-br ${gallery.color} w-full h-full items-center justify-center ${cardImage ? 'hidden' : 'flex'}`}
          >
            <gallery.icon size={48} className="text-white opacity-80" />
            <h1 class = "p-4 text-white ">Comming Soon</h1>
          </div>
          
          {/* Overlay with title */}
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="p-4 text-white w-full">
              <h3 className="text-xl font-bold mb-1">{gallery.title} </h3>
              <span className="text-sm opacity-90">
                {gallery.images.length} Images
              </span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
            {gallery.description}
          </p>
          <div className="flex justify-end">
            <span className="text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors text-sm">
              Explore Gallery →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;