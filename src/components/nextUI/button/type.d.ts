type Props = {
   className?: string;
   endContent?: ReactNode;
   onPress?: any;
   children: ReactNode;
   size?: "sm" | "md" | "lg";
   type?: "submit" | "button";
   isLoading?: boolean;
   as?: any;
   href?: string;
};

type Variant =
   | "solid"
   | "bordered"
   | "light"
   | "flat"
   | "faded"
   | "shadow"
   | "ghost";
