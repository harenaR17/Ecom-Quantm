import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import CartItemRow from '../components/CartItemRow';
import CartSummary from '../components/CartSummary';

const CartPage: React.FC = () => {
  const { items, itemCount, subtotal, isEmpty, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    const validIds = new Set(products.map((product) => product.ID));
    items
      .filter((item) => !validIds.has(item.productId))
      .forEach((item) => removeItem(item.productId));
  }, [items, removeItem]);

  if (isEmpty) {
    return (
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-16">
          <ShoppingCart size={64} className="mx-auto text-red-300 mb-6" />
          <h1 className="text-3xl font-bold text-red-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Browse our products and add items to your cart.
          </p>
          <Link
            to="/all-products"
            className="inline-block bg-red-500 text-white py-3 px-8 rounded-md font-medium hover:bg-red-600 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-red-900 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItemRow
              key={item.productId}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        <div>
          <CartSummary subtotal={subtotal} itemCount={itemCount} />
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/all-products"
          className="text-red-600 hover:text-red-700 font-medium transition-colors"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
