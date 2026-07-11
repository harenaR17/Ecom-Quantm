import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max: number;
  onChange: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  min = 1,
  max,
  onChange,
}) => {
  const decrease = () => {
    if (value > min) onChange(value - 1);
  };

  const increase = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">Quantity</span>
      <div className="flex items-center border border-emerald-200 rounded-md">
        <button
          type="button"
          onClick={decrease}
          disabled={value <= min}
          aria-label="Decrease quantity"
          className="p-2 text-emerald-700 hover:bg-emerald-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors rounded-l-md"
        >
          <Minus size={16} />
        </button>
        <span className="w-10 text-center text-emerald-900 font-medium">{value}</span>
        <button
          type="button"
          onClick={increase}
          disabled={value >= max}
          aria-label="Increase quantity"
          className="p-2 text-emerald-700 hover:bg-emerald-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors rounded-r-md"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
