import Image from "next/image";
import { closeImg, HeroImg } from "@/public/asset";
import { useGlobalContext } from "@/context";

const CarDetails = () => {
  const { setIsModalOpen, car } = useGlobalContext();

  return (
    <div
      style={{ background: "rgba(0,0,0,0.2)" }}
      className="fixed inset-0 top-0 right-0 w-full h-screen flex justify-center items-start z-[100]"
    >
      <div
        className=" relative md:w-[30vw] sm:w-[50vw] xs:w-[80vw] h-auto mt-3 xs:my-auto flex flex-col bg-white p-4 rounded-lg z-[100]
      "
      >
        <div className="relative flex justify-end items-end">
          <button
            type="button"
            className="absolute -top-2 -right-2 z-10 w-fit p-1 bg-primary-blue-100 rounded-full"
            onClick={() => setIsModalOpen(false)}
          >
            <Image src={closeImg} width={20} height={20} alt="close-button" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative w-full h-[100px] bg-pattern bg-cover bg-center rounded-lg">
            <Image
              src={HeroImg}
              alt="car model"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative w-full h-[50px] bg-primary-blue-100 rounded-lg">
              <Image
                src={HeroImg}
                alt="car model"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex-1 relative w-full h-[50px] bg-primary-blue-100 rounded-lg">
              <Image
                src={HeroImg}
                alt="car model"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex-1 relative w-full h-[50px] bg-primary-blue-100 rounded-lg">
              <Image
                src={HeroImg}
                alt="car model"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <h2 className="font-semibold text-lg capitalize my-2">
            {car.make} {car.model}
          </h2>

          <div className="flex flex-wrap">
            {Object.entries(car).map(([key, value]) => (
              <div
                className="flex justify-between mb-2 w-full text-right"
                key={key}
              >
                <h4 className="text-sm text-grey capitalize">
                  {key.split("_").join(" ")}
                </h4>
                <p className="text-sm text-black-100 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarDetails;
