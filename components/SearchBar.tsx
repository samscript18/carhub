"use client";

import Car from "@/asset/model-icon.png";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { fetchCars } from "@/services/CarApi";
import { SearchBarProps } from "@/utils/types";

const Searchbar = ({ setCars }: SearchBarProps) => {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const { data } = await fetchCars(`?make=${manufacturer}&model=${model}`);
      setCars(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full flex justify-start items-center">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <div className="relative">
          <input
            type="text"
            placeholder="Tiguan"
            className="xs:w-[100%] sm:w-[25vw] bg-light-white text-sm rounded-r-full px-20 py-3 outline-none"
            value={model.toLocaleLowerCase()}
            onChange={(event) => setModel(event.target.value)}
          />
          <div className="absolute top-[15%] left-[11%]">
            <Image src={Car} className="w-[25px] h-[25px]" alt="car-logo" />
          </div>
        </div>
        <SearchButton />
      </div>
    </form>
  );
};
export default Searchbar;
