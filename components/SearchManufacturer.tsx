"use client";

import Image from "next/image";
import carLogo from "../asset/car-logo.svg";
import { manufacturersData } from "@/utils/data";
import { ChangeEventHandler, EventHandler, useState } from "react";
import {
  FilteredManufacturersProps,
  SearchManufacturerProps,
} from "@/utils/types";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [filteredManufacturers, setFilteredManufacturers] = useState<
    Array<FilteredManufacturersProps>
  >([]);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setManufacturer(event.target.value);
    const newManufacturers = manufacturersData.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(manufacturer.toLocaleLowerCase());
    });
    setFilteredManufacturers(newManufacturers);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Volkswagen"
        className="xs:w-[100%] sm:w-[25vw] bg-light-white text-sm rounded-l-full px-20 py-3 outline-none"
        value={manufacturer}
        onChange={handleChange}
      />
      <div className="absolute top-[20%] left-[12%]">
        <Image src={carLogo} className="w-[25px] h-[25px]" alt="car-logo" />
      </div>
    </div>
  );
};
export default SearchManufacturer;
