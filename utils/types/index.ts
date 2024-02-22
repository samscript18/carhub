import { MouseEventHandler } from "react";

export interface LinksProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}
export interface CustomButtonProps {
  id?: string;
  text: string;
  styles: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface FilteredManufacturersProps {
  id: number;
  title: string;
}
export interface CarProps {
  city_mpg: number;
  class?: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CarCardProps {
  car: CarProps;
}
