import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f7f7f7",
        textAlign: "center",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "#d32f2f" }} />
      <Typography variant="h2" sx={{ fontWeight: "bold", color: "#333", mt: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ color: "#666", mb: 3 }}>
        Oops! Page not found.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: "#6DA14E",
          color: "white",
          textTransform: "none",
          fontSize: "1rem",
          ":hover": { backgroundColor: "#19e042" },
        }}
      >
        Go Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
