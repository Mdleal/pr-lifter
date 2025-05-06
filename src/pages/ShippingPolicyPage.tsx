import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">Last Updated: May 15, 2025</p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Shipping Information</h2>
            <p className="mb-4">
              At MiniWOD, we strive to deliver your orders promptly and securely. This policy outlines our shipping procedures, delivery timeframes, and related information.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Processing Time</h2>
            <p className="mb-4">
              All orders are processed within 1-2 business days (Monday-Friday, excluding holidays) after payment confirmation. Orders placed on weekends or holidays will be processed on the next business day.
            </p>
            <p className="mb-4">
              During peak seasons or promotional periods, processing times may be slightly longer. We will notify you of any significant delays.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Shipping Methods and Timeframes</h2>
            <p className="mb-4">
              We offer the following shipping options for domestic orders (United States):
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Standard Shipping:</strong> 5-7 business days ($5.99 or free on orders over $50)</li>
              <li className="mb-2"><strong>Expedited Shipping:</strong> 2-3 business days ($12.99)</li>
              <li className="mb-2"><strong>Express Shipping:</strong> 1-2 business days ($19.99)</li>
            </ul>
            
            <p className="mb-4">
              For international orders, shipping times and costs vary by destination:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Canada:</strong> 7-14 business days ($15.99)</li>
              <li className="mb-2"><strong>Europe:</strong> 10-20 business days ($24.99)</li>
              <li className="mb-2"><strong>Australia/New Zealand:</strong> 14-21 business days ($29.99)</li>
              <li className="mb-2"><strong>Other International:</strong> 14-30 business days (varies by location)</li>
            </ul>
            
            <p className="mb-4">
              Please note that these timeframes are estimates and not guarantees. Actual delivery times may vary due to factors beyond our control, such as customs processing, weather conditions, or carrier delays.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Tracking Information</h2>
            <p className="mb-4">
              Once your order ships, you will receive a confirmation email with tracking information. You can track your package using the provided tracking number on the carrier's website or through your account on our website.
            </p>
            <p className="mb-4">
              If you haven't received tracking information within 3 business days after your order confirmation, please contact our customer service team.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Shipping Restrictions</h2>
            <p className="mb-4">
              We currently ship to most countries worldwide. However, there may be restrictions for certain regions due to import regulations or other limitations. If we cannot ship to your location, you will be notified during the checkout process.
            </p>
            <p className="mb-4">
              Customers are responsible for any customs duties, taxes, or import fees that may apply to international shipments. These fees are not included in our shipping charges and will be collected by the delivery carrier or customs office.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Order Issues</h2>
            <p className="mb-4">
              If your package arrives damaged, please take photos of the damaged packaging and products before contacting our customer service team within 48 hours of delivery.
            </p>
            <p className="mb-4">
              For lost packages, please wait until the estimated delivery date has passed before contacting us. We will work with the shipping carrier to locate your package or process a replacement/refund.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Returns and Exchanges</h2>
            <p className="mb-4">
              We offer a 30-day satisfaction guarantee on most products. To be eligible for a return, your item must be unused and in the same condition that you received it, with original packaging.
            </p>
            <p className="mb-4">
              To initiate a return or exchange:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2">Contact our customer service team to request a Return Merchandise Authorization (RMA) number</li>
              <li className="mb-2">Package your item securely with all original packaging</li>
              <li className="mb-2">Include your order number and RMA number with your return</li>
              <li className="mb-2">Ship the package to the address provided by our customer service team</li>
            </ol>
            
            <p className="mb-4">
              Return shipping costs are the responsibility of the customer unless the return is due to our error (damaged item, wrong item shipped, etc.). In such cases, we will provide a prepaid return label.
            </p>
            
            <p className="mb-4">
              Once we receive and inspect your return, we will process your refund or exchange. Refunds will be issued to the original payment method within 5-7 business days.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Membership Shipping Benefits</h2>
            <p className="mb-4">
              MiniWOD membership holders receive special shipping benefits:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><strong>Little Athlete:</strong> Free standard shipping on orders over $50</li>
              <li className="mb-2"><strong>Future Champion:</strong> Free standard shipping on all orders</li>
              <li className="mb-2"><strong>Mini Elite:</strong> Free standard shipping on all orders and 50% off expedited shipping</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our shipping policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: shipping@miniwod.com<br />
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

export default ShippingPolicyPage;