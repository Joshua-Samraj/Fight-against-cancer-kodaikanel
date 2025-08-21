import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kodaikanel Cancer Awareness</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to raising awareness, providing support, and promoting prevention
              in the fight against cancer in our community.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://living-hope-charitable-trust-full-s.vercel.app/about" target='blank' className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support Services</a></li> */}
              <li><a href="https://living-hope-charitable-trust-full-s.vercel.app/volunteer" target='blank' className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>📍Van Allen Hospital, Kodaikanel, Tamil Nadu</p>
              <a href="tel:+919500561937" className="text-gray-300 hover:text-white transition-colors">📞 +91 9500561937</a>
              <br /><a href="tel:+9751964563" className="text-gray-300 hover:text-white transition-colors">📞 +91 9751964563</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Partner Logos Section */}
          <div className="flex flex-col items-center mb-6">
            <h4 className="text-lg font-semibold mb-4 text-white">Our Partners</h4>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <img 
                  src="pen nalam.png" 
                  alt="Partner Organization 1" 
                  className="h-12 w-auto object-contain mb-2 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-12 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg items-center justify-center text-white text-xs font-bold mb-2 opacity-80 hover:opacity-100 transition-opacity">
                  PARTNER 1
                </div>
                <span className="text-xs text-gray-400">Pen Nalam Hospital</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="logo.png" 
                  alt="Partner Organization 2" 
                  className="h-12 w-auto object-contain mb-2 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-12 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded-lg items-center justify-center text-white text-xs font-bold mb-2 opacity-80 hover:opacity-100 transition-opacity">
                  PARTNER 2
                </div>
                <span className="text-xs text-gray-400">Living Hope Charitable Trust</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img 
                  src="van.png" 
                  alt="Van Halen Hospital" 
                  className="h-12 w-auto object-contain mb-2 opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-12 w-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg items-center justify-center text-white text-xs font-bold mb-2 opacity-80 hover:opacity-100 transition-opacity">
                  PARTNER 3
                </div>
                <span className="text-xs text-gray-400">Van Halen Hospital</span>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
            <p>&copy; Living Hope Charitable Trust. All rights reserved.</p>
            {/* <p className="mt-2">Together, we can make a difference in the fight against cancer.</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;