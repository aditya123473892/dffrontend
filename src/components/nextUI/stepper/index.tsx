import { Card, CardBody } from "@nextui-org/react";
import Step from "./Step";

type Props = {
   steps: Step[];
   active: any;
   onChange?: (id: any) => void;
};

const Stepper = ({ active, steps }: Props) => {
   return (
      <Card>
         <CardBody>
            <div className="flex justify-between items-center">
               {steps.map((step, index: number) => {
                  let name: any = `${index + 1}`;
                  let divider = index !== steps.length - 1;
                  return (
                     <Step
                        name={name}
                        divider={divider}
                        step={step}
                        active={active}
                        key={name}
                     />
                  );
               })}
            </div>
         </CardBody>
      </Card>
   );
};

export default Stepper;
