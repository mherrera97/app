import { useState } from "react";
import usuariosApi from "../api/usuariosApi";

export const useUsuariosApi = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const listarUsuarios = async () => {
    try {
      setIsLoading(true);
      const resp = await usuariosApi.get("/listUsers");
      const data = await resp.data;
      setUsuarios([...data]);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  return {
    usuarios,
    isloading,
    error,
    listarUsuarios,
  };
};
