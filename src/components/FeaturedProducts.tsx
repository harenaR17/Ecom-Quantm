import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-red-900 mb-8">Featured Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.ID}
            to={`/product/${product.ID}`}
            className="block h-full"
          >
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="p-4">
                <div className="aspect-square w-full relative">
                  <img
                    src={product.mainImage}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 h-14">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-red-600">Stock: {product.inventoryQuantity}</p>
                  <p className="text-lg font-bold text-red-700">€{product.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;