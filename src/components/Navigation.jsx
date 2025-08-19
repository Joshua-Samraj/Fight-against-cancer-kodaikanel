import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange, galleries }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePageChange = (page) => {
    onPageChange(page);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => handlePageChange('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                currentPage === 'home' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </button>
          </div>
          
          <div className="flex gap-2">
            {Object.entries(galleries).map(([key, gallery]) => (
              <button
                key={key}
                onClick={() => handlePageChange(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPage === key
                    ? `${gallery.bgColor} ${gallery.textColor}`
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <gallery.icon size={16} className="inline mr-2" />
                {gallery.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => handlePageChange('home')}
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${
              currentPage === 'home' 
                ? 'bg-blue-100 text-blue-700' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <Home size={18} />
            <span className="font-medium text-sm">Home</span>
          </button>

          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors relative"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-2">
              {Object.entries(galleries).map(([key, gallery], index) => (
                <button
                  key={key}
                  onClick={() => handlePageChange(key)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${
                    isMobileMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-2 opacity-0'
                  } ${
                    currentPage === key
                      ? `${gallery.bgColor} ${gallery.textColor}`
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <gallery.icon size={20} />
                  <span className="font-medium">{gallery.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;