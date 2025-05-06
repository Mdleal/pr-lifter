import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-sky-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-sky-600 mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900">Email Us</p>
            <a href="mailto:contact@miniwod.com" className="text-sky-600 hover:text-sky-800">
              contact@miniwod.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-sky-600 mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900">Call Us</p>
            <a href="tel:+18005551234" className="text-sky-600 hover:text-sky-800">
              (800) 555-1234
            </a>
            <p className="text-sm text-gray-600 mt-1">
              Monday-Friday: 9am-5pm EST
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-sky-600 mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900">Our Location</p>
            <p className="text-gray-600">
              123 Fitness Way<br />
              Boulder, CO 80301<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-sky-600 mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900">Business Hours</p>
            <p className="text-gray-600">
              Monday-Friday: 9am-5pm EST<br />
              Saturday: 10am-2pm EST<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <p className="font-medium text-gray-900 mb-3">Follow Us</p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="bg-sky-100 p-2 rounded-full text-sky-600 hover:bg-sky-200 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-sky-100 p-2 rounded-full text-sky-600 hover:bg-sky-200 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;