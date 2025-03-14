import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, MenuItem, CircularProgress, Snackbar, Alert } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

const API_URL = "http://localhost:8000/api/users";

export function AdminUserManagement() {
  interface User {
    id: string | number;
    full_name: string;
    email: string;
    role: string;
  }
  
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ full_name: "", email: "", role: "User" });
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" | "warning" | "info" }>({ open: false, message: "", severity: "success" });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async () => {
    if (!newUser.full_name || !newUser.email) return;
    try {
      await axios.post(API_URL, newUser);
      setNewUser({ full_name: "", email: "", role: "User" });
      fetchUsers();
      setSnackbar({ open: true, message: "User created successfully", severity: "success" });
    } catch {
      setSnackbar({ open: true, message: "Error creating user", severity: "error" });
    }
  };

  const handleUpdateUser = async (id: string | number) => {
    try {
      await axios.put(`${API_URL}/${id}`, editingUser);
      setEditingUser(null);
      fetchUsers();
      setSnackbar({ open: true, message: "User updated successfully", severity: "success" });
    } catch {
      setSnackbar({ open: true, message: "Error updating user", severity: "error" });
    }
  };

  const handleDeleteUser = async (id: string | number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
      setSnackbar({ open: true, message: "User deleted successfully", severity: "success" });
    } catch {
      setSnackbar({ open: true, message: "Error deleting user", severity: "error" });
    }
  };

  return (
    <Box sx={{ p: 3, color: "white" }}>
      <Typography variant="h4" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PeopleIcon /> User Management
      </Typography>
      
      <Card sx={{ backgroundColor: "#1F302B", mb: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }}>Add New User</Typography>
          <TextField fullWidth label="Full Name" value={newUser.full_name} onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })} sx={{ mb: 1, backgroundColor: "white", borderRadius: 1 }} />
          <TextField fullWidth label="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} sx={{ mb: 1, backgroundColor: "white", borderRadius: 1 }} />
          <TextField select fullWidth label="Role" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} sx={{ backgroundColor: "white", borderRadius: 1 }}>
            {['User', 'Admin'].map((role) => (
              <MenuItem key={role} value={role}>{role}</MenuItem>
            ))}
          </TextField>
          <Button onClick={handleCreateUser} sx={{ mt: 2, color: "white", backgroundColor: "#6DA14E" }} disabled={!newUser.full_name || !newUser.email}>Add User</Button>
        </CardContent>
      </Card>

      {loading ? <CircularProgress sx={{ display: "block", mx: "auto" }} /> : null}
      {error ? <Typography color="error">{error}</Typography> : null}
      
      <TableContainer component={Paper} sx={{ backgroundColor: "#2C423F" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Full Name</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Role</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ color: "white" }}>{editingUser?.id === user.id ? <TextField value={editingUser.full_name} onChange={(e) => setEditingUser({ ...editingUser, full_name: e.target.value })} sx={{ backgroundColor: "white" }} /> : user.full_name}</TableCell>
                <TableCell sx={{ color: "white" }}>{editingUser?.id === user.id ? <TextField value={editingUser.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} sx={{ backgroundColor: "white" }} /> : user.email}</TableCell>
                <TableCell sx={{ color: "white" }}>{editingUser?.id === user.id ? <TextField select value={editingUser.role} onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })} sx={{ backgroundColor: "white" }}>
                  {['User', 'Admin'].map((role) => (
                    <MenuItem key={role} value={role}>{role}</MenuItem>
                  ))}
                </TextField> : user.role}</TableCell>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Button onClick={() => handleUpdateUser(user.id)} sx={{ color: "white", mr: 1 }}>Save</Button>
                  ) : (
                    <Button onClick={() => setEditingUser(user)} sx={{ color: "white", mr: 1 }}>Edit</Button>
                  )}
                  <Button onClick={() => handleDeleteUser(user.id)} sx={{ color: "red" }}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
}

export default AdminUserManagement;