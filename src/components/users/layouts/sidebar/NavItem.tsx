"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import clsx from "clsx";

type Props = {
   navItem: {
      href: string;
      title: string;
      icon: string;
   };
   showName: boolean;
   isActive: boolean;
};

const NavItem = ({ navItem: { href, title, icon }, showName, isActive }: Props) => {
   return (
      <Link href={href}>
         <div
            className={clsx(
               "px-2 py-1 text-white flex items-center rounded-md gap-2 hover:bg-[#d1d9ff] transition-colors duration-300",
               {
                  "bg-[#C8CEED] text-blue-500": isActive,
               }
            )}
         >
            <span className="bg-purple-400 rounded-full grid place-items-center p-1">
               <Icon icon={icon} className="text-xl" />
            </span>

            {/* Conditionally render the title */}
            {showName && (
               <p className={` ${isActive ? 'text-blue-500 font-semibold' : ''}`}>
                  {title}
               </p>
            )}
         </div>
      </Link>
   );
};

export default NavItem;
