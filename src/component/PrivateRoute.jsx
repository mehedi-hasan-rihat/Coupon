import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";


export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading){
    return <Loading/>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
}
