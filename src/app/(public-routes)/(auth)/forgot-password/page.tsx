import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { LockIcon } from "@/components/icons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Forgot password | Dark Fantasy",
   description: "",
};

const ForgotPasswordPage = async () => {
   return (
      <AuthCard>
         <div className="grid md:grid-cols-3 lg:grid-cols-2  place-items-center">
            <div className="col-span-2 lg:col-span-1">
               <div className=" grid place-items-center rounded-xl w-full">
                  <h2 className="text-[32px] md:text-[42px] font-semibold text-blue-500">
                     Reclaim Your Identity
                  </h2>
                 <div>
                 <p className="m-0 sm:w-[370px] xs:w-[270px] md:w-[500px] mt-8"> Welcome to the Forgotten Realms, If you've lost your way and find yourself locked out, fear not. Simply enter your email address below, and we'll guide you back onto your path.</p>
                  <p className="mt-8">Instructions:
                  </p>
                  <p className="m-0 sm:w-[370px] xs:w-[270px]  md:w-[500px]"> 1. Enter the email address associated with your account in the field below.
                  </p>
                  <p className="m-0"> 2. Click on the "Send Reset Link" button.
                  </p>
                  <p className="m-0"> 3. Check your email inbox for a message from us.
                  </p>
                  <p className="m-0"> 4. Follow the instructions in the email to reset your password.
                  </p>
                  <p className="m-0"> 5. Once reset, you'll be ready to explore the realms once more.
                  </p>
                 </div>
                  <Image
                     src="/images/forgotPasswordBanner.svg"
                     width={200}
                     height={100}
                     alt="Login Banner"
                     className="md:hidden"
                  />
                     <div className="font-semibold mt-8	">Email address</div>
                  <ForgotPasswordForm />
               </div>
               <div className="w-full text-center text-black mt-6">
                  <span>  Still don't receive the email ? </span>
                  <Link
                     href="/reset-password"
                     className="underline underline-offset-2 text-blue-500"
                  >
                   Resend Link
                  </Link>
               </div>
            </div>
            <Image
               src="/images/forgotPasswordBanner.svg"
               width={400}
               height={100}
               alt="Login Banner"
               className="md:block hidden"
            />
         </div>
      </AuthCard>
   );
};

export default ForgotPasswordPage;
