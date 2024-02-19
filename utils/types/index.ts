export interface LinksProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}
export interface CustomButtonProps {
  text: string;
  styles: string;
  rightIcon?: string;
}
export interface FilteredManufacturersProps {
  id: number;
  title: string;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface SearchBarProps {
  setCars: (cars: CarProps[] | undefined) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
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
  model: string;
  make: string;
  mpg?: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}
