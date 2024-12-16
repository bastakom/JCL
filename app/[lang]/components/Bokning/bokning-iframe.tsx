"use client";

import React, { useEffect } from "react";

export const BokningIframe = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://app.acuityscheduling.com/schedule.php?owner=16325382&ref=embedded_csp"
      title="Schedule Appointment"
      width="100%"
      height="800"
      frameBorder="0"
    ></iframe>
  );
};
