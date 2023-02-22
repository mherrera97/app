import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks";
import { Loader } from "../ui/Loader";

export const PublicRoute = ({ children }) => {
  const { status } = useAuthStore();
  if (status == "checking") return <Loader />;
  return status == "not-authenticated" ? children : <Navigate to="/" />;
};
