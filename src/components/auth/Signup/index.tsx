"use client";
import { useEffect, useState } from "react";
import { useAccount } from "@/common/hooks";
import { useRouter } from "next/navigation";
import { postApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import toast from "react-hot-toast";
import SignupForm from "./SignupForm";
import { ERole } from "@/common/enums/role.enum";
import Image from "next/image";

const Signup = () => {
   const router = useRouter();

   const [isSuccess, setIsSuccess] = useState(false);

   const handleSignup = async (values: any) => {
      // Hit signup API here
      console.log(values);
      console.log({ ...values, roles: [ERole.USER] });

      const res = await postApi({
         url: AuthApi.signup,
         values: { ...values, roles: [ERole.USER] },
      });

      if (res.error) throw new Error(res.message);

      toast.success(res.message);
      setIsSuccess(true);
   };

   if (isSuccess)
      return (
         <div className="bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col gap-3">
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Verify your email
               </h2>
               <p className="mt-2 text-center text-sm text-muted">
                  To complete the registration process and access your account,
                  please check your email inbox for a verification message.
                  Click on the "Verify Email" button in the email to verify your
                  account.
               </p>
               <p className="mt-2 text-center text-sm text-muted">
                  If you haven't received the verification email, please check
                  your spam folder. If you encounter any issues, feel free to
                  contact our support team.
               </p>
            </div>
         </div>
      );

   return (
      <div className="grid  gap-[32px]  md:px-16 xl:px-24 ">
         <div>
            <h2 className=" text-[32px] md:text-[42px] font-semibold text-blue-500">
               Get Started Now
            </h2>
            <p className="text-[16px] text-black">
               Create you account and start chatting...
            </p>
         </div>

         <SignupForm onSubmit={handleSignup} />
      </div>
   );
};

export default Signup;
