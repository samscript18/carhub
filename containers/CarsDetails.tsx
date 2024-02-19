"use client";

import { CarCard, SearchBar } from "@/components";
import { CarProps } from "@/utils/types";
import { useState } from "react";

const CarsDetails = () => {
  const [cars, setCars] = useState<Array<CarProps> | undefined>();

  return (
    <section className="my-16">
      <div className="w-full md:px-12 sm:px-8 xs:px-4">
        <div className="w-full">
          <h1 className="sm:text-[38px] xs:text-[30px] font-bold ">
            Car Catalogue
          </h1>
          <h3 className="text-black-100 text-base font-light">
            Explore the cars you might like
          </h3>
        </div>
        <div className="w-full my-10">
          <SearchBar setCars={setCars} />
        </div>
        <div className="w-full grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {cars?.map((car, index) => {
            return <CarCard key={index} {...car} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default CarsDetails;
