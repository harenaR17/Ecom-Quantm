import { useEffect } from 'react';
import {
  getVoiceflowExtensions,
  logVoiceflowDebug,
  registerVoiceflowDebugHelpers,
} from '../integrations/voiceflow/addToCartExtension';

const VOICEFLOW_WIDGET_URL = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
const VOICEFLOW_RUNTIME_URL = 'https://general-runtime.voiceflow.com';

const VoiceflowChat: React.FC = () => {
  const projectId = import.meta.env.VITE_VOICEFLOW_PROJECT_ID;

  useEffect(() => {
    if (!projectId) return;

    let cancelled = false;

    const loadWidget = () => {
      if (cancelled || !window.voiceflow?.chat) return;

      registerVoiceflowDebugHelpers();

      window.voiceflow.chat.load({
        verify: { projectID: projectId },
        url: VOICEFLOW_RUNTIME_URL,
        assistant: {
          extensions: getVoiceflowExtensions(),
        },
      });

      logVoiceflowDebug('Widget loaded with extensions', {
        projectId,
        extensionCount: getVoiceflowExtensions().length,
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${VOICEFLOW_WIDGET_URL}"]`
    );

    if (existingScript) {
      if (window.voiceflow?.chat) {
        loadWidget();
      } else {
        existingScript.addEventListener('load', loadWidget);
      }

      return () => {
        cancelled = true;
        existingScript.removeEventListener('load', loadWidget);
      };
    }

    const script = document.createElement('script');
    script.src = VOICEFLOW_WIDGET_URL;
    script.type = 'text/javascript';
    script.async = true;
    script.addEventListener('load', loadWidget);
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.removeEventListener('load', loadWidget);
    };
  }, [projectId]);

  return null;
};

export default VoiceflowChat;
