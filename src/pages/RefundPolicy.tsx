import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-emerald-900 mb-12 text-center">Refund Policy</h1>
      
      <div className="prose prose-emerald max-w-none space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-600">
            We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
          </p>
          <p className="text-gray-600 mt-4">
            To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.
          </p>
          <p className="text-gray-600 mt-4">
            To start a return, you can contact us at <a href="mailto:info@quantmcortx.com" className="text-emerald-600 hover:text-emerald-700">info@quantmcortx.com</a>.
            If your return is accepted, we'll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
          </p>
          <p className="text-gray-600 mt-4">
            You can always contact us for any return question at <a href="mailto:info@quantmcortx.com" className="text-emerald-600 hover:text-emerald-700">info@quantmcortx.com</a>.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Damages and Issues</h2>
          <p className="text-gray-600">
            Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Exceptions / Non-Returnable Items</h2>
          <p className="text-gray-600">
            Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item.
          </p>
          <p className="text-gray-600 mt-4">
            Unfortunately, we cannot accept returns on sale items or gift cards.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Exchanges</h2>
          <p className="text-gray-600">
            The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">European Union 14 Day Cooling Off Period</h2>
          <p className="text-gray-600">
            Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Refunds</h2>
          <p className="text-gray-600">
            We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If approved, you'll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
          </p>
          <p className="text-gray-600 mt-4">
            If more than 15 business days have passed since we've approved your return, please contact us at <a href="mailto:info@quantmcortx.com" className="text-emerald-600 hover:text-emerald-700">info@quantmcortx.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;