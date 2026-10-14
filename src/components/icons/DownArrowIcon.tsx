interface IProps {
   width?: number;
   height?: number;
   active?: boolean;
   color?: string;
}

export default function DownArrowIcon({
   active = false,
   width = 24,
   height = 24,
   color,
}: IProps) {
   const fill = color ? color : active ? "#262626" : "#999999";

   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z"
            fill={fill}
         />
      </svg>
   );
}
