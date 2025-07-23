import { Navigate } from "react-router-dom";

export function ProtectedRouts({ children }) {
  if (!localStorage.getItem("TokenLokal")) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}
