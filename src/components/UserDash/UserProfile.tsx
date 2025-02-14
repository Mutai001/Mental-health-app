import { useState } from "react";
import { Avatar, Button, TextField, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SaveIcon from "@mui/icons-material/Save";

const UserProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  // Handle file upload
  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleFileChange = (event: FileChangeEvent) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
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
    <Card
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        textAlign: "center",
        boxShadow: 5,
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
          Edit Profile
        </Typography>
        <Avatar src={avatar} sx={{ width: 120, height: 120, margin: "auto", mb: 2, border: "3px solid #6DA14E" }} />
        <Button
          variant="contained"
          component="label"
          sx={{ backgroundColor: "#6DA14E", color: "#fff", mb: 2, textTransform: "none" }}
          startIcon={<UploadFileIcon />}
        >
          Upload Profile Picture
          <input type="file" accept="image/*" hidden onChange={handleFileChange} />
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {fileName}
        </Typography>

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
          fullWidth
          onClick={handleSave}
          disabled={loading}
          sx={{
            backgroundColor: "#2C423F",
            color: "#fff",
            textTransform: "none",
            fontWeight: "bold",
            ":hover": { backgroundColor: "#1F302B" },
          }}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserProfilePage;
