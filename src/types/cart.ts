import type { Product } from '../data/products';

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  mainImage: string;
  maxQuantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity?: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE'; payload: CartState };
