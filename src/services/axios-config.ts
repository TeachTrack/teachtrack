import axios, { AxiosInstance } from "axios";

export const baseURL = import.meta.env.MODE === "development" ? import.meta.env.VITE_DEV_BASE_URL : import.meta.env.VITE_PROD_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

export default axiosInstance;

export const axiosInstanceWithoutToken: AxiosInstance = axios.create({
  baseURL,
});
