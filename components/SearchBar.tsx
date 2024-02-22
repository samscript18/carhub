import { CarImg } from "@/public/asset";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { yearsOfProductionData, fuelsData } from "@/utils/data";
import { useGlobalContext } from "@/context";

const SearchBar = () => {
  const {
    model,
    fuelType,
    year,
    setModel,
    setFuelType,
    setYear,
    handleSubmit,
  } = useGlobalContext();

  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex xs:flex-col sm:flex-row justify-between items-center">
        <div className="relative w-full flex justify-start items-center">
          <SearchManufacturer />
          <div className="relative">
            <input
              type="text"
              placeholder="Tiguan"
              className="xs:w-[100%] sm:w-[25vw] bg-light-white text-sm rounded-r-full xs:px-10 sm:px-20 py-3 outline-none"
              value={model.toLocaleLowerCase()}
              onChange={(event) => setModel(event.target.value)}
            />
            <div className="absolute top-[15%] xs:left-[6%] sm:left-[11%]">
              <Image
                src={CarImg}
                className="w-[25px] h-[25px]"
                alt="car-logo"
              />
            </div>
          </div>
          <SearchButton />
        </div>
        <div className="xs:w-full sm:w-[35%] flex justify-between items-center xs:mt-6 sm:mt-0">
          <select
            name="Fuel"
            id="Fuel"
            className="w-full p-2 mr-6 bg-white border border-gray-100 outline-none rounded-lg shadow-md"
            value={fuelType}
            onChange={(event) => setFuelType(event.target.value)}
          >
            {fuelsData.map(({ title, fuelType }) => {
              return (
                <option key={title} value={fuelType}>
                  {title}
                </option>
              );
            })}
          </select>
          <select
            name="Year"
            id="Year"
            className="w-full p-2 mr-6 bg-white border border-gray-100 outline-none rounded-lg shadow-md"
            value={year.toLocaleLowerCase()}
            onChange={(event) => setYear(event.target.value)}
          >
            {yearsOfProductionData.map(({ title, year }) => {
              return (
                <option key={title} value={year}>
                  {title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
