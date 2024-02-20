import HeroImg from "@/asset/hero.png";
import CustomButton from "../components/CustomButton";
import Image from "next/image";

const Header = () => {
  return (
    <header className="xs:overflow-x-hidden md:overflow-x-visible">
      <div className="w-full md:px-12 sm:px-8 xs:px-4 ">
        <div className="flex md:flex-row xs:flex-col justify-start items-center">
          <div className="md:max-w-[500px] pt-6 mr-12">
            <h1 className="sm:text-[55px] xs:text-[45px] font-bold font-inter">
              Find, book, or rent a car —quick and super easy!
            </h1>

            <p className="sm:text-[27px] xs:text-lg text-black-100 font-light mt-5 mb-12">
              Streamline your car rental experience with our effortless booking
              process.
            </p>
            <CustomButton
              styles={
                "text-white py-[10px] bg-primary-blue font-light min-w-[130px] rounded-full"
              }
              text={"Explore Cars"}
            />
          </div>
          <div className="relative flex-1 md:mt-0 xs:mt-16">
            <Image src={HeroImg} className="max-w-full" alt="Hero-Img" />
            <div className="absolute md:-top-[39%] md:-right-[60%] xs:-top-[20%] xs:-right-[10%] bg-heroBg bg-repeat-round md:w-[80vw] md:h-[590px] xs:w-full xs:h-[253px] -z-10" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
