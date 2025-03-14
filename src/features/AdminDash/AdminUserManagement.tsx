import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  MenuItem,
  CircularProgress,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

const API_URL = "http://localhost:8000/api/users";

export function AdminUserManagement() {
  interface User {
    id: string | number;
    full_name: string;
    email: string;
    contact_phone: string;
    address: string;
    role: string;
    password?: string; // Add password field if required by the backend
  }

  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ full_name: "", email: "", contact_phone: "", address: "", role: "User", password: "" });
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" | "warning" | "info" }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

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
    if (!newUser.full_name || !newUser.email || !newUser.contact_phone || !newUser.address || !newUser.password) return;
    try {
      console.log("Sending new user data:", newUser); // Debugging
      await axios.post(API_URL, newUser);
      setNewUser({ full_name: "", email: "", contact_phone: "", address: "", role: "User", password: "" });
      fetchUsers();
      setSnackbar({ open: true, message: "User created successfully", severity: "success" });
      setIsAddUserModalOpen(false); // Close the modal after successful creation
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error creating user:", error.response?.data); // Debugging
        setSnackbar({ open: true, message: "Error creating user: " + (error.response?.data as { message: string }).message, severity: "error" });
      } else {
        console.error("Error creating user:", error); // Debugging
        setSnackbar({ open: true, message: "Error creating user", severity: "error" });
      }
    }
  };

  const handleUpdateUser = async (id: string | number) => {
    if (!editingUser) return;
    try {
      // Ensure the role is valid
      const updatedUser = { ...editingUser, role: editingUser.role === "User" || editingUser.role === "Admin" ? editingUser.role : "User" };
      await axios.put(`${API_URL}/${id}`, updatedUser);
      setEditingUser(null);
      fetchUsers();
      setSnackbar({ open: true, message: "User updated successfully", severity: "success" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error updating user:", error.response?.data); // Debugging
        setSnackbar({ open: true, message: "Error updating user: " + error.response?.data?.message, severity: "error" });
      } else {
        console.error("Error updating user:", error); // Debugging
        setSnackbar({ open: true, message: "Error updating user", severity: "error" });
      }
    }
  };

  const handleDeleteUser = async (id: string | number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
      setSnackbar({ open: true, message: "User deleted successfully", severity: "success" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error deleting user:", error.response?.data); // Debugging
        setSnackbar({ open: true, message: "Error deleting user: " + error.response?.data?.message, severity: "error" });
      } else {
        console.error("Error deleting user:", error); // Debugging
        setSnackbar({ open: true, message: "Error deleting user", severity: "error" });
      }
    }
  };

  return (
    <Box sx={{ p: 3, color: "white" }}>
      <Typography variant="h4" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PeopleIcon /> User Management
      </Typography>

      {/* Add User Button */}
      <Button
        variant="contained"
        onClick={() => setIsAddUserModalOpen(true)}
        sx={{ mb: 3, color: "white", backgroundColor: "#6DA14E" }}
      >
        Add New User
      </Button>

      {/* Add User Modal */}
      <Dialog open={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Full Name"
            value={newUser.full_name}
            onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
            sx={{ mb: 2, mt: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Contact Phone"
            value={newUser.contact_phone}
            onChange={(e) => setNewUser({ ...newUser, contact_phone: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Address"
            value={newUser.address}
            onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            fullWidth
            label="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            sx={{ mb: 2 }}
          >
            {['User', 'Admin'].map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddUserModalOpen(false)}>Cancel</Button>
          <Button onClick={handleCreateUser} disabled={!newUser.full_name || !newUser.email || !newUser.contact_phone || !newUser.address || !newUser.password}>
            Add User
          </Button>
        </DialogActions>
      </Dialog>

      {/* Loading and Error Handling */}
      {loading ? <CircularProgress sx={{ display: "block", mx: "auto" }} /> : null}
      {error ? <Typography color="error">{error}</Typography> : null}

      {/* Users Table */}
      <TableContainer component={Paper} sx={{ backgroundColor: "#2C423F" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Full Name</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Contact Phone</TableCell>
              <TableCell sx={{ color: "white" }}>Address</TableCell>
              <TableCell sx={{ color: "white" }}>Role</TableCell>
              <TableCell sx={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ color: "white" }}>{user.full_name}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.email}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.contact_phone}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.address}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.role}</TableCell>
                <TableCell>
                  <Button onClick={() => setEditingUser(user)} sx={{ color: "white", mr: 1 }}>Edit</Button>
                  <Button onClick={() => handleDeleteUser(user.id)} sx={{ color: "red" }}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit User Modal */}
      {editingUser && (
        <Dialog open={!!editingUser} onClose={() => setEditingUser(null)}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Full Name"
              value={editingUser.full_name}
              onChange={(e) => setEditingUser({ ...editingUser, full_name: e.target.value })}
              sx={{ mb: 2, mt: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              value={editingUser.email}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Contact Phone"
              value={editingUser.contact_phone}
              onChange={(e) => setEditingUser({ ...editingUser, contact_phone: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Address"
              value={editingUser.address}
              onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              select
              fullWidth
              label="Role"
              value={editingUser.role}
              onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
              sx={{ mb: 2 }}
            >
              {['User', 'Admin'].map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditingUser(null)}>Cancel</Button>
            <Button onClick={() => handleUpdateUser(editingUser.id)}>Save</Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Snackbar for Notifications */}
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AdminUserManagement;