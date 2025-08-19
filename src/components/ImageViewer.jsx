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
  isTransitioning = false,
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
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
      {/* Controls at the top */}
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

      {/* Main image area with navigation */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Navigation buttons */}
        {currentImageIndex > 0 && (
          <button
            onClick={() => onNavigate(-1)}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20 touch-manipulation"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
        )}
        
        {currentImageIndex < gallery.images.length - 1 && (
          <button
            onClick={() => onNavigate(1)}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20 touch-manipulation"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Image container with transition overlay */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          {/* Deep Black Transition Overlay - Only for image area */}
          <div className={`absolute inset-0 bg-black z-10 transition-opacity duration-300 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} />

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-15">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-15">
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

          <div 
            className="relative z-5"
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
              className={`max-w-full max-h-full object-contain select-none transition-all duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              style={{
                transform: `scale(${imageZoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)`
              }}
              onLoad={onImageLoad}
              onError={onImageError}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Image information below the image */}
      <div className="bg-black/80 text-white p-4 sm:p-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{currentImage.caption}</h3>
              <p className="text-sm sm:text-base opacity-90 leading-relaxed">{currentImage.description}</p>
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-2 text-xs sm:text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Zoom: {Math.round(imageZoom * 100)}%
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full hidden sm:inline">
                Use arrow keys to navigate
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full sm:hidden">
                Swipe to navigate
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail navigation at the bottom */}
      <div className="bg-black/60 p-3 sm:p-4">
        <div className="flex justify-center max-w-full overflow-x-auto">
          <div className="flex gap-1 sm:gap-2">
            {gallery.images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => onImageIndexChange(index)}
                className={`w-12 h-8 sm:w-16 sm:h-10 rounded overflow-hidden border-2 transition-all flex-shrink-0 touch-manipulation ${
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
    </div>
  );
};

export default ImageViewer;