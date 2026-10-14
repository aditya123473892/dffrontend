"use client";
import { useEffect } from "react";
import { useAccount } from "@/common/hooks";
import { useRouter } from "next/navigation";
import { postApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import toast from "react-hot-toast";
import LoginForm from "./LoginForm";
import { loginRedirectUrl } from "@/common/utils/login-redirect-url";
import Image from "next/image";

const Signin = () => {
   const router = useRouter();
   const { authenticate } = useAccount();
   const { account } = useAccount();

   // useEffect(() => {
   //    if (account.user && account.isAuthenticated)
   //       router.push(loginRedirectUrl(account.user.roles[0], account.user));
   // }, [account]);

   const handleLogin = async (values: any) => {
      // Hit loign API here
      const res = await postApi({
         url: AuthApi.login,
         values: { ...values, role: parseInt(values.role) },
      });

      if (res.error) throw new Error(res.message);

      const { user, accessToken } = res.data;

      authenticate({ user, accessToken });
      toast.success("Logged In");

      // Redirect based on role
      router.push(loginRedirectUrl(user.roles[0], user));
   };

   return (
      <div className="grid place-items-center gap-[32px] ">
         <div>
            <h2 className="text-[32px] md:text-[42px] font-semibold text-blue-500">
               Welcome back!
            </h2>
            <p className="text-[16px]  text-black">
               Enter your Credentials to access your account
            </p>
         </div>
         <Image
            src="/images/login_banner.svg"
            width={175}
            height={100}
            alt="Login Banner"
            className="md:hidden"
            style={{ width: "auto", height: "auto" }}
            priority
         />
         <LoginForm onSubmit={handleLogin} />
      </div>
   );
};

export default Signin;
