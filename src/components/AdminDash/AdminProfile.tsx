import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const AdminProfile: React.FC = () => {
  // Dummy admin data since store is removed
  const adminData = {
    profilePicture: "/default-avatar.png",
    full_name: "Admin",
    role: "Administrator",
    email: "admin@example.com",
    contact_phone: "N/A",
    address: "N/A",
    created_at: new Date().toISOString(),
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-lg p-4">
        <CardHeader
          avatar={
            <Avatar
              src={adminData.profilePicture}
              alt="Admin Avatar"
              sx={{ width: 80, height: 80 }}
            />
          }
          title={
            <Typography variant="h6" component="div">
              {adminData.full_name}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="textSecondary">
              {adminData.role}
            </Typography>
          }
        />
        <CardContent>
          <div className="space-y-2">
            <Typography>
              <strong>Email:</strong> {adminData.email}
            </Typography>
            <Typography>
              <strong>Phone:</strong> {adminData.contact_phone}
            </Typography>
            <Typography>
              <strong>Address:</strong> {adminData.address}
            </Typography>
            <Typography>
              <strong>Joined:</strong>{" "}
              {new Date(adminData.created_at).toLocaleDateString()}
            </Typography>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outlined" color="primary">
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProfile;
