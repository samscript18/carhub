import { CustomButtonProps } from "@/utils/types";
import Image from "next/image";

const CustomButton = ({ text, styles, rightIcon }: CustomButtonProps) => {
  return (
    <button className={styles}>
      <div className={rightIcon ? "flex justify-center items-center" : ""}>
        <span className="w-full">{text}</span>
        {rightIcon && (
          <div className="relative w-6 h-6 mr-8">
            <Image
              src={rightIcon}
              alt="arrow_left"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </button>
  );
};
export default CustomButton;
