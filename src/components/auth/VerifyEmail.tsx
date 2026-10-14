"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card } from "@nextui-org/react";
import toast from "react-hot-toast";
import { postApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import AuthCard from "./AuthCard";
import Image from "next/image";

const VerifyEmail = () => {
   const searchParams = useSearchParams();
   const [isSuccess, setIsSuccess] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const router = useRouter();

   const token = searchParams.get("token");

   const verifyEmailAndLogin = async () => {
      if (isSuccess) {
         login();
         return;
      }

      if (!token) return toast.error("Access token not found!");

      setIsLoading(true);
      try {
         const res = await postApi({
            url: AuthApi.verifyEmail,
            values: { token },
         });

         if (res.error) throw new Error(res.message);

         setIsSuccess(true);
      } catch (error: any) {
         toast.error(error.message);
      }
      setIsLoading(false);
   };

   const login = () => router.push("/signin");

   return (
      <AuthCard>
         <div className="grid place-items-center">
            <div>
               <h2 className=" text-[32px] md:text-[42px] font-semibold text-blue-500">
                  {isSuccess ? "Verified" : "Verify your email"}
               </h2>
               {isSuccess ? (
                  <p className="text-[14px]  text-black">
                     Thank you! Your email has been successfully verified. You
                     can now log in to your account.
                  </p>
               ) : (
                  <div className="max-w-[450px] pe-2 grid gap-5">
                     <p className="text-[14px]  text-black">
                        To complete the registration process and access your
                        account, please click on the "Verify Email" button
                        below.
                     </p>
                     <p className="text-[14px]  text-black">
                        If you haven't received the verification email, please
                        check your spam folder. If you encounter any issues,
                        feel free to contact our support team.
                     </p>
                  </div>
               )}
               <div className="mt-8 space-y-4">
                  <Button
                     onClick={verifyEmailAndLogin}
                     className="w-full bg-blue-500 text-white"
                     isLoading={isLoading}
                  >
                     {isSuccess ? "Login Now" : "Verify Email"}
                  </Button>
               </div>
            </div>
         </div>
      </AuthCard>
   );
};

export default VerifyEmail;
