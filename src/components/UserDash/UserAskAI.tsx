import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UserAskAI: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-24">
      <Card className="w-[90%] shadow-lg rounded-lg border border-gray-300 min-h-[85vh]">
        <CardContent className="p-8">
          <Typography variant="h4" className="mb-6 text-center font-bold">
            Mental Health AI Chatbot
          </Typography>
          <div className="w-full h-[85vh] overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/LlL4TiFs541QRazwQjuMB"
              title="Mental Health AI Chatbot"
              className="w-full h-full border-none"
              allow="microphone;"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAskAI;
