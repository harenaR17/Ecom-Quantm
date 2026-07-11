import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-emerald-900 mb-12 text-center">Terms of Service</h1>
      
      <div className="prose prose-emerald max-w-none space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Overview</h2>
          <p className="text-gray-600">
            This website is operated by Quant'M CortX. Throughout the site, the terms "we", "us" and "our" refer to Quant'M CortX. Quant'M CortX offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
          </p>
          <p className="text-gray-600 mt-4">
            By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
          </p>
          <p className="text-gray-600 mt-4">
            Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Section 1 - Online Store Terms</h2>
          <p className="text-gray-600">
            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
          </p>
          <p className="text-gray-600 mt-4">
            You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
          </p>
          <p className="text-gray-600 mt-4">
            You must not transmit any worms or viruses or any code of a destructive nature.
          </p>
          <p className="text-gray-600 mt-4">
            A breach or violation of any of the Terms will result in an immediate termination of your Services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Section 2 - General Conditions</h2>
          <p className="text-gray-600">
            We reserve the right to refuse Service to anyone for any reason at any time.
          </p>
          <p className="text-gray-600 mt-4">
            You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Section 3 - Accuracy, Completeness and Timeliness of Information</h2>
          <p className="text-gray-600">
            We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Section 4 - Modifications to the Service and Prices</h2>
          <p className="text-gray-600">
            Prices for our products are subject to change without notice.
          </p>
          <p className="text-gray-600 mt-4">
            We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
          </p>
          <p className="text-gray-600 mt-4">
            We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Section 20 - Contact Information</h2>
          <p className="text-gray-600">
            Questions about the Terms of Service should be sent to us at{' '}
            <a href="mailto:info@quantmcortx.com" className="text-emerald-600 hover:text-emerald-700">
              info@quantmcortx.com
            </a>.
          </p>
          <p className="text-gray-600 mt-4">
            Our contact information is posted below:
          </p>
          <p className="text-gray-600 mt-2">
            Quant'M CortX<br />
            <a href="mailto:info@quantmcortx.com" className="text-emerald-600 hover:text-emerald-700">
              info@quantmcortx.com
            </a><br />
            France
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;