interface IProps {
   width?: number;
   heigth?: number;
   color?: string;
}

const ProgressIcon = ({ width, heigth, color }: IProps) => {
   return (
      <svg
         width={width}
         height={heigth}
         viewBox="0 0 11 11"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <circle cx="5.5" cy="5.5" r="4.5" stroke={color ? color : "#327EAA"} />
         <path
            d="M0.5 5.5H10.5V5.5C10.5 8.26142 8.26142 10.5 5.5 10.5V10.5C2.73858 10.5 0.5 8.26142 0.5 5.5V5.5Z"
            fill={color ? color : "#327EAA"}
         />
      </svg>
   );
};

export default ProgressIcon;
