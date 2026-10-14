interface IProps {
   width?: number;
   height?: number;
}
const SmileActiveIcon = ({ width, height }: IProps) => {
   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 5 5"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <circle cx="2.5" cy="2.5" r="2.5" fill="#418040" />
      </svg>
   );
};

export default SmileActiveIcon;
