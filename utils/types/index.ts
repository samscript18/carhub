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
  // btnType: string;
}
export interface FilteredManufacturersProps {
  id: number;
  title: string;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
