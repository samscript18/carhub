import { CustomButtonProps } from "@/utils/types";
import Image from "next/image";

const CustomButton = ({ text, styles, rightIcon }: CustomButtonProps) => {
  return (
    <button className={styles}>
      {text}
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
export default CustomButton;
