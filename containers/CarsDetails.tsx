"use client";

import {
  CarCard,
  Loading,
  SearchBar,
  CarDetails,
  CustomButton,
} from "@/components";
import { CarProps } from "@/utils/types";
import { useGlobalContext } from "@/context";
import { useEffect, useState } from "react";

const CarsDetails = () => {
  const { cars, isLoading, isModalOpen } = useGlobalContext();
  const [carsData, setCarsData] = useState<CarProps[]>([]);

  useEffect(() => {
    setCarsData(cars.slice(0, 15));
  }, [cars]);

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
          <SearchBar />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center my-20">
            <Loading />
          </div>
        ) : (
          <div>
            {cars.length > 0 ? (
              <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {carsData?.map((car, index) => {
                  return <CarCard key={index} car={car} />;
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
        {carsData.length > 15 ? (
          <div className="flex justify-center items-center mt-8">
            <CustomButton
              text="Show Less"
              styles="text-white py-[10px] bg-primary-blue font-light min-w-[130px] rounded-full outline-none"
              handleClick={() => setCarsData(cars.slice(0, 15))}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center mt-8">
            <CustomButton
              text="Show More"
              styles="text-white py-[10px] bg-primary-blue font-light min-w-[130px] rounded-full outline-none"
              handleClick={() => setCarsData(cars.slice(0, 30))}
            />
          </div>
        )}
        {isModalOpen && <CarDetails />}
      </div>
    </section>
  );
};
export default CarsDetails;
