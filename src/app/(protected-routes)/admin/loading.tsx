import { Logo } from "@/components/icons";

export default function Loading() {
   return (
      <div className="h-[90vh] w-full flex justify-center items-center">
         <Logo className="animate-ping" />
      </div>
   );
}
