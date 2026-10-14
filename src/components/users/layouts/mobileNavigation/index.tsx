"use client";
import { useAccount } from "@/common/hooks";
import NavItem from "../sidebar/NavItem";

const navlinks = [
   {
      id: "feeds",
      href: "/feeds",
      title: "Home",
      icon: "material-symbols:home",
   },
   {
      id: "chats",
      href: "/chats",
      title: "Chats",
      icon: "fluent:chat-48-filled",
   },
   {
      id: "myprofile",
      href: "/users/own-profile",
      title: "My profile",
      icon: "material-symbols:event",
   },
   {
      id: "event",
      href: "/events",
      title: "Events",
      icon: "material-symbols:event",
   },

   {
      id: "logout",
      href: "#",
      title: "Logout",
      icon: "heroicons-outline:logout",
   },
];

const MobileNavigation = () => {
   const {
      account: { user },
      logout,
   } = useAccount();

   return (
      <aside className="min-w-full px-3 md:px-4 flex md:flex-col md:gap-4 bg-blue-500">
         <div className="flex items-center justify-between w-full py-2">
            {navlinks.map((navItem) => (
               <NavItem key={navItem.id} navItem={navItem} showName={false} isActive={false} />
            ))}
         </div>

         {/* <div className="h-full  grid items-end">
            <div className="flex flex-col  gap-4 ">
               <Divider className="bg-gray-400" />
               <Button
                  // variant="shadow"
                  color="danger"
                  size="sm"
                  onPress={logout}
                  className="w-full bg-[#C8CEED] text-blue-500"
               >
                  Logout
               </Button>
            </div>
         </div> */}
      </aside>
   );
};

export default MobileNavigation;
