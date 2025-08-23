import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Calendar, ChevronUp } from 'lucide-react';

const Navigation = ({ galleries }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Top Banner - Scrollable */}
      <div className="bg-gradient-to-r from-black to-gray-600 text-white py-2">
        <div className="container mx-auto px-4">
          {/* Desktop Layout */}
          <div className="hidden sm:flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span className="font-medium">Van Allen Hospital, Kodaikanal</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <span className='font-medium'>Contact: 9751964563 9500561937</span>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span className="font-medium">Cancer Awareness Event: Aug 21-24, 2025</span>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden flex flex-col gap-1 text-center text-xs">
            <div className="flex items-center justify-center gap-1">
              <MapPin size={12} />
              <span className="font-medium">Van Allen Hospital, Kodaikanal</span>
            </div>
            <div className="font-medium">Contact: 9751964563 ,9500561937</div>
            <div className="flex items-center justify-center gap-1">
              <Calendar size={12} />
              <span className="font-medium">Cancer Awareness Event: Aug 21-24, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <nav className="bg-white shadow-sm border-t border-b border-gray-200 sticky top-0 z-40">

        <div className="container mx-auto px-4 py-3">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Three Logos */}
              <div className="flex items-center gap-4">
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
                  src="logo.png"
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

              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${location.pathname === '/'
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Home size={20} />
                <span className="font-medium">Home</span>
              </Link>
            </div>

            <div className="flex gap-2">
              <Link
                to="/awareness"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/awareness'
                  ? 'bg-blue-100 text-blue-800'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Calendar size={16} className="inline mr-2" />
                Awareness
              </Link>
              <Link
                to="/day1"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/day1'
                  ? 'bg-blue-100 text-blue-800'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Calendar size={16} className="inline mr-2" />
                Day 1
              </Link>
              <Link
                to="/day2"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/day2'
                  ? 'bg-rose-100 text-rose-800'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Calendar size={16} className="inline mr-2" />
                Day 2
              </Link>
              <Link
                to="/day3"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/day3'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Calendar size={16} className="inline mr-2" />
                Day 3
              </Link>
              <Link
                to="/day4"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/day4'
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Calendar size={16} className="inline mr-2" />
                Day 4
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mobile Logos - Smaller */}
              <div className="flex items-center gap-2">
                <img
                  src="van.png"
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
                  src="pen nalam.png"
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
                  src="logo.png"
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

              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-colors ${location.pathname === '/'
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100 text-gray-600'
                  }`}
              >
                <Home size={18} />
                <span className="font-medium text-sm">Home</span>
              </Link>
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
                <Link
                  to="/awareness"
                  onClick={handleMenuClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                    } ${location.pathname === '/awareness'
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? '0ms' : '0ms'
                  }}
                >
                  <Calendar size={20} />
                  <span className="font-medium">Awareness</span>
                </Link>
                <Link
                  to="/day1"
                  onClick={handleMenuClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                    } ${location.pathname === '/day1'
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? '50ms' : '0ms'
                  }}
                >
                  <Calendar size={20} />
                  <span className="font-medium">Day 1</span>
                </Link>
                <Link
                  to="/day2"
                  onClick={handleMenuClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                    } ${location.pathname === '/day2'
                      ? 'bg-rose-100 text-rose-800'
                      : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? '100ms' : '0ms'
                  }}
                >
                  <Calendar size={20} />
                  <span className="font-medium">Day 2</span>
                </Link>
                <Link
                  to="/day3"
                  onClick={handleMenuClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                    } ${location.pathname === '/day3'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? '150ms' : '0ms'
                  }}
                >
                  <Calendar size={20} />
                  <span className="font-medium">Day 3</span>
                </Link>
                <Link
                  to="/day4"
                  onClick={handleMenuClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                    } ${location.pathname === '/day4'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? '200ms' : '0ms'
                  }}
                >
                  <Calendar size={20} />
                  <span className="font-medium">Day 4</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform ${showScrollTop
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
          }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default Navigation;