import React, { useEffect } from "react";

const DialogflowMessenger = () => {
  useEffect(() => {
    if (
      !document.querySelector(
        "script[src='https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1']"
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="Mira"
      agent-id={process.env.REACT_APP_DIALOGFLOW_AGENT_ID}
      language-code="en"
    ></df-messenger>
  );
};

export default DialogflowMessenger;
