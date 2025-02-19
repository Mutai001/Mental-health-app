import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UserAskAI: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <Card className="w-full max-w-5xl shadow-xl rounded-lg border border-gray-400">
        <CardContent className="p-4 md:p-6">
          <Typography variant="h4" className="mb-4 text-center font-bold text-white">
            Mental Health AI Chatbot
          </Typography>
          <div className="w-full h-[85vh] md:h-[90vh]">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/LlL4TiFs541QRazwQjuMB"
              title="Mental Health AI Chatbot"
              className="w-full h-full border-none rounded-lg"
              allow="microphone;"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAskAI;
