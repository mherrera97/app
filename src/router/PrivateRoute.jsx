import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks";
import { Loader } from "../ui/Loader";

export const PrivateRoute = ({ children }) => {
  const { status, checkAuthToken } = useAuthStore();
  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status == "checking") return <Loader />;
  return status == "authenticated" ? children : <Navigate to="auth/login" />;
};
