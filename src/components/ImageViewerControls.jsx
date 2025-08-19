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
    <>
      {/* Mobile Layout */}
      <div className="md:hidden p-2 bg-black/60 border-b border-white/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-white">
            <span className="text-xs bg-black/50 px-2 py-1 rounded-full">
              {currentImageIndex + 1} of {totalImages}
            </span>
            <button
              onClick={onAutoplayToggle}
              className={`p-1.5 rounded-full hover:bg-black/70 transition-colors touch-manipulation ${
                isAutoplay 
                  ? 'bg-blue-600/80 animate-autoplay-pulse' 
                  : 'bg-black/50'
              }`}
            >
              {isAutoplay ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
          
          <div className="flex gap-1">
            <button
              onClick={onZoomOut}
              className="p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
              disabled={imageZoom <= 0.5}
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={onZoomIn}
              className="p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
              disabled={imageZoom >= 4}
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={onResetZoom}
              className="p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
            >
              <RotateCcw size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors touch-manipulation"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex flex-col gap-4">
          {/* Image counter and autoplay */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-white bg-white/10 px-3 py-1 rounded-full">
              {currentImageIndex + 1} of {totalImages}
            </span>
            <button
              onClick={onAutoplayToggle}
              className={`p-2 rounded-full hover:bg-black/70 transition-colors ${
                isAutoplay 
                  ? 'bg-blue-600/80 animate-autoplay-pulse' 
                  : 'bg-white/10'
              }`}
            >
              {isAutoplay ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white" />}
            </button>
          </div>

          {/* Control buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onZoomOut}
              className="flex items-center justify-center gap-2 p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              disabled={imageZoom <= 0.5}
            >
              <ZoomOut size={16} />
              <span className="text-sm">Zoom Out</span>
            </button>
            <button
              onClick={onZoomIn}
              className="flex items-center justify-center gap-2 p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              disabled={imageZoom >= 4}
            >
              <ZoomIn size={16} />
              <span className="text-sm">Zoom In</span>
            </button>
            <button
              onClick={onResetZoom}
              className="flex items-center justify-center gap-2 p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <RotateCcw size={16} />
              <span className="text-sm">Reset</span>
            </button>
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-2 p-2 bg-red-600/80 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <X size={16} />
              <span className="text-sm">Close</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageViewerControls;