import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet, Route } from "react-router-dom";

export default function ProtectedRouter() {
  const { isAuth } = useAuthContext();

  return isAuth? <Outlet/> : <Navigate to="/login"/>;  
}
