"use client";
import { Button, Divider } from "@nextui-org/react";
import NavItem from "./NavItem";
import { useAccount } from "@/common/hooks";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

const navlinks = [
   {
      id: "/admin/dashboard",
      href: "/admin/dashboard",
      title: "Dashboard",
      icon: "material-symbols:home",
   },
   {
      id: "/admin/chats",
      href: "/admin/chats",
      title: "Chats",
      icon: "fluent:chat-48-filled",
   },
   {
      id: "/admin/posts",
      href: "/admin/posts",
      title: "Posts",
      icon: "material-symbols:event",
   },
   {
      id: "/admin/users",
      href: "/admin/users",
      title: "Users",
      icon: "material-symbols:person",
   },
   {
      id: "/admin/mangers",
      href: "/admin/mangers",
      title: "Managers",
      icon: "material-symbols:group",
   },
   {
      id: "/admin/events",
      href: "/admin/events",
      title: "Events",
      icon: "material-symbols:event",
   },
   {
      id: "/admin/payments",
      href: "/admin/payments",
      title: "Payments",
      icon: "material-symbols:money",
   },
   {
      id: "/admin/subscription",
      href: "/admin/subscription",
      title: "Subscription",
      icon: "material-symbols:attach-money",
   },
   {
      id: "/admin/coupon",
      href: "/admin/coupon",
      title: "Coupon",
      icon: "material-symbols:confirmation-number",
   },
];

const AdminSidebar = () => {
   const {
      account: { user },
      logout,
   } = useAccount();
   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
   const pathname = usePathname();

   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   };

   return (
      <nav
         className={`sticky top-[76px] left-0 z-50 transition-all duration-300 bg-blue-500 border-r border-neutral-300 p-4 flex flex-col gap-4 ${isSidebarOpen ? "xl:w-[250px]" : "xs:w-[80px]"
            }  `}
         style={{ height: "calc(100vh - 76px)" }}
      >
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
               <NavItem key={navItem.id} showName={isSidebarOpen} 
                  isActive={pathname.includes(navItem.href)} navItem={navItem} />
            ))}
         </div>

         <div className="h-full grid items-end">
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

export default AdminSidebar;
