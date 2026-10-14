import { Avatar, Divider } from "@nextui-org/react";
import clsx from "clsx";

type Props = {
   step: Step;
   active: any;
   name: string;
   divider: boolean;
};
const Step = ({ step, active, divider, name }: Props) => {
   return (
      <>
         <div className="flex flex-col items-center  min-w-[110px] text-center">
            <Avatar
               name={name}
               classNames={{
                  base: clsx("bg-orange-600 text-md font-bold text-white", {
                     "bg-neutral-300 text-dark": active !== step.id,
                  }),
               }}
               className={clsx({
                  "bg-neutral-300": active !== step.id,
               })}
            />
            <h2
               className={clsx("text-sm font-medium", {
                  "text-muted font-normal": active !== step.id,
               })}
            >
               {step.title}
            </h2>
         </div>
         {divider && (
            <div className="w-full -mt-4">
               <Divider />
            </div>
         )}
      </>
   );
};

export default Step;
