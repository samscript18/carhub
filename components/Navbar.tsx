import Logo from "../asset/logo2.png";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full md:px-12 sm:px-8 xs:px-4 py-6">
        <div className="flex justify-center items-center">
          <div className="w-full">
            <Image
              src={Logo}
              className="sm:w-[148px] sm:h-[22px] xs:w-[118px] xs:h-[18px]"
              alt="logo"
            />
          </div>
          <div className="w-full flex justify-end items-end">
            <CustomButton
              styles={
                "md:text-primary-blue xs:text-white py-[10px] md:bg-white xs:bg-primary-blue min-w-[130px] rounded-full"
              }
              text={"Sign In"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
