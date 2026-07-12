import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className="bg-red-900 shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-red-200 hover:text-white lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div className="ml-2 lg:ml-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="https://my1mo5j5dq.ufs.sh/f/LzQQMDAElfMslruqrSYT26ak7dp3tAWuByZKgnsvFRINbo5U"
                  alt="Soft Press"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className="text-red-200 hover:text-white">Home</Link>
            <Link to="/all-products" className="text-red-200 hover:text-white">All Products</Link>
            <Link to="/about" className="text-red-200 hover:text-white">About</Link>
            <Link to="/faqs" className="text-red-200 hover:text-white">FAQs</Link>
            <Link to="/contact" className="text-red-200 hover:text-white">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-red-200 hover:text-white">
              <Search size={24} />
            </button>
            <button className="p-2 text-red-200 hover:text-white">
              <User size={24} />
            </button>
            <Link
              to="/cart"
              aria-label={`Cart, ${itemCount} items`}
              className="p-2 text-red-200 hover:text-white relative"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-red-800">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-red-200 hover:text-white hover:bg-red-700">Home</Link>
            <Link to="/all-products" className="block px-3 py-2 text-red-200 hover:text-white hover:bg-red-700">All Products</Link>
            <Link to="/about" className="block px-3 py-2 text-red-200 hover:text-white hover:bg-red-700">About</Link>
            <Link to="/faqs" className="block px-3 py-2 text-red-200 hover:text-white hover:bg-red-700">FAQs</Link>
            <Link to="/contact" className="block px-3 py-2 text-red-200 hover:text-white hover:bg-red-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;