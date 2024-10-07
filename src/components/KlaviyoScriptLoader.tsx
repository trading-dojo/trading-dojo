import React, { useEffect } from "react";

const KlaviyoScriptLoader: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WnSLVv";
    document.body.appendChild(script);
  }, []);

  return null; // Não renderiza nada
};

export default KlaviyoScriptLoader;
