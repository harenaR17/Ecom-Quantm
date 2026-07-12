import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="group relative">
      <div className="grid">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.mainImage}
          alt={product.title}
          className="h-[300px] w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-red-50">
          <Heart size={20} className="text-red-600" />
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${product.ID}`} className="hover:text-red-600">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-red-600">Stock: {product.inventoryQuantity}</p>
        </div>
        <p className="text-sm font-medium text-red-700">${product.price}</p>
      </div>
      </div>
    </div>
  );
}

export default ProductCard;