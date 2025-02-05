"use client";

import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/fa0b30c6-f698-4b5e-8d8f-dee49a26a001/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return <div id="CookiebotWrapper" className="container m-auto mt-28"></div>;
};

export default CookieConsent;
