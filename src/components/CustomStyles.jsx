import React, { useEffect } from 'react';

const CSS_STYLES = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }
  
  button:focus,
  a:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @media (pointer: coarse) {
    button {
      min-height: 44px;
      min-width: 44px;
    }
  }
  
  @media print {
    .no-print {
      display: none !important;
    }
    
    body {
      background: white !important;
      color: black !important;
    }
  }
  
  @media (prefers-contrast: high) {
    .shadow-md {
      border: 1px solid #000;
    }
    
    .shadow-lg {
      border: 2px solid #000;
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

const CustomStyles = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = CSS_STYLES;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return null;
};

export default CustomStyles;