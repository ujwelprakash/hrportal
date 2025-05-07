// components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("user") === "true";
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
