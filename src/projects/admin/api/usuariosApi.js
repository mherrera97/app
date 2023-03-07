import axios from "axios";

const usuariosApi = axios.create({
  baseURL: "https://gestor.clinicasomer.com/api/v1/usuarios/",
});

usuariosApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${window.localStorage.getItem("token") || ""}`,
  };
  return config;
});

export default usuariosApi;
