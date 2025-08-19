import React from 'react';
import { Home } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange, galleries }) => {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onPageChange('home')}
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
                onClick={() => onPageChange(key)}
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
      </div>
    </nav>
  );
};

export default Navigation;