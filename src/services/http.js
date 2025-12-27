import axios from "axios";
import { store } from "../app/store";
import { setLogout } from "../features/auth/store/authSlice";
const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data.status === 401) {
      store.dispatch(setLogout());

      window.location.href = "/login";

      alert("Sesi Anda telah berakhir. Silakan login kembali.");
    }
    return Promise.reject(error);
  }
);
export { http };
