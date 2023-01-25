import { Navigate, Route, Routes } from "react-router-dom";
import { GestorPage } from "../pages/GestorPage";

export const GestorRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GestorPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
