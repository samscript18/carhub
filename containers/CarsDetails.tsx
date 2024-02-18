import { SearchBar } from "@/components";
import { yearsOfProductionData, fuelsData } from "@/utils/data";

const Cars = () => {
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
        <div className="w-full flex xs:flex-col sm:flex-row justify-between items-center my-10">
          <div className="mr-[15rem]">
            <SearchBar />
          </div>
          <div className="w-full flex justify-between items-center xs:mt-6 sm:mt-0">
            <select
              name="Fuel"
              id="Fuel"
              className="w-full p-2 mr-6 bg-white border border-gray-100 outline-none rounded-lg shadow-md"
            >
              {fuelsData.map(({ title, value }) => {
                return (
                  <option key={title} value={value}>
                    {title}
                  </option>
                );
              })}
            </select>
            <select
              name="Year"
              id="Year"
              className="w-full p-2 mr-6 bg-white border border-gray-100 outline-none rounded-lg shadow-md"
            >
              {yearsOfProductionData.map(({ value, title }) => {
                return (
                  <option key={title} value={value}>
                    {title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cars;
