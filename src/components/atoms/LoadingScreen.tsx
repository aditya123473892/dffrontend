import { Logo } from "@/components/icons";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
   className?: string;
   width?: number;
   height?: number;
};
export default function LoadingScreen({ className, ...rest }: Props) {
   return (
      <div
         className={twMerge(
            clsx("h-[90vh] w-full flex justify-center items-center", className)
         )}
      >
         <Logo className="animate-ping" {...rest} />
      </div>
   );
}
