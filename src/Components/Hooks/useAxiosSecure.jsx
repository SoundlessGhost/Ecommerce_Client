import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
const useAxiosSecure = () => {
  //
  const { logout } = useAuth()
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:9000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [axiosSecure, navigate, logout]);

  return [axiosSecure];
};

export default useAxiosSecure;
