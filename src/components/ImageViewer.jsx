import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle 
} from 'lucide-react';
import ImageViewerControls from './ImageViewerControls';

const ImageViewer = ({ 
  selectedImage,
  currentImageIndex,
  galleries,
  currentPage,
  imageZoom,
  imagePosition,
  isDragging,
  isAutoplay,
  loading,
  imageError,
  onClose,
  onNavigate,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onAutoplayToggle,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onImageLoad,
  onImageError,
  onImageIndexChange
}) => {
  const gallery = galleries[currentPage];
  const currentImage = gallery?.images[currentImageIndex];

  if (!selectedImage || !currentImage || !gallery) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
          <AlertCircle size={48} className="mb-4 text-red-400" />
          <p className="text-lg mb-2">Failed to load image</p>
          <button
            onClick={() => onImageLoad()}
            className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      <ImageViewerControls
        currentImageIndex={currentImageIndex}
        totalImages={gallery.images.length}
        isAutoplay={isAutoplay}
        onAutoplayToggle={onAutoplayToggle}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onResetZoom={onResetZoom}
        onClose={onClose}
        imageZoom={imageZoom}
      />

      {currentImageIndex > 0 && (
        <button
          onClick={() => onNavigate(-1)}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10 touch-manipulation"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}
      
      {currentImageIndex < gallery.images.length - 1 && (
        <button
          onClick={() => onNavigate(1)}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10 touch-manipulation"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}

      <div 
        className="relative w-full h-full flex items-center justify-center p-4"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{ 
          cursor: imageZoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' 
        }}
      >
        <img
          src={currentImage.url}
          alt={currentImage.caption}
          className="max-w-full max-h-full object-contain transition-transform duration-200 select-none"
          style={{
            transform: `scale(${imageZoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)`
          }}
          onLoad={onImageLoad}
          onError={onImageError}
          draggable={false}
        />
      </div>

      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center z-10">
        <div className="bg-black/70 text-white p-3 sm:p-4 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-semibold mb-2 text-sm sm:text-base">{currentImage.caption}</h3>
          <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{currentImage.description}</p>
          
          <div className="flex justify-center gap-2 mt-3 sm:mt-4 text-xs">
            <span className="bg-white/20 px-2 py-1 rounded">
              Zoom: {Math.round(imageZoom * 100)}%
            </span>
            <span className="bg-white/20 px-2 py-1 rounded hidden sm:inline">
              Use arrow keys to navigate
            </span>
            <span className="bg-white/20 px-2 py-1 rounded sm:hidden">
              Swipe to navigate
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-10 max-w-full overflow-x-auto">
        <div className="flex gap-1 sm:gap-2 bg-black/50 p-2 rounded-lg">
          {gallery.images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => onImageIndexChange(index)}
              className={`w-10 h-6 sm:w-12 sm:h-8 rounded overflow-hidden border-2 transition-all flex-shrink-0 touch-manipulation ${
                index === currentImageIndex ? 'border-white' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;