import axios from "axios";

const authApi = axios.create({
  // baseURL: "https://181.129.63.226:85/api/v1",
  baseURL: "https://gestor.clinicasomer.com/api/v1",
  //   httpsAgent: new https.Agent({
  //     rejectUnauthorized: false,
  //   }),
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
