import { Routes, Route } from "react-router-dom";
import { Admin } from "../Admin";
import { Users } from "../pages";
import { Notfound } from "../../../ui/Notfound";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Admin />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};
