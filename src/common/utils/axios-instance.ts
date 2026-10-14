import axios from "axios";
import config from "./config";
import { ELocalStorageKey } from "../enums/utils.enum";

const axiosInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// if (localStorage.getItem(ELocalStorageKey.ACCESS_TOKEN)) {
//    const accessToken = localStorage.getItem(ELocalStorageKey.ACCESS_TOKEN);
//    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
// }

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response);
   },
   (error) => {
      if (error.response && error.response.status === 401) {
         window.location.href = "/logout";
      }
      //   return error;
      return Promise.reject(error);
   }
);

export default axiosInstance;
