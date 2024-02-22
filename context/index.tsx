"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  ChangeEventHandler,
  FormEventHandler,
} from "react";
import { CarProps, FilteredManufacturersProps } from "@/utils/types";
import { fetchCars } from "@/services/CarApi";
import { manufacturersData } from "@/utils/data";

type ContextType = {
  cars: CarProps[];
  car: CarProps;
  manufacturer: string;
  model: string;
  fuelType: string;
  year: string;
  isLoading: boolean;
  isModalOpen: boolean;
  filteredManufacturers: Array<FilteredManufacturersProps>;
  setCars: Dispatch<SetStateAction<CarProps[]>>;
  setCar: Dispatch<SetStateAction<CarProps>>;
  setManufacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
  setFuelType: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setFilteredManufacturers: Dispatch<
    SetStateAction<Array<FilteredManufacturersProps>>
  >;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const AppContext = createContext({} as ContextType);

export const AppProvider = ({ children }: any) => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [car, setCar] = useState({} as CarProps);
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [fuelType, setFuelType] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filteredManufacturers, setFilteredManufacturers] = useState<
    Array<FilteredManufacturersProps>
  >([]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setManufacturer(event.target.value);
    const newManufacturers = manufacturersData.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(manufacturer.toLocaleLowerCase());
    });
    setFilteredManufacturers(newManufacturers);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (manufacturer || model) {
      setIsLoading(true);
      try {
        const { data } = await fetchCars(
          `?make=${manufacturer}&model=${model}&fuel_type=${fuelType}&year=${year}`
        );

        if (data.length > 0) {
          setCars(data);
          setIsLoading(false);
        } else {
          setCars([]);
          setIsLoading(false);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cars,
        car,
        manufacturer,
        fuelType,
        model,
        year,
        isLoading,
        isModalOpen,
        filteredManufacturers,
        setCars,
        setCar,
        setFuelType,
        setManufacturer,
        setModel,
        setYear,
        setIsLoading,
        handleSubmit,
        setIsModalOpen,
        setFilteredManufacturers,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = (): ContextType => useContext(AppContext);
