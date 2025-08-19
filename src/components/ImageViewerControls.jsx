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
    <div className="absolute top-4 left-4 right-4 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-white">
          <span className="text-sm bg-black/50 px-3 py-1 rounded-full">
            {currentImageIndex + 1} of {totalImages}
          </span>
          <button
            onClick={onAutoplayToggle}
            className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            {isAutoplay ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={onZoomOut}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            disabled={imageZoom <= 0.5}
          >
            <ZoomOut size={20} />
          </button>
          <button
            onClick={onZoomIn}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            disabled={imageZoom >= 4}
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={onResetZoom}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <RotateCcw size={20} />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewerControls;