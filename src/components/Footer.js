import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Institute of Arts and Sciences</h3>
            <p className="text-purple-200 text-sm">
              Providing humanistic and scientific education to produce holistic, research-based, and values-driven professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-purple-200 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academic-programs" className="text-purple-200 hover:text-white transition">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/students" className="text-purple-200 hover:text-white transition">
                  Student Organizations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-purple-200 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-purple-300">📞</span>
                <a href="tel:09362334732" className="text-purple-200 hover:text-white transition">
                  0936 233 4732
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-purple-300">✉️</span>
                <a href="mailto:iastcgc@gmail.com" className="text-purple-200 hover:text-white transition">
                  iastcgc@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <a
                  href="https://facebook.com/iastcgc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition text-lg"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com/iastcgc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white transition text-lg"
                  title="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-700 mt-8 pt-8">
          <p className="text-center text-purple-200 text-sm">
            © 2024 Institute of Arts and Sciences, TCGC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
