import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../Context/Context";


export default function ProutectedRoute({ children }) {
 const {token}=useContext(userContext)
  const user=false;
  if (token) {
    return children;
  } else {
    return <Navigate to="/auth/Login" />;
  }
}
