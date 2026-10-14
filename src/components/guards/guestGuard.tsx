"use client";
import { useAccount } from "@/common/hooks";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import LoadingScreen from "../atoms/LoadingScreen";

type Props = {
   children: ReactNode;
};

const GuestGuard = ({ children }: Props) => {
   const { account } = useAccount();
   const router = useRouter();

   // if (!account.isInitialized) {
   //    return <LoadingScreen className="h-[100vh]" />;
   // }

   // if (!account.isAuthenticated) {
   //    return <>{children}</>;
   // }

   // router.push("/feeds");
   // return <div />;

   return <>{children}</>;
};

export default GuestGuard;
