import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Dumbbell } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle link click to ensure smooth scrolling to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="bg-sky-500 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <Dumbbell className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">MiniWOD</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-sky-600 transition-colors" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/products" className="px-3 py-2 rounded-md hover:bg-sky-600 transition-colors" onClick={handleLinkClick}>
              Products
            </Link>
            <Link to="/faq" className="px-3 py-2 rounded-md hover:bg-sky-600 transition-colors" onClick={handleLinkClick}>
              FAQ
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-sky-600 transition-colors" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-sky-600 transition-colors" onClick={handleLinkClick}>
              Contact
            </Link>
            <Link to="/cart" className="relative px-3 py-2 rounded-md hover:bg-sky-600 transition-colors" onClick={handleLinkClick}>
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-sky-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative px-3 py-2 mr-2" onClick={handleLinkClick}>
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-sky-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-sky-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sky-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-sky-700 transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md hover:bg-sky-700 transition-colors"
              onClick={handleLinkClick}
            >
              Products
            </Link>
            <Link 
              to="/faq" 
              className="block px-3 py-2 rounded-md hover:bg-sky-700 transition-colors"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md hover:bg-sky-700 transition-colors"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md hover:bg-sky-700 transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;