import React from 'react';
import { Check } from 'lucide-react';
import { MembershipLevel } from '../types';

interface MembershipCardProps {
  membership: MembershipLevel;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ membership }) => {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden ${
      membership.recommended 
        ? 'border-2 border-sky-500 transform scale-105' 
        : 'border border-gray-200'
    }`}>
      {membership.recommended && (
        <div className="bg-sky-500 text-white text-center py-2 font-semibold">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{membership.name}</h3>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-sky-600">${membership.price}</span>
          <span className="text-gray-600 ml-1">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {membership.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <button
          className={`w-full py-3 px-4 rounded-md font-medium ${
            membership.recommended
              ? 'bg-sky-600 text-white hover:bg-sky-700'
              : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
          } transition-colors`}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;