import { CustomButtonProps } from "@/utils/types";

const CustomButton = ({ text, styles }: CustomButtonProps) => {
  return <button className={styles}>{text}</button>;
};
export default CustomButton;
