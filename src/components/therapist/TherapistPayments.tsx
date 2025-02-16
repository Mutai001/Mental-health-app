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
  TablePagination,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const paymentsData = [
  { id: 1, patient: "John Doe", amount: "$150", date: "2024-07-25" },
  { id: 2, patient: "Jane Smith", amount: "$200", date: "2024-07-24" },
  { id: 3, patient: "Emily Johnson", amount: "$175", date: "2024-07-23" },
  { id: 4, patient: "Michael Brown", amount: "$225", date: "2024-07-22" },
  { id: 5, patient: "Sarah Wilson", amount: "$120", date: "2024-07-21" },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export function TherapistPayments() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Card sx={{ p: 3, boxShadow: 5, borderRadius: 3, backgroundColor: "#FFFFFF" }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2C423F", mb: 2 }}>
              Payment Records
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#1F302B" }}>
                    <TableCell sx={{ color: "white" }}>Patient</TableCell>
                    <TableCell sx={{ color: "white" }}>Amount</TableCell>
                    <TableCell sx={{ color: "white" }}>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paymentsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.patient}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={paymentsData.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default TherapistPayments;
