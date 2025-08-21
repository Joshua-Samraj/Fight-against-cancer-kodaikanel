import React from 'react';
import { ZoomIn } from 'lucide-react';

const GalleryImage = ({ image, index, onImageClick }) => {
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div
      onClick={() => onImageClick(image, index)}
      className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
    >
      <div className="relative overflow-hidden h-32 sm:h-48">
        {/* Invisible overlay to prevent direct image interaction */}
        <div 
          className="absolute inset-0 z-10 bg-transparent"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
        />
        <img
          src={image.url}
          alt={image.caption}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none"
          loading="lazy"
          draggable={false}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none',
            WebkitUserDrag: 'none',
            KhtmlUserSelect: 'none'
          }}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzE1MCA4Mi4yNSAxNjUuMjUgNjcgMTgzIDY3QzIwMC43NSA2NyAyMTYgODIuMjUgMjE2IDEwMEMyMTYgMTE3Ljc1IDIwMC43NSAxMzMgMTgzIDEzM0MxNjUuMjUgMTMzIDE1MCAxMTcuNzUgMTUwIDEwMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDE1QzE1IDEzLjM0IDE2LjM0IDEyIDE4IDEyQzE5LjY2IDEyIDIxIDEzLjM0IDIxIDE1QzIxIDE2LjY2IDE5LjY2IDE4IDE4IDE4QzE2LjM0IDE4IDE1IDE2LjY2IDE1IDE1WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4KPC9zdmc+';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
            <ZoomIn className="text-white mb-2" size={20} />
          </div>
        </div>
      </div>
      {/* <div className="p-2 sm:p-4">
        <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm leading-tight">
          {image.caption}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-2 hidden sm:block">
          {image.description}
        </p>
      </div> */}
    </div>
  );
};

export default GalleryImage;