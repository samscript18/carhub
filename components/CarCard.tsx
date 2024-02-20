import CustomButton from "./CustomButton";
import Image from "next/image";
import { CarCardProps } from "@/utils/types";
import { calculateCarRent } from "@/utils/data";
import Car from "@/asset/hero.png";
import tireImg from "@/asset/tire.svg";
import steeringImg from "@/asset/steering-wheel.svg";
import gasImg from "@/asset/gas.svg";
import arrowImg from "@/asset/right-arrow.svg";

const CarCard = ({
  model,
  make,
  transmission,
  year,
  drive,
  city_mpg,
}: CarCardProps) => {
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="w-full h-auto p-4 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-2xl duration-300">
      <h2 className="text-[22px] leading-[26px] font-bold capitalize">
        {make} {model}
      </h2>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={Car}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="group relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={steeringImg}
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={tireImg} width={20} height={20} alt="seat" />
            <p className="text-[14px] leading-[17px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={gasImg} width={20} height={20} alt="seat" />
            <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton
            text="View More"
            styles="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            rightIcon={arrowImg}
            // handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};
export default CarCard;
