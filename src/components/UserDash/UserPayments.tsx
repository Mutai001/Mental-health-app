import { useState } from "react";
import {
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
  CircularProgress,
  Chip,
} from "@mui/material";

const payments = [
  { id: "TXN12345", amount: "$120.00", status: "Completed", date: "2024-07-25" },
  { id: "TXN67890", amount: "$75.50", status: "Pending", date: "2024-07-24" },
  { id: "TXN11223", amount: "$200.00", status: "Failed", date: "2024-07-22" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Pending":
      return "warning";
    case "Failed":
      return "error";
    default:
      return "default";
  }
};

const UserPayments = () => {
  const [loading] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 600,
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
          Payment History
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#6DA14E" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Transaction ID</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Amount</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map(({ id, amount, status, date }) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{amount}</TableCell>
                    <TableCell>
                      <Chip label={status} color={getStatusColor(status)} />
                    </TableCell>
                    <TableCell>{date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default UserPayments;
