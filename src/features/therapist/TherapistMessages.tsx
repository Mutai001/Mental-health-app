import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  TextField,
  Button,
  Modal,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

export function MessagesSection() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const messages = [
    { id: 1, name: "John Doe", lastMessage: "Hey, how are you?" },
    { id: 2, name: "Jane Smith", lastMessage: "Let’s meet tomorrow." },
    { id: 3, name: "Dr. Alex", lastMessage: "Your appointment is confirmed." },
  ];

  const handleOpen = (id: number) => {
    setSelectedChat(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedChat(null);
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedChat !== null) {
      alert(`Message sent: ${message}`);
      setMessage("");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      {/* Message List */}
      <Box sx={{ width: 300, bgcolor: "#1F302B", color: "white", borderRadius: 2, p: 2 }}>
        <Typography variant="h6" textAlign="center" mb={2}>Messages</Typography>
        <List>
          {messages.map(({ id, name, lastMessage }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={() => handleOpen(id)}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Avatar>{name[0]}</Avatar>
                </ListItemIcon>
                <ListItemText primary={name} secondary={lastMessage} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Chat Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h5">
                  Chat with {messages.find(m => m.id === selectedChat)?.name}
                </Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ minHeight: 300, backgroundColor: "#f5f5f5", p: 2, borderRadius: 2 }}>
                <Typography variant="body1">This is the conversation history.</Typography>
              </Box>
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
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </Box>
  );
}

export default MessagesSection;
