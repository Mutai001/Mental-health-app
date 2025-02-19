import React, { useState } from "react";

const UserAskAI: React.FC = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div 
      onClick={() => setOpenChat(true)} 
      style={{
        width: "80%", 
        height: "600px",
        cursor: "pointer",
        margin: "auto"
      }}
    >
      {openChat ? (
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/LlL4TiFs541QRazwQjuMB"
          title="Mental Health AI Chatbot"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      ) : null}
    </div>
  );
};

export default UserAskAI;
