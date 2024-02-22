import Image from "next/image";
import { carLogo } from "@/public/asset";
import { useGlobalContext } from "@/context";

const SearchManufacturer = () => {
  const { manufacturer, handleChange } = useGlobalContext();

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Volkswagen"
        className="xs:w-[100%] sm:w-[25vw] bg-light-white text-sm rounded-l-full xs:px-10 sm:px-20 py-3 outline-none"
        value={manufacturer.toLocaleLowerCase()}
        onChange={handleChange}
      />
      <div className="absolute top-[20%] xs:left-[7%] sm:left-[12%]">
        <Image src={carLogo} className="w-[25px] h-[25px]" alt="car-logo" />
      </div>
    </div>
  );
};
export default SearchManufacturer;
