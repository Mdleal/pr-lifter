import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">Last Updated: May 15, 2025</p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to MiniWOD. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing our website or making a purchase, you agree to be bound by these Terms.
            </p>
            <p className="mb-4">
              Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you may not use our website or services.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Account Registration</h2>
            <p className="mb-4">
              To access certain features of our website or to make a purchase, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
            <p className="mb-4">
              You agree to provide accurate and complete information when creating an account and to update your information to keep it accurate and current.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Products and Purchases</h2>
            <p className="mb-4">
              All product descriptions, including pricing, are subject to change without notice. We reserve the right to modify or discontinue any product without notice.
            </p>
            <p className="mb-4">
              By placing an order, you represent that the products ordered will be used in a manner consistent with all applicable laws and regulations.
            </p>
            <p className="mb-4">
              All prices are shown in US dollars and do not include taxes or shipping fees, which will be added at checkout.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Product Safety and Usage</h2>
            <p className="mb-4">
              Our products are designed for children of specific age ranges as indicated in the product descriptions. Adult supervision is recommended for all children using our fitness equipment.
            </p>
            <p className="mb-4">
              You acknowledge that physical activity carries inherent risks, and you assume all responsibility for the safe and appropriate use of our products.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Shipping and Delivery</h2>
            <p className="mb-4">
              Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers, customs, or other factors outside our control.
            </p>
            <p className="mb-4">
              Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Returns and Refunds</h2>
            <p className="mb-4">
              We offer a 30-day satisfaction guarantee on most products. To be eligible for a return, your item must be unused and in the same condition that you received it, with original packaging.
            </p>
            <p className="mb-4">
              Please refer to our <Link to="/shipping" className="text-sky-600 hover:text-sky-800">Shipping Policy</Link> for detailed information on returns, exchanges, and refunds.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of MiniWOD and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-4">
              You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, MiniWOD shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our products or services.
            </p>
            <p className="mb-4">
              Our liability for any claim arising from these Terms or your use of our products shall not exceed the amount you paid for the product that is the subject of the claim.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless MiniWOD, its officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising from your use of our products or services or your violation of these Terms.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
              Any dispute arising from these Terms shall be resolved exclusively in the state or federal courts located in Boulder County, Colorado.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified Terms.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-4">
              Email: legal@miniwod.com<br />
              Phone: (800) 555-1234<br />
              Address: 123 Fitness Way, Boulder, CO 80301
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link to="/" className="text-sky-600 hover:text-sky-800">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;