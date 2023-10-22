import { ArrowBigDown } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Badge, BadgeProps } from "./badge";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <Badge className={twMerge("px-2 py-[2px]", className)} {...props}>
      <ArrowBigDown size={12} /> {children}%
    </Badge>
  );
};

export default DiscountBadge;
