import HomeBanner from "@/components/home/HomeBanner";
import HomeFooter from "@/components/home/HomeFooter";
import HomeNavbar from "@/components/home/HomeNavbar";

const HomePage = async () => {
   require('dotenv').config();

   return (
      <>
         <div className="overflow-x-hidden bg-gray-50 min-h-[100vh]">
            <HomeNavbar />
            <HomeBanner />
         </div>
         <HomeFooter />
      </>
   );
};

export default HomePage;
