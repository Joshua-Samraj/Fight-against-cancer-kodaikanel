import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ImageViewer from './components/ImageViewer';
import Footer from './components/Footer';
import CustomStyles from './components/CustomStyles';
import ImageProtection from './components/ImageProtection';
import { GALLERIES_DATA } from './data/galleriesData';

const KadaikanalCancerAwarenessWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageZoom, setImageZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef(null);

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  // Event Handlers - Define all handlers first
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    setSelectedImage(null);
    scrollToTop();
  }, [scrollToTop]);

  const handleCardClick = useCallback((galleryKey) => {
    setCurrentPage(galleryKey);
    scrollToTop();
  }, [scrollToTop]);

  const handleImageClick = useCallback((image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
    setImageError(false);
    setLoading(true);
    setIsAutoplay(true); // Enable autoplay by default
    setIsTransitioning(false);
  }, []);

  const handleCloseImageViewer = useCallback(() => {
    setSelectedImage(null);
    setIsAutoplay(false);
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
    setIsTransitioning(false);
  }, []);

  const handleNavigateImage = useCallback((direction) => {
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
  }, [currentPage, currentImageIndex]);

  const handleZoomIn = useCallback(() => {
    setImageZoom(prev => Math.min(prev + 0.5, 4));
  }, []);

  const handleZoomOut = useCallback(() => {
    setImageZoom(prev => Math.max(prev - 0.5, 0.5));
  }, []);

  const handleResetZoom = useCallback(() => {
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
  }, []);

  const handleAutoplayToggle = useCallback(() => {
    setIsAutoplay(prev => !prev);
  }, []);

  const handleMouseDown = useCallback((e) => {
    if (imageZoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      });
    }
  }, [imageZoom, imagePosition.x, imagePosition.y]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging && imageZoom > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, imageZoom, dragStart.x, dragStart.y]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleImageLoad = useCallback(() => {
    setLoading(false);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setLoading(false);
    setImageError(true);
  }, []);

  const handleImageIndexChange = useCallback((index) => {
    setCurrentImageIndex(index);
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
    setImageError(false);
    setLoading(true);
  }, []);

  // Auto-play functionality with transition
  useEffect(() => {
    if (isAutoplay && selectedImage) {
      const currentGallery = GALLERIES_DATA[currentPage];
      if (currentGallery && currentGallery.images && currentGallery.images.length > 1) {
        autoplayRef.current = setInterval(() => {
          setIsTransitioning(true);
          
          // After transition starts, change the image
          setTimeout(() => {
            setCurrentImageIndex(prev =>
              prev === currentGallery.images.length - 1 ? 0 : prev + 1
            );
            setImageZoom(1);
            setImagePosition({ x: 0, y: 0 });
            setImageError(false);
            setLoading(true);
            
            // End transition after image change
            setTimeout(() => {
              setIsTransitioning(false);
            }, 300);
          }, 300);
        }, 4000); // Increased interval to account for transition time
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

  // Scroll to top when page changes
  useEffect(() => {
    scrollToTop();
  }, [currentPage, scrollToTop]);

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
  }, [selectedImage, currentImageIndex, currentPage, handleCloseImageViewer, handleNavigateImage, handleZoomIn, handleZoomOut, handleResetZoom]);

  return (
    <ImageProtection>
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
            isTransitioning={isTransitioning}
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
    </ImageProtection>
  );
};

export default KadaikanalCancerAwarenessWebsite;