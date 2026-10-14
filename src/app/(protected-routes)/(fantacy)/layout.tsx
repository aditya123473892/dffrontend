import AuthGuard from "@/components/guards/authGuard";
import MobileNavigation from "@/components/users/layouts/mobileNavigation";
import UserDashboardSidebar from "@/components/users/layouts/sidebar";

export default function UserLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <AuthGuard>
         <main className="flex flex-col md:flex-row">
            <div className="hidden md:flex">
               <UserDashboardSidebar />
            </div>

            <div className="   w-full bg-[#F6F6F6] md:w-[calc(100%-250px)]">{children}</div>
            <div className="md:hidden fixed bottom-0 bg-purple-400 w-full">
               <MobileNavigation />
            </div>
         </main>
      </AuthGuard>
   );
}
