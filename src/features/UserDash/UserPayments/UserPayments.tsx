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
  Button,
} from "@mui/material";
import { useGetUserPaymentsQuery, useMakePaymentMutation } from "./userPaymentsApi";

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
  const { data: payments = [], isLoading, error } = useGetUserPaymentsQuery();
  const [makePayment, { isLoading: isPaying }] = useMakePaymentMutation();

  const handlePayment = async (amount: number) => {
    try {
      await makePayment({ amount, method: "mpesa" }).unwrap();
      alert("Payment successful!");
    } catch {
      alert("Payment failed!");
    }
  };

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error fetching payments</Typography>;

  return (
    <Card
      sx={{
        maxWidth: 700,
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
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#6DA14E" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Transaction ID</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Amount</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.length > 0 ? (
                payments.map(({ id, amount, status, date }) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>${amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Chip label={status} color={getStatusColor(status)} />
                    </TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>
                      {status === "Pending" && (
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => handlePayment(amount)}
                          disabled={isPaying}
                        >
                          {isPaying ? "Processing..." : "Pay Now"}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} sx={{ textAlign: "center", py: 3, color: "#6DA14E" }}>
                    No Payments Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default UserPayments;