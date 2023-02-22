import { Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { GestorRoutes } from "../gestor/routes/GestorRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
      />
      <Route
        exact
        path="/*"
        element={
          <PrivateRoute>
            <GestorRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
