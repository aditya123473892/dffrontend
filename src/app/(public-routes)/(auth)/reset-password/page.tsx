// import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import AuthCard from "@/components/auth/AuthCard";
import { LockIcon } from "@/components/icons";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ResetPasswordForm = dynamic(
   () => import("../../../../components/auth/ResetPasswordForm"),
   {
      loading: () => <p>Loading...</p>,
   }
);

export const metadata: Metadata = {
   title: "Reset password | Dark Fantasy",
   description: "",
};

const ResetPasswordPage = async () => {
   return (
      <AuthCard>
         {/* <div className="rounded-xl w-full flex flex-col gap-10">
            <div>
               <h2 className="text-[1.68rem] md:text-[1.875rem] font-semibold">
                  Reset Password
               </h2>
               <p className="text-[1rem]">Please enter your new password</p>
            </div>

            <ResetPasswordForm />
         </div>
         <div className="w-full pt-4 text-center ">
            <Link href="/signin" className="underline underline-offset-2">
               login here
            </Link>
         </div> */}
         <div className="grid md:grid-cols-3 lg:grid-cols-2  place-items-center">
            <div className="col-span-2 lg:col-span-1">
               <div className=" grid place-items-center rounded-xl w-full space-y-[32px]">
                  {/* <div>
                     <h2 className="text-[28px] md:text-[42px] font-semibold text-blue-500">
                     Password
                     </h2>
                     <p className="text-[18px] font-semibold text-black">
                     Confirm Password
                     </p>
                  </div> */}
                  <Image
                     src="/images/setPasswordBanner.svg"
                     width={200}
                     height={100}
                     alt="Login Banner"
                     className="md:hidden"
                  />
                  <ResetPasswordForm />
               </div>
               <div className="w-full text-center text-black">
                  <Link
                     href="/signin"
                     className="underline underline-offset-2 text-blue-500"
                  >
                     Login here
                  </Link>
               </div>
            </div>
            <Image
               src="/images/setPasswordBanner.svg"
               width={300}
               height={100}
               alt="Login Banner"
               className="md:block hidden"
            />
         </div>
      </AuthCard>
   );
};

export default ResetPasswordPage;
