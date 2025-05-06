import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';
import { RainbowButton } from './ui/rainbow-button';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  // Handle link click to ensure smooth scrolling to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-12 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular mini workout equipment, designed with safety and fun in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/products"
            onClick={handleLinkClick}
          >
            <RainbowButton>
              View All Products
            </RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;