import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ImageViewer from './components/ImageViewer';
import Footer from './components/Footer';
import CustomStyles from './components/CustomStyles';
import { GALLERIES_DATA } from './data/galleriesData';

const KadaikanalCancerAwarenessWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageZoom, setImageZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const autoplayRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoplay && selectedImage) {
      const currentGallery = GALLERIES_DATA[currentPage];
      if (currentGallery) {
        autoplayRef.current = setInterval(() => {
          setCurrentImageIndex(prev => 
            prev === currentGallery.images.length - 1 ? 0 : prev + 1
          );
        }, 3000);
      }
    } else {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, selectedImage, currentPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        const currentGallery = GALLERIES_DATA[currentPage];
        if (!currentGallery) return;
        
        switch (e.key) {
          case 'Escape':
            handleCloseImageViewer();
            break;
          case 'ArrowLeft':
            handleNavigateImage(-1);
            break;
          case 'ArrowRight':
            handleNavigateImage(1);
            break;
          case '+':
          case '=':
            handleZoomIn();
            break;
          case '-':
            handleZoomOut();
            break;
          case '0':
            handleResetZoom();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, currentPage]);

  // Event Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedImage(null);
  };

  const handleCardClick = (galleryKey) => {
    setCurrentPage(galleryKey);
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
    setImageError(false);
    setLoading(true);
  };

  const handleCloseImageViewer = () => {
    setSelectedImage(null);
    setIsAutoplay(false);
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleNavigateImage = (direction) => {
    const currentGallery = GALLERIES_DATA[currentPage];
    if (!currentGallery) return;
    
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < currentGallery.images.length) {
      setCurrentImageIndex(newIndex);
      setImageZoom(1);
      setImagePosition({ x: 0, y: 0 });
      setImageError(false);
      setLoading(true);
    }
  };

  const handleZoomIn = () => {
    setImageZoom(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setImageZoom(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleResetZoom = () => {
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleAutoplayToggle = () => {
    setIsAutoplay(prev => !prev);
  };

  const handleMouseDown = (e) => {
    if (imageZoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && imageZoom > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleImageLoad = () => {
    setLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setImageError(true);
  };

  const handleImageIndexChange = (index) => {
    setCurrentImageIndex(index);
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
    setImageError(false);
    setLoading(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        galleries={GALLERIES_DATA}
      />

      {currentPage === 'home' ? (
        <HomePage 
          galleries={GALLERIES_DATA}
          onCardClick={handleCardClick}
        />
      ) : (
        <GalleryPage
          currentPage={currentPage}
          galleries={GALLERIES_DATA}
          onPageChange={handlePageChange}
          onImageClick={handleImageClick}
        />
      )}
      
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          currentImageIndex={currentImageIndex}
          galleries={GALLERIES_DATA}
          currentPage={currentPage}
          imageZoom={imageZoom}
          imagePosition={imagePosition}
          isDragging={isDragging}
          isAutoplay={isAutoplay}
          loading={loading}
          imageError={imageError}
          onClose={handleCloseImageViewer}
          onNavigate={handleNavigateImage}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetZoom={handleResetZoom}
          onAutoplayToggle={handleAutoplayToggle}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onImageLoad={handleImageLoad}
          onImageError={handleImageError}
          onImageIndexChange={handleImageIndexChange}
        />
      )}

      <Footer />
      <CustomStyles />
    </div>
  );
};

export default KadaikanalCancerAwarenessWebsite;