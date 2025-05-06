import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-sky-100 mb-8">
                Building strong habits early, one little athlete at a time.
              </p>
              <p className="text-sky-100 mb-6">
                MiniWOD was founded by a group of CrossFit parents who wanted to share their passion for fitness with their children in a safe, fun way.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1535571393765-ea44927160be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Family working out together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To create safe, engaging fitness equipment that helps children develop a love for movement and healthy habits that last a lifetime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-sky-50 rounded-lg p-8 text-center">
            <div className="bg-sky-100 rounded-full p-4 inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
            <p className="text-gray-600">
              All our products are designed with child safety as the top priority, using non-toxic materials and kid-friendly designs.
            </p>
          </div>
          
          <div className="bg-sky-50 rounded-lg p-8 text-center">
            <div className="bg-sky-100 rounded-full p-4 inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Make Fitness Fun</h3>
            <p className="text-gray-600">
              We believe that when exercise is enjoyable, it becomes a lifelong habit. Our colorful equipment makes fitness playful.
            </p>
          </div>
          
          <div className="bg-sky-50 rounded-lg p-8 text-center">
            <div className="bg-sky-100 rounded-full p-4 inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Bonding</h3>
            <p className="text-gray-600">
              We create opportunities for families to exercise together, strengthening both bodies and relationships.
            </p>
          </div>
        </div>
      </div>
      
      {/* Founder story */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Founders</h2>
              <p className="text-gray-600 mb-4">
                MiniWOD was born when CrossFit enthusiasts Mike and Sarah Johnson noticed their children trying to mimic their workouts with household items.
              </p>
              <p className="text-gray-600 mb-4">
                Concerned about safety but excited by their children's interest, they designed the first prototype of a mini barbell using safe, lightweight materials.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a solution for their family quickly grew as other parents at their gym requested similar equipment for their own children.
              </p>
              <p className="text-gray-600">
                Today, MiniWOD has grown into a complete line of kid-friendly fitness equipment, helping thousands of families make fitness a fun family activity.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Family working out together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at MiniWOD.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety</h3>
            <p className="text-gray-600">
              We never compromise on the safety of our products. Every item undergoes rigorous testing to ensure it's safe for children of all ages.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              We use premium materials and craftsmanship to create products that withstand the enthusiasm of active kids.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
            <p className="text-gray-600">
              We believe in teaching proper form and technique from an early age, setting the foundation for a lifetime of safe, effective exercise.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              We're building a community of families who share our passion for fitness and raising healthy, active children.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-sky-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the MiniWOD Family</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start your child's fitness journey with safe, fun equipment designed just for them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
            >
              Shop Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-white hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;