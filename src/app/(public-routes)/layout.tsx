import HomeFooter from "@/components/home/HomeFooter";
import HomeNavbar from "@/components/home/HomeNavbar";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};
const PublicLayouts = ({ children }: Props) => {
   return (
      <>
         <HomeNavbar />
         <main className="max-w-screen-2xl m-auto xs:px-1 md:px-4">{children}</main>
         <HomeFooter />
      </>
   );
};

export default PublicLayouts;
