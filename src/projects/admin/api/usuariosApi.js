import axios from "axios";
import {API_URL} from "../../../config/front.env.js";

const usuariosApi = axios.create({
  baseURL: API_URL,
});

usuariosApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${window.localStorage.getItem("token") || ""}`,
  };
  return config;
});

export default usuariosApi;
