# Add to Cart — Implementation Plan

This document is a step-by-step plan to implement add-to-cart functionality for the Quant'M CortX e-commerce site (Ecom-Quantm). It is based on the current codebase as of July 2026.

---

## Table of Contents

1. [Progress Checklist](#1-progress-checklist)
2. [Current State](#2-current-state)
3. [Goals & Scope](#3-goals--scope)
4. [Architecture Decisions](#4-architecture-decisions)
5. [Data Models](#5-data-models)
6. [File Structure](#6-file-structure)
7. [Implementation Phases](#7-implementation-phases)
8. [Detailed Component Changes](#8-detailed-component-changes)
9. [Cart Page Design](#9-cart-page-design)
10. [Persistence Strategy](#10-persistence-strategy)
11. [Stock & Validation Rules](#11-stock--validation-rules)
12. [UX & Feedback](#12-ux--feedback)
13. [Bug Fixes (Opportunistic)](#13-bug-fixes-opportunistic)
14. [Testing Checklist](#14-testing-checklist)
15. [Future Enhancements](#15-future-enhancements)

---

## 1. Progress Checklist

Track implementation progress here. Check items off as each phase is completed.

### Phase 1 — Foundation

- [x] Create `src/types/cart.ts` (`CartItem`, `CartState`, `CartAction`)
- [x] Add `category?: string` to `Product` interface in `src/data/products.ts`
- [x] Create `src/utils/cartStorage.ts` (`loadCart`, `saveCart`)
- [x] Create `src/context/CartContext.tsx` (`cartReducer`, `CartProvider`, `useCart`)
- [x] Wrap app in `CartProvider` in `src/main.tsx`
- [x] Hydrate cart from `localStorage` on mount
- [x] Persist cart to `localStorage` on state change

### Phase 2 — Product page integration

- [x] Create `src/components/QuantitySelector.tsx`
- [x] Wire Add to Cart button in `src/pages/ProductPage.tsx`
- [x] Add quantity selector on product page
- [x] Add inline "Added to cart!" feedback
- [x] Disable Add to Cart when out of stock
- [x] Remove unused `Circle` import from `ProductPage.tsx`

### Phase 3 — Navigation badge & routing

- [x] Update `src/components/NavigationBar.tsx` — cart link + live badge
- [x] Add `/cart` route in `src/App.tsx`
- [x] Create placeholder or full `src/pages/CartPage.tsx` (route only if placeholder)

### Phase 4 — Cart page

- [x] Create `src/components/CartItemRow.tsx`
- [x] Create `src/components/CartSummary.tsx`
- [x] Create `src/pages/CartPage.tsx`
- [x] Empty cart state with link to `/all-products`

### Phase 5 — Polish & edge cases

- [x] Filter stale cart items (products removed from catalog)
- [x] Fix ProductPage 404 link: `/shop` → `/all-products`
- [ ] Run manual testing checklist (Section 14)
- [x] Verify `npm run build` passes

### MVP feature checklist

- [x] Global cart state accessible from any page
- [x] Add product to cart from `ProductPage`
- [x] Quantity selector on product page (default: 1)
- [x] Cart item count badge in navigation
- [x] `/cart` page to view, update quantities, and remove items
- [x] Cart subtotal calculation (EUR) — logic in context, UI pending
- [x] Persist cart in `localStorage` across page refreshes
- [x] Empty cart state with link back to shop
- [x] Stock-aware quantity limits — logic in reducer, UI pending

---

## 2. Current State

### What exists today

| Area | Status |
|------|--------|
| Product catalog | Static array in `src/data/products.ts` (12 products) |
| Product detail page | `src/pages/ProductPage.tsx` — displays product, **Add to Cart button has no handler** |
| Navigation cart icon | `src/components/NavigationBar.tsx` — icon only, badge commented out |
| Cart state / context | **None** |
| Cart page / drawer | **None** |
| Persistence (localStorage) | **None** |
| Checkout flow | **None** |

### Relevant existing UI

**ProductPage** — primary add-to-cart entry point:

```tsx
<button className="w-full bg-red-500 text-white py-3 px-8 rounded-md ...">
  <ShoppingCart size={20} />
  <span>Add to Cart</span>
</button>
```

**NavigationBar** — cart icon with placeholder badge:

```tsx
<button className="p-2 text-red-200 hover:text-white relative">
  <ShoppingCart size={24} />
  {/* badge commented out */}
</button>
```

### Tech stack constraints

- React 18 + TypeScript + Vite
- `react-router-dom` v6 for routing
- Tailwind CSS for styling (red palette)
- `lucide-react` for icons
- **No** global state library installed (Zustand, Redux, etc.)
- **No** toast/notification library installed

---

## 3. Goals & Scope

### In scope (MVP)

- [x] Global cart state accessible from any page
- [x] Add product to cart from `ProductPage`
- [x] Quantity selector on product page (default: 1)
- [x] Cart item count badge in navigation
- [x] `/cart` page to view, update quantities, and remove items
- [x] Cart subtotal calculation (EUR)
- [x] Persist cart in `localStorage` across page refreshes
- [x] Empty cart state with link back to shop
- [x] Stock-aware quantity limits

### Out of scope (for later)

- Checkout / payment integration
- Quick-add from listing pages (`AllProducts`, `FeaturedProducts`)
- Cart slide-out drawer (page-based cart is sufficient for MVP)
- Backend API or real-time inventory sync
- Product variants (size, color)
- Wishlist functionality
- User accounts / saved carts

---

## 4. Architecture Decisions

### State management: React Context + `useReducer`

**Recommendation:** Use React Context with `useReducer` — no new dependencies, fits the small app size, and matches the project's current simplicity.

| Option | Pros | Cons |
|--------|------|------|
| **Context + useReducer** ✅ | Zero deps, built-in, easy to test | Verbose for very large apps |
| Zustand | Minimal boilerplate | New dependency |
| Redux Toolkit | Scalable | Overkill for 12 static products |

### Provider placement

Wrap the app in `CartProvider` in `src/main.tsx` (above `BrowserRouter`) so cart state is available everywhere, including future routes outside `App.tsx`.

```tsx
// src/main.tsx (target structure)
<CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</CartProvider>
```

### Cart identity

Each cart line is keyed by `productId` (the product's `ID` field). Products have no variants, so one line per product is sufficient.

### Currency

Use **€** consistently (matches `ProductPage`, `AllProducts`, `FeaturedProducts`). Fix `ProductCard.tsx` if it is adopted later.

---

## 5. Data Models

### Extend `Product` interface

Add the missing `category` field that already exists in the data:

```typescript
// src/data/products.ts
export interface Product {
  ID: string;
  title: string;
  price: number;
  mainImage: string;
  otherImages: string;
  body: string;
  inventoryQuantity: string;
  category?: string; // add — already present in JSON data
}
```

### New cart types

Create `src/types/cart.ts`:

```typescript
export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  mainImage: string;
  maxQuantity: number; // parsed from inventoryQuantity at add time
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
```

### Derived values (computed in context, not stored)

```typescript
itemCount: number       // sum of all quantities
subtotal: number        // sum of price * quantity
isEmpty: boolean        // items.length === 0
```

---

## 6. File Structure

```
src/
├── types/
│   └── cart.ts                    # CartItem, CartState, CartAction
├── context/
│   └── CartContext.tsx            # Provider, reducer, useCart hook
├── utils/
│   └── cartStorage.ts             # localStorage read/write helpers
├── pages/
│   └── CartPage.tsx               # Full cart view
├── components/
│   ├── CartItemRow.tsx            # Single line item (image, qty, remove)
│   ├── CartSummary.tsx            # Subtotal + checkout placeholder
│   ├── QuantitySelector.tsx     # Reusable +/- quantity control
│   └── NavigationBar.tsx        # (modify) badge + link to /cart
├── pages/
│   └── ProductPage.tsx            # (modify) wire add-to-cart + quantity
└── App.tsx                        # (modify) add /cart route
```

---

## 7. Implementation Phases

### Phase 1 — Foundation (types, reducer, context)

**Estimated effort:** 1–2 hours

1. Create `src/types/cart.ts` with interfaces above.
2. Create `src/utils/cartStorage.ts`:
   - `CART_STORAGE_KEY = 'quantm-cart'`
   - `loadCart(): CartState | null`
   - `saveCart(state: CartState): void`
3. Create `src/context/CartContext.tsx`:
   - `cartReducer` handling all `CartAction` types
   - `ADD_ITEM`: merge quantity if product already in cart; respect `maxQuantity`
   - `UPDATE_QUANTITY`: clamp to `[1, maxQuantity]`; remove if quantity ≤ 0
   - `REMOVE_ITEM`: filter out by `productId`
   - `CLEAR_CART`: reset to `{ items: [] }`
   - `HYDRATE`: restore from localStorage on mount
4. Export `CartProvider` and `useCart()` hook.
5. Wrap app in `CartProvider` in `src/main.tsx`.
6. On provider mount: `loadCart()` → dispatch `HYDRATE`.
7. On every state change: `saveCart(state)` (debounce optional; sync is fine for small carts).

**Reducer logic for `ADD_ITEM` (pseudocode):**

```
existing = items.find(i => i.productId === product.ID)
maxQty = parseInt(product.inventoryQuantity, 10)

if existing:
  newQty = min(existing.quantity + (quantity ?? 1), maxQty)
  update item quantity
else:
  append new CartItem with quantity = min(quantity ?? 1, maxQty)
```

---

### Phase 2 — Product page integration

**Estimated effort:** 1 hour

1. Create `src/components/QuantitySelector.tsx`:
   - Props: `value`, `min`, `max`, `onChange`
   - UI: `-` button, number display, `+` button
   - Disable `-` at min, `+` at max
   - Tailwind: match red button styles
2. Update `src/pages/ProductPage.tsx`:
   - Add `useState` for local quantity (default `1`)
   - Import `useCart` and call `addItem(product, quantity)` on button click
   - Render `QuantitySelector` above Add to Cart button
   - Disable Add to Cart when `inventoryQuantity === '0'` or parsed stock is 0
   - Show brief inline success message ("Added to cart!") for 2–3 seconds (no new lib needed)
   - Remove unused `Circle` import

---

### Phase 3 — Navigation badge & routing

**Estimated effort:** 30 minutes

1. Update `src/components/NavigationBar.tsx`:
   - Import `useCart` and `Link`
   - Replace cart `<button>` with `<Link to="/cart">`
   - Show badge when `itemCount > 0`:
     ```tsx
     {itemCount > 0 && (
       <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
         {itemCount > 99 ? '99+' : itemCount}
       </span>
     )}
     ```
2. Update `src/App.tsx`:
   - Import `CartPage`
   - Add route: `<Route path="/cart" element={<CartPage />} />`

---

### Phase 4 — Cart page

**Estimated effort:** 2–3 hours

1. Create `src/components/CartItemRow.tsx` (see [Section 9](#9-cart-page-design))
2. Create `src/components/CartSummary.tsx`
3. Create `src/pages/CartPage.tsx`
4. Style with existing patterns: `pt-24`, `max-w-7xl mx-auto`, red palette

---

### Phase 5 — Polish & edge cases

**Estimated effort:** 1 hour

1. Handle stale cart data (product removed from catalog):
   - On cart page load, filter items whose `productId` no longer exists in `products`
2. Fix ProductPage 404 link: `/shop` → `/all-products`
3. Manual test full flow (see [Section 14](#14-testing-checklist))

---

## 8. Detailed Component Changes

### `src/context/CartContext.tsx`

**Exports:**

```typescript
interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}
```

**Hook guard:**

```typescript
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
```

---

### `src/pages/ProductPage.tsx`

**Changes:**

| Change | Detail |
|--------|--------|
| State | `const [quantity, setQuantity] = useState(1)` |
| State | `const [addedFeedback, setAddedFeedback] = useState(false)` |
| Hook | `const { addItem } = useCart()` |
| Handler | `handleAddToCart` → `addItem(product, quantity)` → show feedback |
| UI | Insert `QuantitySelector` between stock line and button |
| UI | Conditional "Added to cart!" message below button |
| Fix | `navigate('/shop')` → `navigate('/all-products')` |

---

### `src/components/NavigationBar.tsx`

**Changes:**

| Change | Detail |
|--------|--------|
| Import | `useCart`, `Link` from react-router-dom |
| Cart icon | Wrap in `<Link to="/cart">` |
| Badge | Live `itemCount` from `useCart()` |

---

### `src/App.tsx`

**Changes:**

```tsx
import CartPage from './pages/CartPage';

// Inside <Routes>:
<Route path="/cart" element={<CartPage />} />
```

---

## 9. Cart Page Design

### Layout (desktop)

```
┌─────────────────────────────────────────────────────────────┐
│  NavigationBar (cart badge reflects current count)         │
├─────────────────────────────────────────────────────────────┤
│  pt-24  max-w-7xl mx-auto                                   │
│                                                             │
│  Your Cart (h1)                                             │
│                                                             │
│  ┌──────────────────────────────┐  ┌─────────────────────┐ │
│  │ CartItemRow                  │  │ CartSummary         │ │
│  │ [img] Title                  │  │ Subtotal: €XX.XX    │ │
│  │       €price                 │  │                     │ │
│  │       [−] 2 [+]    [Remove]  │  │ [Proceed to Checkout│ │
│  │ ──────────────────────────── │  │  (disabled/placeholder)]│
│  │ CartItemRow ...              │  │                     │ │
│  └──────────────────────────────┘  └─────────────────────┘ │
│                                                             │
│  [Continue Shopping → /all-products]                        │
└─────────────────────────────────────────────────────────────┘
```

### Empty cart state

```
┌─────────────────────────────────────┐
│         🛒 (ShoppingCart icon)      │
│     Your cart is empty              │
│  [Browse Products → /all-products]  │
└─────────────────────────────────────┘
```

### `CartItemRow` props

```typescript
interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}
```

### `CartSummary` props

```typescript
interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
}
```

**Checkout button:** Render as disabled or link to a placeholder — label "Checkout coming soon" — to avoid implying payment is ready.

---

## 10. Persistence Strategy

### Storage format

```json
{
  "items": [
    {
      "productId": "9648073015632",
      "title": "3D Contoured Sleep Mask",
      "price": 7.99,
      "quantity": 2,
      "mainImage": "https://...",
      "maxQuantity": 993
    }
  ]
}
```

### `src/utils/cartStorage.ts` implementation notes

- Use `try/catch` around `JSON.parse` — corrupt data → return `null` (start fresh)
- Validate loaded items have required fields before hydrating
- Do **not** store derived values (`subtotal`, `itemCount`)

### Hydration flow

```
App load
  → CartProvider mounts
  → loadCart() from localStorage
  → if valid: dispatch HYDRATE
  → else: initial empty state
  → user actions update state
  → useEffect saves to localStorage on items change
```

---

## 11. Stock & Validation Rules

| Rule | Behavior |
|------|----------|
| Add to cart | `quantity` capped at `parseInt(inventoryQuantity, 10)` |
| Increase quantity in cart | Cannot exceed `maxQuantity` stored on cart item |
| Out of stock (`inventoryQuantity === '0'`) | Disable Add to Cart on product page |
| Invalid quantity input | Clamp to `[1, maxQuantity]` |
| Product deleted from catalog | Remove from cart on CartPage render (filter) |
| `inventoryQuantity` is string | Always `parseInt(value, 10)` with fallback to `0` |

**Note:** `maxQuantity` is snapshotted when the item is added. For a static catalog this is acceptable. A future API integration should re-validate on cart page load.

---

## 12. UX & Feedback

### Add to cart confirmation (ProductPage)

Simple inline feedback without adding a toast library:

```tsx
{addedFeedback && (
  <p className="mt-2 text-red-600 text-sm font-medium">
    Added to cart!
  </p>
)}
```

Reset with `setTimeout(() => setAddedFeedback(false), 2500)`.

### Optional: navigate to cart after add

**Recommendation for MVP:** Stay on product page with inline message. Add a secondary link: "View cart →".

### Accessibility

- Cart badge: `aria-label={`Cart, ${itemCount} items`}`
- Quantity buttons: `aria-label="Increase quantity"` / `"Decrease quantity"`
- Remove button: `aria-label={`Remove ${item.title} from cart`}`

---

## 13. Bug Fixes (Opportunistic)

Fix these while implementing cart (low effort, improves consistency):

| File | Issue | Fix |
|------|-------|-----|
| `ProductPage.tsx` | 404 navigates to `/shop` | Change to `/all-products` |
| `ProductPage.tsx` | Unused `Circle` import | Remove |
| `ProductCard.tsx` | Uses `$` instead of `€` | Change to `€` (if component is used) |
| `products.ts` | `category` missing from interface | Add optional `category?: string` |

---

## 14. Testing Checklist

### Manual tests

- [ ] Add single product from product page → badge shows `1`
- [ ] Add same product again → quantity merges, badge updates
- [ ] Refresh page → cart persists
- [ ] Open `/cart` → items, prices, subtotal correct
- [ ] Increase/decrease quantity → subtotal updates
- [ ] Decrease quantity to 0 → item removed (or block at 1)
- [ ] Remove item → cart updates, badge updates
- [ ] Empty cart → empty state shown
- [ ] Add product at max stock → cannot exceed limit
- [ ] Out-of-stock product → Add to Cart disabled
- [ ] Navigate to cart via nav icon → cart page loads
- [ ] Invalid product URL → 404 "Return to Shop" goes to `/all-products`
- [ ] Mobile: cart page and quantity controls usable
- [ ] `npm run build` passes with no TypeScript errors

### Edge cases

- [ ] Clear localStorage manually → app starts with empty cart
- [ ] Corrupt localStorage JSON → app starts with empty cart (no crash)
- [ ] Cart with 99+ items → badge shows `99+`

---

## 15. Future Enhancements

After MVP is stable, consider in priority order:

1. **Quick-add on listing pages** — Add button on `AllProducts` / `FeaturedProducts` cards with `e.preventDefault()` / `e.stopPropagation()` so card link still works
2. **Refactor product cards** — Consolidate duplicated card UI into `ProductCard.tsx` with optional `onAddToCart` prop
3. **Cart drawer** — Slide-out panel from nav icon for quick review without leaving current page
4. **Toast notifications** — Add `react-hot-toast` for global "Added to cart" messages
5. **Checkout page** — Stripe or PayPal integration
6. **Backend cart sync** — Supabase or similar when user accounts are added
7. **Promo codes / shipping** — Extend `CartSummary` with line items

---

## Implementation Order Summary

```
Phase 1: types → cartStorage → CartContext → main.tsx provider
    ↓
Phase 2: QuantitySelector → ProductPage wiring
    ↓
Phase 3: NavigationBar badge + /cart route in App.tsx
    ↓
Phase 4: CartItemRow → CartSummary → CartPage
    ↓
Phase 5: Edge cases, bug fixes, manual testing
```

**Total estimated effort:** 5–8 hours for a complete MVP.

---

## Reference: Key Existing Files

| File | Role |
|------|------|
| `src/data/products.ts` | Product catalog & `Product` type |
| `src/pages/ProductPage.tsx` | Primary add-to-cart trigger |
| `src/components/NavigationBar.tsx` | Cart icon & badge |
| `src/App.tsx` | Route registration |
| `src/main.tsx` | App entry & provider placement |
| `src/components/ProductCard.tsx` | Unused; candidate for future refactor |
| `src/pages/AllProducts.tsx` | Listing page (no cart yet) |
| `src/components/FeaturedProducts.tsx` | Home listing (no cart yet) |
