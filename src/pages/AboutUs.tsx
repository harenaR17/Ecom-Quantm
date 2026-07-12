import React from 'react';
import { Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-red-900 mb-6">About Us</h1>
        <Heart className="mx-auto text-red-500 mb-8" size={40} />
      </div>
      
      <div className="space-y-12">
        <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
          <div className="prose prose-red max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              We created Quant'M CortX with one simple goal in mind: to provide high-quality, affordable wellness products that help you feel your best every day. Our carefully curated selection of massage tools, relaxation devices, and therapeutic accessories are designed to enhance your well-being, offering targeted relief and comfort for every need. Whether you're looking to relieve muscle tension, improve circulation, or just unwind after a long day, we believe in making self-care easy, effective, and accessible.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
          <div className="prose prose-red max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              At Quant'M CortX, we are committed to helping you live a healthier, more relaxed life with products that combine innovation, design, and quality. Your comfort is our priority, and we're here to support you on your wellness journey every step of the way.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-red-50 rounded-lg p-6 text-center">
            <h3 className="text-red-900 font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">Carefully selected wellness solutions that meet our high standards</p>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 text-center">
            <h3 className="text-red-900 font-semibold mb-2">Affordable Wellness</h3>
            <p className="text-gray-600">Making self-care accessible without compromising on quality</p>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 text-center">
            <h3 className="text-red-900 font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">Dedicated team ready to assist you on your wellness journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;