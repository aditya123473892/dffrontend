import React from "react";
interface IProps {
   width?: number;
   height?: number;
   active?: boolean;
}

const StarIcon = ({ width, height, active }: IProps) => {
   const fill = active ? "#FFD700" : "#C6C6C6";

   return (
      <svg
         width="20"
         height="19"
         viewBox="0 0 20 19"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            id="Star 1"
            d="M10 0.375L12.2451 7.28483H19.5106L13.6327 11.5553L15.8779 18.4652L10 14.1947L4.12215 18.4652L6.36729 11.5553L0.489435 7.28483H7.75486L10 0.375Z"
            fill={fill}
         />
      </svg>
   );
};

export default StarIcon;
