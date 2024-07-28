import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.API_ENDPOINT,
});

axiosInstance.interceptors.request.use((config) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access")?.value;

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export default axiosInstance;
