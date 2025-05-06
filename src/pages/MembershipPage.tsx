import React from 'react';
import MembershipCard from '../components/MembershipCard';
import { memberships } from '../data/memberships';

const MembershipPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Membership Plans</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Join the MiniWOD family and get exclusive benefits, discounts, and resources to help your little athlete thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {memberships.map((membership, index) => (
            <MembershipCard key={index} membership={membership} />
          ))}
        </div>
        
        {/* Membership benefits */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Membership Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-sky-600 mb-4">Product Discounts</h3>
                <p className="text-gray-600 mb-2">
                  Members receive exclusive discounts on all MiniWOD products, with savings increasing based on membership tier.
                </p>
                <p className="text-gray-600">
                  These discounts apply to both regular-priced items and special collections.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-sky-600 mb-4">Free Shipping</h3>
                <p className="text-gray-600 mb-2">
                  Depending on your membership level, enjoy free shipping on orders over $50 or on all orders regardless of total.
                </p>
                <p className="text-gray-600">
                  Applies to standard shipping within the continental United States.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-sky-600 mb-4">Early Access</h3>
                <p className="text-gray-600 mb-2">
                  Be the first to shop new product releases and limited edition collections before they're available to the general public.
                </p>
                <p className="text-gray-600">
                  Members receive email notifications 48 hours before new products launch.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-sky-600 mb-4">Monthly Workout Guides</h3>
                <p className="text-gray-600 mb-2">
                  Receive age-appropriate workout guides designed specifically for kids using MiniWOD equipment.
                </p>
                <p className="text-gray-600">
                  Each guide includes fun exercises, games, and activities to keep your child engaged.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-sky-600 mb-4">Surprise Gifts</h3>
                <p className="text-gray-600 mb-2">
                  Higher tier memberships include quarterly or monthly surprise gifts delivered to your door.
                </p>
                <p className="text-gray-600">
                  These may include exclusive MiniWOD merchandise, accessories, or limited edition items.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-sky-600 mb-4">Coaching Sessions</h3>
                <p className="text-gray-600 mb-2">
                  Elite members receive quarterly virtual coaching sessions with certified youth fitness coaches.
                </p>
                <p className="text-gray-600">
                  These personalized sessions help ensure your child is using proper form and getting the most from their equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Membership FAQ</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I cancel my membership?</h3>
                <p className="text-gray-600">
                  You can cancel your membership at any time from your account settings. There are no cancellation fees or long-term commitments.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my membership?</h3>
                <p className="text-gray-600">
                  Yes, you can change your membership tier at any time. Changes will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How are the surprise gifts selected?</h3>
                <p className="text-gray-600">
                  Surprise gifts are curated based on your child's age and interests. You can update your preferences in your account settings.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do membership discounts stack with sale prices?</h3>
                <p className="text-gray-600">
                  Yes! Your membership discount will be applied on top of any current sale prices, maximizing your savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;