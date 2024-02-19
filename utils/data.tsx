import { CarProps } from "./types";

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Business Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

export const manufacturersData = [
  { id: 1, title: "Acura" },
  { id: 2, title: "Alfa Romeo" },
  { id: 3, title: "Aston Martin" },
  { id: 4, title: "Audi" },
  { id: 5, title: "Bentley" },
  { id: 6, title: "BMW" },
  { id: 7, title: "Buick" },
  { id: 8, title: "Cadillac" },
  { id: 9, title: "Chevrolet" },
  { id: 10, title: "Chrysler" },
  { id: 11, title: "Citroen" },
  { id: 12, title: "Dodge" },
  { id: 13, title: "Ferrari" },
  { id: 14, title: "Fiat" },
  { id: 15, title: "Ford" },
  { id: 16, title: "GMC" },
  { id: 17, title: "Honda" },
  { id: 18, title: "Hyundai" },
  { id: 19, title: "Infiniti" },
  { id: 20, title: "Jaguar" },
  { id: 21, title: "Jeep" },
  { id: 22, title: "Kia" },
  { id: 23, title: "Lamborghini" },
  { id: 24, title: "Land Rover" },
  { id: 25, title: "Lexus" },
  { id: 26, title: "Lincoln" },
  { id: 27, title: "Maserati" },
  { id: 28, title: "Mazda" },
  { id: 29, title: "McLaren" },
  { id: 30, title: "Mercedes-Benz" },
  { id: 31, title: "MINI" },
  { id: 32, title: "Mitsubishi" },
  { id: 33, title: "Nissan" },
  { id: 34, title: "Porsche" },
  { id: 35, title: "Ram" },
  { id: 36, title: "Rolls-Royce" },
  { id: 37, title: "Subaru" },
  { id: 38, title: "Tesla" },
  { id: 39, title: "Toyota" },
  { id: 40, title: "Volkswagen" },
  { id: 41, title: "Volvo" },
];

export const yearsOfProductionData = [
  { title: "Year", year: "" },
  { title: "2015", year: "2015" },
  { title: "2016", year: "2016" },
  { title: "2017", year: "2017" },
  { title: "2018", year: "2018" },
  { title: "2019", year: "2019" },
  { title: "2020", year: "2020" },
  { title: "2021", year: "2021" },
  { title: "2022", year: "2022" },
  { title: "2023", year: "2023" },
];

export const fuelsData = [
  {
    title: "Fuel",
    fuelType: "fuel",
  },
  {
    title: "Gas",
    fuelType: "gas",
  },
  {
    title: "Electricity",
    fuelType: "electricity",
  },
];

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append(
//     "customer",
//     process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
//   );
//   url.searchParams.append("make", make);
//   url.searchParams.append("modelFamily", model.split(" ")[0]);
//   url.searchParams.append("zoomType", "fullscreen");
//   url.searchParams.append("modelYear", `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append("angle", `${angle}`);

//   return `${url}`;
// };
