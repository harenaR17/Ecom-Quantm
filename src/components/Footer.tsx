import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="block mb-4">
              <img
                src="https://mpcu4chpg8.ufs.sh/f/Scq7Ii9jqcmL5gszJIOeW4D2QGUgySlnF5VcJMAsYEhv7dzo"
                alt="Quant'M CortX"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-emerald-200">Your wellness destination.</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li><Link to="/all-products" className="text-emerald-200 hover:text-white">New Arrivals</Link></li>
              <li><Link to="/all-products" className="text-emerald-200 hover:text-white">Best Sellers</Link></li>
              <li><Link to="/all-products" className="text-emerald-200 hover:text-white">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">HELP</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-emerald-200 hover:text-white">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-emerald-200 hover:text-white">Shipping</Link></li>
              <li><Link to="/refund-policy" className="text-emerald-200 hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy" className="text-emerald-200 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-emerald-200 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">NEWSLETTER</h4>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-emerald-800 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="mt-2 w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-800">
          <p className="text-emerald-200 text-center">
           &copy; {new Date().getFullYear()} Quant'M CortX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;