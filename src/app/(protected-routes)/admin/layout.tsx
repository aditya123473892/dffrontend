import MobileNavigation from "@/components/admin/layout/mobileNavigation";
import AdminNavbar from "@/components/admin/layout/navbar";
import AdminSidebar from "@/components/admin/layout/sidebar";
import AuthGuard from "@/components/guards/authGuard";

export default function AdminDashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <AuthGuard>
         <main className="flex">
            <div className="hidden lg:flex">
               <AdminSidebar />
            </div>

            <div className="flex flex-col  w-full">
               <AdminNavbar />
               <div className="overflow-auto w-full bg-[#fffefc]  md:rounded-ss-[35px] ">
                  {children}
               </div>
               <div className="lg:hidden fixed bottom-0 bg-purple-400 w-full">
               <MobileNavigation />
            </div>
            </div>
         </main>
      </AuthGuard>
   );
}
