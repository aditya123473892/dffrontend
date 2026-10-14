"use client";
import { useAccount } from "@/common/hooks";
import NavItem from "../sidebar/NavItem";

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
      icon: "material-symbols:",
   },
   {
      id: "/admin/coupon",
      href: "/admin/coupon",
      title: "Coupon",
      icon: "material-symbols:offer",
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
