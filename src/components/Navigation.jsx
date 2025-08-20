import React, { useState } from 'react';
import { Home, MapPin, Calendar } from 'lucide-react';

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
      {/* Event Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span className="font-medium">Kodaikanel, Tamil Nadu</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span className="font-medium">Cancer Awareness Event: Aug 21-24,2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Three Logos */}
            <div className="flex items-center gap-4">
              <img
                src="pen nalam.png"
                alt="Organization Logo 1"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-10 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg items-center justify-center text-white text-xs font-bold">
                LOGO1
              </div>

              <img
                src="logo.jpg"
                alt="Organization Logo 2"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-10 w-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg items-center justify-center text-white text-xs font-bold">
                LOGO2
              </div>

              <img
                src="van.png"
                alt="Organization Logo 3"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-10 w-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg items-center justify-center text-white text-xs font-bold">
                LOGO3
              </div>
            </div>

            <div className="h-8 w-px bg-gray-300"></div>

            {/* Event Information */}
            {/* <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={14} className="text-blue-600" />
                <span className="font-medium">Kodaikanel, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={14} className="text-green-600" />
                <span className="font-medium">Aug 21-24, 2025</span>
              </div>
            </div> */}

            {/* <div className="h-8 w-px bg-gray-300"></div> */}

            <button
              onClick={() => handlePageChange('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${currentPage === 'home'
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentPage === key
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
          <div className="flex items-center gap-3">
            {/* Mobile Logos - Smaller */}
            <div className="flex items-center gap-2">
              <img
                src="pen nalam.png"
                alt="Logo 1"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-8 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded items-center justify-center text-white text-xs font-bold">
                L1
              </div>

              <img
                src="logo.jpg"
                alt="Logo 2"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-8 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded items-center justify-center text-white text-xs font-bold">
                L2
              </div>

              <img
                src="van.png"
                alt="Logo 3"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-8 w-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded items-center justify-center text-white text-xs font-bold">
                L3
              </div>
            </div>

            <button
              onClick={() => handlePageChange('home')}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${currentPage === 'home'
                ? 'bg-blue-100 text-blue-700'
                : 'hover:bg-gray-100 text-gray-600'
                }`}
            >
              <Home size={18} />
              <span className="font-medium text-sm">Home</span>
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors relative"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="mt-4 pb-4 border-t pt-4">
            {/* Event Information for Mobile */}
            {/* <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Kodaikanel, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-green-600" />
                <span className="text-sm font-medium text-gray-700">December 15-18, 2024</span>
              </div>
            </div> */}

            <div className="flex flex-col gap-2">
              {Object.entries(galleries).map(([key, gallery], index) => (
                <button
                  key={key}
                  onClick={() => handlePageChange(key)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                    } ${currentPage === key
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