import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, itemCount }) => {
  return (
    <div className="bg-green-50 rounded-lg p-6 shadow-sm sticky top-28">
      <h2 className="text-xl font-bold text-red-900 mb-4">Order Summary</h2>

      <div className="flex justify-between text-gray-600 mb-2">
        <span>Items ({itemCount})</span>
        <span>€{subtotal.toFixed(2)}</span>
      </div>

      <div className="border-t border-red-200 my-4" />

      <div className="flex justify-between text-lg font-bold text-red-900 mb-6">
        <span>Subtotal</span>
        <span>€{subtotal.toFixed(2)}</span>
      </div>

      <button
        type="button"
        disabled
        className="w-full bg-red-300 text-white py-3 px-8 rounded-md font-medium cursor-not-allowed"
      >
        Checkout coming soon
      </button>
    </div>
  );
};

export default CartSummary;
