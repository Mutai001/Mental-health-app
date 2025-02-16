import { useState, useEffect } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
  } from "@mui/material";
  import { motion } from "framer-motion";
  import DeleteIcon from "@mui/icons-material/Delete";
  import EditIcon from "@mui/icons-material/Edit";
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  
  const AdminUserManagement = () => {
    interface User {
      id: number;
      name: string;
      email: string;
      role: string;
    }
  
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch("http://localhost:8000/api/users", {
            credentials: "include", // Ensures cookies (if needed) are sent
          });
  
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
  
          const data = await response.json();
  
          if (Array.isArray(data)) {
            setUsers(data);
          } else {
            throw new Error("Invalid response format: Expected an array");
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      };
  
      fetchUsers();
    }, []);
  
    const handleEdit = (id: number) => {
      alert(`Edit user with ID: ${id}`);
    };
  
    const handleDelete = async (id: number) => {
      if (window.confirm("Are you sure you want to delete this user?")) {
        try {
          const response = await fetch(`http://localhost:8000/api/users/${id}`, {
            method: "DELETE",
            credentials: "include",
          });
  
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
  
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        } catch (err) {
          console.error("Error deleting user:", err);
        }
      }
    };
  
    return (
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Card sx={{ p: 3, boxShadow: 5, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                User Management
              </Typography>
  
              {loading ? (
                <Typography>Loading users...</Typography>
              ) : error ? (
                <Typography color="error">{error}</Typography>
              ) : (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <Tooltip title="Edit">
                              <IconButton onClick={() => handleEdit(user.id)}>
                                <EditIcon color="primary" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton onClick={() => handleDelete(user.id)}>
                                <DeleteIcon color="error" />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    );
  };
  
  export default AdminUserManagement;
  