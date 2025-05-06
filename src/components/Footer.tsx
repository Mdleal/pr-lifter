import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  // Handle link click to ensure smooth scrolling to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-sky-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <Dumbbell className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">MiniWOD</span>
            </Link>
            <p className="mt-4 text-sm text-sky-200">
              Empowering little athletes with safe, fun workout equipment designed just for kids.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-sky-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sky-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-sky-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@miniwod.com" className="text-sky-200 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sky-200 hover:text-white transition-colors" onClick={handleLinkClick}>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Barbells" className="text-sky-200 hover:text-white transition-colors" onClick={handleLinkClick}>
                  Mini Barbells
                </Link>
              </li>
              <li>
                <Link to="/products?category=Kettlebells" className="text-sky-200 hover:text-white transition-colors" onClick={handleLinkClick}>
                  Kids Kettlebells
                </Link>
              </li>
              <li>
                <Link to="/products?category=Sets" className="text-sky-200 hover:text-white transition-colors" onClick={handleLinkClick}>
                  Starter Kits
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="text-sky-200 hover:text-white transition-colors" onClick={handleLinkClick}>
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-sky-200 mb-4">
              Subscribe to our newsletter for tips, new products, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-sky-800 px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-sky-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-sky-300">
              &copy; {new Date().getFullYear()} MiniWOD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-sky-300 hover:text-white transition-colors" onClick={handleLinkClick}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-sky-300 hover:text-white transition-colors" onClick={handleLinkClick}>
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-sm text-sky-300 hover:text-white transition-colors" onClick={handleLinkClick}>
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;