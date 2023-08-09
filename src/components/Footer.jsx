import { FiInstagram } from "react-icons/fi";
import { BsTiktok } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex text-[#F8FFDB] bg-[#4F200D] mt-4 h-full p-4 md:flex justify-between">
      <div className="flex items-center justify-start mx-4 nav_list font-thin">
        <p className="text-[0.8rem]">
          <a>Terms & Conditions</a> | <a>Rules</a> | <a>Learn More</a>
        </p>
      </div>
      <div className="flex p-4 justify-center gap-3 md:gap-5 md:p-0 md:justify-normal">
        <FiInstagram size={30} />
        <BsTiktok size={30} />
      </div>
    </footer>
  );
}

export default Footer;
