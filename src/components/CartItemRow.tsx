import React from 'react';
import { Trash2 } from 'lucide-react';
import type { CartItem } from '../types/cart';
import QuantitySelector from './QuantitySelector';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const lineTotal = item.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-6 border-b border-emerald-100">
      <img
        src={item.mainImage}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-lg shadow-sm flex-shrink-0"
      />

      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-medium text-emerald-900">{item.title}</h3>
        <p className="text-emerald-700 font-medium mt-1">€{item.price.toFixed(2)} each</p>
      </div>

      <div className="flex flex-col sm:items-end gap-3">
        <QuantitySelector
          value={item.quantity}
          max={item.maxQuantity}
          onChange={(quantity) => onUpdateQuantity(item.productId, quantity)}
        />
        <p className="text-lg font-bold text-emerald-900">€{lineTotal.toFixed(2)}</p>
        <button
          type="button"
          onClick={() => onRemove(item.productId)}
          aria-label={`Remove ${item.title} from cart`}
          className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 transition-colors"
        >
          <Trash2 size={16} />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItemRow;
