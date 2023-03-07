import axios from "axios";

const authApi = axios.create({
  baseURL: "https://gestor.clinicasomer.com/api/v1",
});
// interceptors
authApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${window.localStorage.getItem("token") || ""}`,
  };
  return config;
});
export default authApi;
