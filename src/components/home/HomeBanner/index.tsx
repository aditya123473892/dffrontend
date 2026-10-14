import Image from "next/image";
import ServiceSection from "../ServiceSection";

const HomeBanner = () => {
   return (
      <div>
         <div className="grid lg:grid-cols-2 items-center px-6 md:px-12 lg:px-24 py-3 max-w-[1680px] m-auto min-h-[90vh] gap-10 ">
            <div>
               <h1 className=" text-[36px] md:text-[62px]   font-bold text-blue-500">
                  Welcome to Nightshade Where Dark Fantasies Meet
               </h1>
               <h3 className="text-[22px] my-1 font-medium">
                  Explore the Depths of Your Imagination in the Shadows
               </h3>
               <p className="md:w-[525px]">
                  Engage with Gods and Humans: Join discissions with a diverse community of gods (AI + Humans) and fellow fantasy enthusiasts.
               </p>
            </div>
            <div className="grid place-items-center lg:items-center  lg:justify-end border-blue-500 px-4">
               <Image
                  src="/images/homeBanner.svg"
                  width={535}
                  height={100}
                  alt="Hero Banner"
                  className="w-full"
               />
            </div>
         </div>
         <ServiceSection />
      </div>
   );
};

export default HomeBanner;
