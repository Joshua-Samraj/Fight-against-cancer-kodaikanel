import React from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Play,
  Pause
} from 'lucide-react';

const ImageViewerControls = ({ 
  currentImageIndex, 
  totalImages, 
  isAutoplay, 
  onAutoplayToggle,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onClose,
  imageZoom
}) => {
  return (
    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 sm:gap-2 text-white">
          <span className="text-xs sm:text-sm bg-black/50 px-2 sm:px-3 py-1 rounded-full">
            {currentImageIndex + 1} of {totalImages}
          </span>
          <button
            onClick={onAutoplayToggle}
            className="p-1.5 sm:p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors touch-manipulation"
          >
            {isAutoplay ? <Pause size={14} className="sm:w-4 sm:h-4" /> : <Play size={14} className="sm:w-4 sm:h-4" />}
          </button>
        </div>
        
        <div className="flex gap-1 sm:gap-2">
          <button
            onClick={onZoomOut}
            className="p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
            disabled={imageZoom <= 0.5}
          >
            <ZoomOut size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={onZoomIn}
            className="p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
            disabled={imageZoom >= 4}
          >
            <ZoomIn size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={onResetZoom}
            className="p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
          >
            <RotateCcw size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
          >
            <X size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewerControls;