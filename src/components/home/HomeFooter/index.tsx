import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeFooter = () => {
   return (
      <section className=" bg-blue-500">
         <div className="text-black items-center px-6 md:px-12 lg:px-24 py-3 max-w-[1680px] m-auto space-y-5">
            <Link
               href="/"
               className="flex cursor-pointer items-center gap-2 text-2xl font-black"
            >
               <Image
                  src={"/images/logo.png"}
                  width={260}
                  height={31}
                  alt="Logo"
                  className="py-2"
                  style={{ width: "auto", height: "auto" }}
               />
               {/* <span className="grid items-center ">
                  <span className=" text-[30px] text-white">Dark</span>
                  <span className=" text-[22px]"> Fantasy</span>
               </span> */}
            </Link>
            <Divider className=" bg-white" />
            {/* <div  className="text-white">
               <p>No :- <span>8970122133</span></p>
               <p>Email :- <span>info@darkfantasy.club</span></p>
               <p>Address :- <span>Sy No. 64, No. 137/1, 147/3, 3rd Stage, 7th Block, Allanahalli, Mysuru</span></p>
               <p>Name :- <span>Cariappa</span></p>
               <p>Company :- <span>Dark Fantasy</span></p>

            </div> */}
            <div className="text-white justify-between flex">
               <div>
                  <p> FAQs</p>
                  <Link href={"/aboutus"}>
                  <p>
                  About Us
                  </p>
                  </Link>
                  <Link href={"/refundpolicy"}>
                  <p>
                  Refund Policy
                  </p>
                  </Link>
                  <Link href={"/privacy-policy"}>
                     <p>privacy-policy</p>
                  </Link>
               </div>
               <div>
                  <p>
                     E-mail Support System
                  </p>
                  <Link href={"/contactus"}>
                     <p>Contact Form</p>
                     </Link>
                  <Link href={"/terms"}>
                     <p>Terms & Condition</p>
                  </Link>
               </div>


            </div>
           
            <div>
               <p className="text-center text-white">
                  © {new Date().getFullYear()} copy writes

                  <Link href="/">
                     <span className="font-semibold text-white pointer ml-1 ">
                        Dark
                     </span>
                     <span className="font-semibold pointer"> Fantasy</span>
                  </Link>{" "}
                  | All right reserved.<Link href={"/terms"}></Link>
               </p>
            </div>
         </div>
      </section>
   );
};

export default HomeFooter;
