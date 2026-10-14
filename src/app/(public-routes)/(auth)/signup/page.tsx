import AuthCard from "@/components/auth/AuthCard";
import Signup from "@/components/auth/Signup";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Sign Up | Dark Fantasy",
   description: "",
};

const SignupPage = async () => {
   return (
      <AuthCard>
         <div className="grid md:grid-cols-2 lg:grid-cols-2  place-items-center">
            <div className="col-span-2 lg:col-span-1">
               <Signup />
               <div className="w-full text-center col-span-2">
                  Already have an account?{" "}
                  <Link
                     href="/signin"
                     className="underline underline-offset-2 text-blue-500"
                  >
                     Signin
                  </Link>
               </div>
            </div>

            <Image
               src="/images/signUPBanner.svg"
               width={400}
               height={100}
               alt="Sign up Banner"
               className="hidden lg:block "
            />
         </div>
      </AuthCard>
   );
};

export default SignupPage;
