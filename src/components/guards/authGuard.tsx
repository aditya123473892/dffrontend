"use client";
import { useAccount } from "@/common/hooks";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import LoadingScreen from "../atoms/LoadingScreen";
import { getSession, isValidToken } from "@/common/utils/jwt";
import axiosInstance from "@/common/utils/axios-instance";
import { useAppDispatch } from "@/common/redux/hooks";
import { authenticate, logout } from "@/common/redux/features/accountSlice";
import { getApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import toast from "react-hot-toast";

type Props = {
   children: ReactNode;
};

const AuthGuard = ({ children }: Props) => {
   const { account } = useAccount();
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(false);
   const dispatch = useAppDispatch();

   useEffect(() => {
      const initialize = async () => {
         setIsLoading(true);
         try {
            const { accessToken } = getSession();
            if (accessToken && isValidToken(accessToken)) {
               axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
               const res = await getApi({ url: AuthApi.getMe });
               if (res.error) throw new Error(res.errorCode);
               dispatch(
                  authenticate({
                     user: res.data,
                     accessToken,
                  })
               );
            } else {
               throw new Error("Session expired!, Please login again");
            }
         } catch (err) {
            dispatch(logout());
            toast.error("Session expired!, Please login again");
         } finally {
            setIsLoading(false);
         }
      };

      if (!isLoading && !account.isInitialized) initialize();
   }, []);

   if (!account.isInitialized) {
      return <LoadingScreen className="h-[100vh]" />;
   }

   if (!account.isAuthenticated) {
      router.push("/signin");
      return <div />;
   }

   return <>{children}</>;
};

export default AuthGuard;
