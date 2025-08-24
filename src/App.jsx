import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import Day1Page from './pages/Day1Page';
import Day2Page from './pages/Day2Page';
import Day3Page from './pages/Day3Page';
import Day4Page from './pages/Day4Page';
import AwarenessPage from './pages/AwarenessPage';
import NewImageViewer from './components/NewImageViewer';
import Footer from './components/Footer';
import CustomStyles from './components/CustomStyles';
import ImageProtection from './components/ImageProtection';
import { GALLERIES_DATA } from './data/galleriesData';

const KadaikanalCancerAwarenessWebsite = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryKey, setCurrentGalleryKey] = useState('');
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);

  // Event Handlers for new ImageViewer
  const handleImageClick = useCallback((image, index, galleryKey) => {
    const gallery = GALLERIES_DATA[galleryKey];
    if (gallery && gallery.images) {
      setSelectedImage(image);
      setCurrentImageIndex(index);
      setCurrentGalleryKey(galleryKey);
      setCurrentGalleryImages(gallery.images);
    }
  }, []);

  const handleCloseImageViewer = useCallback(() => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
    setCurrentGalleryKey('');
    setCurrentGalleryImages([]);
  }, []);

  const handleNextImage = useCallback(() => {
    if (currentGalleryImages.length > 0) {
      const nextIndex = (currentImageIndex + 1) % currentGalleryImages.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(currentGalleryImages[nextIndex]);
    }
  }, [currentImageIndex, currentGalleryImages]);

  const handlePrevImage = useCallback(() => {
    if (currentGalleryImages.length > 0) {
      const prevIndex = currentImageIndex === 0 ? currentGalleryImages.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(currentGalleryImages[prevIndex]);
    }
  }, [currentImageIndex, currentGalleryImages]);

  // Keyboard navigation for new ImageViewer
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        switch (e.key) {
          case 'Escape':
            handleCloseImageViewer();
            break;
          case 'ArrowLeft':
            handlePrevImage();
            break;
          case 'ArrowRight':
            handleNextImage();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, handleCloseImageViewer, handleNextImage, handlePrevImage]);

  return (
    <Router>
      <ScrollToTop />
      <ImageProtection>
        <div className="min-h-screen bg-white">
          <Navigation galleries={GALLERIES_DATA} />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  galleries={GALLERIES_DATA}
                />
              }
            />
            <Route
              path="/awareness"
              element={
                <AwarenessPage
                  onImageClick={(image, index) => handleImageClick(image, index, 'Awareness')}
                />
              }
            />
            <Route
              path="/day1"
              element={
                <Day1Page
                  onImageClick={(image, index) => handleImageClick(image, index, 'awareness')}
                />
              }
            />
            <Route
              path="/day2"
              element={
                <Day2Page
                  onImageClick={(image, index) => handleImageClick(image, index, 'survivors')}
                />
              }
            />
            <Route
              path="/day3"
              element={
                <Day3Page
                  onImageClick={(image, index) => handleImageClick(image, index, 'community')}
                />
              }
            />
            <Route
              path="/day4"
              element={
                <Day4Page
                  onImageClick={(image, index) => handleImageClick(image, index, 'prevention')}
                />
              }
            />
          </Routes>

          {selectedImage && (
            <NewImageViewer
              imageUrl={selectedImage.url}
              imageTitle={selectedImage.caption || selectedImage.alt || 'Image'}
              onClose={handleCloseImageViewer}
              onNext={handleNextImage}
              onPrev={handlePrevImage}
              currentIndex={currentImageIndex}
              totalImages={currentGalleryImages.length}
            />
          )}

          <Footer />
          <CustomStyles />
        </div>
      </ImageProtection>
    </Router>
  );
};

export default KadaikanalCancerAwarenessWebsite;