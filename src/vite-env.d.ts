/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VOICEFLOW_PROJECT_ID?: string;
  readonly VITE_VOICEFLOW_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface VoiceflowChatConfig {
  verify: { projectID: string };
  url: string;
  assistant?: {
    extensions?: unknown[];
  };
}

interface Window {
  __quantmCartBridge?: import('./types/voiceflow').QuantmCartBridge;
  __quantmVoiceflowDebug?: {
    pingBridge: () => boolean;
    testAddToCart: (productId?: string) => import('./types/voiceflow').VoiceflowAddToCartResult | null;
    inspectLastTraces: () => void;
  };
  voiceflow?: {
    chat: {
      load: (config: VoiceflowChatConfig) => void;
      interact?: (event: { type: string; payload?: Record<string, unknown> }) => void;
    };
  };
}
