import axios from "axios";

//export const baseURL = "http://localhost:3007/bst/v1";
// export const baseURL = "https://bst-refer-backend.onrender.com/bst/v1"
export const baseURL = "https://backend.babtechrp.com/bst/v1";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("BST_access_Token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("BST_refresh_Token");
      try {
        const response = await axios.post("/auth/refresh-token", {
          token: refreshToken,
        });
        const newAccessToken = response.data.data.accessToken;
        localStorage.setItem("BST_access_Token", newAccessToken);
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;
        return axiosClient(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
