import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const AllProducts: React.FC = () => {
  const categories = ['FOR SLEEP', 'FOR THE NECK', 'FOR FOOT', 'MASSAGE TOOL'];
  
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-emerald-900 mb-8">All Products</h1>
      
      {categories.map((category) => {
        const categoryProducts = products.filter(product => product.category === category);
        
        return (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
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
                        <p className="text-emerald-600">Stock: {product.inventoryQuantity}</p>
                        <p className="text-lg font-bold text-emerald-700">€{product.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;