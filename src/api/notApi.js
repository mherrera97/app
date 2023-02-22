import axios from "axios";

const notApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
// interceptors
notApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${window.localStorage.getItem("token") || ""}`,
  };
  return config;
});
export default notApi;
