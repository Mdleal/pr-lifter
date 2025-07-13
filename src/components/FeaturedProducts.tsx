import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
// import { getFeaturedProducts } from '../data/products';
import { RainbowButton } from './ui/rainbow-button';
import { Product } from '../types';

const FeaturedProducts: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${import.meta.env.VITE_MEDUSA_BACKEND_URL}/store/products`, {
          headers: {
            'x-publishable-api-key': import.meta.env.VITE_MEDUSA_PUBLIC_API_KEY
          }
        });
        const data = await res.json();
        // Map Medusa products to local Product type
        const mappedProducts: Product[] = data.products.map((p: any) => ({
          id: p.id,
          name: p.title,
          description: p.description || '',
          price: p.variants && p.variants[0] ? p.variants[0].prices[0]?.amount / 100 : 0,
          images: p.images && p.images.length > 0 ? p.images.map((img: any) => img.url) : [],
          colors: [], // Medusa default products don't have colors; you can enhance this if you use options
          category: p.collection?.title || 'Uncategorized',
          featured: false, // You can set this based on a tag or custom field if needed
          ageRange: '', // Medusa doesn't have this by default
          weight: p.weight ? `${p.weight}g` : undefined,
          dimensions: p.length && p.width && p.height ? `${p.length}x${p.width}x${p.height}` : undefined,
        }));
        setFeaturedProducts(mappedProducts.slice(0, 3)); // Show first 3 as featured
      } catch (err) {
        setError('Failed to load featured products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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
        {loading ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-600">Loading featured products...</p>
          </div>
        ) : error ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
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