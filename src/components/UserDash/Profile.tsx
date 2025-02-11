import { useState } from "react";
import { Avatar, Button, TextField, Card, CardContent, CircularProgress } from "@mui/material";

const ProfilePage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Handle file upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string); // Type assertion fixes issue
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Profile Updated Successfully!");
    }, 2000);
  };

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3, textAlign: "center", boxShadow: 3 }}>
      <CardContent>
        <Avatar 
          src={avatar} 
          sx={{ width: 100, height: 100, margin: "auto", mb: 2 }} 
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          style={{ display: "block", margin: "10px auto" }} 
        />

        <TextField 
          fullWidth 
          label="Full Name" 
          variant="outlined" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          sx={{ mb: 2 }} 
        />

        <TextField 
          fullWidth 
          label="Email" 
          variant="outlined" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          sx={{ mb: 2 }} 
        />

        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleSave} 
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Save Changes"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
