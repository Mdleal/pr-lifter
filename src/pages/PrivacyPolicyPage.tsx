import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">Last Updated: May 15, 2025</p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At MiniWOD ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a purchase, or interact with us in any way.
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Personal Information:</strong> Name, email address, shipping address, billing address, phone number, and payment information.</li>
              <li className="mb-2"><strong>Account Information:</strong> Username, password, purchase history, and preferences.</li>
              <li className="mb-2"><strong>Automatically Collected Information:</strong> IP address, browser type, device information, cookies, and usage data.</li>
              <li className="mb-2"><strong>Children's Information:</strong> We do not knowingly collect information from children under 13 without parental consent.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Process and fulfill your orders</li>
              <li className="mb-2">Provide customer service and support</li>
              <li className="mb-2">Send transactional emails and order updates</li>
              <li className="mb-2">Send marketing communications (with your consent)</li>
              <li className="mb-2">Improve our website and product offerings</li>
              <li className="mb-2">Prevent fraud and enhance security</li>
              <li className="mb-2">Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Sharing Your Information</h2>
            <p className="mb-2">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Service Providers:</strong> Payment processors, shipping companies, and marketing partners who assist us in operating our business.</li>
              <li className="mb-2"><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              <li className="mb-2"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
            <p className="mb-4">
              We do not sell your personal information to third parties.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Access the personal information we hold about you</li>
              <li className="mb-2">Correct inaccurate information</li>
              <li className="mb-2">Delete your personal information</li>
              <li className="mb-2">Object to or restrict processing of your information</li>
              <li className="mb-2">Data portability</li>
              <li className="mb-2">Withdraw consent</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at privacy@miniwod.com.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@miniwod.com<br />
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

export default PrivacyPolicyPage;