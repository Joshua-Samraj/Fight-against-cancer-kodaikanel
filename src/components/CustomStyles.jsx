import React, { useEffect } from 'react';

const CSS_STYLES = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  
  @keyframes slide-down {
    from { 
      opacity: 0; 
      transform: translateY(-10px); 
      max-height: 0;
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
      max-height: 400px;
    }
  }
  
  @keyframes slide-up {
    from { 
      opacity: 1; 
      transform: translateY(0); 
      max-height: 400px;
    }
    to { 
      opacity: 0; 
      transform: translateY(-10px); 
      max-height: 0;
    }
  }
  
  .animate-slide-down {
    animation: slide-down 0.3s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slide-up 0.3s ease-out forwards;
  }
  
  @keyframes bounce-dots {
    0%, 80%, 100% { 
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% { 
      transform: scale(1.2);
      opacity: 1;
    }
  }
  
  .animate-bounce-dots {
    animation: bounce-dots 1.4s infinite ease-in-out;
  }
  
  .animate-bounce-dots:nth-child(1) {
    animation-delay: -0.32s;
  }
  
  .animate-bounce-dots:nth-child(2) {
    animation-delay: -0.16s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  /* Enhanced smooth scrolling for all browsers */
  * {
    scroll-behavior: smooth;
  }
  
  /* Ensure smooth scrolling works on mobile */
  @media (max-width: 768px) {
    html, body {
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }
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
  
  .touch-manipulation {
    touch-action: manipulation;
  }
  
  /* Mobile-specific improvements */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    /* Improve touch targets on mobile */
    button, a {
      min-height: 44px;
      min-width: 44px;
    }
    
    /* Better text readability on mobile */
    body {
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }
    
    /* Prevent zoom on input focus */
    input, select, textarea {
      font-size: 16px;
    }
  }
  
  /* Landscape mobile adjustments */
  @media (max-width: 896px) and (orientation: landscape) {
    .hero-section {
      padding-top: 2rem;
      padding-bottom: 2rem;
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