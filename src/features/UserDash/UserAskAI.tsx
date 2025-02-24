import React from "react";

const UserAskAI: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "12.5vh", // Keeps it centered vertically
        left: "auto",
        right: "5vw", // Moves it towards the right
        width: "75vw",
        height: "75vh",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        maxWidth: "900px", // Prevents it from being too wide on large screens
        minWidth: "300px", // Ensures usability on small screens
      }}
    >
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/LlL4TiFs541QRazwQjuMB"
        title="Mental Health AI Chatbot"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="microphone;"
      ></iframe>
    </div>
  );
};

export default UserAskAI;
