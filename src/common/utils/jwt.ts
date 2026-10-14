import { ELocalStorageKey } from "../enums/utils.enum";
import axiosInstance from "./axios-instance";
import { jwtDecode } from "jwt-decode";

export const handleTokenExpired = (exp: number) => {
   let expiredTimer;

   const currentTime = Date.now();

   // Test token expires after 10s
   // const timeLeft = currentTime + 10000 - currentTime; // ~10s
   const timeLeft = exp * 1000 - currentTime;

   clearTimeout(expiredTimer);

   expiredTimer = setTimeout(() => {
      alert("Token expired");

      localStorage.removeItem(ELocalStorageKey.ACCESS_TOKEN);

      window.location.href = "/login";
   }, timeLeft);
};

export const setSession = (accessToken: string | null, user: any) => {
   if (user) {
      localStorage.setItem(ELocalStorageKey.USER, JSON.stringify(user));
   } else {
      localStorage.removeItem(ELocalStorageKey.USER);
   }

   if (accessToken) {
      localStorage.setItem(ELocalStorageKey.ACCESS_TOKEN, accessToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      // This function below will handle when token is expired
      const { exp } = jwtDecode<{ exp: number }>(accessToken); // ~5 days by minimals server

      handleTokenExpired(exp);
   } else {
      localStorage.removeItem(ELocalStorageKey.ACCESS_TOKEN);
      delete axiosInstance.defaults.headers.common.Authorization;
   }
};

export const updateUserSession = (user: any) => {
   if (user) {
      localStorage.setItem(ELocalStorageKey.USER, JSON.stringify(user));
   }
};

export const getSession = (): { user: any; accessToken: string | null } => {
   let user = localStorage.getItem(ELocalStorageKey.USER);
   const accessToken = localStorage.getItem(ELocalStorageKey.ACCESS_TOKEN);

   if (user) {
      user = JSON.parse(user);
   }

   return { user, accessToken };
};

export const isValidToken = (accessToken: string) => {
   if (!accessToken) {
      return false;
   }
   const decoded = jwtDecode<{ exp: number }>(accessToken);

   const currentTime = Date.now() / 1000;

   return decoded.exp > currentTime;
};
