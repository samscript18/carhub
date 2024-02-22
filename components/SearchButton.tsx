import Image from "next/image";
import { searchButton } from "@/public/asset";

const SearchButton = () => {
  return (
    <div className="absolute top-[2px] xs:right-[0%] sm:right-[25%] bg-white rounded-full">
      <button type="submit">
        <Image src={searchButton} width={32} height={32} alt="search-button" />
      </button>
    </div>
  );
};
export default SearchButton;
