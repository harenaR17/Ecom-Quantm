import React from 'react';
import { Mail, MessageCircle, Clock } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-emerald-900 mb-12 text-center">Contact Us</h1>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Live Chat Section */}
            <div className="flex flex-col items-center text-center p-6 bg-emerald-50 rounded-lg">
              <MessageCircle size={32} className="text-emerald-600 mb-4" />
              <h2 className="text-xl font-semibold text-emerald-900 mb-2">Live Chat</h2>
              <p className="text-gray-600">
                Connect with our live agents for immediate support. We're here to help with any questions or concerns.
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col items-center text-center p-6 bg-emerald-50 rounded-lg">
              <Mail size={32} className="text-emerald-600 mb-4" />
              <h2 className="text-xl font-semibold text-emerald-900 mb-2">Email Us</h2>
              <p className="text-gray-600">
                Send us an email at{' '}
                <a 
                  href="mailto:info@quantmcortx.com" 
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  info@quantmcortx.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-start space-x-4">
            <Clock size={24} className="text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-emerald-900 mb-2">Response Time</h2>
              <p className="text-gray-600">
                Our customer service team will respond to your inquiries within 24 hours. For immediate assistance, 
                please use our live chat feature.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">How Can We Help?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions or need assistance, our team is ready to help. We can assist you with:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              Order status and tracking
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              Product information and recommendations
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              Returns and refunds
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              Technical support
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              General inquiries
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;