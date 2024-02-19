import Logo from "../asset/logo2.png";
import { footerLinks } from "../utils/data";
import { LinksProps } from "../utils/types";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="w-full border-gray-100 border-t my-8">
        <div className="flex sm:flex-row xs:flex-col justify-start items-start py-16 md:px-12 sm:px-8 xs:px-4">
          <div className="basis-[40%]">
            <div className="w-full mb-6">
              <Image src={Logo} className="w-[148px] h-[22px]" alt="Logo" />
            </div>
            <p className="text-gray-700 font-light">CarHub 2023</p>
            <p className="text-gray-700 font-light">
              All Rights Reserved &copy;
            </p>
          </div>
          {footerLinks.map(({ title, links }: LinksProps, index) => {
            return (
              <div key={index} className="basis-[20%] sm:mt-0 xs:mt-8">
                <h3 className="font-bold">{title}</h3>
                {links.map(({ title, url }, index) => {
                  return (
                    <div key={index} className="flex justify-start item-center">
                      <a
                        href={url}
                        key={index}
                        className="text-gray-500 font-light mt-6 hover:text-primary-blue duration-300"
                      >
                        {title}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="w-full border-gray-100 border-t pt-8">
          <div className="flex sm:flex-row xs:flex-col justify-start items-center md:px-12 sm:px-8 xs:px-4">
            <div className="w-full xs:text-center sm:text-start">
              <h3 className="font-light">@2023 CarHub.All Rights Reserved</h3>
            </div>
            <div className="w-full flex sm:justify-end xs:justify-center items-end sm:mt-0 xs:mt-3">
              <h3 className="text-gray-500 font-light mr-4">Privacy Policy</h3>
              <h3 className="text-gray-500 font-light">Terms of Use</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
