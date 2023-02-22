import axios from "axios";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
