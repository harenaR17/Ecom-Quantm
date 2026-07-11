import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import type { Product } from '../data/products';
import type { CartAction, CartItem, CartState } from '../types/cart';
import { loadCart, saveCart } from '../utils/cartStorage';

const initialState: CartState = { items: [] };

function parseMaxQuantity(inventoryQuantity: string): number {
  const parsed = parseInt(inventoryQuantity, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function productToCartItem(product: Product, quantity: number): CartItem {
  const maxQuantity = parseMaxQuantity(product.inventoryQuantity);

  return {
    productId: product.ID,
    title: product.title,
    price: product.price,
    quantity: Math.min(Math.max(quantity, 1), maxQuantity),
    mainImage: product.mainImage,
    maxQuantity,
  };
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'HYDRATE':
      return action.payload;

    case 'ADD_ITEM': {
      const { product, quantity = 1 } = action.payload;
      const maxQuantity = parseMaxQuantity(product.inventoryQuantity);

      if (maxQuantity <= 0) return state;

      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.ID
      );

      if (existingIndex >= 0) {
        const existing = state.items[existingIndex];
        const newQuantity = Math.min(
          existing.quantity + quantity,
          existing.maxQuantity
        );

        const updatedItems = [...state.items];
        updatedItems[existingIndex] = { ...existing, quantity: newQuantity };

        return { items: updatedItems };
      }

      const newItem = productToCartItem(product, quantity);
      if (newItem.quantity <= 0) return state;

      return { items: [...state.items, newItem] };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;

      if (quantity <= 0) {
        return {
          items: state.items.filter((item) => item.productId !== productId),
        };
      }

      return {
        items: state.items.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: Math.min(Math.max(quantity, 1), item.maxQuantity),
              }
            : item
        ),
      };
    }

    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isEmpty: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = loadCart();
    if (savedCart) {
      dispatch({ type: 'HYDRATE', payload: savedCart });
    }
  }, []);

  useEffect(() => {
    saveCart(state);
  }, [state]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
  }, []);

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = useMemo(
    () => state.items.reduce((total, item) => total + item.quantity, 0),
    [state.items]
  );

  const subtotal = useMemo(
    () =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [state.items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      itemCount,
      subtotal,
      isEmpty: state.items.length === 0,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [state.items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
