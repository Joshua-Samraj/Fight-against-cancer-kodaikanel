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
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>📍 Kodaikanel, Tamil Nadu</p>
              <a href="tel:+919500561937" className="text-gray-300 hover:text-white transition-colors">📞 +91 9500561937</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; Living Hope Charitable Trust. All rights reserved.</p>
          <p className="mt-2">Together, we can make a difference in the fight against cancer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;