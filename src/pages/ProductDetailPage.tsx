import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { getProductById } from '../data/products';
import { ShoppingCart, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Color, Product } from '../types';
import { RainbowButton } from '../components/ui/rainbow-button';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // const product = getProductById(id || '');
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<Color>({ name: '', hex: '', available: false });

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${import.meta.env.VITE_MEDUSA_BACKEND_URL}/store/products/${id}`, {
          headers: {
            'x-publishable-api-key': import.meta.env.VITE_MEDUSA_PUBLIC_API_KEY
          }
        });
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        const p = data.product;
        const mappedProduct: Product = {
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
        };
        setProduct(mappedProduct);
        setSelectedColor(mappedProduct.colors[0] || { name: '', hex: '', available: false });
      } catch (err) {
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  // Handle link click to ensure smooth scrolling to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => {
            navigate('/products');
            handleLinkClick();
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    // Show a confirmation message or modal here
    alert(`Added ${quantity} ${product.name} to your cart!`);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => {
            navigate('/products');
            handleLinkClick();
          }}
          className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Products
        </button>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product images */}
          <div className="mb-8 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden bg-gray-100 h-96">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-sky-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Product details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl text-sky-600 font-bold mb-4">${product.price.toFixed(2)}</p>
            <div className="border-t border-b border-gray-200 py-4 my-6">
              <p className="text-gray-700 mb-6">{product.description}</p>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Age Range</h3>
                <p className="text-gray-600">{product.ageRange}</p>
              </div>
              {product.weight && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Weight</h3>
                  <p className="text-gray-600">{product.weight}</p>
                </div>
              )}
              {product.dimensions && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Dimensions</h3>
                  <p className="text-gray-600">{product.dimensions}</p>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Colors</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-10 h-10 rounded-full border-2 ${
                        selectedColor.name === color.name
                          ? 'border-sky-500'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check className="h-5 w-5 text-white drop-shadow-md" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">Selected: {selectedColor.name}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="border border-gray-300 rounded-l-md px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="border-t border-b border-gray-300 px-3 py-1 w-16 text-center focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="border border-gray-300 rounded-r-md px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <RainbowButton
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </RainbowButton>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Made from non-toxic, BPA-free materials</li>
                <li>Designed specifically for children's hands and capabilities</li>
                <li>Bright, engaging colors to make fitness fun</li>
                <li>Lightweight but durable construction</li>
                <li>Easy to clean with a damp cloth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;