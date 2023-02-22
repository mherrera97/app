import { Navigate, Route, Routes } from "react-router-dom";
import { GestorPage } from "../pages/GestorPage";
import { AdminRouter } from "../../projects";
import { Notfound } from "../../ui/Notfound";

export const GestorRoutes = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<GestorPage />} />
      <Route exact path="/admin/*" element={<AdminRouter />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};