import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  Modal,
  Box,
  Typography,
  Button,
  Avatar,
  CircularProgress,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Patient Type
interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const navigate = useNavigate();

  // Fetch Patients (Replace with your API)
  useEffect(() => {
    axios
      .get<Patient[]>("http://localhost:8000/api/patients")
      .then((response) => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
        setLoading(false);
      });
  }, []);

  // Handle Pagination
  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Open/Close Modal
  const handleOpenModal = (patient: Patient) => setSelectedPatient(patient);
  const handleCloseModal = () => setSelectedPatient(null);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#2C423F" }}>
        Patients List
      </Typography>

      {/* Show Loading Indicator */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : patients.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", mt: 4, color: "gray" }}>
          No patients found.
        </Typography>
      ) : (
        <>
          {/* Patients Table */}
          <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1F302B" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Avatar</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Phone</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>
                      <Avatar src={patient.avatar} alt={patient.name} />
                    </TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.email}</TableCell>
                    <TableCell>{patient.phone}</TableCell>
                    <TableCell>
                      <IconButton color="primary" onClick={() => handleOpenModal(patient)}>
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton color="secondary" onClick={() => navigate(`/therapist-messages?patient=${patient.id}`)}>
                        <ChatIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            component="div"
            count={patients.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}

      {/* Patient Details Modal */}
      <Modal open={Boolean(selectedPatient)} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {selectedPatient && (
            <>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F" }}>
                  {selectedPatient.name}
                </Typography>
                <IconButton onClick={handleCloseModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
                <Avatar src={selectedPatient.avatar} sx={{ width: 80, height: 80 }} />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Email:</strong> {selectedPatient.email}
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> {selectedPatient.phone}
                </Typography>
              </Box>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
                onClick={() => {
                  handleCloseModal();
                  navigate(`/therapist-messages?patient=${selectedPatient.id}`);
                }}
              >
                Chat with {selectedPatient.name}
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
