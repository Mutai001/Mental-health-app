import { useState } from "react";
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
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    CircularProgress
} from "@mui/material";
import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";

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
    const [loading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [editUser, setEditUser] = useState<User | null>(null);
    const [newUser, setNewUser] = useState<User>({ id: 0, name: "", email: "", role: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        toast.success("User saved successfully!");
        setOpenDialog(false);
    };

    const handleDelete = (id: number) => {
        toast.error("User deleted!");
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Card sx={{ p: 3, boxShadow: 5, borderRadius: 3 }}>
                    <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "green" }}>
                            User Management
                        </Typography>

                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={() => setOpenDialog(true)}
                            sx={{ mb: 2, backgroundColor: "green", '&:hover': { backgroundColor: "darkgreen" } }}
                        >
                            Add User
                        </Button>

                        {loading ? (
                            <CircularProgress color="success" />
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
                                                        <IconButton onClick={() => { setEditUser(user); setOpenDialog(true); }}>
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

            {/* Dialog for Adding/Editing Users */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{editUser ? "Edit User" : "Add User"}</DialogTitle>
                <DialogContent>
                    <TextField fullWidth margin="dense" label="Name" name="name" value={newUser.name} onChange={handleChange} />
                    <TextField fullWidth margin="dense" label="Email" name="email" value={newUser.email} onChange={handleChange} />
                    <TextField fullWidth margin="dense" label="Role" name="role" value={newUser.role} onChange={handleChange} />
                </DialogContent>
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: "green" }}>
                    {editUser ? "Update" : "Create"}
                </Button>
            </Dialog>
        </Box>
    );
};

export default AdminUserManagement;
