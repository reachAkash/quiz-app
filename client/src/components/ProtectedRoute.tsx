import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { currentUser } = useSelector((store: any) => store.user);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
