import { Button } from "@nextui-org/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const ContainedBtn = (props: Props) => {
   return (
      <Button
         {...props}
         className={twMerge(
            clsx(
               "bg-orange-600 items-center border border-orange-600 rounded-full text-white font-semibold",
               props.className
            )
         )}
      >
         {props.children}
      </Button>
   );
};

export default ContainedBtn;
