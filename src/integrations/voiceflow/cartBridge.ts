import { products, type Product } from '../../data/products';
import type {
  VoiceflowAddToCartPayload,
  VoiceflowAddToCartResult,
} from '../../types/voiceflow';

function parseQuantity(value: unknown): number {
  const parsed = Number(value);
  if (Number.isNaN(parsed) || parsed < 1) return 1;
  return Math.floor(parsed);
}

function parseMaxQuantity(inventoryQuantity: string): number {
  const parsed = parseInt(inventoryQuantity, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function isValidVoiceflowPayload(
  payload: unknown
): payload is VoiceflowAddToCartPayload {
  if (!payload || typeof payload !== 'object') return false;

  const data = payload as Record<string, unknown>;
  return typeof data.product_id === 'string' && data.product_id.trim().length > 0;
}

export function resolveProductFromVoiceflow(
  payload: VoiceflowAddToCartPayload
): Product | null {
  const productId = payload.product_id.trim();
  const catalogProduct = products.find((product) => product.ID === productId);

  if (catalogProduct) {
    return catalogProduct;
  }

  if (
    typeof payload.product_name === 'string' &&
    typeof payload.product_price === 'number'
  ) {
    return {
      ID: productId,
      title: payload.product_name,
      price: payload.product_price,
      mainImage: '',
      otherImages: '[]',
      body: '',
      inventoryQuantity: String(parseQuantity(payload.product_quantity) || 999),
    };
  }

  return null;
}

export function addVoiceflowPayloadToCart(
  payload: unknown,
  addItem: (product: Product, quantity?: number) => void
): VoiceflowAddToCartResult {
  if (!isValidVoiceflowPayload(payload)) {
    return { success: false, error: 'INVALID_PAYLOAD' };
  }

  const product = resolveProductFromVoiceflow(payload);

  if (!product) {
    return {
      success: false,
      error: 'PRODUCT_NOT_FOUND',
      productId: payload.product_id,
    };
  }

  const maxQuantity = parseMaxQuantity(product.inventoryQuantity);
  if (maxQuantity <= 0) {
    return {
      success: false,
      error: 'OUT_OF_STOCK',
      productId: product.ID,
    };
  }

  const quantity = parseQuantity(payload.product_quantity);
  addItem(product, quantity);

  return {
    success: true,
    productId: product.ID,
    quantity,
  };
}
