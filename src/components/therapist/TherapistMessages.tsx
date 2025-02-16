import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";

export function MessagesSection() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const messages = [
    { id: 1, name: "John Doe", lastMessage: "Hey, how are you?" },
    { id: 2, name: "Jane Smith", lastMessage: "Let’s meet tomorrow." },
    { id: 3, name: "Dr. Alex", lastMessage: "Your appointment is confirmed." },
  ];

  const handleSendMessage = () => {
    if (message.trim() && selectedChat !== null) {
      alert(`Message sent: ${message}`);
      setMessage("");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "#1F302B",
            color: "white",
          },
        }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Avatar sx={{ bgcolor: "#6DA14E", width: 60, height: 60, mx: "auto" }}>
            <ChatIcon />
          </Avatar>
          <Typography variant="h6" sx={{ mt: 1 }}>Messages</Typography>
        </Box>
        <List>
          {messages.map(({ id, name, lastMessage }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={() => setSelectedChat(id)} component="li">
                <ListItemIcon sx={{ color: "white" }}>
                  <Avatar>{name[0]}</Avatar>
                </ListItemIcon>
                <ListItemText primary={name} secondary={lastMessage} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Chat Window */}
      <Box sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        {selectedChat !== null ? (
          <>
            <Card sx={{ flexGrow: 1, p: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>Chat with {messages.find(m => m.id === selectedChat)?.name}</Typography>
                <Box sx={{ minHeight: 300, backgroundColor: "#ffffff", p: 2, borderRadius: 2 }}>
                  <Typography variant="body1">This is the conversation history.</Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Message Input */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button onClick={handleSendMessage} sx={{ ml: 2 }} variant="contained" color="primary">
                <SendIcon />
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", mt: 10 }}>
            Select a conversation to start chatting.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default MessagesSection;
