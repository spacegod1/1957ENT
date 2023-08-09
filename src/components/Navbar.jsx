import logo from "../assets/1957logo.png";
import { VscClose } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";
import { BsTiktok, BsPlusLg } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between h-28 m-auto p-4 bg-gray-100">
      <div className="flex">
        <img className="logo" src={logo} alt="image of an eagle"></img>
        <h3 className="mt-9 pl-2 logo_title">1957 EMPIRE</h3>
      </div>

      <ul className="hidden md:flex nav_list mt-2 text-sm lg:text-2xl">
        <li className="p-5 no-underline hover:underline text-[#4F200D]">
          Events
        </li>
        <li className="p-5 no-underline hover:underline text-[#4F200D]">
          Gallery
        </li>
        <li className="p-5 no-underline hover:underline text-[#4F200D]">
          Contact
        </li>
      </ul>
      <div className="hidden lg:flex gap-7">
        <FiInstagram className="mt-7" size={20} />
        <BsTiktok className="mt-7" size={20} />
        <button className="nav_list border px-6 text-black bg-[#77E4D4] hover:bg-[#FEB139] rounded-md">
          <a
            href="https://shoobs.com/events/84471/asakaa-boys-live-in-manchester"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get Tickets
          </a>
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <VscClose className="mt-7 text-[#4F200D]" size={33} />
        ) : (
          <BsPlusLg className="mt-7 text-[#4F200D]" size={33} />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed bg-gray-100 left-0 top-0 w-[75%] border-r border-gray-500 h-full ease-in-out duration-500 z-40 bg-blur"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex ml-5 pt-4 pb-[6rem]">
          <img className="logo" src={logo} alt="image of an eagle"></img>
          <h3 className="mt-9 pl-2 logo_title">1957 EMPIRE</h3>
        </div>
        <ul className="nav_list text-2xl">
          <li className="p-8 text-[#4F200D]">Events</li>
          <li className="p-8 text-[#4F200D]">Gallery</li>
          <li className="p-8 text-[#4F200D]">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
