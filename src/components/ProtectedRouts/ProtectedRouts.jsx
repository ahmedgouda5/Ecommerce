import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export function ProtectedRouts({ children }) {
  if (!localStorage.getItem("TokenLokal")) {
    toast.error("Please login to continue");
    return <Navigate to="/Login" />;
  }
  return <>{children}</>;
}
