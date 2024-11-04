import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth from AuthContext

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Get the current user from the context
  const location = useLocation(); // Location hook to get the current path

  if (!user) {
    // Redirect to the login page if there is no user logged in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // Render children if the user is logged in
};

export default PrivateRoute;
