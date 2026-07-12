import React from 'react';

const FAQs: React.FC = () => {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-red-900 mb-12 text-center">FAQs</h1>
      
      <div className="space-y-8">
        <div className="faq-section space-y-6">
          <h2 className="text-2xl font-bold text-red-900">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">How can I contact Quant'M CortX?</h3>
              <div className="text-gray-600 space-y-2">
                <p>If you have any questions or need assistance, you can reach us via our live chat. Our live agents are available to provide immediate support, or they can escalate your inquiry to a dedicated team member by creating a support ticket.</p>
                <p>You can also email us at <a href="mailto:info@quantmcortx.com" className="text-red-600 hover:text-red-700">info@quantmcortx.com</a>, and our customer service team will be happy to assist you with any inquiries you may have.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Do you ship worldwide?</h3>
              <p className="text-gray-600">Yes</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Where do you ship from?</h3>
              <p className="text-gray-600">We ship from Hong Kong.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Can I change or cancel my order?</h3>
              <p className="text-gray-600">As we aim to process orders as fast as possible, you must request any changes/cancellations within 12 hours of ordering. All requests after this time will be denied. Your order can be returned for a full refund after it is received.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards (VISA, Mastercard, AMEX) and PayPal payments.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">When will my order be processed?</h3>
              <p className="text-gray-600">All orders are handled and shipped out from our warehouse. Please allow extra time for your order to be processed during holidays and sale seasons. We process orders between Monday and Friday. Orders will be processed within 1-3 business days from the order date and shipped the next day after the processing day. Please note that we don't ship on weekends.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">How long will it take to receive my order?</h3>
              <p className="text-gray-600">Due to high demand, orders may take between 2-4 weeks to arrive.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">What if I don't receive my order?</h3>
              <p className="text-gray-600">If you don't receive your order within 30 days after shipping, you are eligible for a full refund.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Will I be charged with customs and taxes?</h3>
              <p className="text-gray-600">The prices displayed on our site are tax-free in Euros, which means you may be liable to pay for duties and taxes once you receive your order. Import taxes, duties, and related customs fees may be charged once your order arrives at its final destination, which are determined by your local customs office. Payment of these charges and taxes are your responsibility and will not be covered by us. We are not responsible for delays caused by the customs department in your country. For further details of charges, please contact your local customs office.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">How do I return an item?</h3>
              <p className="text-gray-600">Please contact us via the live chat.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">What if the item(s) I received are defective/incorrect/damaged?</h3>
              <p className="text-gray-600">Please contact us if you have received merchandise that is incorrect, missing, and/or defective. Please include your order number, photographs of the item(s), and all related references upon receiving your package. We will do our very best to resolve your case as soon as possible.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-3">When will I receive my refund?</h3>
              <p className="text-gray-600">All refunds will be credited to your original form of payment. If you paid by credit or debit card, refunds will be sent to the card-issuing bank within 7-10 business days of receipt of the returned item or cancellation request. Please contact the card-issuing bank with questions about when the credit will be posted to your account. If you haven't received a credit for your return yet, here's what to do: Contact the bank/credit card company. It may take some time before the refund is posted to your account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;