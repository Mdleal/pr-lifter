import React from 'react';
import Hero from '../components/Hero';
import ParallaxGallery from '../components/ParallaxGallery';
import FeaturedProducts from '../components/FeaturedProducts';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import { RainbowButton } from '../components/ui/rainbow-button';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  // Handle link click to ensure smooth scrolling to top
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Hero />
      <ParallaxGallery />
      <FeaturedProducts />
      
      {/* Value Proposition Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose MiniWOD?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're passionate about helping kids develop healthy habits through safe, fun equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kid-Safe Materials</h3>
              <p className="text-gray-600">
                All products are made from non-toxic, BPA-free materials designed specifically for children.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fun & Engaging</h3>
              <p className="text-gray-600">
                Bright colors and kid-friendly designs make fitness fun and exciting for children.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-sky-100 rounded-full p-4 inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Habits</h3>
              <p className="text-gray-600">
                Help children develop proper form and a love for fitness from an early age.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Empower Your Little Athlete?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of families building healthy habits with MiniWOD equipment.
          </p>
          <Link
            to="/products"
            onClick={handleLinkClick}
          >
            <RainbowButton>
              Shop Products
            </RainbowButton>
          </Link>
        </div>
      </section>
      
      <FAQSection />
    </div>
  );
};

export default HomePage;