"use client";

import { CarCard, Loading, SearchBar } from "@/components";
import { CarProps } from "@/utils/types";
import { useState } from "react";

const CarsDetails = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
          <SearchBar setCars={setCars} setIsLoading={setIsLoading} />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center my-20">
            <Loading />
          </div>
        ) : (
          <div>
            {cars ? (
              <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {cars?.map((car, index) => {
                  console.log(car);

                  return <CarCard key={index} {...car} />;
                })}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center my-20">
                <h1 className="text-[28px] leading-[32px] font-bold">
                  Sorry 😥,cars cannot be found!
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default CarsDetails;
