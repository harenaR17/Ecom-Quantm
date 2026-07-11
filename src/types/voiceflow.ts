export interface VoiceflowAddToCartPayload {
  product_id: string;
  product_name?: string;
  product_price?: number;
  product_quantity?: number;
}

export type VoiceflowAddToCartError =
  | 'PRODUCT_NOT_FOUND'
  | 'OUT_OF_STOCK'
  | 'BRIDGE_UNAVAILABLE'
  | 'INVALID_PAYLOAD';

export interface VoiceflowAddToCartResult {
  success: boolean;
  error?: VoiceflowAddToCartError;
  productId?: string;
  quantity?: number;
}

export interface QuantmCartBridge {
  addFromVoiceflow: (
    payload: VoiceflowAddToCartPayload
  ) => VoiceflowAddToCartResult;
}

export const VOICEFLOW_ADD_TO_CART_ACTION = 'add_to_cart';

export const QUANTM_CART_UPDATED_EVENT = 'quantm:cart:updated';
