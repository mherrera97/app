import axios from "axios";
import { API_URL } from "../config/front.env.js";

const authApi = axios.create({
  // baseURL: API_URL,
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
