import { VOICEFLOW_ADD_TO_CART_ACTION } from '../../types/voiceflow';

interface VoiceflowTrace {
  type: string;
  payload?: {
    name?: string;
    payload?: Record<string, unknown>;
  };
}

interface VoiceflowExtensionContext {
  trace: VoiceflowTrace;
}

export function isVoiceflowDebugEnabled(): boolean {
  return (
    import.meta.env.DEV === true ||
    import.meta.env.VITE_VOICEFLOW_DEBUG === 'true'
  );
}

export function logVoiceflowDebug(message: string, data?: unknown): void {
  if (!isVoiceflowDebugEnabled()) return;
  if (data === undefined) {
    console.info(`[Voiceflow Debug] ${message}`);
    return;
  }
  console.info(`[Voiceflow Debug] ${message}`, data);
}

export const AddToCartExtension = {
  name: 'AddToCart',
  type: 'effect' as const,
  match: ({ trace }: VoiceflowExtensionContext) => {
    const matches =
      trace.type === 'channel-action' &&
      trace.payload?.name === VOICEFLOW_ADD_TO_CART_ACTION;

    if (isVoiceflowDebugEnabled() && trace.type === 'channel-action') {
      logVoiceflowDebug('AddToCart match check', {
        traceType: trace.type,
        actionName: trace.payload?.name,
        expectedName: VOICEFLOW_ADD_TO_CART_ACTION,
        matches,
      });
    }

    return matches;
  },
  effect: ({ trace }: VoiceflowExtensionContext) => {
    if (isVoiceflowDebugEnabled()) {
      logVoiceflowDebug('channel-action trace received', trace);
      logVoiceflowDebug('payload.name', trace.payload?.name);
      logVoiceflowDebug('payload.payload', trace.payload?.payload);
    }

    logVoiceflowDebug('AddToCart effect fired', trace);

    const payload = trace.payload?.payload;

    if (!payload) {
      console.warn('[Voiceflow AddToCart] Missing payload.payload in trace.', trace);
      return;
    }

    if (!window.__quantmCartBridge) {
      console.warn('[Voiceflow AddToCart] Bridge unavailable.', {
        payload,
        hint: 'CartProvider may not be mounted yet.',
      });
      return;
    }

    const result = window.__quantmCartBridge.addFromVoiceflow(
      payload as Parameters<typeof window.__quantmCartBridge.addFromVoiceflow>[0]
    );

    if (result.success) {
      console.info(
        `[Voiceflow AddToCart] Added ${result.quantity} of product ${result.productId}`
      );
    } else {
      console.warn('[Voiceflow AddToCart] Failed:', result.error, payload);
    }
  },
};

export function getVoiceflowExtensions() {
  // Voiceflow runs only the first matching effect extension — keep a single handler.
  return [AddToCartExtension];
}

export function registerVoiceflowDebugHelpers(): void {
  if (!isVoiceflowDebugEnabled()) return;

  window.__quantmVoiceflowDebug = {
    pingBridge: () => {
      const bridgeReady = Boolean(window.__quantmCartBridge);
      console.info('[Voiceflow Debug] Bridge ready:', bridgeReady);
      return bridgeReady;
    },
    testAddToCart: (productId = '9648073015632') => {
      if (!window.__quantmCartBridge) {
        console.error('[Voiceflow Debug] Bridge not available');
        return null;
      }
      return window.__quantmCartBridge.addFromVoiceflow({
        product_id: productId,
        product_name: '3D Contoured Sleep Mask',
        product_price: 7.99,
        product_quantity: 1,
      });
    },
    inspectLastTraces: () => {
      console.info(
        '[Voiceflow Debug] Open DevTools → Network, filter "voiceflow", click Add to Cart in chat, inspect interact response traces.'
      );
    },
  };

  console.info(
    '[Voiceflow Debug] Helpers on window.__quantmVoiceflowDebug — try .pingBridge() and .testAddToCart()'
  );
}
