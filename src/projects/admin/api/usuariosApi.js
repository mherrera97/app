import axios from "axios";

const usuariosApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "usuarios",
});

usuariosApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${window.localStorage.getItem("token") || ""}`,
  };
  return config;
});

export default usuariosApi;
