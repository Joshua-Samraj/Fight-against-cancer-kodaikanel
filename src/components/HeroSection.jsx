import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Kodaikanel Cancer Awareness Initiative
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Together, we stand strong against cancer through education, support, and hope. 
          Join our community in the fight for cancer awareness and prevention.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Involved
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;