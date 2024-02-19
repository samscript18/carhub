import Image from "next/image";
import searchButton from "@/asset/magnifying-glass.svg";

const SearchButton = () => {
  return (
    <div className="absolute top-[2px] right-[-3%] bg-white rounded-full">
      <button type="submit">
        <Image
          src={searchButton}
          className="w-[34px] h-[34px]"
          alt="search-button"
        />
      </button>
    </div>
  );
};
export default SearchButton;
