"use client";
import { Button, Divider } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount } from "@/common/hooks";
import NavItem from "./NavItem";
import { Icon } from "@iconify/react";

const navlinks = [
   {
      id: "feeds",
      href: "/feeds",
      title: "Home",
      icon: "material-symbols:home",
   },
   {
      id: "search",
      href: "/search",
      title: "Search",
      icon: "circum:search",
   },
   {
      id: "chats",
      href: "/chats",
      title: "Chats",
      icon: "fluent:chat-48-filled",
   },
   {
      id: "event",
      href: "/events",
      title: "Events",
      icon: "material-symbols:event",
   },
   {
      id: "myprofile",
      href: "/users/own-profile",
      title: "My profile",
      icon: "material-symbols:person",
   },
   {
      id: "bookmark",
      href: "/bookmark",
      title: "Bookmark",
      icon: "material-symbols:bookmark",
   },
   {
      id: "image_vedio",
      href: "/image_vedio",
      title: "Posts",
      icon: "material-symbols:post",
   },
   {
      id: "coupon",
      href: "/coupon",
      title: "Coupon",
      icon: "material-symbols:confirmation-number",
   },
];

const UserDashboardSidebar = () => {
   const {
      account: { user },
      logout,
   } = useAccount();
   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to toggle sidebar open/close
   const pathname = usePathname(); // Get current pathname for active link highlighting
   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   return (
      <nav
         className={`sticky top-[66px] left-0 z-50 transition-all duration-300 bg-blue-500 justify-between border-r border-neutral-300 p-4 flex flex-col gap-4 ${isSidebarOpen ? "w-[250px]" : "w-[80px]"
            } `}
         style={{ height: "calc(100vh - 89px)" }}
      >
         <div>
         <button
            className="sm:hidden text-white"
            onClick={toggleSidebar}
         >
            {isSidebarOpen ? "Close" : "Open"} Sidebar
         </button>

         <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 text-2xl font-black"
         >

         </Link>
         <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white mb-4 self-start md:self-center"
         >
            <span className="text-xl">
               <Icon icon={isSidebarOpen ? "material-symbols:close" : "material-symbols:menu"} className="text-xl" />
            </span>
         </button>
         <div className="flex flex-col gap-4">
            {navlinks.map((navItem) => (
               <NavItem key={navItem.id} showName={isSidebarOpen} // Show name if sidebar is open
                  isActive={pathname.includes(navItem.href)} navItem={navItem} />
            ))}
         </div>
         </div>

         <div className="h-auto grid items-end">
            <div className="flex flex-col gap-4 ">
               <Divider className="bg-gray-400" />
               <Button
                  color="danger"
                  size="sm"
                  onPress={logout}
                  className={` logoutbutton bg-[#C8CEED] text-blue-500 font-semibold ${!isSidebarOpen && "justify-center"}`}               >
                  {isSidebarOpen ? "Logout" : <Icon icon="material-symbols:logout" />}</Button>
            </div>
         </div>
      </nav>
   );
};

export default UserDashboardSidebar;
