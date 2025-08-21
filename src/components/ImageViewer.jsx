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
    <div className="fixed inset-0 bg-black/95 z-50">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-full">
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
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20 touch-manipulation"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          
          {currentImageIndex < gallery.images.length - 1 && (
            <button
              onClick={() => onNavigate(1)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20 touch-manipulation"
            >
              <ChevronRight size={20} />
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
                className={`max-w-full max-h-full object-contain select-none transition-all duration-300 ease-in-out pointer-events-none ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                style={{
                  transform: `scale(${imageZoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitTouchCallout: 'none',
                  WebkitUserDrag: 'none',
                  KhtmlUserSelect: 'none'
                }}
                onLoad={onImageLoad}
                onError={onImageError}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Image information below the image */}
        <div className="bg-black/80 text-white p-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{currentImage.caption}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{currentImage.description}</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Zoom: {Math.round(imageZoom * 100)}%
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Swipe to navigate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail navigation at the bottom */}
        <div className="bg-black/60 p-3">
          <div className="flex justify-center max-w-full overflow-x-auto">
            <div className="flex gap-1">
              {gallery.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => onImageIndexChange(index)}
                  className={`w-12 h-8 rounded overflow-hidden border-2 transition-all flex-shrink-0 touch-manipulation ${
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

      {/* Desktop Layout */}
      <div className="hidden md:flex h-full">
        {/* Left sidebar with thumbnails and info */}
        <div className="w-80 bg-black/90 border-r border-white/10 flex flex-col">
          {/* Controls */}
          <div className="p-4 border-b border-white/10">
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
          </div>

          {/* Image information */}
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-white">{currentImage.caption}</h3>
            <p className="text-sm opacity-90 leading-relaxed text-white mb-4">{currentImage.description}</p>
            
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full">
                Zoom: {Math.round(imageZoom * 100)}%
              </span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full">
                Use arrow keys
              </span>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="grid grid-cols-2 gap-3">
              {gallery.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => onImageIndexChange(index)}
                  className={`aspect-video rounded overflow-hidden border-2 transition-all ${
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

        {/* Main image area */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Navigation buttons */}
          {currentImageIndex > 0 && (
            <button
              onClick={() => onNavigate(-1)}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {currentImageIndex < gallery.images.length - 1 && (
            <button
              onClick={() => onNavigate(1)}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image container with transition overlay */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            {/* Deep Black Transition Overlay - Only for image area */}
            <div className={`absolute inset-0 bg-black z-10 transition-opacity duration-300 ease-in-out ${
              isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`} />

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-15">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
              </div>
            )}

            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-15">
                <AlertCircle size={64} className="mb-4 text-red-400" />
                <p className="text-xl mb-4">Failed to load image</p>
                <button
                  onClick={() => onImageLoad()}
                  className="px-6 py-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  Retry
                </button>
              </div>
            )}

            <div 
              className="relative z-5 w-full h-full flex items-center justify-center"
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
                className={`select-none transition-all duration-300 ease-in-out pointer-events-none ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  transform: `scale(${imageZoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitTouchCallout: 'none',
                  WebkitUserDrag: 'none',
                  KhtmlUserSelect: 'none'
                }}
                onLoad={onImageLoad}
                onError={onImageError}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;