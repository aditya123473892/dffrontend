import GuestGuard from "@/components/guards/guestGuard";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};
const AuthLayout = ({ children }: Props) => {
   return (
      <GuestGuard>
         <div className="min-h-[90vh] grid place-items-center">{children}</div>
      </GuestGuard>
   );
};

export default AuthLayout;
