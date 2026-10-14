import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};
const AuthCard = ({ children }: Props) => {
   return (
      <div className="w-full rounded-xl  px-4 md:px-[40px] xl:px-[100px] relative py-6">
         {children}
      </div>
   );
};

export default AuthCard;
