import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="block mb-4">
              <img
                src="https://my1mo5j5dq.ufs.sh/f/LzQQMDAElfMslruqrSYT26ak7dp3tAWuByZKgnsvFRINbo5U"
                alt="Soft Press"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-red-200">Your wellness destination.</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li><Link to="/all-products" className="text-red-200 hover:text-white">New Arrivals</Link></li>
              <li><Link to="/all-products" className="text-red-200 hover:text-white">Best Sellers</Link></li>
              <li><Link to="/all-products" className="text-red-200 hover:text-white">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">HELP</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-red-200 hover:text-white">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-red-200 hover:text-white">Shipping</Link></li>
              <li><Link to="/refund-policy" className="text-red-200 hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy" className="text-red-200 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-red-200 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">NEWSLETTER</h4>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-red-800 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="mt-2 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-800">
          <p className="text-red-200 text-center">
           &copy; {new Date().getFullYear()} Quant'M CortX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;