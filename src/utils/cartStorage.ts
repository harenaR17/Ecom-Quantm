import type { CartItem, CartState } from '../types/cart';

export const CART_STORAGE_KEY = 'quantm-cart';

function isValidCartItem(item: unknown): item is CartItem {
  if (!item || typeof item !== 'object') return false;

  const cartItem = item as Record<string, unknown>;

  return (
    typeof cartItem.productId === 'string' &&
    typeof cartItem.title === 'string' &&
    typeof cartItem.price === 'number' &&
    typeof cartItem.quantity === 'number' &&
    cartItem.quantity > 0 &&
    typeof cartItem.mainImage === 'string' &&
    typeof cartItem.maxQuantity === 'number' &&
    cartItem.maxQuantity > 0
  );
}

function isValidCartState(state: unknown): state is CartState {
  if (!state || typeof state !== 'object') return false;

  const cartState = state as Record<string, unknown>;

  return (
    Array.isArray(cartState.items) &&
    cartState.items.every(isValidCartItem)
  );
}

export function loadCart(): CartState | null {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!isValidCartState(parsed)) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function saveCart(state: CartState): void {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore quota or privacy-mode errors
  }
}
