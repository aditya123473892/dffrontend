import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { LoadingIcon } from "../icons";

type Props = {
   className?: string;
   fontSize?: number;
};

const LoadingWidget = ({ className, fontSize = 44 }: Props) => {
   return (
      <div
         className={twMerge(
            clsx(
               "flex justify-center items-center min-h-[100px] gap-2",
               className
            )
         )}
      >
         <span>Loading...</span>
         <LoadingIcon />
      </div>
   );
};

export default LoadingWidget;
