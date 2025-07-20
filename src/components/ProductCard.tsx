import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Handle link click to ensure smooth scrolling to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/product/${product.id}`} onClick={handleLinkClick}>
        <div className="h-48 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`} onClick={handleLinkClick}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">

          <span className="text-sky-600 font-bold">${product.price}</span>
          <div className="flex items-center">
            <div className="flex space-x-1 mr-3">
              {product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            <Link 
              to={`/product/${product.id}`}
              className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors"
              onClick={handleLinkClick}
            >
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;